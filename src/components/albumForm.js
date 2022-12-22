import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum, setNewAlbum, upload } from "../actions/albumActions";


const AlbumForm = () => {
  const dispatch = useDispatch();
  const { newAlbum, errorMsgs, categories, albums } = useSelector((state) => state.albumReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAlbum());
  };

  const handleUpload = (e) => {
    e.preventDefault();
    dispatch(upload())
  }

  console.log(newAlbum)
  console.log(albums)

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2 className="m-4">Ajouter Un Nouvel Album</h2>
        {errorMsgs.length > 0 && (
          <ul className="error-box">
            {errorMsgs.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}

        <div className="input-group mb-3">
          <label className="input-group-text" id="inputGroup-sizing-default" htmlFor="title">Titre d'album</label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={newAlbum.title}
            onChange={(e) =>
              dispatch(
                setNewAlbum({
                  newAlbum: {
                    ...newAlbum,
                    title: e.target.value,
                  },
                })
              )
            }
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="image">Insérer image</label>
          <input
            className="form-control"
            name="image"
            type="text"
            alt={newAlbum.title}
            value={newAlbum.image}
            onChange={(e) =>
              dispatch(
                setNewAlbum({
                  newAlbum: {
                    ...newAlbum,
                    image: e.target.value,
                  },
                })
              )
            }
          />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="categories">Categorie</label>
          <select className="form-select" aria-label=".form-select-sm example" name="categories"
            value={newAlbum.categorie}
            onChange={(e) => dispatch(setNewAlbum({
              newAlbum: {
                ...newAlbum,
                categories: e.target.value,
              }
            }))}
          >
            {categories.map((category, i) => <option key={i} value={category}>{category}</option>)}
          </select>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="image">Son</label>
          <input
            className="form-control"
            name="image"
            type="text"
            alt={newAlbum.title}
            value={newAlbum.son}
            onChange={(e) =>
              dispatch(
                setNewAlbum({
                  newAlbum: {
                    ...newAlbum,
                    son: newAlbum.son.push(e.target.value)  
                  },
                })
              )
            }
          />
          <div className="labelForm">
            <button type="click" onClick={(e) => handleUpload(e)} className="btn btn-outline-primary">Ajouter</button>
          </div>
          <ul>
            {newAlbum.son.map((s, i) => <li key={i} >{s}</li>)}
          </ul>
            
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" id="inputGroup-sizing-default" htmlFor="artiste">Nom de l'artiste:</label>
          <input
            className="form-control"
            name="artiste"
            type="text"
            value={newAlbum.artiste}
            onChange={(e) =>
              dispatch(
                setNewAlbum({
                  newAlbum: {
                    ...newAlbum,
                    artiste: e.target.value,
                  },
                })
              )
            }
          />

        </div>
        <div className="labelForm">
          <button type="submit" className="btn btn-outline-primary">Ajouter l'album</button>
        </div>
      </form>
    </div>
  );
};

export default AlbumForm;

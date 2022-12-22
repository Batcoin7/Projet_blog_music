import { useDispatch, useSelector } from "react-redux";
import { addAlbum, setNewAlbum } from "../actions/albumActions";

const DragonForm = () => {
  const dispatch = useDispatch();
  const { newAlbum, errorMsgs } = useSelector((state) => state.albumReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAlbum());
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Ajouter Un Nouveau Album</h2>
      {errorMsgs.length > 0 && (
        <ul className="error-box">
          {errorMsgs.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      )}

      <div className="labelForm">
        <label htmlFor="title">Titre d'album:</label>
        <input
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
      <div className="labelForm">
        <label htmlFor="image">Insérer l'image d'album:</label>
        <input
          name="image"
          type="image"
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
      {/* <p>
                <label htmlFor="categorie">Categorie</label>
                <select name="categorie"
                        value={newAlbum.categorie}
                        onChange={ (e) => dispatch( setNewAlbum( { newAlbum: {
                                ...newAlbum,
                                categorie: e.target.value,
                        }}))}
                >
                    { categorie.map( (category, i) => <option key={i} value={category}>{category}</option> ) }
                </select>
            </p> */}
      <div className="labelForm">
        <label htmlFor="artiste">Nom de l'artiste:</label>
        <input
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
        <button type="submit">Ajouter l'ablbum</button>
      </div>
    </form>
  );
};

export default DragonForm;

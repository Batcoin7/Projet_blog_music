import { useDispatch } from "react-redux";
import { deleteAlbum, toggleDetails } from "../actions/albumActions";
import { useSelector } from "react-redux";
import MyCarousel from "./Carousel";
import './album.css'

const Albums = () => {
  const { albums } = useSelector((state) => state.albumReducer);
  const dispatch = useDispatch();

  console.log(albums);
  return (
    <>
      <MyCarousel />
      <div className="container-wrap"  style={{ display: "flex", justifyContent:"center"}}>
        <h1 style={{ textAlign: "center" }}>Liste d'albums</h1>
        <ul style={{ display: "flex", flexWrap: "wrap" }}>
          {albums.map((album, i) => (
            <li key={i}>
              
              <div
                onMouseEnter={() => dispatch(toggleDetails({ album }))}
                onMouseLeave={() => dispatch(toggleDetails({ album }))}
              >
                <img
                  src={album.image}
                  style={!album.show ? { display: "block" } : { display: "none" }}
                />
                <div
                  style={album.show ? { display: "block" } : { display: "none" }}
                >
                  <h4>{album.title}</h4>
                  <h5>{album.artiste}</h5>
                  <h6>{album.date}</h6>
                  <h6>{album.categorie}</h6>
                  <strong>
                    {album.son.map((s, i) => (
                      <h6 key={i}>{s}</h6>
                    ))}
                  </strong>
                  <button type="button" class="btn btn-outline-primary" onClick={() => dispatch(deleteAlbum(album))}>
                Supprimer
              </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default Albums;

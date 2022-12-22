import {useDispatch} from "react-redux";
import {deleteAlbum} from "../actions/albumActions";
import {useSelector} from "react-redux";

const Albums = () => {

    const { albums } = useSelector( state => state.albumReducer );
    const dispatch = useDispatch();

    const showAlbum = () => {
        albums.show = true;

        return (
            <>
                {albums.map((album, i) => 
                    <li key={i}>
                    <button className="btn-primary" onClick={ () => dispatch( deleteAlbum(album) ) }>Supprimer</button>
                    <h4>{album.title}</h4>
                    <h5>{album.artiste}</h5>
                    <h6>{album.date}</h6>
                    <h6>{album.categorie}</h6>
                    <strong>{album.son.map((s, i) => <h6 key={i}>{s}</h6>)}</strong></li>)  
                }
            </>
        )
    }

    const showCover = () => {
        return (
            <>
                {albums.map((album, i) => 
                    <li key={i}>
                    <button onClick={ () => dispatch( deleteAlbum(album) ) }>Supprimer</button>
                    <img src={album.image} onClick={showAlbum}/>
                </li> )
                }
            </>
        )
    }

    return (
        <ul>
            {albums.show == false && 
                showCover()
            }
            {albums.show == true &&
                showAlbum()
            }
        </ul>
    )
    }

export default Albums;
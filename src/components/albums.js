import {useDispatch} from "react-redux";
import {deleteAlbum} from "../actions/albumActions";
import {useSelector} from "react-redux";

const Albums = () => {

    const { albums } = useSelector( state => state.albumReducer );
    const dispatch = useDispatch();

    return (
        <ul>
        {   albums.map((album, i) => 
            <li key={i}>
            <button onClick={ () => dispatch( deleteAlbum() ) }>Supprimer</button>
            <h4>{album.title}</h4>
            <h5>{album.artiste}</h5>
            <h6>{album.date}</h6>
            <h6>{album.categorie}</h6>
            <strong>{album.son.map((s) => <h6>{s.title}</h6>)}</strong>
        </li> )}
        </ul>
    )
    }

export default Albums;
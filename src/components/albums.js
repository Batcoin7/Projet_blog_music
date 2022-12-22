import {useDispatch} from "react-redux";
import {deleteAlbum} from "../actions/albumActions";

const Album = ( {album} ) => {

    const dispatch = useDispatch();

    return (
        <li>
            <button onClick={ () => dispatch( deleteAlbum( {album} ) ) }>delete</button>
            <h4>{ album.title }</h4>
            <h5>{ album.artiste }</h5>
            <h6>{ album.date }</h6>
            <h6>{ album.categorie }</h6>
            <strong><h6>{ album.son.title }</h6></strong>
        </li>
    )
}

export default Album;
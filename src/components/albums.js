import {useDispatch} from "react-redux";
import {deleteAlbum, toggleDetails} from "../actions/albumActions";
import {useSelector} from "react-redux";
import './album.css'

const Albums = () => {

    const { albums } = useSelector( state => state.albumReducer );
    const dispatch = useDispatch();

    console.log(albums)
    return (
        <div className="container-sm">
        <ul >
            {albums.map((album, i) => (
                    <li key={i}>
                    
                    <div className="container-wrap" onMouseEnter={() => dispatch( toggleDetails({album}))} onMouseLeave={() => dispatch( toggleDetails({album}))}>
                        <img width="200px" src={album.image} style={!album.show ? {display : 'block'} : {display : 'none'}} />
                        <div style={album.show ? {display : 'block'} : {display : 'none'}}>
                            <h4>{album.title}</h4>
                            <h5>{album.artiste}</h5>
                            <h6>{album.date}</h6>
                            <h6>{album.categorie}</h6>
                            <strong>{album.son.map((s, i) => <h6 key={i}>{s}</h6>)}</strong>
                            <button type="button" class="btn btn-outline-primary" onClick={ () => dispatch( deleteAlbum(album) ) }>Supprimer</button>
                        </div>
                    </div>
                    
                </li> ))}
        </ul>
        </div>
    )
    }

export default Albums;
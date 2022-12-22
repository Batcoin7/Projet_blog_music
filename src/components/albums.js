import {useDispatch} from "react-redux";
import {deleteAlbum, toggleDetails} from "../actions/albumActions";
import {useSelector} from "react-redux";

const Albums = () => {

    const { albums } = useSelector( state => state.albumReducer );
    const dispatch = useDispatch();

    console.log(albums)
    return (
        <ul>
            {albums.map((album, i) => (
                    <li key={i}>
                    <button onClick={ () => dispatch( deleteAlbum(album) ) }>Supprimer</button>
                    <div onMouseEnter={() => dispatch( toggleDetails({album}))} onMouseLeave={() => dispatch( toggleDetails({album}))}>
                        <img src={album.image} style={!album.show ? {display : 'block'} : {display : 'none'}} />
                        <div style={album.show ? {display : 'block'} : {display : 'none'}}>
                            <h4>{album.title}</h4>
                            <h5>{album.artiste}</h5>
                            <h6>{album.date}</h6>
                            <h6>{album.categorie}</h6>
                            <strong>{album.son.map((s, i) => <h6 key={i}>{s}</h6>)}</strong>
                        </div>
                    </div>
                    
                </li> ))}
        </ul>
    )
    }

export default Albums;
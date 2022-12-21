import {useDispatch, useSelector} from "react-redux";
import {addAlbum, setNewAlbum} from "../actions/albumActions";

const DragonForm = () => {
    const dispatch = useDispatch();
    const { newAlbum, errorMsgs } = useSelector( state => state.albumReducer );

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( addAlbum() );
    }

    return (
        <form onSubmit={ (e) => handleSubmit(e) }>
            <h2>Entry your new album</h2>
                { errorMsgs.length > 0 && (
                    <ul className="error-box">
                        { errorMsgs.map( (error, i) => <li key={i}>{ error }</li> ) }
                    </ul>
                )}

            <p>
                <label htmlFor="title">title</label>
                <input name="title" type="text"
                       value={newAlbum.title}
                       onChange={ (e) => dispatch( setNewAlbum( { newAlbum: {
                               ...newAlbum,
                               title: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input name="image" type="image"
                       value={newAlbum.image}
                       onChange={ (e) => dispatch( setNewAlbum( { newAlbum: {
                               ...newAlbum,
                               image: e.target.value,
                       }}))}
                />
            </p>
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
            <p>
                <label htmlFor="artiste">Artiste</label>
                <input name="artiste" type="text"
                       value={newAlbum.artiste}
                       onChange={ (e) => dispatch( setNewAlbum( { newAlbum: {
                               ...newAlbum,
                               artiste: e.target.value,
                       }}))}
                />
            </p>
            <p>
                <button type="submit">add album</button>
            </p>
        </form>
    )
}

export default DragonForm;
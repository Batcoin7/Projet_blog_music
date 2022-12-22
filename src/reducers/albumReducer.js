const initialState = {
    albums: [{id: 1, title:'ipséité', image:'', artiste:'damso', son: ['batterie faible'], categorie:'rap', date:'2016'}],
    newAlbum: {
        id: 0,
        title: '',
        image: '',
        artiste: '',
        son: [],
        categorie: '',
        date: ''
    },
    categories: ['Pop', 'Rap', 'Variété', 'Rock', 'Reggae', 'Rn\b'],
    errorMsgs: [],
}

const albumReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case 'ADD_ALBUM':
            const errors = [];
            if (state.newAlbum.title.trim() === '') {
                errors.push('Veuillez indiquer le titre de l\album');
            }

            if (state.newAlbum.date === 0) {
                errors.push('Veuillez indiquer la date de sortie de l\album');
            }

            if (state.newAlbum.artiste === '') {
                errors.push('Veuillez indiquer l\artiste de l\album');
            }

            if (state.newAlbum.categorie === '') {
                errors.push('Veuillez indiquer la catégorie de l\album');
            }

            if (state.newAlbum.image === '') {
                errors.push('Veuillez ajouter l\image de l\album');
            }

            // if( state.newAlbum.son === '' )
            // {
            //     errors.push( 'Veuillez ajouter l\image de l\album' );
            // }

            if (errors.length > 0) {
                return {
                    ...state,
                    errorMsgs: errors
                }
            }
            return {
                ...state,
                albums: state.albums.concat( { ...state.newAlbum, id: new Date().getTime()} ),
                errorMsgs: [],
                newAlbum: {
                    id: 0,
                    title: '',
                    image: '',
                    artiste: '',
                    son: { title: '' },
                    categorie: '',
                    date: ''
                }
            }
        case 'DELETE_ALBUM':
            return {
                ...state,
                albums: state.albums.filter(album => album.id !== action.payload.album.id)
            }
        case 'SET_NEW_ALBUM':
            return {
                ...state,
                newAlbum: action.payload
            }
        case 'UPLOAD':
            return {
                ...state,
                newAlbum: state.newAlbum.son.concact({ ...state.newAlbum.son}) 
            }
        default:
            return state;
    }
}

export default albumReducer;
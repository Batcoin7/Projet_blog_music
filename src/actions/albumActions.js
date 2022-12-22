export const addAlbum = () => ( { type: 'ADD_ALBUM' } )
export const deleteAlbum = payload => ( { type: 'DELETE_ALBUM', payload } )
export const setNewAlbum = payload => ( { type: 'SET_NEW_ALBUM', payload } )
export const upload = payload => ( { type: 'UPLOAD', payload } )
import { AlbumsContext } from "../index";
import albumReducer from "../reducers/albumReducer";
import {initialState} from "../reducers/albumReducer";
import {useReducer} from "react";

const AlbumProvider = ( {children} ) => {

    const [state, dispatch] = useReducer( albumReducer, initialState );

    return (
        <AlbumsContext.Provider value={[state, dispatch]}>
            {children}
        </AlbumsContext.Provider>
    )

}

export default AlbumProvider;
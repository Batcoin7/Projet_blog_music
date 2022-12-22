import {combineReducers} from "redux";
import albumReducer from "./albumReducer";
import carouselReducer from "./carouselReducer";

export default combineReducers({
    albumReducer,
    carouselReducer
})

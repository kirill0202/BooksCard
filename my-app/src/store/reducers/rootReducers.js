import { combineReducers } from "redux";
import reducerBooks from "./reducerBooks";
import reducerCart from "./reducerCart";

export const  rootReducers = combineReducers({
    books: reducerBooks,
    cartReducer: reducerCart
})
import { combineReducers } from "redux";
import reducerBooks from "./reducerBooks";
import reducerCard from "./reducerCart";

export const  rootReducers = combineReducers({
    books: reducerBooks,
    cart: reducerCard
})
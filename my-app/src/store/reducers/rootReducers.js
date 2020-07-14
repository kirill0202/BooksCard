import { combineReducers } from "redux";
import reducerBooks from "./reducerBooks";
import reducerCart from "./reducerCart";
import { reducer as formReducer } from "redux-form";

export const  rootReducers = combineReducers({
    books: reducerBooks,
    cartReducer: reducerCart,
    form: formReducer
})
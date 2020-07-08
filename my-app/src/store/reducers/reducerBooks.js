import  { SET_BOOKS, SET_ISLOADING }  from "../type/type";

const initialState = {
    isLoading: false,
    books: []
}

const reducerBooks = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {...state,  books: action.payload, isLoading: true };
        case SET_ISLOADING:
            return [...state, {isLoading: action.payload}]
        default:
            return state
    }
}
export default reducerBooks;
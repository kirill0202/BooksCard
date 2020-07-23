import  { SET_BOOKS, BOOK_SORT_CARD  }  from "../type/type";

const initialState = {
    books: [],
    filter: 'all'
}
const reducerBooks = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {...state,  books: action.payload };
       case BOOK_SORT_CARD:
           return {...state, filter: action.payload}
        default:
            return state
    }
}
export default reducerBooks;
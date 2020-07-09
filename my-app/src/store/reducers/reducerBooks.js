import  { SET_BOOKS, BOOK_SORT_CARD,  }  from "../type/type";

const initialState = {
    books: []
}

const reducerBooks = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {...state,  books: action.payload, isLoading: true };
       case BOOK_SORT_CARD:
            console.log(action.payload)
           return {...state}
        default:
            return state
    }
}
export default reducerBooks;
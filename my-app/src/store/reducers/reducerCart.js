import {BOOK_ADD_CARD, BOOK_REMOVE_CARD} from '../type/type';



const initialState = [];

const reducerCard = (state= initialState, action) => {
    switch (action.type) {
        case  BOOK_ADD_CARD:
            return {...state, card: [...state, action.payload]}
        case BOOK_REMOVE_CARD:
             return {...state, card: state.filter(item => item.id !== action.payload)}
        default:
            return state;
    }
}
export default reducerCard;

import {BOOK_ADD_CARD, BOOK_REMOVE_CARD} from '../type/type';



const initialState = {
    cart: []
};
const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case  BOOK_ADD_CARD:
            return {...state, cart: [...state.cart, action.payload]}
        case BOOK_REMOVE_CARD:
             return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
        default:
            return state;
    }
}
export default reducerCart;

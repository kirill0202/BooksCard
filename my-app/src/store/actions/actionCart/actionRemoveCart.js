import { BOOK_REMOVE_CARD } from "../../type/type"

export const actionRemoveCart = (cartId) => {
    return {
        type: BOOK_REMOVE_CARD,
        payload: cartId,
    }
}
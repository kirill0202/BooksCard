import { SET_BOOKS } from "../../type/type"

export const actionSetBook = (dataBooks) => {
    return {
        type: SET_BOOKS,
        payload: dataBooks
    }
}
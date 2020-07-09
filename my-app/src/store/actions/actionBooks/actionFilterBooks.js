import { BOOK_SORT_CARD } from "../../type/type"

export const actionFilterBooks = (dataBooks) => {
    return {
        type: BOOK_SORT_CARD,
        payload: dataBooks
    }
}
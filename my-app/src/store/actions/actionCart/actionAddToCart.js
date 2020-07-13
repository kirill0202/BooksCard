import { BOOK_ADD_CARD } from "../../type/type"


export const actionAddToCart = (dataBook) => {
    console.log(dataBook)
     return {
         type: BOOK_ADD_CARD,
         payload: dataBook
     }
}
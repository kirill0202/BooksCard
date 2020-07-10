import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { actionSetBook } from '../../store/actions/actionBooks/actionSetBook';
import { useSelector, useDispatch } from 'react-redux';
import BooksListElements from './BooksListElement/BooksListElement';
import Loading from '../Loading/Loading';
import './BookList.scss';
import { orderBy } from 'lodash';




const BooksList = ({ booksData }) => {
    const [books, setBooks] = useState([]);
    const filterBooks = useSelector((state) => state.books.filter);

    const sortBy = (booksData) => {
        switch (filterBooks) {
            case 'all':
              return booksData
            case 'expensive':
                return orderBy(booksData, 'price', 'desc')
            case 'cheap':
                return orderBy(booksData, 'price', 'asc')
            case 'author':
                return orderBy(booksData, 'author', 'author')
            default:
                return booksData
        }
    }
    const finishSortBooksData = sortBy(booksData);
    const dispatch = useDispatch();

    dispatch(actionSetBook(books))
    useEffect(() => {
        const booksData = async () => {
            const resultBooksData = await axios('/booksData.json');
            setBooks(resultBooksData.data)
        };
        booksData();
    }, [])

    const elementsBooks = finishSortBooksData.map(book => {
        return (<li key={book.id}>
                <BooksListElements {...book}/>
            </li>)
    })
    return (
        <>
            {!booksData.length ? <Loading />
                : <ul className="books__list-items">
                    {elementsBooks}
                </ul>}
        </>
    )
}
export default React.memo(BooksList);
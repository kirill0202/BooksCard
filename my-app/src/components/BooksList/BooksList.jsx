import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { actionSetBook } from '../../store/actions/actionBooks/actionSetBook';
import { useSelector, useDispatch } from 'react-redux';
import BooksListElements from './BooksListElement/BooksListElement';
import Loading from '../Loading/Loadng';
import './BookList.scss';




const BooksList = ({booksData}) => {
    const [books, setBooks] = useState([]);

    const dispatch = useDispatch();
    dispatch(actionSetBook(books))
    useEffect(() => {
        const booksData = async () => {
            const resultBooksData = await axios('/booksData.json');
            setBooks(resultBooksData.data)
        };
        booksData();
    }, [])

    const elementsBooks = booksData.map(book => {
        return (
            <li key={book.id}>
                <BooksListElements {...book} />
            </li>
        )
    })
    return (
        <>
            {!booksData.length ?
                <div className="loading">
                    <Loading />
                </div>
                : <ul className="books__list-items">
                    {elementsBooks}
                </ul>}
        </>
    )
}
export default React.memo(BooksList);
import React from 'react';
import BookList from '../../components/BooksList/BooksList';
import { useSelector } from 'react-redux';


const BookListContainer  = () => {
    const booksData = useSelector(state => state.books.books);
    
    return <BookList booksData={booksData}/>
}

export default BookListContainer;
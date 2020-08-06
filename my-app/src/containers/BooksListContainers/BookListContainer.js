import React from 'react';
import BookList from '../../components/BooksList/BooksList';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';



const BookListContainer = () => {
    const booksData = useSelector((state) => (state.books.books))
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const getSearchValue = searchParams.get('search')

    const currentNote = getSearchValue ? 
    booksData.filter((item) => item.title.toUpperCase().includes(getSearchValue.toUpperCase())
        || item.author.toUpperCase().includes(getSearchValue.toUpperCase())) : booksData;

    return <BookList booksData={currentNote} />
}
export default React.memo(BookListContainer);
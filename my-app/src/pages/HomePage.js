import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import BookListContainer from '../containers/BooksListContainers/BookListContainer';
import HeaderContainer from '../containers/HeaderContainers/HeaderContainer';


const HomePages = () => {
    return (
        <>
            <HeaderContainer />
            <div className="container components">
                <BookListContainer />
                <SideBar />
            </div>
        </>
    )
}

export default HomePages;
import React from 'react';
import HeaderContainer from '../../containers/HeaderContainers/HeaderContainer';
import BookListContainer from '../../containers/BooksListContainers/BookListContainer';
import SideBar from '../SideBar/SideBar';


const Main = () => {
    return (
       <>
        <HeaderContainer/>
        <BookListContainer/>
         <SideBar/>
       </>
    )
}
export default Main;
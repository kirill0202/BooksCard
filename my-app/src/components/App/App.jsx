import React from 'react';
import './App.scss';
import SideBar from '../SideBar/SideBar';
import BookListContainer from '../../containers/BooksListContainers/BookListContainer';
import HeaderContainer from '../../containers/HeaderContainers/HeaderContainer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      <div className="container components">
        <BookListContainer />
        <SideBar />
      </div>
    </div>
  );
}
export default React.memo(App);

import React from 'react';
import './App.scss';
import Menu from '../Header/Header';

import SideBar from '../SideBar/SideBar';
import BookListContainer from '../../containers/BooksListContainers/BookListContainer';






const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="container components">
        <BookListContainer />
        <SideBar />
      </div>

    </div>
  );
}
export default App;

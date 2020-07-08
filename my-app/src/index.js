import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { rootReducers } from './store/reducers/rootReducers';
import { compose, createStore } from 'redux';

const store = createStore(
  rootReducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
  document.getElementById('root')
);


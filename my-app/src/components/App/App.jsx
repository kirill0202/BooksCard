import React from 'react';
import './App.scss';
import useRoutes from '../../pages/routes';

const App = () => {
  const routes = useRoutes(false)
  return (
    <div className="App">
      {routes}
    </div>
  );
}
export default React.memo(App);


import React from 'react';
import './App.css';
import AllContent from './modules/AllContent';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';

function App() {
  return (
   <div >
    <Provider store={Store}>
    <AllContent></AllContent>
    </Provider>
     
   </div>
  );
}

export default App;

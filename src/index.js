import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './Redux/Store';
// import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode> 
   <BrowserRouter> 
      <App />
   </BrowserRouter> 
    // </React.StrictMode> 


);

reportWebVitals();

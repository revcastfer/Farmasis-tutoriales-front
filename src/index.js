import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/redux/store.js';
import { BrowserRouter} from 'react-router-dom';
import axios from 'axios'


//axios.defaults.baseURL="https://farmasis-tutoriales-back-production.up.railway.app";

axios.defaults.baseURL="http://localhost:3002";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>    
    <App />
    </Provider>
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


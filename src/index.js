import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase'

firebase.initializeApp(
    {
        apiKey: "AIzaSyBxtw4iFm6QewCXHsHI2fzDV5j_TogJ4tM",
        authDomain: "login-b4817.firebaseapp.com",
        databaseURL: "https://login-b4817.firebaseio.com",
        projectId: "login-b4817",
        storageBucket: "login-b4817.appspot.com",
        messagingSenderId: "217043771040"
    }
)

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
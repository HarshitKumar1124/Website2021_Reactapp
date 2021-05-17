import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import FirstUIPage from './FirstUIPage.js';
import {BrowserRouter as Router} from 'react-router-dom';
import Website from './AllPagesTogether';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(<Router><Website/></Router>, document.getElementById('root'));


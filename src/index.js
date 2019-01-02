import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import TopLevelRoutes from './routes/TopLevelRoutes';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
      <TopLevelRoutes/>
  </BrowserRouter>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from "history";
import {BrowserRouter as Router } from "react-router-dom"
import RoutesUrl from './routs/routers';
const history = createBrowserHistory();

function App() {
  return (
    <Router  history={history}>
    <RoutesUrl />
  </Router>
  );
}

export default App;

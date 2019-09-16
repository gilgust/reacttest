import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { SeminarList } from './components/SeminarList/seminarList';
//import * as reducers from './reducers';
//import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

 

function App() {
    return (
        <Router>
          

                <div>
                    <Header />
                    <Switch>
                        <Route path="/seminars" component={SeminarList} />
                    </Switch>
                </div>

          
        </Router>
    );
}


function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li>
                    <Link to="/seminars">seminars</Link>
                </li>
            </ul>
        </nav>
    );
}

export default App;
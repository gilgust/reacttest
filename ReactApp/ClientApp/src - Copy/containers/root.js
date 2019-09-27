import React, { Component } from 'react';
import { Router, Route } from "react-router";
import { createBrowserHistory, Location } from "history";
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../configureStore';
import AsyncApp from './app';

import Seminar from '../components/seminar/seminar';

const store = configureStore();
const initHistory = createBrowserHistory()
const history = syncHistoryWithStore(initHistory, store); 


export default class Root extends Component {
    render() { 
            return (
                <Provider store={store}>
                    <Router path="/" exact history={history}>
                        
                        <Route path={'/'} exact component={AsyncApp } />
                        <Route path={'/seminar/:id'} component={Seminar} />
                    </Router>
                </Provider>
            );
    }
}
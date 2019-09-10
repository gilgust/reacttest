import React, { Component } from "react";
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import FriendListApp from './containers/FriendListApp';
import * as reducers from './reducers';



import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



import { SeminarList } from './components/SeminarList/indexOld'; 


const reducer = combineReducers(reducers);
const store = createStore(reducer);

function App() {
    return (
        <Router>
            <Provider store={store}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/topics" component={Topics} />
                        <Route path="/seminars" component={SeminarList} />
                    </Switch>
                </div>
            </Provider>
        </Router>
    );
}
 

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>   

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Header() {
    return (
        <ul> 
            <li>
                <Link to="/topics">Topics</Link>
            </li>
            <li>
                <Link to="/seminars">seminars</Link>
            </li>
        </ul>
    );
}

export default App;
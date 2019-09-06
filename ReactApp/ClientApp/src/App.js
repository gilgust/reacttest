import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { SeminarList } from './components/SeminarList/indexOld';
import { Test1, Test2, Test3 } from './components/testCompopnents';
var createReactClass = require('create-react-class');

export default class App extends Component { 
    render() {
        return (
            <Router>
                <Route component={MainLayout}>
                    <Route component={SearchLayout}>
                        <Route path="users" component={UserList} />
                    </Route>
                </Route>
            </Router>
        );
    }
}
//<Route path="/" exact component={Index} />
//<Route path="/home" component={SeminarList} />
//<Route path="/test1" component={About} />
//<Route path="/test2" component={Users} />
var MainLayout = createReactClass({
    render: function () {
        return (
            <div className="app">
                <header className="primary-header"></header>
                    <aside className="primary-aside"></aside>
                <main>{this.props.children}</main>
            </div>
        );
    }
});
                
var SearchLayout = createReactClass({
    render: function () {
        return (
            <div className="search">
                <header className="search-header"></header>
                <div className="results">
                    {this.props.children}
                </div>
                <div className="search-footer pagination"></div>
            </div>
        );
    }
});
                
var UserList = createReactClass({
    render: function () {
        return (
            <ul className="user-list">
                <li>Dan</li>
                <li>Ryan</li>
                <li>Michael</li>
            </ul>
        );
    }
});
import React, { Component } from 'react';
import { Route } from 'react-router'; 

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
            <Route exact path='/' />
            <Route path='/counter' />
            <Route path='/fetch-data' />
      </div>
    );
  }
}
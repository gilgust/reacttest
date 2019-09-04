import React, { Component } from 'react';
import { SeminarList } from './components/SeminarList/indexOld'; 

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <SeminarList />
            </div>
        );
    }
}
import React, { Component } from 'react';

const initialState = {
    seminars: [],
    loading: false,
    errors: {},
    forceReload: false
}

export class Seminar extends Component {
    static displayName = Seminar.Name;

    constructor(props) {
        super(props);
        this.state = { seminar: props.seminar};
    }

    render() {

        return (
            <div>
                <h4>{this.state.seminar.name}</h4>
                <p>{this.state.seminar.description}</p>

                <button>Edit</button>
                <button>Delite</button>
            </div>
            );
    }

}
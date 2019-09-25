import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Seminars extends Component {
    render() {
        return (
            <ul>
                {this.props.seminars.map((seminar, i) => (
                    <li key={i}>{seminar.name}</li>
                ))}
            </ul>
            )
    }
}
Seminars.propTypes = {
    seminars: PropTypes.array.isRequired
}
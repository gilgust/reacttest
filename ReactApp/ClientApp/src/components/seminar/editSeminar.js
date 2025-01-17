﻿import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

import { fetchSeminarsIfNeeded } from '../../actions/seminarActions';
import Menu from '../Menu';
 

class editSeminar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: props.name,
            newDescription: props.description,
            seminarId: props.seminarId,
            isFetching: props.isFetching
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchSeminarsIfNeeded());
    }

    handleChange(event) {
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('nameInput', this.state.newName);
        console.log('descriptionTextarea', this.state.newDescription);
    }

    render() { 
        const { seminarId, newName, newDescription, isFetching } = this.state;

        return (
            <div>
                <Menu />
                {isFetching && <h2>Loading...</h2>}
                {!isFetching && (
                    <div className="container">
                    <h3>Edit seminar</h3>
                        <form
                            onSubmit={this.handleSubmit}>
                            <input id="seminarId" value={seminarId} type="hidden" />

                            <div className="form-group">
                            <label htmlFor="name" >Name</label>
                                <input
                                    className="form-control"
                                    name="newName"
                                    onChange={this.handleChange}
                                    value={newName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="form-control" 
                                    name="newDescription"
                                    onChange={this.handleChange}
                                    value={newDescription}
                                    rows="4" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Todo</button>
                        </form>
                    </div>
                )}
            </div>
        );
    };
}

editSeminar.propTypes = {
    seminarId: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
}

function mapStateToProps(state, ownProps) {
    const id = Number(ownProps.match.params.id);
    const seminar = state.seminars.seminars[id];
    const { isFetching, didInvalidate } = state.seminars;

    if (seminar) {
        return { ...seminar, isFetching, didInvalidate  };
    } else {
        return {
            seminarId : -1,
            name : '',
            description: '',
            isFetching,
            didInvalidate 
        }
    }
} 

export default connect(mapStateToProps)(editSeminar);
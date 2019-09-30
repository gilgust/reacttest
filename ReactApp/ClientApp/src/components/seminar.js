import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { fetchSeminarsIfNeeded } from '../actions/seminarActions';
import Menu from './Menu';
 

class Seminar extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchSeminarsIfNeeded());
    }

    render() { 
        const { seminarId, name, description, isFetching } = this.props;


        return (
            <div>
                <Menu />
                {isFetching && <h2>Loading...</h2>}
                {!isFetching && (
                    <div>
                        {seminarId && (
                            <div>
                                <Link to={`/seminar/edit/${seminarId}`} className="m-1 btn btn-primary">edit</Link>
                                <button className="m-1 btn btn-danger">delete</button>
                                <h4>id: {seminarId}</h4>
                            </div>
                        )}
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                )}
            </div>    

        );
    };
}

Seminar.propTypes = {
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
            seminarId : null,
            name : 'no such seminar',
            description: '',
            isFetching,
            didInvalidate 
        }
    }
}

export default connect(mapStateToProps)(Seminar);
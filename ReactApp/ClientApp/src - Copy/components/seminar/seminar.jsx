import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 

class Seminar extends Component {
    constructor(props) {
        super(props);
        debugger;
        
    }

    render() { 
        const { seminarId, name, description } = this.props;

        return (
            <div>
                <h4>id: {seminarId}</h4>
                <h1>{name}</h1>
                <p>{description}</p>
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
    debugger;
    const id = Number(ownProps.match.params.id);
    const { seminarId, name, description } = state.seminars[id];
    
    return {
        seminarId, name, description
    }
}

export default connect(mapStateToProps)(Seminar);
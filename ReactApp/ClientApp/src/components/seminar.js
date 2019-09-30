import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 

class Seminar extends Component {
    constructor(props) {
        super(props);
        //debugger;
        
    }

    render() { 
        //const { seminarId, name, description } = this.props;
        const { id } = this.props;

        return (
            <div>
                <h4>id: {id}</h4>
            </div>    

            //<h1>{name}</h1>
            //<p>{description}</p>
        );
    };
}

Seminar.propTypes = {
    seminarId: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
}

function mapStateToProps(state, ownProps) { 
    //debugger;
    const id = Number(ownProps.match.params.id);
    console.log(state.seminars);
    //const { seminarId, name, description } = state.seminars.seminars[id];
    
    //return {
    //    seminarId, name, description
    //}
    return {
        id
    }
}

export default connect(mapStateToProps)(Seminar);
import React, { Component } from 'react';

 

export default class Seminar extends Component {
 

    render() { 
        const { seminarId, name, description } = this.props;        
        const content = 
            <div>
                <h4>id: {seminarId}</h4>
                <h1>{name}</h1>
                <p>{description}</p>
            </div> 

        return (
            <div>{content}</div>    
        );
    };
}
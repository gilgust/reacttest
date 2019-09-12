import React, { Component } from 'react';

 

export default class Seminar extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            editSeminar: false,
        });
    }

    render() { 
        const { seminarId, name, description } = this.props;        
        const content = !this.state.editSeminar
            ?
            <div>
                <h4>id: {seminarId}</h4>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            :
            <form onSubmit={}>
                <input type="hidden" name="seminarId" value={seminarId} /> 
                <input name="name" value={name} />
                <textarea name="description" value={description} />
            </form>
        

        return (
            <div>{content}</div>    
        );
    };
}
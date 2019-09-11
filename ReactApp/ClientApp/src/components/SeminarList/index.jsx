import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import seminars from "../../reducers/seminars";


export class SeminarList extends Component {
    constructor(props) {
        super(props);
        this.state = ({ loading: true, seminars: [] });

        fetch('api/Seminar/Get')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    loading: false,
                    seminars: data
                });
            });
         
    }

    editSeminarHandler(id, editedSeminar) {
        fetch(`api/Seminar/Patch/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(editedSeminar)
        })
            .then(response => response.json())
            .then(data => {
                debugger;
                this.setState({
                    seminars: this.seminars.map((seminar) => {
                        if (seminar.seminarId !== id) return seminar;

                        //return editedSeminar;
                    })
                });
            });
        
    }

    renderSeminarList() {
        const seminars = this.state.seminars; 
        return (
            <div className="container">
                <Switch>
                    {seminars.map(seminarInfo => {
                        return (
                            <Route
                                path={`${this.props.match.url}/${seminarInfo.seminarId}`}
                                key={seminarInfo.seminarId}
                                render={() => (
                                    <Seminar {...seminarInfo} />
                                )}
                            />)
                    })}
                    <Route
                        path={this.props.match.url} 
                        exact
                        render={() => (
                            <ul>
                                {seminars.map(seminarInfo =>
                                    <li key={seminarInfo.seminarId} >
                                        <Link to={`${this.props.match.url}/${seminarInfo.seminarId}`}
                                            key={seminarInfo.seminarId} >
                                            <h4>{seminarInfo.name}</h4>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        )}/>
                    </Switch>
            </div>
        );
    }

    render() {
        const result = this.state.loading
            ? <div>loading...</div>
            : this.renderSeminarList();
        return (
            <div>{result}</div>
        );
    }
}

class Seminar extends Component {
    render() {
        //const seminarId = this.state.id;
        const { seminarId, name, description } = this.props;
        //debugger;
       
        return (
            <div> 
                <h4>id: {seminarId}</h4>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        );
    };
}
 const SeminarFunc = (props) => {
    console.log(props);
    return (
        <div> 
            <h4>{props.seminarId}</h4>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
}
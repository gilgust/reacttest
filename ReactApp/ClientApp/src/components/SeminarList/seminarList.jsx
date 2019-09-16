﻿import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import Seminar from "../Seminar/seminar";
import seminarsApp from "../../reducers/seminarsRedux";

//import * as seminarActions from "./actions/Actions";
import * as seminarActions from "../../actions/Actions";

const store = createStore(seminarsApp);

export class SeminarList extends Component {

    editSeminarHandler = (id, editedSeminar) => {
        let statusOk = false;
        fetch(`api/Seminar/Patch/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(editedSeminar)
        })
            .then(response => {
                debugger;
                if (response.ok)
                    statusOk = true;

                console.log(response.status);
                response.json();
                debugger;
            });

        this.setState({
            seminars: this.seminars.map((seminar) => {
                if (seminar.seminarId !== id) return seminar;
                if (statusOk) {
                    return editedSeminar;
                } else {
                    return seminar;
                }
            })
        });
    }

    createSeminarHandler = (newSeminar) => {
        fetch("api/Seminar/Post", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSeminar)
        })
            .then(response => {
                debugger;
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                console.log(response.status);
                response.json();
                debugger;
            })
            .then(data => {
                this.setState({
                    seminars: this.seminars.concat(data)
                })
                debugger;
            });
    }

    deleteSeminarHandler = (id) => {
        fetch(`api/Seminar/Delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                debugger;
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                console.log(response.status);
                response.json();
                debugger;
            })
            .then(data => {
                this.setState({
                    seminars: this.seminars.map((seminar) => {
                        if (seminar.seminarId !== id)
                            return seminar;
                    })
                });
                debugger;
            });
    }

    renderSeminarList() {
        const seminars = store.getState("seminars"); 
        const listActions = this;
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
                                        <div>
                                            <button
                                                //onClick={() => { listActions.editSeminarHandler(seminarInfo.seminarId) }}
                                            >edit</button>
                                            <button
                                                //onClick={listActions.deleteSeminarHandler}
                                            >delete</button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        )}/>
                    </Switch>
            </div>
        );
    }

    render() {
        const result = store.getState("loaded")
            ? <div>loading...</div>
            : this.renderSeminarList();
        return (
            <div>{result}</div>
        );
    }
    //render() {
    //    return (
    //        <h1>hi</h1>
    //    );
    //}
}



// const SeminarFunc = (props) => {
//    console.log(props);
//    return (
//        <div> 
//            <h4>{props.seminarId}</h4>
//            <h1>{props.name}</h1>
//            <p>{props.description}</p>
//        </div>
//    );
//}
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./style.css";
import CreateSeminar from "./../Seminar/createSeminar";
import EditSeminar from "./../Seminar/editSeminar";
import IndexSeminar from "./../Seminar/indexSeminar ";

export class SeminarList extends Component {
    constructor(props) {
        super(props);
        this.state = ({ loading: true, seminars: [] });

        fetch('api/Seminar/Get')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    seminars: data
                });
                console.log(data);
            });

        //this.renderSeminarList = this.renderSeminarList.bind(this);
    }

    renderSeminarList(seminars) {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={"/"} className="navbar-brand" >Reacr CRUD</Link>
                        <ul>
                            {seminars.map(seminarInfo =>
                                <li>
                                    <link key={seminarInfo.seminarId}>
                                        <h4>{seminarInfo.name}</h4>
                                    </link>
                                </li>
                            )}
                        </ul>
                    </nav>
                    {seminars.map(seminarInfo =>
                        <Route path="/{seminarInfo.name}" Component="{Seminar}"/>
                    )}
                </div>
            </Router>
        );
            }
        
    render() {
        const result = this.state.loading
            ? <div>loading...</div>
            : this.renderSeminarList(this.state.seminars);

        return (
            <div>{result}</div>
        );
    }
}
//const SlidesAll = slides.map((slideProp, index) =>
//    <Slide link={link} {...slideProp} index={index} key={index} current={current} />);
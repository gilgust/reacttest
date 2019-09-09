import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 


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
         
    }

    renderSeminarList({ match }) {
        const seminars = this.state.seminars; 

        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul>
                        {seminars.map(seminarInfo =>

                            <li>
                                <Link to={`${match.url}/${seminarInfo.seminarId}`} key={seminarInfo.seminarId}>
                                    <h4>{seminarInfo.name}</h4>
                                    </Link>
                            </li>
                        )
                        }
                    </ul>

                    <Route path={`${match.path}/:id`} component={seminar} />
                        {seminars.map(seminarInfo =>
                            <Route path={`${match.path}/:id`} component={seminar} seminar={seminarInfo} />
                        )
                        }
                        <Route
                            exact
                            path={"seminar/"}
                            render={() => <h3>Please select a topic.</h3>}
                        />
                </nav>
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

function seminar( seminar ) {
    return (
        <h1>{seminar.Name}</h1>  
    );
}
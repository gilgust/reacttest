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
                //console.log(data);
            });
         
    }

    renderSeminarList() {
        const seminars = this.state.seminars;
        //console.log(this.props.match.url);
        //<Route path={`seminars/:id`} component={seminar} />
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Switch>
                    {seminars.map(seminarInfo =>
                        <Route path={`${this.props.match.url}/:id`} key={seminarInfo.seminarId}
                            render={(props) => (
                                <Seminar {...props} />
                                )} />
                        )}
                    <Route path={this.props.match.url} exact
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

class Seminar extends Component {
    constructor(props) {
        super(props)
        this.state = ({ id: parseInt(props.match.params.id)});
    }

    render() {
        const seminarId = this.state.id;
        console.log(seminarId);
        return (
            <h1>{seminarId}</h1>
        );
    };

}
import { SeminarList } from './components/SeminarList/indexOld'; 
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/topics" component={Topics} />
                    <Route path="/seminars" component={SeminarList} />
                </Switch>
            </div>
        </Router>
    );
}
 

function Topic({ match }) {
    return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>   

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Header() {
    return (
        <ul> 
            <li>
                <Link to="/topics">Topics</Link>
            </li>
            <li>
                <Link to="/seminars">seminars</Link>
            </li>
        </ul>
    );
}

export default App;
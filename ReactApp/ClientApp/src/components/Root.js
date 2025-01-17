import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App'
import Home from './home'
import Seminars from './seminars';
import Seminar from './seminar/seminar';
import editSeminar from './seminar/editSeminar';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/todo/:filter?" component={App} />
            <Route path="/seminars" component={Seminars} />
            <Route path={'/seminar/:id'} exact component={Seminar} />
            <Route path={'/seminar/edit/:id'} component={editSeminar} />
            <Redirect to="/" />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
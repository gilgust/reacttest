import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route } from "react-router";
import { Link } from "react-router-dom";
import Seminars from '../components/seminarList/seminarList';
import Seminar from '../components/seminar/seminar';
import {
    //selectSeminar,
    fetchSeminarsIfNeeded,
    //invalidateSeminar
} from '../actions/seminarActions';


class AsyncApp extends Component {
    //constructor(props) {
    //    super(props);
    //}

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchSeminarsIfNeeded());
    }

    render() { 
        const { seminars } = this.props;
        return (
            <div>
                <Link to={'/'}>seminars</Link>
                <Route render={() => <Seminars />} />
                {seminars.length > 0 && (
                    <Route path={'/seminar/:id'} component={Seminar} />
                )}
            </div>
        );
    }
}

AsyncApp.propTypes = {
    seminars: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { seminars, isFetching, didInvalidate } = state.seminars;
    return {
        seminars, isFetching, didInvalidate
    }
}

export default connect(mapStateToProps)(AsyncApp);
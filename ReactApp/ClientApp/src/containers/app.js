import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Seminars from '../components/seminarList/seminarList';

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
        const { seminars, isFetching } = this.props;
        //<Route path="/seminars" component={Seminars} />
        
        return (
            <div>
                {isFetching && seminars.length === 0 && <h2>Loading...</h2>}
                {!isFetching && seminars.length === 0 && <h2>Empty.</h2>}
                {seminars.length > 0 && (
                    <Seminars seminars={seminars} />
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
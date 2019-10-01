import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchSeminarsIfNeeded } from '../actions/seminarActions';
import Menu from './Menu';
import Seminar from './seminar/seminar';


class Seminars extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchSeminarsIfNeeded());
    }

    render() {
        const { seminars, isFetching } = this.props;
        return (
            <div>
                <Menu />
                {isFetching && seminars.length === 0 && <h2>Loading...</h2>}
                {!isFetching && seminars.length === 0 && <h2>Empty.</h2>}
                {seminars.length > 0 && (
                    <ul>
                        {this.props.seminars.map((seminar, i) => (
                            <li key={i}>
                                <Link to={`/seminar/${i}`} >{seminar.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}
Seminars.propTypes = {
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

export default connect(mapStateToProps)(Seminars);

//const Home = ({ match: { params } }) => {
//    return (
//        <div>
//            <Menu />
//            <h4>home component</h4>
//        </div>
//    )
//}

//export default Home;
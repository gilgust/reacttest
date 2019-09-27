import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link, Switch, withRouter } from "react-router-dom";

class Seminars extends Component {
    render() {
        const { seminars, isFetching } = this.props;
        return (
            <div>
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
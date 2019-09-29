import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Track extends Component {
    componentDidMount() {
        console.log(this.props);
        debugger;
        const { match } = this.props

        //fetchInfoPage(match.params.name) // <-- 'match' provided by withRouter()

    }

    render() {
        return (
            <div>{this.props.track.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    track: state.tracks.find(track => track.id === Number(ownProps.params.id))
})

export default withRouter(connect(mapStateToProps)(Track));
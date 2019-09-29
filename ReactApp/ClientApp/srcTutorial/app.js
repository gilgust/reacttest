﻿import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { getTracks } from './actions/tracks';
import { Link } from 'react-router-dom';
 
class App extends Component {

    addTrack() {
        console.log('addTrack: ', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
    findTrack() {
        console.log('findTrack: ', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
        this.searchInput.value = '';
    }

    render() {
       
        return (
            <div> 
                <div>
                    <input type="text" ref={(input) => { this.trackInput = input }} />
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => { this.searchInput = input }} />
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>
                <ul >
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>
                            <Link to={`/tracks/${track.id}`}>{track.name}</Link>
                        </li>
                    )}
                </ul>
                <button onClick={this.props.onGetTracks}>Get tracks</button>
            </div>
        );
    }
}


export default connect(
    (state, ownProps) => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        ownProps
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name 
            };
            dispatch({ type: 'ADD_TRACK', payload })
        },
        onFindTrack: (name) => {
            dispatch({ type: 'FIND_TRACK', payload: name })
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
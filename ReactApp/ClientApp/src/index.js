import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


import App from './app';
import reducers from './reducers';

const rootElement = document.getElementById('root');

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    rootElement);



//const addTrackBtn = document.querySelectorAll('.addTrack')[0];
//const list = document.querySelectorAll('.list')[0];
//const trackInput = document.querySelectorAll('.trackInput')[0];

//store.subscribe(() => {
//    console.log('subscribe', store.getState());
     
//    list.innerHTML = '';
//    trackInput.value = '';
//    store.getState().forEach(track => {
//        const li = document.createElement('li');
//        li.textContent = track;
//        list.appendChild(li);
//    })
//});
 
//addTrackBtn.addEventListener('click', () => {
//    const trackName = trackInput.value;
//    console.log('track name', trackName);
//    store.dispatch({ type: 'ADD_TRACK', payload: trackName });
//});
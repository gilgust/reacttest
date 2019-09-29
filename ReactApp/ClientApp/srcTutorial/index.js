import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route , Switch} from 'react-router';

import App from './app';
import reducers from './reducers';
import About from './about';
import Track from './Track'; 

const rootElement = document.getElementById('root'); 

export const history = createBrowserHistory(); 
 
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" exact  >
                    <App />
                </Route>
                <Route path="/about" component={About} />
                <Route path="/tracks/:id" component={Track} />
            </Switch>
        </Router>        
    </Provider>,
    rootElement);
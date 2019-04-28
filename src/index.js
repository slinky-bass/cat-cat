import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import CreateLogger from 'redux-logger';
import { Provider } from 'react-redux';

// ----- INTERNAL ----- \\
import RootReducer from './reducers/rootReducer';
import MainContainer from './components/MainContainer.jsx';
import FactContainer from './components/FactContainer.jsx';
import NoMatch from './components/NoMatch.jsx';
require('./scss/style.scss');

const loggerMiddleware = CreateLogger();
const reduxStore = createStore(
    RootReducer,
    applyMiddleware(ThunkMiddleware, loggerMiddleware)
);

render(
    <Provider store={reduxStore}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainContainer} url="/home"/>
                <Route exact path="/facts" component={FactContainer} url="/facts/cat-fact-of-the-day" />
                <Route component={NoMatch} />
            </Switch>
        </HashRouter>
    </Provider>, 
    document.querySelector("#main")
);
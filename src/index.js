import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import CreateLogger from 'redux-logger';
import { Provider } from 'react-redux';

// ----- INTERNAL ----- \\
import RootReducer from './reducers/rootReducer';
import MainContainer from './components/MainContainer.jsx';
import ArticleContainer from './components/ArticleContainer.jsx';
import NoMatch from './components/NoMatch.jsx';
require('./scss/style.scss');

const loggerMiddleware = CreateLogger();
const reduxStore = createStore(
    RootReducer,
    applyMiddleware(ThunkMiddleware, loggerMiddleware)
);

render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route exact path="/articles/:articleId" component={ArticleContainer} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.querySelector("#main")
);
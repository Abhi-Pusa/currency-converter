import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {MemoryRouter as Router,Route} from 'react-router-dom';

import App from './component/App/App';

import mainReducer from './data/reducer/reducer';

let reducer = combineReducers({appState:mainReducer});

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                    <Router>
                        <Route path='/' component={App} />
                    </Router>
                </Provider>,document.getElementById('app'));

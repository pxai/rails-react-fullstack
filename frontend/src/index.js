import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
    composeEnhancers(
	    applyMiddleware(thunk)
		  )
	)

ReactDOM.render(<Provider store={store}>
                    <Router>
				      <App />
				    </Router>
				</Provider>, document.getElementById('root'));
registerServiceWorker();

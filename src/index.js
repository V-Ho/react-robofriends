import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import App from './containers/App'
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

// Pass in store as a prop to Provider component, which provides store to components
ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('root'))

serviceWorker.unregister();

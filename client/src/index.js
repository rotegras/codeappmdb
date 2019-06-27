import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rootEl = document.getElementById('root');

ReactDOM.render(
        <App />, 
        rootEl
);

serviceWorker.register();


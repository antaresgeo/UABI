import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './config/store';
import './utils/assets/styles/index.scss';
import TemplateProvider from './utils/components/template/template_context';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
        cancel_mapper?: Object;
        number_formatter: Intl.NumberFormat;
        is_in_refresh: boolean;
        retry_pending: Array<any>;
        date_format: string;
    }
}

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <TemplateProvider>
            <App />
        </TemplateProvider>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

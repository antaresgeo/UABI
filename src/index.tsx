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
        __uabi: {
            cancel_mapper?: Object;
            number_formatter: Intl.NumberFormat;
            is_in_refresh: boolean;
            retry_pending: Array<any>;
            date_format: string;
        }
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;

    }
}

if (!window.__uabi) {
    window.__uabi = {
        cancel_mapper: {},
        is_in_refresh: false,
        retry_pending: [],
        date_format: "YYYY-MM-DD",
        number_formatter: new Intl.NumberFormat("es-CO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    };
}


// borrar esto cuando se termine la autenticacion

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

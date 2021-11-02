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
export enum Role {
    ADMINISTRATOR = 'Administrador',
    SUPERVISOR = 'Supervisor',
    ACQUISITION = 'Adquisiciones',
    UABI = 'UABI',
    INSURABILITY = 'Asegurabilidad',
    INSPECTION = 'Inspeccion',
    PROVISION = 'Disposicion',
    SUPERVISION = 'Supervision',
    MAINTENANCE = 'Mantenimiento',
    BILLING = 'Facturacion',

}


export enum Permit {
    CREATE_USER = 'createUser',
    DETAIL_USER = 'detail_user',
    UPDATE_USER = 'update_user',
    DELETE_USER = 'delete_user',
    CREATE_POLICY = 'create_policy',
    DETAIL_POLICY = 'detail_policy',
    UPDATE_POLICY = 'update_policy',
    LIST_POLICY = 'list_policy',
    CREATE_INSURANCE_COMPANY = 'create_InsuranceCompany',
    DETAIL_INSURANCE_COMPANY = 'detail_InsuranceCompany',
    UPDATE_INSURANCE_COMPANY = 'update_InsuranceCompany',
    LIST_INSURANCE_COMPANY = 'list_InsuranceCompany',
    CREATE_INSURANCE_BROKER = 'create_InsuranceBroker',
    DETAIL_INSURANCE_BROKER = 'detail_InsuranceBroker',
    UPDATE_INSURANCE_BROKER = 'update_InsuranceBroker',
    LIST_INSURANCE_BROKER = 'list_InsuranceBrokery',
    CREATE_PROJECT = 'create_project',
    DETAIL_PROJECT = 'detail_project',
    UPDATE_PROJECT = 'update_project',
    DELETE_PROJECT = 'delete_project',
    CREATE_REALESTATE = 'create_realEstate',
    DETAIL_REALESTATE = 'detail_realEstate',
    UPDATE_REALESTATE = 'update_realEstate',
    DELETE_REALESTATE = 'delete_realEstate'
}


const user = {
    role: Role.ADMINISTRATOR,
    permits: [
        Permit.CREATE_POLICY,
        Permit.DETAIL_POLICY,
        Permit.UPDATE_POLICY,
        Permit.LIST_POLICY,
        Permit.CREATE_INSURANCE_COMPANY,
        Permit.DETAIL_INSURANCE_COMPANY,
        Permit.UPDATE_INSURANCE_COMPANY,
        Permit.DETAIL_INSURANCE_COMPANY,
        Permit.CREATE_INSURANCE_BROKER,
        Permit.DETAIL_INSURANCE_BROKER,
        Permit.UPDATE_INSURANCE_BROKER,
        Permit.LIST_INSURANCE_BROKER
    ]

}

// const user = {
//     role: Role.INSURABILITY,
//     permits: Permit.CREATE_POLICY

// }

localStorage.setItem('user', JSON.stringify(user));

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

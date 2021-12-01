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
        };
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}
export enum Role {
    ADMINISTRATOR = 'Administrador',
    SUPERVISOR = 'Supervisor',
    ACQUISITION = 'Adquisiciónes',
    SABI = 'SABI',
    INSURABILITY = 'Asegurabilidad',
    INSPECTION = 'Inspeccion',
    PROVISION = 'Disposicion',
    SUPERVISION = 'Supervision',
    MAINTENANCE = 'Mantenimiento',
    BILLING = 'Facturacion',
}

export enum Permit {
    CREATE_USER = 'crear_Usuarios',
    DETAIL_USER = 'detalles_Usuarios',
    UPDATE_USER = 'actualizar_Usuarios',
    DELETE_USER = 'inactivar_Usuarios',
    LIST_USER = 'listar_Usuarios',
    CREATE_POLICY = 'crear_Polizas',
    DETAIL_POLICY = 'detalles_Polizas',
    UPDATE_POLICY = 'actualizar_Polizas',
    DELETE_POLICY = 'inactivar_Polizas',
    LIST_POLICY = 'listar_Polizas',
    CREATE_INSURANCE_BROKER = 'crear_CorredorSeguros',
    DETAIL_INSURANCE_BROKER = 'detalles_CorredorSeguros',
    UPDATE_INSURANCE_BROKER = 'actualizar_CorredorSeguros',
    DELETE_INSURANCE_BROKER = 'inactivar_CorredorSeguros',
    LIST_INSURANCE_BROKER = 'listar_CorredorSeguros',
    CREATE_INSURANCE_COMPANY = 'crear_CompañiaAseguradora',
    DETAIL_INSURANCE_COMPANY = 'detalles_CompañiaAseguradora',
    UPDATE_INSURANCE_COMPANY = 'actualizar_CompañiaAseguradora',
    DELETE_INSURANCE_COMPANY = 'inactivar_CompañiaAseguradora',
    LIST_INSURANCE_COMPANY = 'listar_CompañiaAseguradora',
    CREATE_PROJECT = 'crear_Proyectos',
    DETAIL_PROJECT = 'detalles_Proyectos',
    UPDATE_PROJECT = 'actualizar_Proyectos',
    DELETE_PROJECT = 'inactivar_Proyectos',
    END_PROJECT = 'finalizar_Proyectos',
    LIST_PROJECT = 'listar_Proyectos',
    CREATE_REALESTATE = 'crear_BienesInmuebles',
    DETAIL_REALESTATE = 'detalles_BienesInmuebles',
    UPDATE_REALESTATE = 'actualizar_BienesInmuebles',
    DELETE_REALESTATE = 'inactivar_BienesInmuebles',
    LIST_REALESTATE = 'listar_BienesInmuebles',
    ASSIGN_ROLEPERMIT = 'asignar_RolesPermisos',
    DETAIL_REGISTROSAUDITORIA = 'detalles_RegistrosAuditoria',
    CREATE_ROLE = 'crear_Roles',
    DETAIL_ROLE = 'detalles_Roles',
    UPDATE_ROLE = 'actualizar_Roles',
    DELETE_ROLE = 'inactivar_Roles',
    LIST_ROLE = 'listar_Roles',
    LIST_PERMIT = 'listar_Permisos',
}

if (!window.__uabi) {
    window.__uabi = {
        cancel_mapper: {},
        is_in_refresh: false,
        retry_pending: [],
        date_format: 'YYYY-MM-DD',
        number_formatter: new Intl.NumberFormat('es-CO', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }),
    };
}

// borrar esto cuando se termine la autenticacion

if (!window.__uabi) {
    window.__uabi = {
        cancel_mapper: {},
        is_in_refresh: false,
        retry_pending: [],
        date_format: 'YYYY-MM-DD',
        number_formatter: new Intl.NumberFormat('es-CO', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }),
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



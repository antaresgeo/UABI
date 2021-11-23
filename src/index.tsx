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

const permits = [
    {
        id: 1,
        name: 'crear_Usuarios',
    },
    {
        id: 2,
        name: 'detalles_Usuarios',
    },
    {
        id: 3,
        name: 'actualizar_Usuarios',
    },
    {
        id: 4,
        name: 'inactivar_Usuarios',
    },
    {
        id: 5,
        name: 'listar_Usuarios',
    },
    {
        id: 6,
        name: 'crear_Polizas',
    },
    {
        id: 7,
        name: 'detalles_Polizas',
    },
    {
        id: 8,
        name: 'actualizar_Polizas',
    },
    {
        id: 9,
        name: 'inactivar_Polizas',
    },
    {
        id: 10,
        name: 'listar_Polizas',
    },
    {
        id: 11,
        name: 'crear_CorredorSeguros',
    },
    {
        id: 12,
        name: 'detalles_CorredorSeguros',
    },
    {
        id: 13,
        name: 'actualizar_CorredorSeguros',
    },
    {
        id: 14,
        name: 'inactivar_CorredorSeguros',
    },
    {
        id: 15,
        name: 'listar_CorredorSeguros',
    },
    {
        id: 16,
        name: 'crear_CompañiaAseguradora',
    },
    {
        id: 17,
        name: 'detalles_CompañiaAseguradora',
    },
    {
        id: 18,
        name: 'actualizar_CompañiaAseguradora',
    },
    {
        id: 19,
        name: 'inactivar_CompañiaAseguradora',
    },
    {
        id: 20,
        name: 'listar_CompañiaAseguradora',
    },
    {
        id: 21,
        name: 'crear_Proyectos',
    },
    {
        id: 22,
        name: 'detalles_Proyectos',
    },
    {
        id: 23,
        name: 'actualizar_Proyectos',
    },
    {
        id: 24,
        name: 'inactivar_Proyectos',
    },
    {
        id: 25,
        name: 'finalizar_Proyectos',
    },
    {
        id: 26,
        name: 'listar_Proyectos',
    },
    {
        id: 27,
        name: 'crear_BienesInmuebles',
    },
    {
        id: 28,
        name: 'detalles_BienesInmuebles',
    },
    {
        id: 29,
        name: 'actualizar_BienesInmuebles',
    },
    {
        id: 30,
        name: 'inactivar_BienesInmuebles',
    },
    {
        id: 31,
        name: 'listar_BienesInmuebles',
    },
    {
        id: 32,
        name: 'asignar_RolesPermisos',
    },
    {
        id: 33,
        name: 'detalles_RegistrosAuditoria',
    },
    {
        id: 34,
        name: 'crear_Roles',
    },
    {
        id: 35,
        name: 'detalles_Roles',
    },
    {
        id: 36,
        name: 'actualizar_Roles',
    },
    {
        id: 37,
        name: 'inactivar_Roles',
    },
    {
        id: 38,
        name: 'listar_Roles',
    },
    {
        id: 39,
        name: 'listar_Permisos',
    },
];

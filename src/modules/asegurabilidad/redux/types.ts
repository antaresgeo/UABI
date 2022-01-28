const types = Object.freeze({
    type_name: {
        default: 'type string [default]',
        success: 'type string [success]',
        fail: 'type string [fail]',
    },
    policy: {
        default: 'Se consulta endpoint de servicio poliza [default]',
        success: 'Se consulta endpoint de servicio poliza [success]',
        fail: 'Se consulta endpoint de servicio poliza [fail]',
    },
    policies: {
        default: 'Se consulta endpoint de servicio polizas [default]',
        success: 'Se consulta endpoint de servicio polizas [success]',
        fail: 'Se consulta endpoint de servicio polizas [fail]',
    },
    policiesRealEstate: {
        default:
            'Se consulta endpoint de servicio polizas por bien inmueble [default]',
        success:
            'Se consulta endpoint de servicio polizas por bien inmueble [success]',
        fail: 'Se consulta endpoint de servicio polizas por bien inmueble [fail]',
    },
    RealEstateWithoutPolicy: {
        default:
            'Se consulta endpoint de servicio bienes inmuebles sin poliza [default]',
        success:
            'Se consulta endpoint de servicio bienes inmuebles sin poliza [success]',
        fail: 'Se consulta endpoint de servicio bienes inmuebles sin poliza [fail]',
    },

    get_broker: {
        default:
            'Se consulta endpoint de servicio obtener corredor de seguros [default]',
        success:
            'Se consulta endpoint de servicio obtener corredor de seguros [success]',
        fail: 'Se consulta endpoint de servicio obtener corredor de seguros [fail]',
    },
    get_all_brokers: {
        default:
            'Se consulta endpoint de servicio listar corredor de seguros con paginacion [default]',
        success:
            'Se consulta endpoint de servicio listar corredor de seguros con paginacion [success]',
        fail: 'Se consulta endpoint de servicio listar corredor de seguros con paginacion [fail]',
    },
    get_list_brokers: {
        default:
            'Se consulta endpoint de servicio listar corredor de seguros [default]',
        success:
            'Se consulta endpoint de servicio listar corredor de seguros [success]',
        fail: 'Se consulta endpoint de servicio listar corredor de seguros [fail]',
    },
    create_broker: {
        default:
            'Se consulta endpoint de servicio crear corredor de seguros [default]',
        success:
            'Se consulta endpoint de servicio crear corredor de seguros [success]',
        fail: 'Se consulta endpoint de servicio crear corredor de seguros [fail]',
    },
    update_broker: {
        default:
            'Se consulta endpoint de servicio actulizar corredor de seguros [default]',
        success:
            'Se consulta endpoint de servicio actulizar corredor de seguros [success]',
        fail: 'Se consulta endpoint de servicio actulizar corredor de seguros [fail]',
    },
    delete_broker: {
        default:
            'Se consulta endpoint de servicio inactivar corredor de seguros [default]',
        success:
            'Se consulta endpoint de servicio inactivar corredor de seguros [success]',
        fail: 'Se consulta endpoint de servicio inactivar corredor de seguros [fail]',
    },
    clear_broker: {
        default: 'Se limpia corredor de seguros [default]',
        success: 'Se limpia corredor de seguros [success]',
        fail: 'Se limpia corredor de seguros [fail]',
    },

    get_company: {
        default:
            'Se consulta endpoint de servicio obtener compañia aseguradora [default]',
        success:
            'Se consulta endpoint de servicio obtener compañia aseguradora [success]',
        fail: 'Se consulta endpoint de servicio obtener compañia aseguradora [fail]',
    },
    clear_company: {
        default: 'Se limpia compañia aseguradora [default]',
        success: 'Se limpia compañia aseguradora [success]',
        fail: 'Se limpia compañia aseguradora [fail]',
    },
    get_all_companies: {
        default:
            'Se consulta endpoint de servicio listar compañia aseguradora con paginacion [default]',
        success:
            'Se consulta endpoint de servicio listar compañia aseguradora con paginacion [success]',
        fail: 'Se consulta endpoint de servicio listar compañia aseguradora con paginacion [fail]',
    },
    get_list_companies: {
        default:
            'Se consulta endpoint de servicio listar compañia aseguradora [default]',
        success:
            'Se consulta endpoint de servicio listar compañia aseguradora [success]',
        fail: 'Se consulta endpoint de servicio listar compañia aseguradora [fail]',
    },
    create_company: {
        default:
            'Se consulta endpoint de servicio crear compañia aseguradora [default]',
        success:
            'Se consulta endpoint de servicio crear compañia aseguradora [success]',
        fail: 'Se consulta endpoint de servicio crear compañia aseguradora [fail]',
    },
    update_company: {
        default:
            'Se consulta endpoint de servicio actulizar comapñia aseguradora [default]',
        success:
            'Se consulta endpoint de servicio actulizar comapñia aseguradora [success]',
        fail: 'Se consulta endpoint de servicio actulizar comapñia aseguradora [fail]',
    },
    delete_company: {
        default:
            'Se consulta endpoint de servicio inactivar comapñia aseguradora [default]',
        success:
            'Se consulta endpoint de servicio inactivar comapñia aseguradora [success]',
        fail: 'Se consulta endpoint de servicio inactivar comapñia aseguradora [fail]',
    },
});

export default types;

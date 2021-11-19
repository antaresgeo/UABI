const types = Object.freeze({
    type_name: {
        default: 'type string [default]',
        success: 'type string [success]',
        fail: 'type string [fail]',
    },
    get_registration: {
        default:
            'Se consulta endpoint de servicio obtener registro de inventarios [default]',
        success:
            'Se consulta endpoint de servicio obtener registro de inventarios [success]',
        fail: 'Se consulta endpoint de servicio obtener registro de inventarios [fail]',
    },
    get_all_registrations: {
        default:
            'Se consulta endpoint de servicio listar registro de inventarios con paginacion [default]',
        success:
            'Se consulta endpoint de servicio listar registro de inventarios con paginacion [success]',
        fail: 'Se consulta endpoint de servicio listar registro de inventarios con paginacion [fail]',
    },
    get_list_registrations: {
        default:
            'Se consulta endpoint de servicio listar registro de inventarios [default]',
        success:
            'Se consulta endpoint de servicio listar registro de inventarios [success]',
        fail: 'Se consulta endpoint de servicio listar registro de inventarios [fail]',
    },
    create_registration: {
        default:
            'Se consulta endpoint de servicio crear registro de inventarios [default]',
        success:
            'Se consulta endpoint de servicio crear registro de inventarios [success]',
        fail: 'Se consulta endpoint de servicio crear registro de inventarios [fail]',
    },
    update_registration: {
        default:
            'Se consulta endpoint de servicio actulizar registro de inventarios [default]',
        success:
            'Se consulta endpoint de servicio actulizar registro de inventarios [success]',
        fail: 'Se consulta endpoint de servicio actulizar registro de inventarios [fail]',
    },
    delete_registration: {
        default:
            'Se consulta endpoint de servicio inactivar registro de inventarios [default]',
        success:
            'Se consulta endpoint de servicio inactivar registro de inventarios [success]',
        fail: 'Se consulta endpoint de servicio inactivar registro de inventarios [fail]',
    },
    clear_registration: {
        default: 'Se limpia registro de inventarios [default]',
        success: 'Se limpia registro de inventarios [success]',
        fail: 'Se limpia registro de inventarios [fail]',
    },
});
export default types;

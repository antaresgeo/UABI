const types = Object.freeze({
    type_name: {
        default: 'type string [default]',
        success: 'type string [success]',
        fail: 'type string [fail]',
    },

    get_inspection: {
        default:
            'Se consulta endpoint de servicio obtener inspeccion [default]',
        success:
            'Se consulta endpoint de servicio obtener inspeccion [success]',
        fail: 'Se consulta endpoint de servicio obtener inspeccion [fail]',
    },
    get_all_inspections: {
        default:
            'Se consulta endpoint de servicio listar inspeccion con paginacion [default]',
        success:
            'Se consulta endpoint de servicio listar inspeccion con paginacion [success]',
        fail: 'Se consulta endpoint de servicio listar inspeccion con paginacion [fail]',
    },
    get_list_inspections: {
        default: 'Se consulta endpoint de servicio listar inspeccion [default]',
        success: 'Se consulta endpoint de servicio listar inspeccion [success]',
        fail: 'Se consulta endpoint de servicio listar inspeccion [fail]',
    },
    create_inspection: {
        default: 'Se consulta endpoint de servicio crear inspeccion [default]',
        success: 'Se consulta endpoint de servicio crear inspeccion [success]',
        fail: 'Se consulta endpoint de servicio crear inspeccion [fail]',
    },
    update_inspection: {
        default:
            'Se consulta endpoint de servicio actulizar inspeccion [default]',
        success:
            'Se consulta endpoint de servicio actulizar inspeccion [success]',
        fail: 'Se consulta endpoint de servicio actulizar inspeccion [fail]',
    },
    delete_inspection: {
        default:
            'Se consulta endpoint de servicio inactivar inspeccion [default]',
        success:
            'Se consulta endpoint de servicio inactivar inspeccion [success]',
        fail: 'Se consulta endpoint de servicio inactivar inspeccion [fail]',
    },
    clear_inspection: {
        default: 'Se limpia inspeccion [default]',
        success: 'Se limpia inspeccion [success]',
        fail: 'Se limpia inspeccion [fail]',
    },
});
export default types;

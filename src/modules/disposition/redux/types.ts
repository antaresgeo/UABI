const types = Object.freeze({
    type_name: {
        default: 'type string [default]',
        success: 'type string [success]',
        fail: 'type string [fail]',
    },
    get_disposition: {
        default: 'Se consulta endpoint de servicio obtener Disposiscion del bien Inmueble [default]',
        success: 'Se consulta endpoint de servicio obtener Disposiscion del bien Inmueble [success]',
        fail: 'Se consulta endpoint de servicio obtener Disposiscion del bien Inmueble [fail]',
    },
    get_all_dispositions: {
        default: 'Se consulta endpoint de servicio listar listar disposiciones con paginacion [default]',
        success: 'Se consulta endpoint de servicio listar listar disposiciones con paginacion [success]',
        fail: 'Se consulta endpoint de servicio listar listar disposiciones con paginacion [fail]',
    },
    get_list_dispositions: {
        default: 'Se consulta endpoint de servicio listar disposiciones [default]',
        success: 'Se consulta endpoint de servicio listar disposiciones [success]',
        fail: 'Se consulta endpoint de servicio listar disposiciones [fail]',
    },
    // Etapa Precontractual arrendamiento
    create_precontractual: {
        default:'Se consulta endpoint de servicio crear precontractual [default]',
        success:'Se consulta endpoint de servicio crear precontractual [success]',
        fail: 'Se consulta endpoint de servicio crear precontractual [fail]',
    },
    update_precontractual: {
        default:'Se consulta endpoint de servicio actulizar precontractual [default]',
        success:'Se consulta endpoint de servicio actulizar precontractual [success]',
        fail: 'Se consulta endpoint de servicio actulizar precontractual [fail]',
    },
    get_precontractual: {
        default: 'Se consulta endpoint de servicio obtener precontractual [default]',
        success: 'Se consulta endpoint de servicio obtener precontractual [success]',
        fail: 'Se consulta endpoint de servicio obtener precontractual [fail]',
    },
    //Contratos
    get_contract: {
        default: 'Se consulta endpoint de servicio obtener contrato [default]',
        success: 'Se consulta endpoint de servicio obtener contrato [success]',
        fail: 'Se consulta endpoint de servicio obtener contrato [fail]',
    },
    get_all_contracts: {
        default:'Se consulta endpoint de servicio listar Contratos con paginacion [default]',
        success:'Se consulta endpoint de servicio listar Contratos con paginacion [success]',
        fail: 'Se consulta endpoint de servicio listar Contratos con paginacion [fail]',
    },
    get_list_contracts: {
        default:'Se consulta endpoint de servicio listar contratos [default]',
        success:'Se consulta endpoint de servicio listar contratos [success]',
        fail: 'Se consulta endpoint de servicio listar contratos [fail]',
    },
    create_contract: {
        default:'Se consulta endpoint de servicio crear contratos [default]',
        success:'Se consulta endpoint de servicio crear contratos [success]',
        fail: 'Se consulta endpoint de servicio crear contratos [fail]',
    },
    update_contract: {
        default:'Se consulta endpoint de servicio actulizar contratos [default]',
        success:'Se consulta endpoint de servicio actulizar contratos [success]',
        fail: 'Se consulta endpoint de servicio actulizar contratos [fail]',
    },


});
export default types;

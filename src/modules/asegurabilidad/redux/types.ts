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
        default: 'Se consulta endpoint de servicio polizas por bien inmueble [default]',
        success: 'Se consulta endpoint de servicio polizas por bien inmueble [success]',
        fail: 'Se consulta endpoint de servicio polizas por bien inmueble [fail]',
    }

});
export default types;

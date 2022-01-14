import React from 'react';

const ContractViewForm = () => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información del Contrato
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Número de Contrato</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Tipo de Contrato</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Canon Mensual</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Fecha de suscripción</label>
                                <div className="my-3">-</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Fecha de Inicio</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Fecha de terminación</label>
                                <div className="my-3">-</div>
                            </div>

                            <div className="col-3">
                                <label htmlFor="">Valor de administración</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Valor Vigilancia</label>
                                <div className="my-3">-</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Valor Servicio Público</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Área a disponer</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">UABI es la encargada del contrato</label>
                                <div className="my-3">-</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 movimiento">
                                <label htmlFor="">Objeto del contrato</label>
                                <div className="my-3" style={{ height: '60px', overflowX: 'auto' }}>
                                    <div style={{ width: '1000px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus neque a ex
                                        porta aliquet. Nunc malesuada auctor risus, ut condimentum mauris scelerisque
                                        non. Aliquam erat volutpat. Nullam quis blandit elit. In non tincidunt eros, sed
                                        pretium erat. Curabitur sollicitudin ex in odio pellentesque fringilla. Nulla
                                        vehicula,
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractViewForm;

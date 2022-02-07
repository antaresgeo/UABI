import React, { FC } from 'react'

interface IPros {
    precontractual: any;

}

const DetailComodato: FC<IPros> = ({ precontractual }) => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div className="title" style={{ borderBottom: '1px solid #e2e4e4' }}>
                    Estudio Previo Para Comodato
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        {/* comodato */}
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Fecha de Registro estudio previo</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Valor Patrimonial</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Valor comodato</label>
                                <div className="my-3">
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Duración del contrato</label>
                                <div className="my-3">
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Tipología del comodato</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Base asegurable</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Aplica Proceso competitivo</label>
                                <div className="my-3">
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Fecha de Prediación</label>
                                <div className="my-3">
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Propiedad Horizontal</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">¿resolución SSS202050083439?</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">¿Autoriza explotación económica?</label>
                                <div className="my-3">
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Servicios publicos por Aforo</label>
                                <div className="my-3">
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Tipo de negocio</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Destinación de bien Inmueble</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Paz y Salvo de Rubros</label>
                                <div className="my-3">
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Eventos sociales</label>
                                <div className="my-3">
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-6 movimiento">
                                <label htmlFor="">Campo de acción</label>
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
                            <div className="col-6 movimiento">
                                <label htmlFor="">Como contribuye la dependencia</label>
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
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-6 movimiento">
                                <label htmlFor="">Riesgos Ambientales</label>
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
                            <div className="col-6 movimiento">
                                <label htmlFor="">Actividades</label>
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
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-6 movimiento">
                                <label htmlFor="">Descripcion de linderos</label>
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
                            <div className="col-6 movimiento">
                                <label htmlFor="">Actividades</label>
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
    )
}

export default DetailComodato

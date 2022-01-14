import React from 'react'

const ViewRiskAnalysis = () => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div className="title" style={{ borderBottom: '1px solid #e2e4e4' }}>
                    Analisis de Riesgos
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4', marginLeft: '5px', paddingBottom: '10px' }}>
                            Riesgos regulatorio
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Grado de ocurrencia</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Grado de impacto</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Responsable</label>
                                <div className="my-3">
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-12 movimiento">
                                <label htmlFor="">Mecanismo de mitigación</label>
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
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4', marginLeft: '5px', paddingBottom: '10px' }}>
                            Riesgos operativos
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Grado de ocurrencia</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Grado de impacto</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Responsable</label>
                                <div className="my-3">
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-12 movimiento">
                                <label htmlFor="">Mecanismo de mitigación</label>
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

export default ViewRiskAnalysis

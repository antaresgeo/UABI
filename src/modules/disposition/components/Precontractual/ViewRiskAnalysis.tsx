import React, { FC } from 'react'

interface FormPros {
    operational_risk?: any;
    regulatory_risk?: any;
}

const ViewRiskAnalysis: FC<FormPros> = ({operational_risk, regulatory_risk }) => {
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
                                <div className="my-3">{regulatory_risk?.degree_occurrence}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Grado de impacto</label>
                                <div className="my-3">{regulatory_risk?.impact_degree}</div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Responsable</label>
                                <div className="my-3">{regulatory_risk?.responsible}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-12 movimiento">
                                <label htmlFor="">Mecanismo de mitigación</label>
                                <div className="my-3" style={{ height: '60px', overflowX: 'auto' }}>
                                    <div style={{ width: '1000px' }}>
                                        {regulatory_risk?.mitigation_mechanism}
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
                                <div className="my-3">{operational_risk?.degree_occurrence}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Grado de impacto</label>
                                <div className="my-3">{operational_risk?.impact_degree}</div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">Responsable</label>
                                <div className="my-3">{operational_risk?.responsible}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-12 movimiento">
                                <label htmlFor="">Mecanismo de mitigación</label>
                                <div className="my-3" style={{ height: '60px', overflowX: 'auto' }}>
                                    <div style={{ width: '1000px' }}>
                                        {operational_risk?.mitigation_mechanism}
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

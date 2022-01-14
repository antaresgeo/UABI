import React, { FC } from 'react'

interface FormPros {
    dispositionType?: string;
    title: string;
}

const ViewPerson: FC<FormPros> = ({dispositionType, title }) =>  {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    {title}
                    {/* {dispositionType === "Comodato" && "Informacióm del Comodatario"}
                    {dispositionType === "arrendamiento" && "Informacióm del Arrendatario"} */}
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Tipo de persona</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Nombre</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Tipo de documento</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Número de documento</label>
                                <div className="my-3">-</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Genero</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Direccion</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Correo Electronico</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Teléfono</label>
                                <div className="my-3">-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPerson

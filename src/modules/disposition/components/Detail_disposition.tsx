import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

interface DispositionFormPros {
    //dispositionType: string;
    //realEstate: any;
}

const Detail_disposition: FC<DispositionFormPros> = () => {
    const history = useHistory();
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div className="title" style={{ borderBottom: '1px solid #e2e4e4' }}>
                    Bien inmueble:{' '}
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label style={{ color: '#8d8c8c' }} htmlFor="">
                                    ID
                                </label>
                                <div className="my-3" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Nombre del Inmuebles</label>
                                <div className="my-3" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Matrícula</label>
                                <div className="my-3" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Disposición</label>
                                <div className="my-3">-</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Fecha de la ultima inspección</label>
                                <div className="row">
                                    <div className="col-4 my-3" style={{ width: 'auto', padding: '1em' }}>
                                        fecha
                                    </div>
                                    <div className="col my-3">
                                        <button type="button" className="btn btn-outline-primary  btn-sm">
                                            ver Inspección
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Estado de contratación</label>
                                <div className="my-3" />
                            </div>

                            <div className="col-3">
                                <label htmlFor="">Historial de contratos</label>
                                <div className="my-3">
                                    <button type="button" className="btn btn-outline-primary  btn-sm">
                                        ver Historial
                                    </button>
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Informe de supervisión</label>
                                <div className="my-3">
                                    <button type="button" className="btn btn-outline-primary  btn-sm">
                                        ver informe de supervición
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">CBML</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Dirección</label>
                                <div className="my-3">-</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Etapa Precontractual</label>
                                <div className=" my-3">
                                    <button type="button" className="btn btn-outline-primary  btn-sm"
                                            onClick={() => history.push('/dispositions/precontractual/view')}
                                    >
                                        ver estudio Previo
                                    </button>
                                </div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Contrato Vigente</label>
                                <div className=" my-3">
                                    <button type="button" className="btn btn-outline-primary  btn-sm">
                                        ver Contrato
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                        <div className="col-12 movimiento">
                                <label htmlFor="">Descripción del inmueble</label>
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

export default Detail_disposition;

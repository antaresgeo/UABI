import moment from 'moment';
import React, { FC } from 'react';

interface IpolizaFormPros {
    poliza: any;
    realEstatesPolicy: any;
}
export const PolizaViewForm: FC<IpolizaFormPros> = ({ poliza /*, realEstatesPolicy*/ }) => {
    const companies = poliza.insurance_companies.map((policy) => policy.name).join(', ');
    const tmpDateStart = new Date(parseInt(poliza?.vigency_start));
    const newDateStart = moment(tmpDateStart).format('MM/DD/YYYY');
    const tmpDateEnd = new Date(parseInt(poliza?.vigency_end));
    const newDateEnd = moment(tmpDateEnd).format('MM/DD/YYYY');

    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información de la Póliza
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Tipo de Póliza</label>
                                <div className="my-3">{poliza.policy_type}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Fecha de Inicio</label>
                                <div className="my-3">{newDateStart}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Fecha de Finalización</label>
                                <div className="my-3">{newDateEnd}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Corredor de Seguros</label>
                                <div className="my-3">{poliza.insurance_broker?.name}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Valor de Póliza</label>
                                <div className="my-3">{poliza.insurance_value}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Tipo de aseguramiento</label>
                                <div className="my-3">{poliza.type_assurance}</div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="">Compañias Aseguradoras</label>
                                <div className="my-3">{companies}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React, { FC } from 'react';
import { formatDate } from '../../../utils';

interface InsuranceCompanyDetailProps {
    company: any;
}
const InsuranceCompanyDetail: FC<InsuranceCompanyDetailProps> = ({ company }) => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información De La Compañia
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Código</label>
                                <div className="my-3">{company?.id}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Nombre de la compañia</label>
                                <div className="my-3">{company?.name || '-'}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">NIT</label>
                                <div className="my-3">{company?.nit || '-'}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Teléfono</label>
                                <div className="my-3">{company?.phone || '-'}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Departamento</label>
                                <div className="my-3">{company?.state || '-'}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Ciudad</label>
                                <div className="my-3">{company?.city || '-'}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Dirección</label>
                                <div className="my-3">{company?.address || '-'}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor=""> Fecha de creación</label>
                                <div className="my-3">{formatDate(company?.audit_trail?.created_on) || '-'}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">Creado por</label>
                                <div className="my-3">{company?.audit_trail?.created_by || '-'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsuranceCompanyDetail;

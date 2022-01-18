import React, { FC } from 'react'
import moment from 'moment';

interface IUserFormPros {
    contracts: any;
}

const ContractDetail: FC<IUserFormPros> = ({ contracts }) => {
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Contratos
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        {contracts?.map((contract,i) => {
                            return (
                                <div key={i} className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                                    <div className="col-3">
                                        <label htmlFor="">Número de Contrato</label>
                                        <div className="my-3">{contract?.contract_number}</div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Vigencia</label>
                                        <div className="my-3">{moment(Number(contract?.vigency_start)).format('DD/MM/YYYY')} - {moment(Number(contract?.vigency_end)).format('DD/MM/YYYY')}</div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Contratista</label>
                                        <div className="my-3">{contract?.contractor}</div>
                                    </div>
                                </div>

                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractDetail

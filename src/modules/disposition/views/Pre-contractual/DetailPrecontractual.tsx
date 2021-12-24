import React from 'react'
import { Link } from '../../../../utils/ui';
import Detail_Lease from '../../components/Precontractual/Lease/Detail_Lease';
import ViewPerson from './../../components/Precontractual/ViewPerson';
import ViewRiskAnalysis from './../../components/Precontractual/ViewRiskAnalysis';
import { useHistory } from 'react-router-dom';
import Detail_comodato from '../../components/Precontractual/comodato/Detail_comodato';

const DetailPrecontractual = () => {
    const history = useHistory();
    const dispositionType= "arrendamiento"
    const realEstate= {}
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="bg-white d-flex flex-column h-100">
                    <div className="d-flex flex-row mb-3 pt-3 ps-4 shadow-sm p-3 bg-white rounded">
                        <h5 className="col-11">Etapa Precontractual</h5>
                        <Link
                            to={
                                { pathname: "/disposition/create/", state: { dispositionType,  realEstate,  } }
                            }
                            name=""
                            avatar={false}
                            icon={
                                <i
                                    style={{ marginLeft: '30px', fontSize: 16, color: '#000' }}
                                    className="fa fa-pencil"
                                    aria-hidden="true"
                                />
                            }
                        />
                        {/* <i className="col fa fa-pencil" aria-hidden="true" style={{marginLeft: '30px', fontSize: 16}}></i> */}
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                {dispositionType === 'arrendamiento' &&
                                    <Detail_Lease />
                                }
                                {/* {dispositionType === 'Comodato' &&
                                    <Detail_comodato />
                                } */}
                                <ViewPerson title='Información del Solicitante'/>
                                <ViewRiskAnalysis />
                                <ViewPerson title='Información del Lider a Cargo'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        // history.goBack();
                    }}
                >
                    Atras
                </button>
            </div>
        </div>
    )
}

export default DetailPrecontractual

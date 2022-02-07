import React, { useEffect } from 'react'
import { Link } from '../../../../utils/ui';
import DetailLease from '../../components/Precontractual/Lease/Detail_Lease';
import ViewPerson from './../../components/Precontractual/ViewPerson';
import ViewRiskAnalysis from './../../components/Precontractual/ViewRiskAnalysis';
import { useHistory, useParams } from 'react-router-dom';
import DetailComodato from '../../components/Precontractual/comodato/Detail_comodato';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux';

interface IParams {
    active_code: string;
}

const DetailPrecontractual = () => {
    const history = useHistory();
    const realEstate = {}
    const dispatch = useDispatch();
    const { active_code } = useParams<IParams>();

    const precontractual: any = useSelector((state: any) => {
        return state.disposition.precontractual.value
    });

    useEffect(() => {
        dispatch(actions.get_precontract(active_code));
    }, [dispatch, active_code]);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="bg-white d-flex flex-column h-100">
                    <div className="d-flex flex-row mb-3 pt-3 ps-4 shadow-sm p-3 bg-white rounded">
                        <h5 className="col-11">Etapa Precontractual</h5>
                        <Link
                            to={
                                "" /*{ pathname: "/disposition/create/", state: { precontractual.type_disposition, realEstate, } }*/
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
                                {precontractual.type_disposition === 'Arrendamiento' &&
                                    <DetailLease
                                        precontractual={precontractual}
                                    />
                                }
                                {precontractual.type_disposition === 'Comodato' &&
                                    <DetailComodato
                                        precontractual={precontractual}
                                    />
                                }
                                {console.log(precontractual)}

                                <ViewPerson title='Información del Solicitante' person={precontractual?.applicant} />
                                <ViewRiskAnalysis
                                    operational_risk={precontractual?.operational_risk}
                                    regulatory_risk={precontractual?.regulatory_risk}
                                />
                                <ViewPerson title='Información del Lider a Cargo' person={precontractual?.leader} />
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

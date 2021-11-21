import { Card, Link } from '../../../../utils/ui';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../../utils/interfaces/insurability';
import { useEffect } from 'react';
import { actions } from '../../redux';
import { IRealEstateAttributes } from '../../../../utils/interfaces/realEstates';
import { getRealEstates } from '../../../acquisitions/redux/actions/realEstates';
import PolizaForm from '../../components/PolizaForm';
import { useHistory } from 'react-router-dom';
import { getRealEstate } from './../../../acquisitions/redux/actions/realEstates';
import { LinkButton } from '../../../../utils/ui/link';
import RealEstateList from '../../../acquisitions/components/RealEstateList';

interface IParams {
    id: string;
}
const DetailInsurability = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams<IParams>();
    const policy: IPolicyAttributes = useSelector((store: any) => store.insurability.policy.value);
    useEffect(() => {
        dispatch(actions.getPolicy(id));
    }, [dispatch, id]);

    const getPolicy = async (dataPolicy) => {
        const action = actions.getPolicy(id);
        await dispatch(action);
    };

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {/* <div className="col-12">
                            <div className="content_box_table">
                                <div className="title">Datos del bien inmueble</div>
                                <div className="table_content">
                                    <table className="box-table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Localización</th>
                                                <th>Tipología</th>
                                                <th>Tipo de activo</th>
                                                <th>Proyectos a los que pertenece</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{realEstate?.id}</td>
                                            <td>{realEstate?.name}</td>
                                            <td>-</td>
                                            <td>{realEstate?.tipology}</td>
                                            <td>{realEstate?.destination_type}</td>
                                            <td>{realEstate?.project.name}</td>
                                        </tr>
                                            <tr>
                                                <td>{realEstate?.id}</td>
                                                <td>{realEstate?.name}</td>
                                                <td>-</td>
                                                <td>{realEstate?.tipology}</td>
                                                <td>{realEstate?.destination_type}</td>
                                                <td>{realEstate?.projects.name}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> */}


                        <div className="col-md-12">
                            <Card
                                title={
                                    <>
                                        <div className="row">
                                            <div className="col-1">Póliza</div>
                                            <div
                                                style={{ width: '5px', marginRight: '1px' }}
                                                onClick={() => {
                                                    history.push(`/insurabilities/policy/edit/${id}`);
                                                }}
                                            >
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </div>
                                            {policy?.vigency_end < new Date().getTime() && (
                                                <div className="col" style={{ color: '#AD0808', marginLeft: 15 }}>
                                                    Vencida
                                                </div>
                                            )}
                                        </div>
                                    </>
                                }
                            >
                                <PolizaForm
                                    type="view"
                                    disabled
                                    policy={policy}
                                    onSubmit={(values) => {
                                        return getPolicy(values);
                                    }}
                                />
                            </Card>
                            <Card
                                title="Bienes Inmuebles de la póliza"
                            >
                                <RealEstateList  />
                            </Card>
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
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    );
};

export default DetailInsurability;

import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { actions } from '../../redux';

// SERVICES
import { useSelector, useDispatch } from 'react-redux';

// INTERFACES
// import { IInsuranceCompanyAttributes } from '../../../../utils/interfaces';
import swal from 'sweetalert';
import { Card } from '../../../../utils/ui';
import InsuranceCompanyForm from '../../components/InsuranceCompanyForm';
import { Company } from '../../redux/service';

interface IParams {
    id: string;
}

interface IProps {
    view?: string;
}

const EditInsuranceCompany = ({ view }: IProps) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams<IParams>();
    const insurance_company: any = useSelector((store: any) => store.insurability.company.value);

    const _updateInsuranceCompany = async (data: Company) => {
        const res: any = await dispatch(actions.update_company(data.id, data));
        await swal('Compañia aseguradora actulizada', res.message, 'success');
        history.push(`/insurabilities/company/${res.results.id}/`);
    };

    useEffect(() => {
        dispatch(actions.get_company_by_id(id));
    }, []);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="d-flex flex-row mb-3">
                            <h5>Editar Compañía aseguradora</h5>
                        </div>
                        <div className="col-md-12">
                            <Card title="Información de la empresa">
                                <InsuranceCompanyForm
                                    insurance_company={insurance_company}
                                    onSubmit={(values) => {
                                        return _updateInsuranceCompany(values);
                                    }}
                                />
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

export default EditInsuranceCompany;

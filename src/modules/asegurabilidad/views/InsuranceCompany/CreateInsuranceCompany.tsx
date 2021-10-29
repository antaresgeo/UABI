import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../../redux';
import { Card } from '../../../../utils/ui';
import InsuranceCompanyForm from '../../components/InsuranceCompanyForm';

const CreateInsuranceCompany = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const createInsuranceCompany = async (insuranceCompanyName, insuranceCompanyDescription, dependency) => {
        // const res: any = await dispatch(actions.createInsuranceCompany(insuranceCompanyName, insuranceCompanyDescription, dependency));
        // history.push(`/insurabilities/company/${res.id}`);
    };

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Creación de Proyecto">
                                <InsuranceCompanyForm
                                    onSubmit={(values) => {
                                        // return createInsuranceCompany(values.name, values.description, values.dependency);
                                        return Promise.resolve()
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

export default CreateInsuranceCompany;

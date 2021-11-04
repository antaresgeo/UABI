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

    const _updateInsuranceCompany = async (insuranceCompanyForm) => {
        let res: any;
        // res = await dispatch(
        //     actions.updateInsuranceCompany(
        //         { name: insuranceCompanyForm.name, description: insuranceCompanyForm.description, dependency: insuranceCompanyForm.dependency },
        //         id
        //     )
        // );

        await swal('Proyecto actualizado', res.data.message, 'success');
        // history.push(`/insurabilities/company/${insurance_company.id}`);
    };

    useEffect(() => {
        // dispatch(actions.getInsuranceCompany(id));
    }, []);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title={<>{/*<b>Proyecto:</b> {insurance_company?.name}*/}</>}>
                                <InsuranceCompanyForm
                                    insurance_company={insurance_company}
                                    onSubmit={(values) => {
                                        // return _updateInsuranceCompany(values);
                                        return Promise.resolve();
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

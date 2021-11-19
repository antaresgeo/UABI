import { useParams, useHistory } from 'react-router-dom';
import { IPolicyAttributes } from '../../../../utils/interfaces/insurability';
import { useEffect } from 'react';
import PolizaForm from '../../components/PolizaForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card } from '../../../../utils/ui';
import { actions } from '../../redux';
import { getRealEstates } from '../../../acquisitions/redux/actions/realEstates';


interface IParams {
    id: string;
}

const EditPolicy = () => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const policy: IPolicyAttributes = useSelector((store: any) => store.insurability.policy.value);
    const insurance_companies: any = useSelector((store: any) => store.insurability.companies.value);

    useEffect(() => {
        dispatch(actions.get_list_companies());
        dispatch(actions.getPolicy(id));

    }, []);

    const _updatePolicy = async (policyForm) => {
        console.log(policyForm);
        let res: any;
        res = await dispatch(actions.updatePolicy(policyForm, id ));
    };

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                    <Card
                        title="Póliza"
                    >
                        <PolizaForm
                            type='edit'
                            policy={policy}
                            companies={insurance_companies}
                            onSubmit={(values) => {
                                return _updatePolicy(values);
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

export default EditPolicy;

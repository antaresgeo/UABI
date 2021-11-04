import { useParams, useHistory } from 'react-router-dom';
import { IPolicyAttributes } from '../../../../utils/interfaces/insurability';
import { useEffect } from 'react';
import PolizaForm from '../../components/PolizaForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card } from '../../../../utils/ui';
import { swal } from '../../../../utils';
import { actions } from '../../redux';
import { IRealEstateAttributes } from '../../../../utils/interfaces/realEstates';
import { getRealEstates } from '../../../acquisitions/redux/actions/realEstates';

interface IParams {
    id: string;
}

const EditPolicy = () => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const policy: IPolicyAttributes = useSelector((store: any) => store.insurability.policy.value);
    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstates.value);

    useEffect(() => {
        dispatch(getRealEstates({}));
    }, []);

    const _updatePolicy = async (policyForm) => {
        let res: any;
        res = await dispatch(actions.updatePolicy({ policyForm }, id));
        await swal('Proyecto actualizado', res.data.message, 'success');
        history.push(`/insurability/policy/${policy.id}`);
    };

    useEffect(() => {
        dispatch(actions.getPolicy(id));
    }, []);

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
                            realEstate={realEstate}
                            policy={policy}
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

import { Card } from '../../../utils/ui';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IPolicyAttributes } from '../../../utils/interfaces/insurability';
import { useEffect } from 'react';
import { actions } from '../redux';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';
import { getRealEstates } from "../../acquisitions/redux/actions/realEstates";
import PolizaForm from '../components/PolizaForm';
import { useHistory } from 'react-router-dom';


interface IParams {
    id: string;
}
const DetailInsurability = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams<IParams>();
    const policy: IPolicyAttributes = useSelector((store: any) => store.asegurabilty.policy.value);
    const realEstate: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    useEffect(() => {
        //dispatch(getRealEstates({}));
        dispatch(actions.getPolicy(id));
    }, [])

    const getPolicy = async (dataPolicy) => {
        console.log(dataPolicy);
        const action = actions.getPolicy(id);
        await dispatch(action);

    }


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
                            disabled
                            realEstates={realEstate}
                            policy={policy}
                            onSubmit={(values) => {
                                return getPolicy(values);
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

export default DetailInsurability;

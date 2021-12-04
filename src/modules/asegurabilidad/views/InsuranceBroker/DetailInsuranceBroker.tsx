import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux';
import InsuranceBrokerDetail from '../../components/InsuranceBrokerDetail';

interface IParams {
    id: string;
}

const DetailInsuranceBroker = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const history = useHistory();

    const insurance_broker: any = useSelector((states: any) => states.insurability.broker.value);

    useEffect(() => {
        dispatch(actions.get_broker_by_id(id));
    }, []);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="d-flex flex-row mb-3">
                            <h5>Corredora de seguros</h5>
                        </div>
                        <div className="col-md-12">
                            <InsuranceBrokerDetail broker={insurance_broker} />
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

export default DetailInsuranceBroker;

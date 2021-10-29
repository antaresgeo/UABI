
import { actions } from '../redux';
import { useDispatch } from 'react-redux';
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import UserForm from '../components/UserForm';
import GeneralForm from './../components/GerenalForm';

const CreateUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const createUser = async (dataPolicy) => {
        await dispatch(actions.createUser(dataPolicy));
    };

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="información Usuario">
                                <GeneralForm
                                    type="create"
                                    onSubmit={(values) => {
                                        return createUser(values);
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
    )
}

export default CreateUser

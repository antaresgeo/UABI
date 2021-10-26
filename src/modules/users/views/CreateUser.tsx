
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../redux';
import { Card } from '../../../utils/ui';
import UserForm from '../components/UserForm';

const CreateUser = () => {
    const history: any = useHistory();
    const dispatch = useDispatch();

    const createUser = async (username, id_rol) => {
        console.log(username, id_rol);
        // const res: any = await dispatch(actions.createUser(username,parseInt(id_rol)));
        // history.push(`/users/${res}`);
    };

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Creación Usuario">
                                <UserForm
                                    onSubmit={(values) => {
                                        return createUser(values.username, values.id_rol);
                                    }}
                                    type="create"
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

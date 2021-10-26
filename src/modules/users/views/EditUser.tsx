import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IUserAttributes } from './../../../utils/interfaces/users';
import { actions } from '../redux';
import swal from 'sweetalert';
import { Card } from '../../../utils/ui';
import UserForm from './../components/UserForm';

interface IParams {

    id: string;
}

interface IProps {
    view?: string;
}

const EditUser = ({view }: IProps) => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();

    const user: IUserAttributes = useSelector((states: any) => states.users.value);

    const _updateUser = async (userForm) => {
        let res: any;
        res = await dispatch(
            actions.updateUser(
                { username: userForm.username, id_rol: userForm.id_rol },
                id
            )
        );

        console.log(res);
        await swal('Usuario actualizado', res.data.message, 'success');
        history.push(`/users/${user.id}`);
    };

    useEffect(() => {
        dispatch(actions.getUser(parseInt(id)));
    }, []);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card
                                title="Usuario"

                            >
                                <UserForm
                                    user={user}
                                    type="edit"
                                    onSubmit={(values) => {
                                        return _updateUser(values);
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

export default EditUser

import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { actions } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import { IUserAttributes } from './../../../utils/interfaces/users';
import UserForm from './../components/UserForm';
import { useHistory } from 'react-router-dom';
import { Card } from '../../../utils/ui';

interface IParams {

    id: string;
}

const DetailUser = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const history = useHistory();
    const user: IUserAttributes = useSelector((states: any) => states.users.value);

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
                                <UserForm disabled user={user} type="view" />
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

export default DetailUser

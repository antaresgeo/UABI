import { Card } from '../../../../utils/ui';
import { useHistory, useParams } from 'react-router-dom';
import RoleForm from './../../components/RoleForm';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';
import { actions } from '../../redux';
import { IRolAttributes } from '../../../../utils/interfaces/roles';



interface IParams {
    id: string;
}
const DetailRoles = () => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const role: IRolAttributes = useSelector((store: any) => store.users.rol.value);
    useEffect(() => {
        dispatch(actions.getRole(Number(id)))
    }, []);

    const finalRole = {
        name: role?.role?.name,
        permits: role?.permits,
    }

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="ver Rol">
                                <RoleForm
                                    // us={finalRole}
                                    type="view"
                                    disabled={true}
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

export default DetailRoles

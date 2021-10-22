
import { useParams, useHistory } from 'react-router-dom';
import { IPolicyAttributes } from '../../../utils/interfaces/components.interfaces';
import { useEffect } from 'react';
import PolizaForm from './../components/PolizaForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Card } from '../../../utils/ui';
import { swal } from '../../../utils';
import { actions } from '../redux';


interface IParams {
    id: string;
}

interface IProps {
    view?: string;
}
const EditPolicy = () => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();

    const project: IPolicyAttributes = useSelector((store: any) => store.asegurabilty.policy.value);

    const _updatePolicy = async (policyForm) => {
        let res: any;
        res = await dispatch(
            actions.updatePolicy(
                { policyForm },
                id
            )
        );

        console.log(res);
        await swal("Proyecto actualizado", res.data.message, "success");
        history.push(`/insurability/policy/${project.id}`);
    };

    useEffect(() => {
        dispatch(actions.getPolicy(id));
    }, []);
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title={
                            <>
                                <b>Póliza:</b> {}
                            </>
                        }
                    >
                        <PolizaForm
                            onSubmit={(values) => {
                                return _updatePolicy(values);
                            }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default EditPolicy

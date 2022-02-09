import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { actions } from '../../redux';
import RealEstateForm from '../../components/RealEstateForm';
import { useDispatch, useSelector } from 'react-redux';
import { create_notification } from '../../../notificacions/redux/service';

interface IProps {
    id: string;
}

const DetailProjects = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();

    const dependencies: any = useSelector((states: any) => states.acquisitions.dependencies.value);

    useEffect(() => {
        if (id) {
            dispatch(actions.getRealEstate(id));
            dispatch(actions.getDependencies());
        }
    }, [id]);

    return (
        <RealEstateForm
            type="edit"
            inventoryEdit={true}
            inventory={false}
            dependencies={dependencies}
            onSubmit={async (values, form, isFinish) => {
                const { acquisitions } = values;
                // await create_notification({
                //     subject: 'Creación de un activo fijo',
                //     description: `se ha creado un bien inmueble con matrícula asignado al proyecto `,
                //     action: `/acquisitions/real-estates/1/`,
                //     priority: 2,
                //     toRole: "3"
                // });
                try {
                    const res: any = await dispatch(actions.updateRealEstate(values, values.id));
                    if (res) {
                        if (acquisitions.length > 0) {
                            await dispatch(actions.updateAcquisition(res.id, acquisitions));
                        }
                        if (isFinish) {
                            history.push('/acquisitions/real-estates/');
                        } else {
                            if (res.project.id) return dispatch(actions.getRealEstatesByProject(res.project.id));
                        }
                    }
                } catch (e) {
                    return Promise.reject();
                }
            }}
        />
    );
};

export default DetailProjects;

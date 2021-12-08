import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { actions } from '../../redux';
import RealEstateForm from '../../components/RealEstateForm';
import { useDispatch } from 'react-redux';

interface IProps {
    id: string;
}

const DetailProjects = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(actions.getRealEstate(id));
        }
    }, [id]);

    return (
        <RealEstateForm
            type="edit"
            inventoryEdit={true}
            inventory={false}
            onSubmit={async (values, form, isFinish) => {
                const { acquisitions } = values;
                try {
                    const res: any = await dispatch(actions.updateRealEstate(values, values.id));
                    if (acquisitions.length > 0) {
                        await dispatch(actions.updateAcquisition(res.id, acquisitions));
                    }
                    if (isFinish) {
                        history.push('/acquisitions/real-estates/');
                    } else {
                        if (res.project.id) return dispatch(actions.getRealEstatesByProject(res.project.id));
                    }
                } catch (e) {
                    return Promise.reject();
                }
            }}
        />
    );
};

export default DetailProjects;

import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../acquisitions/redux';
import RealEstateForm from '../../acquisitions/components/RealEstateForm';

interface IProps {
    id: string;
}
const InventoryRecordEdit = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(actions.getRealEstate(id));
        }
    }, []);

    return (
        <RealEstateForm
            type="edit"
            inventory={true}
            inventoryEdit={false}
            onSubmit={async (values, form, isFinish) => {
                console.log('valores', values);
                const { acquisitions } = values;
                try {
                    const res: any = await dispatch(actions.updateRealEstate(values, values.id));
                    if (acquisitions.length > 0) {
                        await dispatch(actions.createAcquisitionForRealEstate(res.id, acquisitions));
                    }
                    if (isFinish) {
                        history.push('/acquisitions/real-estates/');
                    } else {
                        if (res.project_id) return dispatch(actions.getRealEstatesByProject(res.project_id));
                    }
                } catch (e) {
                    return Promise.reject();
                }
            }}
        />
    );
};

export default InventoryRecordEdit;

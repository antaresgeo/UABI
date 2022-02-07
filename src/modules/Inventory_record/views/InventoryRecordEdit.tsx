import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../acquisitions/redux';
import RealEstateForm from '../../acquisitions/components/RealEstateForm';

interface IProps {
    id: string;
}
const InventoryRecordEdit = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();
    const dependencies: any = useSelector((states: any) => states.acquisitions.dependencies.value);

    useEffect(() => {
        if (id) {
            dispatch(actions.getRealEstate(id));
            dispatch(actions.getDependencies());
        }
    }, []);

    return (
        <RealEstateForm
            type="edit"
            inventoryEdit={false}
            inventory={true}
            dependencies={dependencies}
            onSubmit={async (values, form, isFinish) => {
                const { acquisitions } = values;
                try {
                    const res: any = await dispatch(actions.updateRealEstate(values, values.id));
                    if(res){
                        if (acquisitions.length > 0) {
                            await dispatch(actions.updateAcquisition(res.id, acquisitions));
                        }
                        if (isFinish) {
                            history.push('/inventory-record-list');
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

export default InventoryRecordEdit;

import { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';
import { IProjectAttributes } from './../../../utils/interfaces/projects';
import { actions, service } from '../../acquisitions/redux';
import RealEstateForm from '../../acquisitions/components/RealEstateForm';
import { clearObjectNulls } from '../../../utils';

interface IProps {
    id: string;
}
const InventoryRecordEdit = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            const promise: any = dispatch(actions.getRealEstate(id));
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

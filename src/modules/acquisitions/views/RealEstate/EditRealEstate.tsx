import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { actions, service } from '../../redux';
import RealEstateForm from '../../components/RealEstateForm';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { clearObjectNulls } from '../../../../utils';

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

                        await dispatch(actions.createAcquisitionForRealEstate(res.id, acquisitions));
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

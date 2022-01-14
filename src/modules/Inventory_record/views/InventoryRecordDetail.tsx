import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions, } from '../../acquisitions/redux/';
import RealEstateForm from '../../acquisitions/components/RealEstateForm';

interface IParams {
    id: string;
}

export const InventoryRecordDetail = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(actions.getRealEstate(id));
            dispatch(actions.getTipologies());
        }
    }, []);

    return (
        <>
            <RealEstateForm
                type="view"
                inventory={true}
                inventoryEdit={true}
                onSubmit={
                    async (/*values, form, isFinish*/) => {
                        return Promise.reject();
                    }
                }
            />
        </>
    );
};

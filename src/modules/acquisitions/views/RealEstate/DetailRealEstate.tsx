import RealEstateForm from '../../components/RealEstateForm';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actions } from '../../redux';

interface IParams {
    id: string;
}

const DetailRealEstate = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(actions.clearRealEstate())
            dispatch(actions.getRealEstate(id));
            dispatch(actions.getTipologies());
        }
    }, []);
    return (
        <>
        <RealEstateForm
            type="view"
            inventoryEdit={true}
            inventory={false}
            onSubmit={
                async (/*values, form, isFinish*/) => {
                    return Promise.reject();
                }
            }
        />
        </>
    );
};

export default DetailRealEstate;

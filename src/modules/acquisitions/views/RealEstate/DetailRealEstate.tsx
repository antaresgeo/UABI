import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { actions } from '../../redux';
import RealEstateForm from '../../components/RealEstateForm';

interface IParams {
    id: string;
}

const DetailRealEstate = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();



    useEffect(() => {
        if (id) {
           dispatch(actions.getRealEstate(id));
        }
    }, []);



    return (
        <RealEstateForm
            type="view"
            inventoryEdit={true}
            inventory={false}
            onSubmit={async (values, form, isFinish) => {
                return Promise.reject();
            }}
        />
    );
};

export default DetailRealEstate;

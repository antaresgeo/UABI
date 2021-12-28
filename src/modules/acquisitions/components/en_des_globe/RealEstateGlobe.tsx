import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import RealEstateForm from '../RealEstateForm';

interface IParams {
    index?: any;
    realEstateData?: any;
    DataRealEstate?: any;
    valueArea?: any;
    data: any;
    realEstates: any;
}

interface RealEstateModalProps {
    disabled?: boolean;
    realEstateData?: any;
    index?: any;
    arrayRealEstates?: any;
    onSubmit: (values, actions?) => Promise<any>;
}

const RealEstateGlobe: FC<RealEstateModalProps> = ({ disabled, arrayRealEstates, onSubmit }) => {
    const location = useLocation<IParams>();
    const { index, realEstateData, DataRealEstate, valueArea, data, realEstates } = location.state;
    // console.log(index, realEstateData, 'data', DataRealEstate);
    const history: any = useHistory();
    const dispatch = useDispatch();
    const createRealEstate = async (values, form, isFinish) => {
        // console.log('valores englobe', values);
        //const doc: any = compute_doc_enrollment(values.document);
        const arrayRealEstates = [...DataRealEstate];
        arrayRealEstates[index] = values;
        // console.log(arrayRealEstates);
        history.push({ pathname: `/englobar/realEstates/`, state: { arrayRealEstates, valueArea, data, realEstates } });
    };

    return <RealEstateForm type="create" onSubmit={createRealEstate} globe={true} realEstateData={realEstateData} />;
};

export default RealEstateGlobe;

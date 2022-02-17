import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { actions } from '../../redux';
import RealEstateForm from '../RealEstateForm';

interface IParams {
    index?: any;
    realEstateData?: any;
    DataRealEstate?: any;
    valueArea?: any;
    data: any;
    realEstates: any;
    action: any;

}

interface RealEstateModalProps {
    disabled?: boolean;
    realEstateData?: any;
    arrayRealEstates?: any;
    onSubmit: (values, actions?) => Promise<any>;
}

const RealEstateGlobe: FC<RealEstateModalProps> = ({ disabled, arrayRealEstates, onSubmit }) => {
    const location = useLocation<IParams>();
    const history: any = useHistory();
    const dispatch = useDispatch();
    console.log(location.state);
    const { index, realEstateData, DataRealEstate, valueArea, data, action, realEstates } = location.state;
    const dependencies: any = useSelector((states: any) => states.acquisitions.dependencies.value);
    useEffect(() => {
        dispatch(actions.getDependencies());
    }, []);
    console.log(dependencies)
    const createRealEstate = async (values, form, isFinish) => {
        // console.log('valores englobe', values);
        //const doc: any = compute_doc_enrollment(values.document);
        const arrayRealEstates = [...DataRealEstate];
        arrayRealEstates[index] = values;
        // console.log(arrayRealEstates);
        history.push({ pathname: `/englobar/realEstates/`, state: { arrayRealEstates, valueArea, data, action, realEstates } });
    };

    return <RealEstateForm type="create" onSubmit={createRealEstate} globe={true} realEstateData={realEstateData} dependencies={dependencies}  />;
};

export default RealEstateGlobe;

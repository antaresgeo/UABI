import { FC, useEffect } from 'react';
import InspectionFormTags from '../../components/inspectionFormTags';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux';

interface PruebaProps {}

interface IParams {
    real_estate_id: string;
}
const InspectionCreate: FC<PruebaProps> = () => {
    const { real_estate_id } = useParams<IParams>();
    const dispatch = useDispatch();
    const inspection: any = useSelector((store: any) => store.inspection.inspection.value);
    useEffect(() => {
        dispatch(actions.get_inspection_by_real_estate_id(real_estate_id));
    }, []);
    return <InspectionFormTags inspection={inspection} />;
};

export default InspectionCreate;

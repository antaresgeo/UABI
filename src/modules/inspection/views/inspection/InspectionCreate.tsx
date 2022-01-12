import { FC, useEffect } from 'react';
import InspectionFormTags from '../../components/inspectionFormTags';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux';
import { actions as rs_actions } from "../../../acquisitions/redux"

interface PruebaProps {}

interface IParams {
    real_estate_id: string;
}
const InspectionCreate: FC<PruebaProps> = () => {
    const { real_estate_id } = useParams<IParams>();
    const dispatch = useDispatch();
    const [inspection, real_estate]: any = useSelector((store: any) => [store.inspection.inspection.value, store.acquisitions.realEstate.value]);
    useEffect(() => {
        dispatch(actions.get_inspection_by_real_estate_id(real_estate_id));
        dispatch(rs_actions.getRealEstate(real_estate_id));
    }, []);
    return <InspectionFormTags inspection={inspection} real_estate={real_estate} />;
};

export default InspectionCreate;

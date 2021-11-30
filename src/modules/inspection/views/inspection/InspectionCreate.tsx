import {FC, useEffect} from 'react';
import InspectionFormTags from "../../components/inspectionFormTags";
import {useHistory, useParams} from "react-router-dom";

interface PruebaProps {}

interface IParams {
    real_estate_id: string
}
const InspectionCreate: FC<PruebaProps> = ({}) => {
    const { real_estate_id } = useParams<IParams>();

    useEffect(() => {

    }, [])

    return (
        <InspectionFormTags/>
    );
};

export default InspectionCreate;

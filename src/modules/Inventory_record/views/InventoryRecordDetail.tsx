// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { actions, service } from '../../acquisitions/redux/';
// import { IProjectAttributes, IRealEstateAttributes } from '../../../utils/interfaces';
import RealEstateForm from '../../acquisitions/components/RealEstateForm';

// interface IParams {
//     id: string;
// }

export const InventoryRecordDetail = () => {
    // const { id } = useParams<IParams>();
    // const dispatch = useDispatch();
    // const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    // const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    // const [acquisitions, set_acquisitions] = useState([]);
    // const [project_id, set_project_id] = useState(realEstate?.project.id);
    // const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
    // useEffect(() => {
    //     dispatch(actions.getProjects());
    //     if (id) {
    //         const promise: any = dispatch(actions.getRealEstate(id));
    //         promise.then((res) => {
    //             select_project(res.project.id);
    //             service.getAcquisitionForRealEstate(id).then((res2) => {
    //                 set_acquisitions(res2);
    //             });
    //         });
    //     }
    // }, []);
    // useEffect(() => {
    //     if (Number.isInteger(project_id)) {
    //         dispatch(actions.getRealEstatesByProject(project_id));
    //     }
    // }, [project_id]);
    // const select_project = (value) => {
    //     if (project_id !== value) {
    //         set_project_id(value);
    //         if (Number.isInteger(value)) dispatch(actions.getRealEstatesByProject(value));
    //     }
    // };

    return (
        <RealEstateForm
            type="view"
            inventory={true}
            inventoryEdit={true}
            onSubmit={
                async (/*values, form, isFinish*/) => {
                    // console.log(values);
                    // const confirmation = {
                    //     availability_type: values.availability_type,
                    //     utilization_value: values.utilization_value,
                    //     authorization_value: values.authorization_value,
                    //     canon_value: values.canon_value,
                    // };
                    //createconfirmation(confirmation);
                    //return Promise.reject();
                }
            }
        />
    );
};

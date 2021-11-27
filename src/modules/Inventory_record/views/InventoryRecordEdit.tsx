import  { useEffect, useState } from 'react'
import moment from "moment";
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';
import { IProjectAttributes } from './../../../utils/interfaces/projects';
import { actions, service } from '../../acquisitions/redux';
import RealEstateForm from '../../acquisitions/components/RealEstateForm';
import { clearObjectNulls } from '../../../utils';


interface IProps {
    id: string;
}
const InventoryRecordEdit = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();

    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
    const [acquisitions, set_acquisitions] = useState([]);
    const [project_id, set_project_id] = useState(realEstate?.project?.id || 0);

    useEffect(() => {
        dispatch(actions.getProjects());
        if (id) {
            const promise: any = dispatch(actions.getRealEstate(id));
            promise.then((res) => {
                select_project(res.project.id);
                service.getAcquisitionForRealEstate(id).then((res2) => {
                    set_acquisitions(res2);
                });
            });
        }
    }, []);

    useEffect(() => {
        if (project_id) {
            dispatch(actions.getRealEstatesByProject(project_id));
        }
    }, [project_id]);

    const select_project = (value) => {
        if (project_id !== value) {
            set_project_id(value);
            if (Number.isInteger(value)) dispatch(actions.getRealEstatesByProject(value));
        }
    };
    return (
        <RealEstateForm
            type="edit"
            inventory={true}
            inventoryEdit={false}
            projects={projects}
            realEstates={realEstates}
            realEstate={realEstate}
            acquisitions={acquisitions}
            projectId={project_id}
            onProjectSelectedChange={select_project}
            onSubmit={async (values, form, isFinish) => {
                console.log('valores',values)
                const { acquisitions } = values;
                try {
                    const res: any = await dispatch(actions.updateRealEstate(values, values.id));
                    console.log('ok3', isFinish);
                    if (acquisitions.length > 0) {
                        await dispatch(
                            actions.createAcquisitionForRealEstate(
                                acquisitions.map((a) => {
                                    a.real_estate_id = res.id;
                                    a.acquisition_date = new Date(moment(a.acquisition_date).format('YYYY/MM/DD')).getTime();
                                    return clearObjectNulls(a);
                                })
                            )
                        );
                    }
                    if (isFinish) {
                        history.push('/acquisitions/real-estates/');
                    } else {
                        if (res.project_id) return dispatch(actions.getRealEstatesByProject(res.project_id));
                    }
                } catch (e) {
                    return Promise.reject();
                }
            }}
        />
    )
}

export default InventoryRecordEdit

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    IProjectAttributes,
    IRealEstateAttributes,
} from '../../../../utils/interfaces';
import { actions } from '../../redux';
import { useHistory } from 'react-router-dom';

import ProjectEnglobarForm from '../../components/ProjectsForm';

const DesenglobeProject = () => {
    const history: any = useHistory();
    const dispatch = useDispatch();
    console.log(history.location.state?.project_id);
    const [project_id, set_project_id] = useState(history.location.state?.project_id);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);

    useEffect(() => {
        dispatch(actions.getProjects());
        if (project_id) {
            dispatch(actions.getRealEstatesByProject(history.location.state?.project_id));
        }
    }, []);
    const createRealEstate = async (values, form, isFinish) => {
        try {
            const res: any = await dispatch(actions.createRealEstate(values));
            if (values.acquisitions.length > 0) {
                await dispatch(
                    actions.createAcquisitionForRealEstate(
                        values.acquisitions.map((a) => {
                            a.real_estate_id = res.id;
                            return a;
                        })
                    )
                );
            }
            if (isFinish) {
                history.push(`/acquisitions/real-estates/`);
            } else {
                if (res) {
                    return await dispatch(actions.getRealEstatesByProject(res.project_id));
                }
            }
            return Promise.resolve();
        } catch (e) {
            return Promise.reject();
        }
    };

    const onProjectSelectedChange = (value) => {
        if (project_id !== value) {
            set_project_id(value);
            if (value) {
                console.log(value);
                dispatch(actions.getRealEstatesByProject(value));
            }
        }
    };
    return (
        <div>
            <ProjectEnglobarForm
            type="desenglobar"
            projects={projects}
            realEstates={project_id ? realEstates : []}
            projectId={project_id}
            onProjectSelectedChange={onProjectSelectedChange}
            onSubmit={createRealEstate}
        />
        </div>
    )
}


export default DesenglobeProject

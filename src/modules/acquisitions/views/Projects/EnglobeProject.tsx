import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { actions } from '../../redux';
import { useHistory, useParams } from 'react-router-dom';

import ProjectEnglobarForm from '../../components/ProjectsForm';

interface IParams {
    id: string;
}
const EnglobeProject = () => {
    const { id } = useParams<IParams>();
    const history: any = useHistory();
    const dispatch = useDispatch();
    //console.log(history.location.state?.project_id);
    const [project_id, set_project_id] = useState(id);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);

    useEffect(() => {
        dispatch(actions.getProjects());
        if (project_id) {
            dispatch(actions.getRealEstatesByProject(Number(project_id)));
        }
    }, [id]);
    const registration_number = realEstates.map((realEstate) => realEstate.registry_number);
    const createRealEstate = async (values, form, isFinish) => {
        try {
            const res: any = await dispatch(actions.createRealEstate(values));
            if (values.acquisitions.length > 0) {
                await dispatch(actions.createAcquisitionForRealEstate(res.id, values.acquisitions));
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
                type="englobar"
                projects={projects}
                realEstates={project_id ? realEstates : []}
                projectId={parseInt(project_id)}
                onProjectSelectedChange={onProjectSelectedChange}
                onSubmit={createRealEstate}
            />
        </div>
    );
};

export default EnglobeProject;

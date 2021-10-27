import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { actions } from '../../redux';
import RealEstateForm from '../../components/RealEstateForm';

interface IParams {
    id: string;
}

const DetailRealEstate = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const [project_id, set_project_id] = useState(realEstate?.project_id);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);

    useEffect(() => {
        dispatch(actions.getProjects());
        const promise: any = dispatch(actions.getRealEstate(id));
        promise.then((res) => {
            set_project_id(res.project_id);
        });
    }, []);

    useEffect(() => {
        if (project_id) {
            dispatch(actions.getRealEstatesByProject(project_id));
        }
    }, [project_id]);

    return (
        <RealEstateForm
            type="view"
            projects={projects}
            realEstates={project_id ? realEstates : []}
            realEstate={realEstate}
            projectId={parseInt(project_id + '')}
            onProjectSelectedChange={(value) => {
                if (project_id !== value) {
                    set_project_id(value);
                    if (value) dispatch(actions.getRealEstatesByProject(value));
                }
            }}
            onSubmit={async (values, form, isFinish) => {
                return Promise.reject();
            }}
        />
    );
};

export default DetailRealEstate;

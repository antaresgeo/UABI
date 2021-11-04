import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { actions, service } from '../../redux';
import RealEstateForm from '../../components/RealEstateForm';

interface IParams {
    id: string;
}

const DetailRealEstate = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const [acquisitions, set_acquisitions] = useState([]);
    const [project_id, set_project_id] = useState(realEstate?.projects.id);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);

    useEffect(() => {
        dispatch(actions.getProjects());
        if (id) {
            const promise: any = dispatch(actions.getRealEstate(id));
            promise.then((res) => {
                select_project(res.projects.id);
                service.getAcquisitionForRealEstate(id).then((res2) => {
                    set_acquisitions(res2);
                });
            });
        }
    }, []);

    useEffect(() => {
        if (Number.isInteger(project_id)) {
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
            type="view"
            projects={projects}
            acquisitions={acquisitions}
            realEstates={project_id ? realEstates : []}
            realEstate={realEstate}
            projectId={project_id}
            onProjectSelectedChange={select_project}
            onSubmit={async (values, form, isFinish) => {
                return Promise.reject();
            }}
        />
    );
};

export default DetailRealEstate;

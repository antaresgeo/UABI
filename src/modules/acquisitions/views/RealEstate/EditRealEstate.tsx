import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { actions } from '../../redux';
import RealEstateForm from '../../components/RealEstateForm';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
    id: string;
}

const DetailProjects = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();

    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);
    const [project_id, set_project_id] = useState(realEstate?.project_id);

    useEffect(() => {
        dispatch(actions.getProjects());
        const promise: any = dispatch(actions.getRealEstate(id));
        promise.then((res) => {
            set_project_id(res?.project_id);
        });
    }, []);

    useEffect(() => {
        if (project_id) {
            dispatch(actions.getRealEstatesByProject(project_id));
        }
    }, [project_id]);

    return (
        <RealEstateForm
            type="edit"
            projects={projects}
            realEstates={realEstates}
            realEstate={realEstate}
            projectId={parseInt(project_id + '')}
            onProjectSelectedChange={(value) => {
                if (project_id !== value) {
                    set_project_id(value);
                    if (value) dispatch(actions.getRealEstatesByProject(value));
                }
            }}
            onSubmit={async (values, form, isFinish) => {
                const { acquisitions } = values;
                try {
                    const res: any = await dispatch(actions.updateRealEstate(values, values.id));
                    if (acquisitions.length > 0) {
                        await dispatch(
                            actions.createAcquisitionForRealEstate(
                                acquisitions.map((a) => {
                                    a.real_estate_id = res.id;
                                    return a;
                                })
                            )
                        );
                    }
                    if (isFinish) {
                        history.push('/acquisitions/real-estates/');
                    } else {
                        if (res.project_id) return dispatch(actions.getRealEstatesByProject(res.project_id));
                    }
                    return Promise.resolve();
                } catch (e) {
                    return Promise.reject();
                }
            }}
        />
    );
};

export default DetailProjects;

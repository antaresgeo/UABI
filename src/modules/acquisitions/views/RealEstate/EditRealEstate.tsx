import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRealEstate, updateRealEstate /*, getProject, updateProject */ } from "../../../../apis/uabi";
import {
    IProjectAttributes,
    IRealEstateAttributes,
    IRealEstateResponse,
    // IRealEstatesResponse,
} from "../../../../utils/interfaces/components.interfaces";
import AcquisitionsFrom from "../../components/RealEstateForm/AdquisitionsForm";
import GeneralDataForm from "../../components/RealEstateForm/GeneralDataForm";
import { actions } from "../../redux";
import RealEstateForm from "../../components/RealEstateForm";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
    id: string;
}

const DetailProjects = () => {
    const { id } = useParams<IProps>();
    const history: any = useHistory();
    const dispatch = useDispatch();
    const [project_id, set_project_id] = useState(history.location.state?.project_id);
    const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);

    useEffect(() => {
        dispatch(actions.getProjects());
        dispatch(actions.getRealEstate(id));
    }, []);

    useEffect(() => {
        dispatch(actions.getRealEstatesByProject(realEstate.project_id));
    }, [realEstate.project_id]);
    return (
        <RealEstateForm
            type="edit"
            projects={projects}
            realEstates={realEstates}
            projectId={project_id}
            onProjectSelectedChange={(value) => {
                set_project_id(value);
                dispatch(actions.getRealEstatesByProject(value));
            }}
            onSubmit={async (values, form, isFinish) => {
                delete values.acquisitions;
                try {
                    await dispatch(actions.updateRealEstate(realEstate.id, values));
                    if (!isFinish) {
                        return dispatch(actions.getRealEstatesByProject(project_id));
                    } else {
                        history.push("/acquisitions/real-estates/");
                        return Promise.resolve();
                    }
                } catch (e) {
                    return Promise.reject();
                }
            }}
        />
    );
};

export default DetailProjects;

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
        if (realEstate?.project_id) {
            dispatch(actions.getRealEstatesByProject(realEstate.project_id));
        }
    }, [realEstate.project_id]);
    return (
        <RealEstateForm
            type="edit"
            projects={projects}
            realEstates={realEstates}
            realEstate={realEstate}
            projectId={project_id}
            onProjectSelectedChange={(value) => {
                if (project_id !== value) {
                    set_project_id(value);
                    if (value) dispatch(actions.getRealEstatesByProject(value));
                }
            }}
            onSubmit={async (values, form, isFinish) => {
                try {
                    const res: any = await dispatch(actions.updateRealEstate(values, values.id));

                    if (!isFinish) {
                        if (res.project_id) return dispatch(actions.getRealEstatesByProject(res.project_id));
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

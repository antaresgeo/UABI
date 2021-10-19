import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { actions } from "../../redux";

// SERVICES
import { useSelector, useDispatch } from "react-redux";

// INTERFACES
import {
    IProjectAttributes,
} from "../../../../utils/interfaces/components.interfaces";
import swal from "sweetalert";
import { Card } from "../../../../utils/ui";
import ProjectForm from "../../components/ProjectForm";


interface IParams {
    id: string;
}

interface IProps {
    view?: string;
}

const DetailProject = ({ view }: IProps) => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();

    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);
    
    const _updateProject = async (projectForm) => {
        let res: any;
        res = await dispatch(
            actions.updateProject(
                { name: projectForm.name, description: projectForm.description, dependency: projectForm.dependency },
                id
            )
        );

        console.log(res);
        await swal("Proyecto actualizado", res.data.message, "success");
        history.push(`/acquisitions/projects/${project.id}`);
    };

    useEffect(() => {
        dispatch(actions.getProject(id));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card
                        title={
                            <>
                                <b>Proyecto:</b> {project.name}
                            </>
                        }
                    >
                        <ProjectForm
                            project={project}
                            onSubmit={(values) => {
                                return _updateProject(values);
                            }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DetailProject;

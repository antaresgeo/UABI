import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "../../redux";
import { swal } from "./../../../../utils";
import { Card } from "../../../../utils/ui";
import ProjectForm from "../../components/ProjectForm";

const CreateRealEstate = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const createProject = async (projectName, projectDescription, dependency) => {
        const res: any = await dispatch(actions.createProject(projectName, projectDescription, dependency));

        history.push(`/acquisitions/projects/${res.id}`);
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Card title="Creación de Proyecto">
                        <ProjectForm
                            onSubmit={(values) => {
                                return createProject(values.name, values.description, values.dependency);
                            }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateRealEstate;

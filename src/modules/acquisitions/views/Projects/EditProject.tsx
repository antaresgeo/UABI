import { FC, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { actions } from '../../redux';

// SERVICES
import { useSelector, useDispatch } from 'react-redux';

// INTERFACES
import { IProjectAttributes } from '../../../../utils/interfaces';
import swal from 'sweetalert';
import { Card } from '../../../../utils/ui';
import ProjectForm from '../../components/ProjectForm';

interface IParams {
    id: string;
}

interface IProps {
    view?: string;
}

const DetailProject: FC<IProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams<IParams>();
    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);

    const _updateProject = async (projectForm) => {
        let res: any;
        res = await dispatch(actions.updateProject(projectForm, id));
        await swal('Proyecto actualizado', res.data.message, 'success');
        history.push(`/acquisitions/projects/${project.id}`);
    };

    useEffect(() => {
        dispatch(actions.getProject(id));
    }, []);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h5 style={{ fontWeight: 600, marginLeft: 20 }}>
                                <>Proyecto: {project?.name}</>
                            </h5>
                            <Card title="Información del Proyecto">
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
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    );
};

export default DetailProject;

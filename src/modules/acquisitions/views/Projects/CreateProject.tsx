import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../../redux';
import { Card } from '../../../../utils/ui';
import ProjectForm from '../../components/ProjectForm';

const CreateRealEstate = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const createProject = async (values) => {
        const res: any = await dispatch(actions.createProject(values));
        history.push(`/acquisitions/projects/${res.id}`);
    };

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h5 style={{ fontWeight: 600, marginLeft: 20 }}>Crear Proyecto</h5>
                            <Card title="Información del Proyecto">
                                <ProjectForm
                                    onSubmit={(values) => {
                                        return createProject(values);
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

export default CreateRealEstate;

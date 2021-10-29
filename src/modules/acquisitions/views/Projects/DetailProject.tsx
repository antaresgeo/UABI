import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IProjectAttributes } from '../../../../utils/interfaces';
import { actions } from '../../redux';
import { Card, Link } from '../../../../utils/ui';
import RealEstateList from '../../components/RealEstateList';
import ProjectForm from '../../components/ProjectForm';
import ProjectModal from './../../components/ProjectModal';

interface IParams {
    id: string;
}

const DetailProject = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const history = useHistory();

    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);

    useEffect(() => {
        dispatch(actions.getProject(id));
    }, []);

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card
                                title={
                                    <>
                                        <b>Proyecto:</b> {project?.name}
                                    </>
                                }
                            >
                                <ProjectForm disabled project={project} type="view" />
                            </Card>

                            <Card
                                title="Bienes Inmuebles del Proyecto"
                                extra={
                                    <Link
                                        to={{
                                            pathname: '/acquisitions/real-estates/create/',
                                            state: { project_id: project?.id },
                                        }}
                                        name="Crear"
                                        iconText="+"
                                    />
                                }
                            >
                                <RealEstateList project_id={parseInt(project?.id + '') || undefined} init={false} />
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
                <ProjectModal />

            </div>
        </div>
    );
};

export default DetailProject;

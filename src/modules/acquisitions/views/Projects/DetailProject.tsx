import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IProjectAttributes } from '../../../../utils/interfaces';
import { actions } from '../../redux';
import { Card, Link } from '../../../../utils/ui';
import RealEstateList from '../../components/RealEstateList';
import ProjectForm from '../../components/ProjectForm';
import ProjectModal from './../../components/ProjectModal';
import { AreasModal } from './../../components/en_des_globe/AreasModal';


interface IParams {
    id: string;
}

const DetailProject = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();
    const history = useHistory();

    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);
    const [is_visibleArea, set_is_visible_area] = useState<boolean>(false);
    const [action, setAction] = useState();
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
                <ProjectModal openArea={(a)=> {
                    setAction(a)
                    set_is_visible_area(true)
                }}/>
                <AreasModal open={is_visibleArea} setOpen={set_is_visible_area} project={project} action={action}/>
            </div>
        </div>
    );
};

export default DetailProject;

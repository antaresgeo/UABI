import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IProjectAttributes, IRealEstateAttributes } from '../../../../utils/interfaces';
import { actions } from '../../redux';
import { Card, Link } from '../../../../utils/ui';
import RealEstateList from '../../components/RealEstateList';
import ProjectForm from '../../components/ProjectForm';

interface IParams {
    id: string;
}

const DetailProject = () => {
    const { id } = useParams<IParams>();
    const dispatch = useDispatch();

    const project: IProjectAttributes = useSelector((states: any) => states.acquisitions.project.value);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);

    useEffect(() => {
        dispatch(actions.getProject(id));
        console.log(project);
    }, []);

    useEffect(() => {
        if (project.id !== '' && project.id !== undefined) {
            dispatch(actions.getRealEstatesByProject(project.id));
        }
    }, [project]);

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
                        <ProjectForm disabled project={project} />
                    </Card>

                    <Card
                        title="Bienes Inmuebles del Proyecto"
                        extra={
                            <Link
                                to={{
                                    pathname: '/acquisitions/real-estates/create/',
                                    state: { project_id: project.id },
                                }}
                                name="Crear"
                                iconText="+"
                            />
                        }
                    >
                        <RealEstateList realEstates={realEstates} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DetailProject;

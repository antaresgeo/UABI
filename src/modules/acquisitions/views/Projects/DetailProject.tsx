import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "semantic-ui-react";
import ItemRealEstate from "../../components/ItemRealEstate";
import { useSelector, useDispatch } from "react-redux";
import { IProjectAttributes, IRealEstateAttributes } from "../../../../utils/interfaces/components.interfaces";
import { actions } from "../../redux";
import { Card, Link } from "../../../../utils/ui";
import Descriptions from "antd/lib/descriptions";
import RealEstateList from "../../components/RealEstateList";

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
        if (project.id !== "" && project.id !== undefined) {
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
                        <Descriptions bordered size="middle">
                            <Descriptions.Item label="Código">{project.id}</Descriptions.Item>
                            <Descriptions.Item label="Nombre">{project.name}</Descriptions.Item>
                            <Descriptions.Item label="Dependencia">{project.dependency}</Descriptions.Item>
                            <Descriptions.Item label=" Descripción" span={3}>
                                {project.description}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>

                    <Card
                        title="Bienes Inmuebles del Proyecto"
                        extra={<Link to="/acquisitions/real-estates/create/" name="Crear" iconText="+" />}
                    >
                        <RealEstateList realEstates={realEstates} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DetailProject;

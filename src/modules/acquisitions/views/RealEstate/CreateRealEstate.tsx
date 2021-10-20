import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    IProjectAttributes,
    // IProjectsResponse,
    IRealEstateAttributes,
    // IRealEstatesResponse,
} from "../../../../utils/interfaces/components.interfaces";
import { Input } from "semantic-ui-react";
import AcquisitionsFrom from "../../components/RealEstateForm/AdquisitionsForm";
import GeneralDataForm from "../../components/RealEstateForm/GeneralDataForm";
import { actions } from "../../redux";
import { createRealEstate } from "../../../../apis/uabi";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { qsToArray } from "../../../../utils";
import { Card } from "../../../../utils/ui";
import RealEstateList from "../../components/RealEstateList";
import RealEstateForm from "../../components/RealEstateForm";

const RealEstate = () => {
    const history: any = useHistory();
    const dispatch = useDispatch();
    const [project_id, set_project_id] = useState(history.location.state?.project_id);
    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);

    useEffect(() => {
        dispatch(actions.getProjects());
        if(history.location.state?.project_id) {
            dispatch(actions.getRealEstatesByProject(history.location.state?.project_id));
        }
    }, []);

    return (
        <RealEstateForm
            type="create"
            projects={projects}
            realEstates={realEstates}
            projectId={project_id}
            onProjectSelectedChange={(value) => {
                set_project_id(value)
                dispatch(actions.getRealEstatesByProject(value));
            }}
            onSubmit={async (values, form, isFinish) => {
                delete values.acquisitions;
                try {
                    await dispatch(actions.createRealEstate(values));
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

export default RealEstate;

const noc = () => (
    <div className="h-100 d-flex flex-column">
        <div className="flex-fill overflow-auto">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <form>
                            <GeneralDataForm type="create" projects={[]} setFieldValue={() => {}} />
                            <Card title="Información de Adquisición">
                                <AcquisitionsFrom type="create" acquisitions={[]} />
                            </Card>
                            <Card title="Documentos Soporte">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="form-select" className="form-label">
                                            Nombre del Documento
                                        </label>
                                        <Input />
                                    </div>
                                    <div className="col-3">
                                        <div className="mb-3">
                                            <label htmlFor="formFile" className="form-label">
                                                Default file input example
                                            </label>
                                            <input className="form-control" type="file" id="formFile" />
                                            <div id="emailHelp" className="form-text">
                                                Escritura.pdf
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <label htmlFor=""></label>
                                        <button type="submit" className="btn btn-primary mr-3">
                                            Subir
                                        </button>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col text-start">
                                        <button type="submit" className="btn btn-success mr-3">
                                            Guardar
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary mx-3"
                                            onClick={() => {} /*_createRealEstate*/}
                                        >
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </form>
                        <Card title="Bienes Inmuebles del Proyecto">
                            <RealEstateList realEstates={[]} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="bg-white d-flex flex-row justify-content-between"
            style={{ padding: 16, borderTop: "1px solid #ccc" }}
        >
            <button className="btn btn-primary">Atras</button>
            <button className="btn btn-success">Guardar</button>
        </div>
    </div>
);

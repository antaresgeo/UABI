import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    IProjectAttributes,
    // IProjectsResponse,
    IRealEstateAttributes,
    // IRealEstatesResponse,
} from "../../../../utils/interfaces/components.interfaces";
import { Input } from "semantic-ui-react";
// import ItemRealEstate from "../../components/ItemRealEstate";
import AcquisitionsFrom from "../../components/AdquisitionsForm";
import GeneralDataForm from "../../components/GeneralDataForm";
import { actions } from "../../redux";
import { createRealEstate } from "../../../../apis/uabi";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import { qsToArray } from "../../../../utils";
import { Card } from "../../../../utils/ui";
import RealEstateList from "../../components/RealEstateList";

const RealEstate = () => {
    const { search } = useLocation();
    const dispatch = useDispatch();
    // const params = useParams();
    let qsAsArray = qsToArray(search);

    const [projectSelected, setProjectSelected] = useState({ flag: false, value: "" });

    const realEstates: IRealEstateAttributes[] = useSelector((states: any) => states.acquisitions.realEstates.value);
    // const realEstate: IRealEstateAttributes = useSelector((states: any) => states.acquisitions.realEstate.value);
    const projects: IProjectAttributes[] = useSelector((states: any) => states.acquisitions.projects.value);

    const [realEstate, setRealEstate] = useState<IRealEstateAttributes>({
        dependency: "",
        destination_type: "",
        accounting_account: "",
        cost_center: "",

        registry_number: "",
        name: "",
        description: "",
        patrimonial_value: -1,
        address: "",
        cbml: "",

        total_area: -1,
        total_percentage: -1,
        zone: "",
        tipology: "",

        project_id: -1,

        audit_trail: {
            created_by: "",
            created_on: "",
            updated_by: null,
            updated_on: null,
            updated_values: null,
        },
        status: -1,
    });

    const _createRealEstate = async () => {
        // const response: any = await createRealEstate(realEstate);

        // await alert(response.message);
        // console.log(response);
        // realEstates.push(realEstate);
        // cleanInputs();
        // dispatch(actions.getRealEstates());
        // _getRealEstates();
        console.log(realEstate);
    };

    const cleanInputs = () => {
        setRealEstate({
            dependency: "",
            destination_type: "",
            accounting_account: "",
            cost_center: "",
            registry_number: "",
            name: "",
            description: "",
            patrimonial_value: -1,

            address: "",
            cbml: "",
            total_area: -1,
            total_percentage: -1,
            zone: "",
            tipology: "",
            project_id: -1,
        });
    };

    const handleChange = (e: any) => {
        // if (e.target.type === 'radio')
        // setRealEstate({...realEstate, zone: e.target.name})
        if (projectSelected.flag && e.target.name === "project_id") projectSelected.flag = false;

        if (e.target.type === "number")
            setRealEstate({
                ...realEstate,
                [e.target.name]: parseInt(e.target.value),
            });
        else
            setRealEstate({
                ...realEstate,
                [e.target.name]: e.target.value,
            });
    };

    // Prints
    const printProjects = () => {
        projects.map((project) => {
            return (
                <option value={project.id} selected>
                    <div className="container">{String(project.name)}</div>
                </option>
            );
        });
    };

    useEffect(() => {
        // _getProjects();
        dispatch(actions.getProjects());

        qsAsArray.map(async (qs) => {
            if (qs.key === "project_id") {
                console.log(qs.key === "project_id");
                await setProjectSelected({ flag: true, value: qs.value });

                setRealEstate({ ...realEstate, project_id: parseInt(qs.value) });
            }
        });
    }, []);

    useEffect(() => {
        // _getRealEstates();
        dispatch(actions.getRealEstates());
    }, [realEstate.project_id]);

    useEffect(() => {
        printProjects();
    }, [projects]);

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <form>
                        <Card title="Creación de Bien Inmueble">
                            <div className="row">
                                <div className="col-3 d-flex"/>
                                <div className="col-6">
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="project_id"
                                        onChange={handleChange}
                                        defaultValue={projectSelected.flag && projectSelected.value}
                                    >
                                        <option value="" selected disabled hidden>
                                            -- Seleccione Proyecto --
                                        </option>
                                        {projects.map((project) => {
                                            const { name, id } = project;
                                            return <option value={id}>{name.toUpperCase()}</option>;
                                        })}
                                    </select>
                                </div>
                            </div>
                            <GeneralDataForm type="create" handleChange={handleChange} data={{}} />
                        </Card>
                        <Card title="Información de Adquisición">
                            <AcquisitionsFrom type="create" />
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
                                    <button type="button" className="btn btn-primary mx-3" onClick={_createRealEstate}>
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </form>
                    <Card title="Bienes Inmuebles del Proyecto">
                        <RealEstateList realEstates={realEstates} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RealEstate;

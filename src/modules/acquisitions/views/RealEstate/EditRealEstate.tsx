import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getProject, getRealEstate, updateProject, updateRealEstate } from "../../../../apis/uabi";
import {
    IRealEstateAttributes,
    IRealEstateResponse,
    IRealEstatesResponse,
} from "../../../../utils/interfaces/components.interfaces";
import AdquisitionsFrom from "../../components/AdquisitionsForm";
import GeneralDataForm from "../../components/GeneralDataForm";

interface IProps {
    id: string;
}

const DetailProjects = () => {
    const { id } = useParams<IProps>();
    console.log(useParams());

    const history = useHistory();
    const [realEstate, setRealEstate] = useState<IRealEstateAttributes>({
        id: -1,
        dependency: "",
        destination_type: "",
        accounting_account: "",
        cost_center: "",

        registry_number: "",
        name: "",
        description: "",

        total_area: -1,
        total_percentage: -1,
        estate_type: "",
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

    const _getRealEstate = async () => {
        let realEstateResponse: IRealEstateResponse | string = await getRealEstate(id);
        console.log(realEstateResponse);

        if (typeof realEstateResponse !== "string") {
            let tmpData = realEstateResponse.data;

            setRealEstate(tmpData);
        }
    };

    const _updateRealEstate = async () => {
        if (typeof realEstate.id === "number") {
            let res: any = await updateRealEstate(realEstate, parseInt(id));

            console.log(res);
            await alert(res.data.message);
            history.push(`/adquisitions/real-estates/${id}`);
        }
    };

    useEffect(() => {
        _getRealEstate();
    }, []);

    const handleChange = (e: any) => {
        console.log(e.target.name);
        console.log(e.target.value);

        setRealEstate({
            ...realEstate,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="pt-5" id="texto-superior">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: 15,
                                padding: "10px 20px",
                            }}
                        >
                            <h5>Bien Inmueble</h5>
                            <hr />
                            <div className="container">
                                <form>
                                    <GeneralDataForm type="edit" handleChange={handleChange} data={realEstate} />

                                    {/* Adquisitions */}
                                    <AdquisitionsFrom type="edit" />
                                    {/* END Adquisitions */}

                                    <div
                                        className="row py-3 my-3"
                                        style={{
                                            backgroundColor: "#f7f7f7",
                                            borderRadius: 15,
                                            border: "1px solid",
                                        }}
                                    >
                                        <div className="col-3">
                                            <label htmlFor="form-select" className="form-label">
                                                Tipo Documento
                                            </label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="1" selected>
                                                    Escritura
                                                </option>
                                                <option value="2">Matricula</option>
                                                <option value="3">Contrato</option>
                                            </select>
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
                                    </div>
                                </form>
                            </div>

                            <div className="col text-center">
                                <div className="btn btn-success my-3" onClick={_updateRealEstate}>
                                    Guardar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailProjects;

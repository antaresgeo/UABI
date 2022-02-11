
import '../../../../../utils/assets/styles/contract_comodato.css';
import { useLocation, useHistory } from 'react-router-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ComodatoContractPdf from './ComodatoContractPdf';
import actions from './../../../redux/actions';
import { useDispatch } from 'react-redux';
interface IParams {
    values_contract: any;
    realEstate: any;
    dispositionType: any;

}
const ComodatoDocContract = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const { values_contract, realEstate, dispositionType } = location.state;
    console.log(values_contract, realEstate, dispositionType);
    const comodato = {
        //info general
        business_type: { select: 'teatro', input: '' },
        contract_period: 12,
        environmental_risk: "riesgos",
        registration_date: "2021-12-15",
        destination_realestate: "destinacion",
        lockable_base: 10,
        prediation_date: "2021-12-30",
        boundaries: "descripcion de linderos",

        //info comodato
        action_field: "campo",
        activities: "actividades",
        economic_exploitation: "si",
        horizontal_property: "si",
        loan_typology: "entidades sin animo de lucro",
        peacesafe: "paz y salvo",
        resolution: "no",
        social_event: "eventos",
        public_service: "no",
        loan_value: "", //valor comodato
        /* si public_service: si entonces
            capacity_specification: "",
            value_public_service: 0,
        */
        competitive_process: "",
        competitive_process_value: "",
        dependence: "contribuye",
        obligations: [],
        prohibitions: [],

        commercial_appraisal: 145000,

        //solicitante
        applicant: {
            type_society: 'Persona Juridica',
            id_type: 4,
            id_number: 15565,
            company_name: 'empresa',
            email: 'correo@correo.com',
            phone_number: 6545
        },
        location_applicant: { address: 'CQ 1 #5 - 5', id: '121' },
        //representante
        representative: { type_society: 'Persona Natural' },
        detailsRepresentative: {
            id_type: '',
            id_number: 1001456259,
            names: { firstName: 'Yang', lastName: '' },
            surnames: { firstSurname: 'Aparicio', lastSurname: 'Abadia' },
            email: '',
            phone_number: 564654,
            phone_number_ext: 14,
        },

        //obligaciones
        network_value: 100,
        administration_value: 200,
        conservation_value: 300,
        cleaning_value: 400,
        surveillance_value: 500,
        value_domiciliary_public: 600,
        value_repairs_damages: 700,
        value_locative_repairs: 800,
        value_economic_obligations: 900,

        //info tabla final
        approved: { name: 'persona 3', post: 'cargo 3' },
        elaborated: { name: 'persona 1', post: 'CARGO 1' },
        revised: { name: 'persona 2', post: 'Cargo 2' },

        //beneficiario
        benefited_sector: "sector",
        population: "poblacion",
        location_beneficiary: { commune: '', neighborhood: '' },

        //lider a cargo
        leader: {
            type_society: 'Persona Natural',
            post: 'cargo',
            dependence: 'secretario',
            secretary: 'secretaria'
        },
        detailsLeader: {
            id_type: '',
            id_number: 120255,
            names: { firstName: 'Juan', lastName: 'Pablo' },
            surnames: { firstSurname: 'Hernandez', lastSurname: 'Gil' },
            email: '',
            phone_number: 564654,
            phone_number_ext: 14,
        },
        location_leader: { address: 'cra 4 # 2-66', id: '' },

        //analisis de riesgo
        regulatory_risk: {
            degree_occurrence: '',
            impact_degree: '',
            responsable: '',
            mitigation_mechanism: ''
        },
        operational_risk: {
            degree_occurrence: '',
            impact_degree: '',
            responsable: '',
            mitigation_mechanism: ''
        },

    }

    return (
        <div className="h-100 d-flex flex-column">
            <PDFViewer className="w-100 mt-5" style={{ height: 600 }} showToolbar={false}>
                <ComodatoContractPdf values_contract={values_contract} comodato={comodato} realEstate={realEstate} />
            </PDFViewer>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.push({ pathname: "/disposition/create/", state: { dispositionType, stage: "contractual", realEstate, values_contract } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <PDFDownloadLink
                    document={<ComodatoContractPdf values_contract={values_contract} comodato={comodato} realEstate={realEstate}></ComodatoContractPdf>}
                    fileName="ContratodeComodatoBienInmueble.pdf"
                >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={async () => {
                        let res: any;
                        console.log(values_contract)
                        const final_values = {
                            ...values_contract,
                            type_contract: "Comodato"

                        }
                        if (values_contract.edit === true) {
                            delete values_contract.edit;
                            res = await dispatch(actions.update_contract(realEstate?.active_code, final_values))

                        } else {
                            delete values_contract.edit;
                            res = await dispatch(actions.create_contract(final_values))
                        }
                        // history.push({ pathname: `/dispositions/precontractual/view/${realEstate.active_code}`, state: {  realEstate } })

                    }}
                >
                    guardar y descargar
                </button>
                </PDFDownloadLink>
            </div>
        </div>
    )
}

export default ComodatoDocContract

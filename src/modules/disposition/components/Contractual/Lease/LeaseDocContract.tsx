import React from 'react'
import '../../../../../utils/assets/styles/contract_lease.css';
import { useLocation, useHistory } from 'react-router-dom';
import LeaseContractPdf from './LeaseContractPdf';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

interface IParams {
    values_contract: any;
    realEstate: any;
    dispositionType: any;
}
const LeaseDocContract = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const { values_contract, realEstate, dispositionType } = location.state;
    console.log(values_contract, realEstate, dispositionType);
    const arrendamiento = {
        //info general
        boundaries: "descripcion de linderos",
        business_type: { select: 'otro', input: 'casino' },
        contract_period: 12,
        destination_realestate: "destinacion del bien inmueble",
        environmental_risk: "riesgos",
        lockable_base: 10,
        registration_date: "2021-12-15",
        //Arrendamiento
        IVA: 260300,
        administration_value: 150000,
        coverage: "cumplimiento",
        fines: "Multas",
        appraisal_date: "2021-12-01",
        appraisal_number: 6565556,
        prediation_date: "2021-12-22",
        prediation_number: "635465",
        public_service: "Aforo",
        subtotal: 1630300,
        total: 1793300,
        value_public_service: 13000,
        vigilance_value: 14000,
        //solicitante
        //si es persona natural se agrega:
        detailsApplicant: {
            id_type: '1',
            id_number: 10085632,
            names: { firstName: 'Bryan', lastName: 'Manuel' },
            surnames: { firstSurname: 'Cendales', lastSurname: 'Rodriguez' },
            email: 'Bryan@correo.com',
            phone_number: "1455499"
        },

        applicant: {
            type_society: 'Persona Juridica',
            id_type: '',
            id_number: 3658950,
            company_name: 'nombre de la razon social',
            email: 'empresa@correo.com',
        },
        location_applicant: { address: 'CL 5266 #58 - 45', id: '127' },
        //representante legal
        representative: { type_society: 'Persona Natural' },
        detailsRepresentative: {
            id_type: '1',
            id_number: 4582103699,
            names: { firstName: 'Juan', lastName: 'Pablo' },
            surnames: { firstSurname: 'Hernandez', lastSurname: 'Gil' },
            email: 'juanHer@gmail.com',
        },
        //lider acargo
        leader: {
            type_society: 'Persona Natural',
            post: 'Líder de Programa',
            dependence: 'Unidad Administración de Bienes Inmuebles',
            secretary: 'Subsecretaría de Gestión de Bienes'
        },
        detailsLeader: {
            id_type: '1',
            id_number: 10085632,
            names: { firstName: 'Bryan', lastName: 'Manuel' },
            surnames: { firstSurname: 'Cendales', lastSurname: 'Rodriguez' },
            email: 'Bryan@correo.com',
        },
        location_leader: { address: 'CR 1 #6 - 8', id: '129' },

        //analisis de riesgos
        operational_risk: {
            degree_occurrence: '',
            impact_degree: '',
            responsable: '',
            mitigation_mechanism: ''
        },
        regulatory_risk: {
            degree_occurrence: '',
            impact_degree: '',
            responsable: '',
            mitigation_mechanism: ''
        },

        //info tabla final
        approved: { name: 'aprobo nombre', post: 'aprobo cargo' },
        elaborated: { name: 'elaboro nombre', post: 'elaboro cargo' },
        revised: { name: 'reviso nombre', post: 'reviso cargo' },

        idRealEstate: 31
    }
    const doc = <LeaseContractPdf values_contract={values_contract} realEstate={realEstate} arrendamiento={arrendamiento} />
    return (
        <div className="h-100 d-flex flex-column">
            <PDFViewer className="w-100 mt-5" style={{ height: 600 }} showToolbar={false}>
                {doc}
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
                    document={doc}
                    fileName="EstudioPrevioArrendamiento.pdf"
                >
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => { }}
                    >
                        guardar y descargar
                    </button>
                </PDFDownloadLink>
            </div>
        </div>
    )
}

export default LeaseDocContract

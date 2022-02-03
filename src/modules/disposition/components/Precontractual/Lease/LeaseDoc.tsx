import '../../../../../utils/assets/styles/lease.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import LeasePdf from './LeasePdf';
import moment from 'moment';

interface IParams {
    values: any;
    realEstate: any;
    dispositionType: any;

}
const LeaseDoc = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const { values, realEstate, dispositionType } = location.state;
    console.log(values, realEstate, dispositionType);
    return (
        <div className="h-100 d-flex flex-column">
            <PDFViewer style={{ width: '100%', height: "90%" }} showToolbar={false}>
                <LeasePdf values={values} realEstate={realEstate} />
            </PDFViewer>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.push({ pathname: "/disposition/create/", state: { dispositionType, stage: "pre-contractual", realEstate, values } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                {/* <PDFDownloadLink
                    document={<LeasePdf values={values} realEstate={realEstate} />}
                    fileName="EstudioPrevioparaarrendamientodeBienInmueble.pdf"
                > */}
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => {
                            let value_public_service = 0
                            // console.log(values)
                            const final_values = {
                                ...values,
                                applicant: {
                                    ...values.applicant,
                                    person_id: values.detailsApplicant.id,
                                    location_id: values.location_applicant.id,
                                    legal_representative_id: values.detailsRepresentative.id ?? ""

                                },
                                business_type: values.business_type.select === "otro" ? values.business_type.input : values.business_type.select,
                                prediation_date: new Date(values.prediation_date).getTime(),
                                registration_date: new Date(values.registration_date).getTime(),
                                appraisal_date: new Date(values.appraisal_date).getTime(),
                                leader: {
                                    person_type: values.leader.person_type,
                                    person_id: values.detailsLeader.id,
                                    location_id: values.location_leader.id,
                                },
                                operational_risk: {
                                    ...values.operational_risk,
                                    type: "operational"
                                },
                                regulatory_risk: {
                                    ...values.regulatory_risk,
                                    type: "regulatory"
                                },
                            }
                            delete final_values.detailsApplicant;
                            delete final_values.location_applicant;
                            delete final_values.detailsLeader;
                            delete final_values.location_leader;
                            delete final_values.detailsRepresentative;
                            delete final_values.consecutive_number; // eliminar del formulario
                            delete final_values.canon_value;
                            console.log(final_values)

                            // if (values.public_service === "Recobro") {
                            //     value_public_service = values.recovery_value;
                            // } else if (values.public_service === "Aforo") {
                            //     value_public_service = values.value_aforo;
                            // } else if (values.public_service === "Contador individualizado") {
                            //     value_public_service = values.counter_value;
                            // } else if (values.public_service === "Prepago") {
                            //     value_public_service = 0
                            // }
                            // const values_final = {
                            //     ...values,
                            //     value_public_service
                            // }
                            // dispatch(actions.create_precontract(values_final, dispositionType))
                            //history.push({ pathname: "/disposition/create/", state: { dispositionType, realEstate, values } })
                        }}
                    >
                        guardar y descargar
                    </button>
                {/* </PDFDownloadLink> */}
            </div>
        </div>
    );
};

export default LeaseDoc;

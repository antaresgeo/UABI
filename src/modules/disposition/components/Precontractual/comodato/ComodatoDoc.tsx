import '../../../../../utils/assets/styles/comodato.css';
import { useLocation, useHistory } from 'react-router-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ComodatoPdf from './ComodatoPdf';

interface IParams {
    values: any;
    realEstate: any;
    dispositionType: any;

}

const ComodatoDoc = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const { values, realEstate, dispositionType } = location.state;
    console.log(values, realEstate, dispositionType);


    return (
        <div className="h-100 d-flex flex-column">
            <PDFViewer style={{ width: '100%', height: "90%" }} showToolbar={false}>
                <ComodatoPdf  values={values} realEstate={realEstate}/>
            </PDFViewer>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        //console.log('@values',values)
                        history.push({ pathname: "/disposition/create/", state: { dispositionType, stage: "pre-contractual", realEstate, values } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <PDFDownloadLink
                    document={<ComodatoPdf values={values} realEstate={realEstate} />}
                    fileName="EstudioPrevioparacomodatodeBienInmueble.pdf"
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
    );
};

export default ComodatoDoc;

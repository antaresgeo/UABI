import '../../../../../utils/assets/styles/public_use.css';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { actions } from '../../../redux';
import { useDispatch } from 'react-redux';
import PubilcUsePdf from './PubilcUsePdf';

interface IParams {
    values: any;
    realEstate: any;
    dispositionType: any;
}


const PublicUseDoc = () => {
    const location = useLocation<IParams>();
    const dispatch = useDispatch();
    const history = useHistory();
    const { values, realEstate, dispositionType } = location.state;
    console.log(values, realEstate, dispositionType);
    return (
        <>
            <div className="h-100 d-flex flex-column">
                <PDFViewer style={{ width: '100%', height: "90%" }} showToolbar={false} >
                    <PubilcUsePdf values={values} realEstate={realEstate} />
                </PDFViewer>
                <div
                    className="bg-white d-flex flex-row justify-content-between"
                    style={{ padding: 16, borderTop: '1px solid #ccc' }}
                >
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => {
                            // console.log('@values uso Publico',values)
                            history.push({ pathname: "/disposition/create/", state: { dispositionType, stage: "pre-contractual", realEstate, values } })
                        }}
                    >
                        Atras
                    </button>
                    <div className="flex-fill" />
                    <PDFDownloadLink
                        document={<PubilcUsePdf values={values} realEstate={realEstate} />}
                        fileName="EstudioPrevioparaEspacioPúblicodeBienInmueble.pdf"
                    >
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={(values) => {
                                dispatch(actions.create_precontract(values, dispositionType))
                                //history.push({ pathname: "/disposition/create/", state: { dispositionType, realEstate, values } })
                            }}
                        >
                            guardar y descargar
                        </button>
                    </PDFDownloadLink>
                </div>
            </div>
        </>
    );
};

export default PublicUseDoc;

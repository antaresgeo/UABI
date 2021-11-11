
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import OccupationForm from '../components/OccupationForm';


export const CreateOccupation = () => {
    const history = useHistory();
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Datos de ocupación inspección anterior del BI">
                                <OccupationForm
                                    disabled
                                />
                            </Card>
                            <Card title="Datos de ocupación del bien inmueble">
                                <OccupationForm />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    )
}

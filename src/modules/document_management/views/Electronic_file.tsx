import React from 'react'
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import CollapseElectronicFiel from '../components/CollapseElectronicFiel';

const Electronic_file = () => {
    const history = useHistory();
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h5 style={{ fontWeight: 600, marginLeft: 20 }}>Expediente Electrónico</h5>
                            <Card
                                title={`Documentos asociados a:`}
                            >
                                <CollapseElectronicFiel/>
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

export default Electronic_file

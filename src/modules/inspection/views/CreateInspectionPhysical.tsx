import React from 'react'
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import InspectionPhysicalForm from '../components/InspectionPhysicalForm';
import TableInspectionPhysycal from '../components/TableInspectionPhysycal';

const CreateInspectionPhysical = () => {
    const history = useHistory();
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <TableInspectionPhysycal />
                            <Card title={
                                <>
                                <div className="row">
                                    <b className="col-3">Estado anterior</b>
                                    <b className="col-4">Estado actual del bien inmueble</b>
                                </div>
                                </>
                            }

                            >
                                <InspectionPhysicalForm />
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

export default CreateInspectionPhysical

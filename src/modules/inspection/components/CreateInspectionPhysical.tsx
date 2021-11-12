import React from 'react'
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import InspectionPhysicalForm from './InspectionPhysicalForm';
import TableInspectionPhysycal from './TableInspectionPhysycal';

const CreateInspectionPhysical = () => {
    const history = useHistory();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <TableInspectionPhysycal />
                    <Card
                        title={
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
    )
}

export default CreateInspectionPhysical

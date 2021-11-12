import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import OccupationForm from './OccupationForm';
import React from "react";

 const CreateOccupation = () => {
    const history = useHistory();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Card title="Datos de ocupación inspección anterior del BI">
                        <OccupationForm disabled />
                    </Card>
                    <Card title="Datos de ocupación del bien inmueble">
                        <OccupationForm />
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default CreateOccupation

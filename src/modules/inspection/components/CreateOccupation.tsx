import { Card } from '../../../utils/ui';
// import { useHistory } from 'react-router-dom';
import OccupationForm from './OccupationForm';
import React, { FC } from 'react';
import {IOccupation} from "../custom_types";

interface CreateOccupationProps {
    occupation: IOccupation;
    innerRef: any;
    onSubmit: (values) => void;
}

const CreateOccupation: FC<CreateOccupationProps> = ({ occupation, innerRef, onSubmit }) => {
    // const history = useHistory();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h5 style={{ fontWeight: 600, marginLeft: 20 }}>Datos de ocupación inspección anterior del BI</h5>
                    <Card
                        title={
                            <div className="row">
                                <div className="col-6">
                                    <h5>Estado anterior</h5>
                                </div>
                                <div className="col-6">
                                    <h5>Estado actual</h5>
                                </div>
                            </div>
                        }
                    >
                        <OccupationForm old={occupation} innerRef={innerRef} onSubmit={onSubmit} />
                    </Card>
                </div>
            </div>
        </div>
    );
};
export default CreateOccupation;

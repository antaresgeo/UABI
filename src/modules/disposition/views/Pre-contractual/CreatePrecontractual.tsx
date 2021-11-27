import React, { FC } from 'react'
import { Card } from '../../../../utils/ui'
import FormPrecontractual from '../../components/Precontractual/Lease/FormPrecontractualLease'
import { useHistory, useLocation } from 'react-router-dom';
import { GeneralFormPrecontractual } from '../../components/Precontractual/GeneralFormPrecontractual';


interface FormPros {
    dispositionType?: string;
}

const CreatePrecontractual: FC<FormPros> = ({dispositionType})=> {

    const history = useHistory();
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <GeneralFormPrecontractual
                                dispositionType={dispositionType}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePrecontractual


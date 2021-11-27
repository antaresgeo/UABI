import React from 'react'
import { Card } from '../../../../utils/ui';
import { FormContract } from '../../components/Contractual/FormContract';
import { useHistory } from 'react-router-dom';
import { FormUser } from './../../components/Precontractual/FormUser';
import { GeneralDataContract } from './../../components/Contractual/GeneralDataContract';

const CreateContract = () => {
    const history = useHistory();
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <GeneralDataContract />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateContract

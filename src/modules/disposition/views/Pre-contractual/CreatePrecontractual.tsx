import React from 'react'
import { Card } from '../../../../utils/ui'
import FormPrecontractual from '../../components/Precontractual/Lease/FormPrecontractualLease'
import { useHistory, useLocation } from 'react-router-dom';
import { GeneralFormPrecontractual } from '../../components/Precontractual/GeneralFormPrecontractual';


interface IParams {
    dispositionType: any;
}

const CreatePrecontractual = () => {
    const location = useLocation<IParams>();
    const { dispositionType } = location.state;
    console.log(dispositionType);
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
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        history.push("/disposition/contract/create/");
                    }}
                >
                    siguiente
                </button>
            </div>
        </div>
    )
}

export default CreatePrecontractual


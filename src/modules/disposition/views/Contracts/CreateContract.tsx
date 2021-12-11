import { FC, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { GeneralDataContract } from './../../components/Contractual/GeneralDataContract';

interface FormPros {
    dispositionType?: string;
    realEstate?: any;
    values_form?: any;
}

const CreateContract: FC<FormPros> = ({ dispositionType, realEstate, values_form }) => {
    const form_ref = useRef<any>();
    const history = useHistory();
    const submit_contract = async (values) => {
        console.log("vaules contrato",values)
        if(values.type_contract === "Comodato" ) {
            history.push({ pathname: "/document/comodato/contract", state: { values, realEstate, dispositionType } })

        }else if(values.type_contract === "arrendamiento" ) {
            history.push({ pathname: "/document/lease/contract", state: { values, realEstate, dispositionType } })
        }
    }
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <GeneralDataContract
                                innerRef={form_ref}
                                onSubmit={submit_contract}
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
                        //history.push({ pathname: `/disposition/edit/${realEstate.id}`, state: { dispositionType } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        form_ref.current.submitForm();
                    }}
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}

export default CreateContract

import { FC, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import GeneralFormPublicUse from '../../components/Precontractual/PublicUse/GeneralFormPublicUse';
import { GeneralFormComodato } from './../../components/Precontractual/comodato/GeneralFormComodato';
import { GeneralFormLease } from './../../components/Precontractual/Lease/GeneralFormLease';


interface FormPros {
    dispositionType?: string;
    realEstate?: any;
}

const CreatePrecontractual: FC<FormPros> = ({ dispositionType, realEstate }) => {
    const form_ref = useRef<any>();
    const on_submit_lease = async (values) => {
        history.push({ pathname: "/document/lease/", state: { values, realEstate } })
    }

    const history = useHistory();
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            {dispositionType === "Comodato" &&
                                <GeneralFormComodato />
                            }
                            {dispositionType === "arrendamiento" &&
                                <GeneralFormLease
                                    realEstate={realEstate}
                                    innerRef={form_ref}
                                    onSubmit={on_submit_lease}
                                />
                            }
                            {(dispositionType !== "arrendamiento" && dispositionType !== "Comodato") &&
                                <GeneralFormPublicUse />
                            }

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

export default CreatePrecontractual


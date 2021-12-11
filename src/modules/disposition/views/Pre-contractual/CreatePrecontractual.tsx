import { FC, useRef } from 'react'
import GeneralFormPublicUse from '../../components/Precontractual/PublicUse/GeneralFormPublicUse';
import { GeneralFormComodato } from './../../components/Precontractual/comodato/GeneralFormComodato';
import { GeneralFormLease } from './../../components/Precontractual/Lease/GeneralFormLease';
import { useHistory } from 'react-router-dom';

interface FormPros {
    dispositionType?: string;
    realEstate?: any;
    values_form?: any;
}

const CreatePrecontractual: FC<FormPros> = ({ dispositionType, realEstate, values_form }) => {
    const form_ref = useRef<any>();
    const history = useHistory();
    const on_submit_lease = async (values) => {
        history.push({ pathname: "/document/lease/", state: { values, realEstate, dispositionType } })
    }

    const on_submit_comodato = async (values) => {
        history.push({ pathname: "/document/comodato/", state: { values, realEstate, dispositionType } })
    }

    const on_submit_publicuse = async (values) => {
        history.push({ pathname: "/document/use-public/", state: { values, realEstate, dispositionType } })
    }



    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            {dispositionType === "Comodato" &&
                                <GeneralFormComodato
                                    realEstate={realEstate}
                                    innerRef={form_ref}
                                    onSubmit={on_submit_comodato}
                                    values_form={values_form}
                                />
                            }
                            {dispositionType === "arrendamiento" &&
                                <GeneralFormLease
                                    realEstate={realEstate}
                                    innerRef={form_ref}
                                    onSubmit={on_submit_lease}
                                    values_form={values_form}
                                />
                            }
                            {(dispositionType !== "arrendamiento" && dispositionType !== "Comodato") &&
                                <GeneralFormPublicUse
                                    realEstate={realEstate}
                                    innerRef={form_ref}
                                    onSubmit={on_submit_publicuse}
                                    values_form={values_form}
                                />
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
                        history.push({ pathname: `/disposition/edit/${realEstate.id}`, state: { dispositionType } })
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
                    Vista Previa
                </button>
            </div>
        </div>
    )
}

export default CreatePrecontractual


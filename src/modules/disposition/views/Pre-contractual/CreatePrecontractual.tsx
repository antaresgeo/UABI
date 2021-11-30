import  { FC } from 'react'
import { useHistory } from 'react-router-dom';
import GeneralFormPublicUse from '../../components/Precontractual/PublicUse/GeneralFormPublicUse';
import { GeneralFormComodato } from './../../components/Precontractual/comodato/GeneralFormComodato';
import { GeneralFormLease } from './../../components/Precontractual/Lease/GeneralFormLease';


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
                            {dispositionType === "Comodato" &&
                                <GeneralFormComodato />
                            }
                            {dispositionType === "arrendamiento" &&
                                <GeneralFormLease />
                            }
                            {(dispositionType !== "arrendamiento" && dispositionType !== "Comodato") &&
                                <GeneralFormPublicUse />
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePrecontractual


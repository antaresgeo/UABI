import { useState } from "react";
import { Card } from "../../../utils/ui";
import { FormDisposition } from "../components/FormDisposition";
import { FormTypeDisposition } from "../components/FormTypeDisposition";
import { ListContracts } from './Contracts/ListContracts';
import { useHistory } from 'react-router-dom';
import { ModalNotificar } from './../components/ModalNotificar';


export const EditDisposition = () => {
    const history = useHistory();
    const [dispositionType, setDispositionType] = useState("");
    const typeDisposition = (value) => {
        setDispositionType(value)
    }

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <FormDisposition dispositionType={dispositionType} />
                            <Card
                                title="Tipo Disposición"
                                extra={<ModalNotificar />}
                            >
                                <FormTypeDisposition
                                    onTypeDispositionChange={typeDisposition}
                                />
                            </Card>
                            {/* <Card
                                title=""
                            >
                                <FormDisposition
                                    dispositionType={dispositionType}
                                />
                            </Card> */}

                            <ListContracts />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 8, borderTop: '1px solid #ccc' }}
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
                {dispositionType !== "" &&
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            history.push({ pathname: "/disposition/precontractual/create/", state: { dispositionType } })
                        }}
                    >
                        iniciar proceso Jurídico
                    </button>
                }

            </div>
        </div>
    )
}

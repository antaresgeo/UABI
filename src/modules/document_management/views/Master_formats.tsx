import React, { useState } from 'react'
import { Card, Link } from '../../../utils/ui'
import { LinkButton } from '../../../utils/ui/link'
import Master_formatsList from '../components/Master_formatsList'

const Master_formats = () => {
    const [docName, setDocName] = useState(null)
    const documento = (e) => {
        console.log(e.target.files);
        setDocName(e.target.files[0].name ?? null)
    }
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card
                                title="Máster de Formatos"
                                extra={

                                    <>
                                        <LinkButton
                                            name={'Agregar Formato'}
                                            iconText="+"
                                            avatar
                                            onClick={() => {
                                                const input = document.getElementById("subir_doc");
                                                input.click();
                                                input.addEventListener("change", documento)
                                            }}
                                        />
                                        <input
                                            type="file"
                                            id="subir_doc"
                                            style={{ display: 'none' }}
                                            name="documento"
                                        />
                                        {/* <Link to="/insurabilities/policy/create/" name="Crear" iconText="+" /> */}
                                    </>
                                }
                            >
                                <Master_formatsList />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <div className="flex-fill" />
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                    }}
                >
                    Generar plantilla de creación de activo fijo

                </button>
            </div>
        </div>
    )
}

export default Master_formats

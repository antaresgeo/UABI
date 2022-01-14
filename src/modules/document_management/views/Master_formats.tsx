import React from 'react'
import { Card } from '../../../utils/ui'
import Master_formatsList from '../components/Master_formatsList'

const Master_formats = () => {
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card
                                title="Máster de Formatos"
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

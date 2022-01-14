import React from 'react'
import { Card } from '../../../utils/ui'
import Master_formatsList from '../components/Master_formatsList'

const Master_formats = () => {
    return (
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
    )
}

export default Master_formats

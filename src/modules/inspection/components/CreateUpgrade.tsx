import React from 'react'
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import UpgradeForm from './UpgradeForm';

const CreateUpgrade = () => {
    const history = useHistory();
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-12">
                    <div className="content_box_table">
                        <div className="title">Datos del poseedor del bien inmueble</div>
                        <div className="table_content">
                            <table className="box-table">
                                <thead>
                                <tr >
                                    <th>Nombres y apellido</th>
                                    <th>Documento de identidad</th>
                                    <th>Teléfono de contacto</th>
                                    <th>Correo electrónico</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>prueba</td>
                                    <td>prueba</td>
                                    <td>prueba</td>
                                    <td>prueba</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <Card title="Actualizar datos del poseedor del bien inmueble">
                        <UpgradeForm />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CreateUpgrade

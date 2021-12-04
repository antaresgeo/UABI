import React, { FC } from 'react';
import { Card } from '../../../utils/ui';
// import { useHistory } from 'react-router-dom';
import UpgradeForm from './UpgradeForm';
import { Owner } from '../custom_types';
interface CreateUpgradeProps {
    owner: Owner;
    innerRef: any;
    onSubmit: (values) => void;
}
const CreateUpgrade: FC<CreateUpgradeProps> = ({ owner, innerRef, onSubmit }) => {
    // const history = useHistory();
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-12">
                    <div className="content_box_table">
                        <div className="title">Datos del poseedor del bien inmueble</div>
                        <div className="table_content">
                            <table className="box-table">
                                <thead>
                                    <tr>
                                        <th>Nombres y apellido</th>
                                        <th>Documento de identidad</th>
                                        <th>Teléfono de contacto</th>
                                        <th>Correo electrónico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{owner?.names_surnames || '-'}</td>
                                        <td>{owner?.document_number || '-'}</td>
                                        <td>{owner?.phone_number || '-'}</td>
                                        <td>{owner?.email || '-'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <Card title="Actualizar datos del poseedor del bien inmueble">
                        <UpgradeForm owner={owner} innerRef={innerRef} onSubmit={onSubmit} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateUpgrade;

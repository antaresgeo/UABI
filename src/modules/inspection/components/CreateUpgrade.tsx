import React, { FC } from 'react';
import { Card } from '../../../utils/ui';
// import { useHistory } from 'react-router-dom';
import UpgradeForm from './UpgradeForm';
import { IOccupant } from '../custom_types';
import {PersonalInformationForm} from "../../../utils/ui/PersonaM";
interface CreateUpgradeProps {
    owner: IOccupant;
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
                        <div className="title">Datos del tenedor u ocupante del bien inmueble</div>
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
                                        <td>{owner?.names || '-'}</td>
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
                    <Card
                        title={
                            <span className="text-capitalize">
                                Actualizar datos del tenedor u ocupante del bien inmueble
                            </span>
                        }
                    >
                        <PersonalInformationForm
                            withNit={true}
                            persona={owner}
                            form_ref={innerRef}
                            disabled={false}
                            onChange={(values, form) => {
                                return onSubmit(values)
                            }}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateUpgrade;

import React, { FC } from 'react';

interface IUserFormPros {
    user: any;
}
const UserViewForm: FC<IUserFormPros> = ({ user }) => {
    console.log(user?.id_type);
    let genero = '';
    let type_doc = '';
    let type_society = '';
    let type_entity = '';

    switch (user?.gender) {
        case 'f':
            genero = 'Femenino';
            break;
        case 'm':
            genero = 'Maculino';
            break;
        case 'o':
            genero = 'Otro';
            break;
        default:
            break;
    }

    switch (user?.id_type) {
        case '1':
            type_doc = 'Cédula de Ciudadanía';
            break;
        case '2':
            type_doc = 'Tarjeta de identidad';
            break;
        case '3':
            type_doc = 'Cédula de Extranjería';
            break;
        case '4':
            type_doc = 'NIT';
            break;

        default:
            break;
    }

    switch (user?.society_type) {
        case 'N':
            type_society = 'Persona Natural';
            break;
        case 'J':
            type_society = 'Persona Jurídica';
            break;

        default:
            break;
    }

    switch (user?.entity_type) {
        case 'O':
            type_entity = 'Organización sin Animo de lucro';
            break;
        case 'T':
            type_entity = 'Otro';
            break;
        case 'R':
            type_entity = 'Privada';
            break;
        case 'P':
            type_entity = 'Pública';
            break;
        default:
            break;
    }
    console.log(user);
    return (
        <div className="col-3-12">
            <div className="content_box_table">
                <div
                    className="title"
                    style={{ borderBottom: '1px solid #e2e4e4', color: '#2F2D2D', fontSize: '14px' }}
                >
                    Información del Usuario
                </div>
                <div className="table_content" style={{ margin: 7 }}>
                    <div className="detailForm" style={{ width: '100%' }}>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Primer Nombre</label>
                                <div className="my-3">{user?.names.firstName}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Segundo Nombre</label>
                                <div className="my-3">{user?.names.lastName}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Primer apellido</label>
                                <div className="my-3">{user?.surnames.firstSurname}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Segundo apellido</label>
                                <div className="my-3">{user?.surnames.lastSurname}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Tipo de Sociedad</label>
                                <div className="my-3">{type_society}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Tipo Entidad</label>
                                <div className="my-3">{type_entity}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Tipo de Documento</label>
                                <div className="my-3">{type_doc}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Numero de documento</label>
                                <div className="my-3">{user?.cellphone_number}</div>
                            </div>
                        </div>
                        <div className="row my-3" style={{ borderBottom: '1px solid #e2e4e4' }}>
                            <div className="col-3">
                                <label htmlFor="">Correo Electronico</label>
                                <div className="my-3">{user?.email}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Celular</label>
                                <div className="my-3">{user?.cellphone_number}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Telefono</label>
                                <div className="my-3">{user?.phone_number}</div>
                            </div>
                            <div className="col-3">
                                <label htmlFor="">Genero</label>
                                <div className="my-3">{genero}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="">Dirección</label>
                                <div className="my-3">{user?.location}</div>
                            </div>
                            {user?.entity_type === 'P' && (
                                <>
                                    <div className="col-3">
                                        <label htmlFor="">Dependencia</label>
                                        <div className="my-3">{user.dependency}</div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="">Subdependencia</label>
                                        <div className="my-3">{user.subdependency}</div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserViewForm;

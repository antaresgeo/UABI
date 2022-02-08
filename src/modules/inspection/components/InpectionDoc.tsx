import React, { FC } from 'react';
import DocumentPdf from './../../../utils/components/document_pdf/index';
import { StyleSheet, Text, Image } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import writtenNumber from 'written-number';
import moment from 'moment';
import { IProperty, NewInspection } from '../custom_types';
import { compute_persona_name } from '../../../utils';
import { chunk } from 'lodash';
import imgbs64 from '../../../utils/assets/img/header.png';

const styles = StyleSheet.create({
    title: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold',
        margin: 12,
    },
    subtitle: {
        fontSize: 11,
        margin: 12,
        fontFamily: 'Helvetica-Bold',
    },
    text: {
        margin: 12,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
        lineHeight: 1.4,
    },
    text_2: {
        margin: '10px 30px',
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
        lineHeight: 1.4,
    },
    sub_text: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
    },
    underlined: {
        fontSize: 11,
        margin: 10,
        fontFamily: 'Helvetica-Bold',
        textDecoration: 'underline',
    },
    italic: {
        fontSize: 11,
        margin: 10,
        fontFamily: 'Helvetica-Oblique',
    },
});

interface Idata {
    data: NewInspection;
    real_estate: any;
    user: any;
    innerRef: any;
}

const InpectionDoc: FC<Idata> = ({ data, real_estate, user, innerRef }) => {
    const _occupation = data.occupation;
    const _public_services = data.physical_inspection.public_services;
    const _properties = data.physical_inspection.properties;

    const get_physical_aspects_tr = (property) => {
        if (property) {
            return `<tr>
                    <td>${property?.name}</td>
                    <td>${property?.status_property}</td>
                    <td>${property?.observation}</td>
                </tr>`;
        }
        return '';
    };

    const data_realEstate = `
        <style>
            table {
                margin-left: 25px;
                margin-right: 25px;
                margin-bottom: 15px;
            }
            td {
                text-align: left;
                font-size: 11px;
                padding-left: 3px;
                padding-right: 3px;
                margin-top: 10px;
                margin-bottom: 0px;
            }
        </style>
        <table>
            <tbody>
                <tr>
                    <td>MATRÍCULA INMOBILIARIA:</td>
                    <td>${real_estate.registry_number}</td>
                </tr>
                <tr>
                    <td>C B M L:</td>
                    <td>${real_estate?.address?.cbmls?.uabi}</td>
                </tr>
                <tr>
                    <td>ESCRITURA/FECHA/NOTARÍA:</td>
                    <td>${real_estate.acquisitions?.map((ac) => {
                        return `<tr>${ac.title_type_document_id ?? '-'} / ${moment(
                            new Date(ac.acquisition_date).getTime()
                        ).format('DD-MM-YYYY')} / ${ac.entity_type}: ${ac.entity_number}</tr>`;
                    })}</td>
                </tr>
                <tr>
                    <td>AVALÚO DEL INMUEBLE:</td>
                    <td>${writtenNumber(real_estate.patrimonial_value, { lang: 'es' })}, ${
        real_estate.patrimonial_value
    } </td>
                </tr>
                <tr>
                    <td>DIRECCIÓN DEL INMUEBLE:</td>
                    <td>${real_estate?.address?.address}</td>
                </tr>
                <tr>
                    <td>TIPO DE INMUEBLE:</td>
                    <td>(Digite si es; casa, apartamento, bodega, lote etc)</td>
                </tr>
                <tr>
                    <td>CATEGORÍA DEL INMUEBLE:</td>
                    <td>${real_estate.destination_type}</td>
                </tr>
                <tr>
                    <td>DESTINACIÓN DEL INMUEBLE:</td>
                    <td>${real_estate?.tipology?.tipology}</td>
                </tr>
            </tbody>
        </table>
    `;

    const public_services = `
        <style>
            table {
                margin: 10px;
                border: 1px solid #000;
            }
            td {
                text-align: left;
                font-size: 11px;
                padding-left: 3px;
                padding-right: 3px;
            }
            th {
                text-align: center;
                font-size: 11px;
                padding: 10px;
                color: #fff;
            }
            .title {
                background-color: #009999;
            }
            .header {
                background-color: #D9D9D9;
                text-align: center;

            }
            .footer {
                padding: 3px;
            }
        </style>
        <table>
            <thead>
                <tr class="title">
                    <th>SERVICIOS PÚBLICOS</th>
                </tr>
                <tr>
                    <td class="header">Servicio</td>
                    <td class="header">No de suscriptor</td>
                    <td class="header">No. Contador</td>
                    <td class="header">Estado</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Energía</td>
                    <td>${_public_services[0]?.subscriber}</td>
                    <td>${_public_services[0]?.accountant}</td>
                    <td>${
                        parseInt(`${_public_services[0]?.status}`) === 1
                            ? 'Aplica'
                            : parseInt(`${_public_services[0]?.status}`) === 2
                            ? 'Inactivo'
                            : 'No Aplica'
                    }</td>
                </tr>
                <tr>
                    <td>Gas</td>
                    <td>${_public_services[1]?.subscriber}</td>
                    <td>${_public_services[1]?.accountant}</td>
                    <td>${
                        parseInt(`${_public_services[1]?.status}`) === 1
                            ? 'Aplica'
                            : parseInt(`${_public_services[1]?.status}`) === 2
                            ? 'Inactivo'
                            : 'No Aplica'
                    }</td>
                </tr>
                <tr>
                    <td>Agua</td>
                    <td>${_public_services[2]?.subscriber}</td>
                    <td>${_public_services[2]?.accountant}</td>
                    <td>${
                        parseInt(`${_public_services[2]?.status}`) === 1
                            ? 'Aplica'
                            : parseInt(`${_public_services[2]?.status}`) === 2
                            ? 'Inactivo'
                            : 'No Aplica'
                    }</td>
                </tr>
                <tr>
                    <td>Teléfono</td>
                    <td>${_public_services[3]?.subscriber}</td>
                    <td>${_public_services[3]?.accountant}</td>
                    <td>${
                        parseInt(`${_public_services[3]?.status}`) === 1
                            ? 'Aplica'
                            : parseInt(`${_public_services[3]?.status}`) === 2
                            ? 'Inactivo'
                            : 'No Aplica'
                    }</td>
                </tr>

            </tbody>
        </table>
    `;
    const physical_aspects = `
        <style>
            table {
                margin: 10px;
                border: 1px solid #000;
            }
            td {
                text-align: left;
                font-size: 11px;
                padding-left: 3px;
                padding-right: 3px;
            }
            th {
                text-align: center;
                font-size: 11px;
                padding: 10px;
                color: #fff;
            }
            .title {
                background-color: #009999;
            }

        </style>
        <table>
            <thead>
                <tr class="title">
                    <th>Descripcion</th>
                    <th>Estado actual</th>
                    <th>Observación</th>
                </tr>
            </thead>
            <tbody>
                ${get_physical_aspects_tr(_properties[20])}
                ${get_physical_aspects_tr(_properties[21])}
                ${get_physical_aspects_tr(_properties[0])}
                ${get_physical_aspects_tr(_properties[1])}
                ${get_physical_aspects_tr(_properties[2])}
                ${get_physical_aspects_tr(_properties[3])}
                ${get_physical_aspects_tr(_properties[4])}
                ${get_physical_aspects_tr(_properties[5])}
                ${get_physical_aspects_tr(_properties[6])}
                ${get_physical_aspects_tr(_properties[7])}
                ${get_physical_aspects_tr(_properties[8])}
                ${get_physical_aspects_tr(_properties[9])}
                ${get_physical_aspects_tr(_properties[10])}
                ${get_physical_aspects_tr(_properties[11])}
                ${get_physical_aspects_tr(_properties[12])}
                ${get_physical_aspects_tr(_properties[13])}
                ${get_physical_aspects_tr(_properties[14])}
                ${get_physical_aspects_tr(_properties[15])}
                ${get_physical_aspects_tr(_properties[16])}
                ${get_physical_aspects_tr(_properties[17])}
                ${get_physical_aspects_tr(_properties[18])}
                ${get_physical_aspects_tr(_properties[19])}
            </tbody>
        </table>
    `;

    let records = chunk(
        data.physical_inspection.properties.filter((p) => !!p.image),
        2
    );
    const get_image = (image) => {
        let file_url = null;
        if (image?.img) {
            file_url = window.URL.createObjectURL(image.img);
        }
        return file_url ? `<img src="${file_url}" />` : '( )';
    };

    const photographic_records = `
        <style>
            table {
                margin: 10px;
                border: 1px solid #000;
            }
            td {
                text-align: left;
                font-size: 11px;
            }
            img {
                width: 250px;
                height: 150px;
            }
        </style>
        <table>
            <tbody>
                ${records
                    .map((rs: IProperty[]) => {
                        const r1 = rs[0];
                        const r2 = rs[1];
                        return `<tr>
                            <td>Descripción: ${r1?.name || '()'}</td>
                            <td>Descripción: ${r2?.name || '()'}</td>
                        </tr>
                        <tr>
                            <td>${get_image(r1?.image)}</td>
                            <td>${get_image(r2?.image)}</td>
                        </tr>`;
                    })
                    .join(' ')}
            </tbody>
        </table>
    `;

    const occupant: any = data.occupant;
    const holder_data = `
        <style>
            table {
                margin-left: 25px;
                margin-right: 25px;
                margin-bottom: 15px;
            }
            td {
                text-align: left;
                font-size: 11px;
                padding-left: 3px;
                padding-right: 3px;
            }
        </style>
        <table>
            <tbody>
                <tr>
                    <td>Nombres y apellidos:</td>
                    <td>${compute_persona_name(occupant)}</td>
                </tr>
                <tr>
                    <td>Cédula de ciudadanía:</td>
                    <td>${occupant?.documentNumber ?? ''}</td>
                </tr>
                <tr>
                    <td>Dirección:</td>
                    <td>${real_estate?.address?.address}</td>
                </tr>
                <tr>
                    <td>Teléfono contacto: </td>
                    <td>${occupant?.phoneNumber ?? ''} ${
        occupant?.phoneNumber_ext ? `ext ${occupant?.phoneNumber_ext}` : ''
    }</td>
                </tr>
                <tr>
                    <td>Correo electrónico:</td>
                    <td>${occupant.email ?? ''}</td>
                </tr>
            </tbody>
        </table>
    `;

    return (
        <DocumentPdf
            showToolbar={false}
            title="Informe de Inspección de Bien Inmueble"
            header={{
                code: 'Cód. FO-ADMI-126',
                version: 'Versión. 4',
                title: { prefix: 'Formato', name: 'FO-ADMI Informe de Inspección de Bien Inmueble' },
            }}
        >
            <Text style={styles.title}>
                Informe de inspección N° (Digite el número del informe que corresponde a este bien durante la vigencia)
            </Text>
            <Text style={styles.title}>Fecha: {moment(new Date()).format('DD/MM/YYYY')}</Text>
            <Text style={styles.subtitle}>1. DATOS BÁSICOS DEL INMUEBLE:</Text>
            <Html>{data_realEstate}</Html>
            <Text style={styles.text}>
                Con el objeto de inspeccionar la tenencia y estado físico de los bienes propiedad del Municipio de
                Medellín y de acuerdo a la normatividad vigente que regula la materia, se ha realizado visita de
                inspección al inmueble descrito anteriormente, con el fin de verificar estado físico y de ocupación o
                disposición, en la cual se han observado los siguientes aspectos:
            </Text>
            <Text style={styles.subtitle}>2. INFORME TÉCNICO DE OCUPACIÓN DEL INMUEBLE:</Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.1. Estado actual de tenencia del bien: </Text>
                {_occupation.tenure}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.2. Estado actual del uso del bien: </Text>
                {_occupation.use}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.3. Estado de titularidad del inmueble: </Text>
                {_occupation.ownership}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.4. Estado contractual del bien: </Text>
                {_occupation.contractual}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.5. Acciones especiales según los hallazgos: </Text>
                {data.basic_information.special_actions || (
                    <Text style={styles.text_2}>
                        (Deje constancia de las acciones a seguir dependiendo de los hallazgos encontrados en la
                        inspección. Ejemplo, Se envía informe con documentos anexos que prueban la titularidad de bien
                        al componente jurídico para que inicie ante la inspección correspondiente la restitución del
                        bien){' '}
                    </Text>
                )}
                .
            </Text>
            <Text style={styles.subtitle}>3. INFORME DE INSPECCIÓN FÍSICA DEL INMUEBLE:</Text>
            <Html>{public_services}</Html>
            <Text style={styles.subtitle}>3.1. Verificación de aspectos físicos más relevantes del bien:</Text>
            <Html>{physical_aspects}</Html>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>3.2. Resultados inspección física: </Text>
                {data.physical_inspection.observations}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>
                    3.3. Diferencias de información del inmueble en SAP vs verificación en campo:{' '}
                </Text>
                {data.basic_information.differences}
            </Text>
            <Text style={styles.subtitle} break>
                3.4. Registros fotográficos de la inspección:
            </Text>
            <Html>{photographic_records}</Html>
            <Text style={styles.subtitle}>4. ACTUALIZACIÓN DE DATOS DEL TENEDOR U OCUPANTE</Text>
            <Text style={styles.text}>
                complete solo esta parte de la información si el bien está invadido o en poder de un tercero no
                autorizado en el Municipio de Medellín para su tenencia.
            </Text>
            <Html>{holder_data}</Html>
            {data.occupant.document_number === null &&
                data.occupant.document_type === null &&
                data.occupant.email === null &&
                data.occupant.names === null &&
                data.occupant.phone_number === null && (
                    <Text style={styles.text}>
                        Observación: fue imposible que se me suministrara la información, por lo tanto el ocupante o
                        tenedor real del inmueble no se puede determinar.
                    </Text>
                )}
            <Text style={styles.text}>Atentamente,</Text>
            <Text style={styles.sub_text}>{compute_persona_name(user.detailsUser)}</Text>
            <Text style={styles.sub_text}>Inspector del Bien Inmueble</Text>
            <Text style={styles.sub_text}>{real_estate?.dependency?.dependecy} </Text>
        </DocumentPdf>
    );
};

export default InpectionDoc;

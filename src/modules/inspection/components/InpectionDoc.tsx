import React, { FC } from 'react'
import DocumentPdf from './../../../utils/components/document_pdf/index';
import { StyleSheet, Text } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import writtenNumber from 'written-number'
import moment from 'moment';


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
        fontFamily: 'Helvetica'
    },
    underlined: {
        fontSize: 11,
        margin: 10,
        fontFamily: 'Helvetica-Bold',
        textDecoration: 'underline'
    },
    italic: {
        fontSize: 11,
        margin: 10,
        fontFamily: 'Helvetica-Oblique',
    },
});

interface Idata {
    data: any;
    real_estate: any;
    user: any;
    innerRef: any;
}

const InpectionDoc: FC<Idata> = ({ data, real_estate, user, innerRef }) => {
    console.log(real_estate)

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
                    <td>${real_estate.address.cbmls.uabi}</td>
                </tr>
                <tr>
                    <td>ESCRITURA/FECHA/NOTARÍA:</td>
                    <td>${real_estate.acquisitions.map(ac => {
                        return `<tr>${ac.title_type_document_id ?? "-"} / ${moment(new Date(ac.acquisition_date).getTime()).format('DD-MM-YYYY')} / ${ac.entity_type}: ${ac.entity_number}</tr>`
                    })}</td>
                </tr>
                <tr>
                    <td>AVALÚO DEL INMUEBLE:</td>
                    <td>${writtenNumber(real_estate.patrimonial_value, { lang: 'es' })}, ${real_estate.patrimonial_value} </td>
                </tr>
                <tr>
                    <td>DIRECCIÓN DEL INMUEBLE:</td>
                    <td>${real_estate.address.address}</td>
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
                    <td>${real_estate.tipology.tipology}</td>
                </tr>
            </tbody>
        </table>
    `
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
                    <td>${data.public_services[0].subscriber}</td>
                    <td>${data.public_services[0].accountant}</td>
                    <td>${data.public_services[0].status === 1 ? 'Aplica' : data.public_services[0].status === "2" ? 'Inactivo' : 'No Aplica'}</td>
                </tr>
                <tr>
                    <td>Gas</td>
                    <td>${data.public_services[1].subscriber}</td>
                    <td>${data.public_services[1].accountant}</td>
                    <td>${data.public_services[1].status === 1 ? 'Aplica' : data.public_services[1].status === "2" ? 'Inactivo' : 'No Aplica'}</td>
                </tr>
                <tr>
                    <td>Agua</td>
                    <td>${data.public_services[2].subscriber}</td>
                    <td>${data.public_services[2].accountant}</td>
                    <td>${data.public_services[2].status === 1 ? 'Aplica' : data.public_services[2].status === "2" ? 'Inactivo' : 'No Aplica'}</td>
                </tr>
                <tr>
                    <td>Teléfono</td>
                    <td>${data?.public_services[3]?.subscriber}</td>
                    <td>${data?.public_services[3]?.accountant}</td>
                    <td>${data.public_services[3]?.status === 1 ? 'Aplica' : data.public_services[0].status === "2" ? 'Inactivo' : 'No Aplica'}</td>
                </tr>

            </tbody>
        </table>
    `

    const physical_aspects =
        `
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
                <tr>
                    <td>Cerramiento (malla, muro, reja, etc.)</td>
                    <td>${data.properties[20].status_property}</td>
                    <td>${data.properties[20].observation}</td>
                </tr>
                <tr>
                    <td>Fachada</td>
                    <td>${data.properties[21].status_property}</td>
                    <td>${data.properties[21].observation}</td>
                </tr>
                <tr>
                    <td>Pintura exterior</td>
                    <td>${data.properties[0].status_property}</td>
                    <td>${data.properties[0].observation}</td>
                </tr>
                <tr>
                    <td>Cubierta o techo</td>
                    <td>${data.properties[1].status_property}</td>
                    <td>${data.properties[1].observation}</td>
                </tr>
                <tr>
                    <td>Pisos</td>
                    <td>${data.properties[2].status_property}</td>
                    <td>${data.properties[2].observation}</td>
                </tr>
                <tr>
                    <td>Enchapes (baños y/o cocina)</td>
                    <td>${data.properties[3].status_property}</td>
                    <td>${data.properties[3].observation}</td>
                </tr>
                <tr>
                    <td>Pintura interior</td>
                    <td>${data.properties[4].status_property}</td>
                    <td>${data.properties[4].observation}</td>
                </tr>
                <tr>
                    <td>Ventanas (vidrio, madera)</td>
                    <td>${data.properties[5].status_property}</td>
                    <td>${data.properties[5].observation}</td>
                </tr>
                <tr>
                    <td>Puerta principal</td>
                    <td>${data.properties[6].status_property}</td>
                    <td>${data.properties[6].observation}</td>
                </tr>
                <tr>
                    <td>Cerraduras puerta</td>
                    <td>${data.properties[7].status_property}</td>
                    <td>${data.properties[7].observation}</td>
                </tr>
                <tr>
                    <td>Puertas interiores</td>
                    <td>${data.properties[8].status_property}</td>
                    <td>${data.properties[8].observation}</td>
                </tr>
                <tr>
                    <td>Cerraduras puertas interiores</td>
                    <td>${data.properties[9].status_property}</td>
                    <td>${data.properties[9].observation}</td>
                </tr>
                <tr>
                    <td>Rejas de seguridad</td>
                    <td>${data.properties[10].status_property}</td>
                    <td>${data.properties[10].observation}</td>
                </tr>
                <tr>
                    <td>Paredes</td>
                    <td>${data.properties[11].status_property}</td>
                    <td>${data.properties[11].observation}</td>
                </tr>
                <tr>
                    <td>Escaleras</td>
                    <td>${data.properties[12].status_property}</td>
                    <td>${data.properties[12].observation}</td>
                </tr>
                <tr>
                    <td>Aparatos sanitarios</td>
                    <td>${data.properties[13].status_property}</td>
                    <td>${data.properties[13].observation}</td>
                </tr>
                <tr>
                    <td>Orinales</td>
                    <td>${data.properties[14].status_property}</td>
                    <td>${data.properties[14].observation}</td>
                </tr>
                <tr>
                    <td>Grifería y abastos</td>
                    <td>${data.properties[15].status_property}</td>
                    <td>${data.properties[15].observation}</td>
                </tr>
                <tr>
                    <td>Lavamanos</td>
                    <td>${data.properties[16].status_property}</td>
                    <td>${data.properties[16].observation}</td>
                </tr>
                <tr>
                    <td>Rejilla desagüe</td>
                    <td>${data.properties[17].status_property}</td>
                    <td>${data.properties[17].observation}</td>
                </tr>
                <tr>
                    <td>Sistema eléctrico</td>
                    <td>${data.properties[18].status_property}</td>
                    <td>${data.properties[18].observation}</td>
                </tr>
                <tr>
                    <td>Acometidas eléctricas</td>
                    <td>${data.properties[19].status_property}</td>
                    <td>${data.properties[19].observation}</td>
                </tr>
            </tbody>
        </table>
    `
    const Photographic_records = `
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
        </style>
        <table>
            <tbody>
                <tr>
                    <td>Descripción: (Digite una breve descripción)</td>
                    <td>Descripción: (Digite una breve descripción)</td>
                </tr>
                <tr>
                    <td>( )</td>
                    <td>( )</td>
                </tr>
                <tr>
                    <td>Descripción: (Digite una breve descripción)</td>
                    <td>Descripción: (Digite una breve descripción)</td>
                </tr>
                <tr>
                    <td>( )</td>
                    <td>( )</td>
                </tr>
                <tr>
                    <td>Descripción: (Digite una breve descripción)</td>
                    <td>Descripción: (Digite una breve descripción)</td>
                </tr>
                <tr>
                    <td>( )</td>
                    <td>( )</td>
                </tr>
            </tbody>
        </table>
    `;
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
                    <td>${data.owner.names_surnames ?? ""}</td>
                </tr>
                <tr>
                    <td>Cédula de ciudadanía:</td>
                    <td>${data.owner.document_number ?? ""}</td>
                </tr>
                <tr>
                    <td>Dirección:</td>
                    <td>${real_estate.address.address}</td>
                </tr>
                <tr>
                    <td>Teléfono contacto: </td>
                    <td>${data.owner.phone_number ?? ""}</td>
                </tr>
                <tr>
                    <td>Correo electrónico:</td>
                    <td>${data.owner.email ?? ""}</td>
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
            <Text style={styles.title}>Informe de inspección N° (Digite el número del informe que corresponde a este bien durante la vigencia)</Text>
            <Text style={styles.title}>Fecha: {moment(new Date().getTime()).format('DD/MM/YYYY')}</Text>
            <Text style={styles.subtitle}>1. DATOS BÁSICOS DEL INMUEBLE:</Text>
            <Html>{data_realEstate}</Html>
            <Text style={styles.text}>
                Con el objeto de inspeccionar la tenencia y estado físico de los bienes propiedad del Municipio de Medellín y
                de acuerdo a la normatividad vigente que regula la materia, se ha realizado visita de inspección al inmueble
                descrito anteriormente, con el fin de verificar estado físico y de ocupación o disposición, en la cual se han
                observado los siguientes aspectos:
            </Text>
            <Text style={styles.subtitle}>2. INFORME TÉCNICO DE OCUPACIÓN DEL INMUEBLE:</Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.1. Estado actual de tenencia del bien: </Text>
                {data.ocupation.tenure}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.2. Estado actual del uso del bien: </Text>
                {data.ocupation.use}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.3. Estado de titularidad del inmueble: </Text>
                {data.ocupation.ownership}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.4. Estado contractual del bien: </Text>
                {data.ocupation.contractual}
            </Text>
            <Text style={styles.text_2}>
                <Text style={styles.subtitle}>2.5. Acciones especiales según los hallazgos: </Text>
                (Deje constancia de las acciones a seguir dependiendo de los hallazgos encontrados en la inspección. Ejemplo, Se envía informe con documentos anexos que prueban la titularidad de bien al componente jurídico para que inicie ante la inspección correspondiente la restitución del bien).
            </Text>
            <Text style={styles.subtitle}>
                3. INFORME DE INSPECCIÓN FÍSICA DEL INMUEBLE:
            </Text>
            <Html>{public_services}</Html>
            <Text style={styles.subtitle} break>
                3.1. Verificación de aspectos físicos más relevantes del bien:
            </Text>
            <Html>{physical_aspects}</Html>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>3.2. Resultados inspección física: </Text>
                {data.physical_inspection.observations.observation}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>3.3. Diferencias de información del inmueble en SAP vs verificación en campo: </Text>
                {data.observations.observation}
            </Text>
            <Text style={styles.subtitle}>3.4. Registros fotográficos de la inspección:</Text>
            <Html>{Photographic_records}</Html>
            <Text style={styles.subtitle}>4. ACTUALIZACIÓN DE DATOS DEL TENEDOR U OCUPANTE</Text>
            <Text style={styles.text}>
                complete solo esta parte de la información si el bien está invadido o en poder de un tercero no autorizado en el Municipio de Medellín para su tenencia.
            </Text>
            <Html>{holder_data}</Html>
            {data.owner.document_number === null && data.owner.document_type === null && data.owner.email === null && data.owner.names_surnames === null && data.owner.phone_number === null &&
                <Text style={styles.text}>
                    Observación: fue imposible que se me suministrara la información, por lo tanto el ocupante o tenedor real del inmueble no se puede determinar.
                </Text>
            }
            <Text style={styles.text}>Atentamente,</Text>
            <Text style={styles.sub_text}>{user.detailsUser.names.firstName} {user.detailsUser.names.lastName ?? ""} {user.detailsUser.surnames.firstSurname} {user.detailsUser.surnames.lastSurname ?? ""}</Text>
            <Text style={styles.sub_text}>Inspector del Bien Inmueble</Text>
            <Text style={styles.sub_text}>{real_estate.dependency}  </Text>





        </DocumentPdf>
    )
}

export default InpectionDoc


import { StyleSheet, Text } from '@react-pdf/renderer';
import { FC } from 'react';
import moment from 'moment';
import writtenNumber from 'written-number';
import months from './../../../../../utils/ui/months';
import Html from 'react-pdf-html';
import DocumentPdf from './../../../../../utils/components/document_pdf/index';



const styles = StyleSheet.create({
    title: {
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold',
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
    sub_text: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 13,
        textAlign: 'justify',
        fontFamily: 'Helvetica'
    },
    text_red: {
        margin: 12,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
        color: 'red',
        textDecoration: 'underline',
    },
    text_red_bold: {
        margin: 12,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica-Bold',
        color: 'red',
    },
    text_red_lined: {
        margin: 12,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
        textDecoration: 'line-through',
        color: 'red',
    },
    underlined: {
        fontSize: 12,
        margin: 10,
        fontFamily: 'Helvetica-Bold',
        textDecoration: 'underline'
    },
    italic: {
        fontSize: 12,
        margin: 10,
        fontFamily: 'Helvetica-Oblique',
    },
    squared: {
        // font: '10px Arial',
        lineHeight: '13px',
        position: 'relative',
        bottom: '5px',
    },
    header: {
        marginTop: -15,
        marginBottom: 10,
        fontSize: 8,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: 'grey',
    }
});

interface Idata {
    values_contract?: any;
    arrendamiento?: any;
    realEstate?: any;
    showViewer?: boolean;
}


const LeaseContractPdf: FC<Idata> = ({ values_contract, arrendamiento, realEstate, showViewer }) => {
    const table_lider = `
        <style>
            table {
                margin: 10px;
            }
            .frame_up {
                border-top: 1px solid #000;
                border-left: 1px solid #000;
            }
            .middle_frame {
                border-left: 1px solid #000;
            }
            .frame_down {
                border-left: 1px solid #000;
                border-bottom:: 1px solid #000;
            }
            .right_frame {
                border-right: 1px solid #000;
                padding-left: 3px;
                padding-right: 3px;
                font-size: 12px;
                font-family: Helvetica;
                text-align: left;
            }
        </style>
        <table>
            <thead>
                <tr class="frame_up">
                    <td class="right_frame">Elaboró:</td>
                    <td class="right_frame">Revisó:</td>
                    <td class="right_frame">Aprobó:</td>
                    <td class="right_frame">Revisó y Aprobó:</td>
                </tr>
            </thead>
            <tbody>
                <tr class="middle_frame">
                    <td class="right_frame">${arrendamiento?.elaborated.name}</td>
                    <td class="right_frame">${arrendamiento?.revised.name}</td>
                    <td class="right_frame">${arrendamiento?.approved.name}</td>
                    <td class="right_frame">${values_contract.secretary.name}</td>
                </tr>
                <tr class="frame_down frame_up ">
                    <td class="right_frame">Abogado Contratista Unidad Administración de Bienes Inmuebles</td>
                    <td class="right_frame">Coordinadora Jurídica Unidad Administración de Bienes Inmuebles</td>
                    <td class="right_frame">Líder de Programa Unidad Administración de Bienes Inmuebles</td>
                    <td class="right_frame">Subsecretario de Gestión de bienes</td>
                </tr>
            </tbody>
        </table>

    `;
    const table_principal = `
        <style>
            table {
                margin: 10px;
            }
            .p40 {
                text-align: left;
                font-size: 12px;
                padding-left: 3px;
                padding-right: 3px;
                margin-top: 10px;
                margin-bottom: 0px;
            }

        </style>
        <table>
            <thead>
                <tr>
                    <td class="p40">EL ARRENDADOR:</td>
                    <td class="p40">MUNICIPIO DE MEDELLÍN; Secretaría de Suministros y Servicios. NIT. 890.905.211-1</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p40">EL(LA)ARRENDATARIO(A):</td>
                    <td class="p40">
                        ${arrendamiento.applicant.type_society === "Persona Juridica" ?
            arrendamiento.applicant.company_name
            :
            `${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname}`

        }
                    </td>
                </tr>
                <tr>
                    <td class="p40">IDENTIFICACIÓN DEL(LA) ARRENDATARIO(A):</td>
                    <td class="p40">
                        ${arrendamiento.applicant.type_society === "Persona Juridica" ?
            `NIT : ${arrendamiento?.applicant.id_number}`
            :
            `C.C : ${arrendamiento?.detailsApplicant.id_number}`

        }
                    </td>
                </tr>
                <tr>
                    <td class="p40">REPRESENTANTE LEGAL:</td>
                    <td class="p40">
                        ${arrendamiento.applicant.type_society === "Persona Juridica" ?
            `${arrendamiento?.detailsRepresentative.names.firstName} ${arrendamiento?.detailsRepresentative.names.lastName} ${arrendamiento?.detailsRepresentative.surnames.firstSurname} ${arrendamiento?.detailsRepresentative.surnames.lastSurname}`
            :
            `${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname}`
        }
                    </td>
                </tr>
                <tr>
                    <td class="p40">C.C. REPRESENTANTE LEGAL:</td>
                    <td class="p40">
                    ${arrendamiento.applicant.type_society === "Persona Juridica" ?
            `${arrendamiento?.detailsRepresentative.id_number} `
            :
            `${arrendamiento?.detailsApplicant.id_number} `
        }
                    </td>
                </tr>
                <tr>
                    <td class="p40">MATRÍCULA INMOBILIARIA:</td>
                    <td class="p40">${realEstate?.registry_number}</td>
                </tr>
                <tr>
                    <td class="p40">C B M L:</td>
                    <td class="p40">${realEstate?.address?.cbmls?.uabi}</td>
                </tr>
                <tr>
                    <td class="p40">ESCRITURA /FECHA/NOTARIA:</td>
                    <td class="p40">${realEstate?.acquisitions?.map(ad => {
            return ` ${ad.act_value} / ${moment(ad.acquisition_date).format('DD-MM-YYYY')} /  Notaría ${ad.entity_number} `
        })}</td>
                </tr>
                <tr>
                    <td class="p40">AVALÚO DEL INMUEBLE:</td>
                    <td class="p40">${`($${arrendamiento.appraisal_number}) ${writtenNumber(arrendamiento.appraisal_number, { lang: 'es' })}`} Pesos M. L.</td>
                </tr>
                <tr>
                    <td class="p40">ÁREA A ENTREGAR:</td>
                    <td class="p40">Digite el área del inmueble que va a entregar en arrendamiento m<span className="ft11_contractLease">2</span></td>
                </tr>
                <tr>
                    <td class="p40">DIRECCIÓN DEL INMUEBLE:</td>
                    <td class="p40">${realEstate?.address?.address}</td>
                </tr>
                <tr>
                    <td class="p40">TIPO DE INMUEBLE:</td>
                    <td class="p40">${arrendamiento.business_type.select === "otro" ? arrendamiento.business_type.input : arrendamiento.business_type.select}</td>
                </tr>
                <tr>
                    <td class="p40">OBJETO DEL CONTRATO:</td>
                    <td class="p40">${values_contract?.object_contract}</td>
                </tr>
                <tr>
                    <td class="p40">DURACIÓN DEL CONTRATO:</td>
                    <td class="p40">${`(${arrendamiento.contract_period}) ${writtenNumber(arrendamiento.contract_period, { lang: 'es' })} meses`}</td>
                </tr>
                <tr>
                    <td class="p40">CANON MENSUAL:</td>
                    <td class="p40">${`($${realEstate?.canyon_value}) ${writtenNumber(realEstate?.canyon_value, { lang: 'es' })}`}</td>
                </tr>
                <tr>
                    <td class="p40">IVA 19%:</td>
                    <td class="p40">${`($${arrendamiento.IVA})  ${writtenNumber(arrendamiento?.IVA, { lang: 'es' })}`}</td>
                </tr>
                <tr>
                    <td class="p40">AFORO O RECOBRO SERVICIOS PÚBLICOS:</td>
                    <td class="p40">${arrendamiento.value_public_service}</td>
                </tr>
                <tr>
                    <td class="p40">ADMINISTRACIÓN U OTROS:</td>
                    <td class="p40">${` ($${arrendamiento?.administration_value}) ${writtenNumber(arrendamiento?.administration_value, { lang: 'es' })}`}</td>
                </tr>
                <tr>
                    <td class="p40">VALOR TOTAL MENSUAL:</td>
                    <td class="p40">${` ($${arrendamiento?.subtotal}) ${writtenNumber(arrendamiento?.subtotal, { lang: 'es' })}`}</td>
                </tr>
                <tr>
                    <td class="p40">VALOR TOTAL DEL CONTRATO:</td>
                    <td class="p40">${` ($${arrendamiento?.total}) ${writtenNumber(arrendamiento?.total, { lang: 'es' })}`}</td>
                </tr>
            </tbody>
        </table>

    `;
    return (
        <DocumentPdf
            showToolbar={false}
            title="Contrato de Arrendamiento Bien Inmueble"
            header={{
                code: 'Cód. FO-ADMI-170',
                version: 'Versión 87',
                title: { prefix: 'Formato', name: 'FO-ADMI Minuta Contrato de Arrendamiento Bien Inmueble' },
            }}
            // showViewer={showViewer}

        >
            <Text style={styles.header} fixed>CONTRATO DE ARRENDAMIENTO N°</Text>
            <Text style={styles.title}>CONTRATO DE ARRENDAMIENTO N°</Text>
            <Html>{table_principal}</Html>
            <Text style={styles.text}>
                Entre los suscritos a saber,
                <Text style={styles.subtitle}> {values_contract?.secretary?.name} </Text>
                con cédula de ciudadanía No. <Text style={styles.subtitle}> {values_contract?.secretary?.id_number}, </Text>
                en su calidad de
                Secretario(a) de Suministros y Servicios del Municipio de Medellín,
                nombrado mediante el Decreto Municipal N° <Text style={styles.subtitle}>{values_contract.decree_number} del {moment(values_contract.decree_date).format('DD/MM/YYYY')} </Text>
                y acta de posesión N° <Text style={styles.subtitle}>{values_contract.act_number} del {moment(values_contract.minutes_date).format('DD/MM/YYYY')}, </Text>  en uso de sus facultades
                legales y las otorgadas por los Decretos Municipales Nros. 883 de
                2015, 1039 de 2016 y manual de contratación expedidos por el Señor
                Alcalde de Medellín, obrando en nombre y representación del
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN</Text>, facultado por la Ley
                136 de 1994, la Ley 80 de 1993, sus decretos reglamentarios y de
                acuerdo a las disposiciones pertinentes del Código Civil, quien en
                adelante se denominará EL ARRENDADOR, de una parte y de la otra,
                <Text style={styles.subtitle}>
                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                        ` ${arrendamiento?.detailsRepresentative.names.firstName} ${arrendamiento?.detailsRepresentative.names.lastName} ${arrendamiento?.detailsRepresentative.surnames.firstSurname} ${arrendamiento?.detailsRepresentative.surnames.lastSurname} `

                        :
                        ` ${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname} `
                    }
                </Text>
                identificado con la cédula de ciudadanía No
                <Text style={styles.subtitle}>
                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                        ` ${arrendamiento?.detailsRepresentative.id_number} `
                        :
                        ` ${arrendamiento?.detailsApplicant.id_number} `
                    }
                </Text>
                quien actúa en
                <Text style={styles.subtitle}>
                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                        ` nombre y representación  legal de ${arrendamiento.applicant.company_name} con NIT ${arrendamiento.applicant.id_number}, `
                        :
                        ` nombre propio, `
                    }
                </Text>
                quien en lo sucesivo se denominará
                EL(LA) ARRENDATARIO(A), se ha decidido celebrar el presente CONTRATO
                DE ARRENDAMIENTO, previo el agotamiento de los requisitos establecidos en
                las normas vigentes, de carácter municipal y nacional, contrato que se
                regirá por la ley aplicable y las cláusulas que a continuación se
                enuncian: <Text style={styles.subtitle}>PRIMERA: OBJETO. </Text>EL ARRENDADOR
                entrega a título de arrendamiento y EL (LA) ARRENDATARIO(A) recibe al
                mismo título, un inmueble de propiedad del Municipio de Medellín
                ubicado en <Text style={styles.subtitle}>{realEstate?.address?.address}.</Text> Bien Inmueble identificado con
                Matrícula <Text style={styles.subtitle}>{realEstate?.registry_number}</Text>, CBML <Text style={styles.subtitle}>{realEstate?.address?.cbmls?.uabi}</Text>,  Código de activo fijo
                <Text style={styles.subtitle}> {realEstate?.sap_id}</Text> y Título de adquisición:
                <Text style={styles.subtitle}>
                    {realEstate?.acquisitions?.map(ad => {
                        return ad.title_type;
                    })}
                </Text>
                <Text style={styles.subtitle}> SEGUNDA: ÁREAS Y LINDEROS. </Text>El
                área a entregar en arrendamiento corresponde a <Text style={styles.subtitle}>{values_contract?.dispose_area}</Text> m2
                y los linderos son los siguientes:
                <Text style={styles.subtitle}> {arrendamiento.boundaries} </Text>
                con radicado del informe de Prediación:
                <Text style={styles.subtitle}> {arrendamiento.prediation_number} y fecha {arrendamiento.prediation_date}. TERCERA: DESTINACIÓN. </Text>
                EL (LA) ARRENDATARIO(A) podrá hacer uso del inmueble objeto del presente
                contrato, única y exclusivamente para <Text style={styles.subtitle}> {arrendamiento?.destination_realEstate} CUARTA: PLAZO (${arrendamiento?.contract_period}) ${writtenNumber(arrendamiento?.contract_period, { lang: 'es' })} </Text>
                meses a partir de la fecha de suscripción del acta de
                inicio:<Text style={styles.subtitle}> {moment(values_contract.start_date).format('DD/MM/YYYY')}, </Text>
                previa aprobación de la póliza de arrendamiento o póliza de
                cumplimiento por la Unidad Administración de Bienes Inmuebles de la
                Secretaría de Suministros y Servicios (si aplica).
                <Text style={styles.subtitle}>PARÁGRAFO PRIMERO: </Text>No obstante, el plazo de
                vigencia o duración señalado anteriormente, las partes de mutuo
                acuerdo y en cualquier momento, podrán dar por terminado este contrato
                sin que haya lugar al pago de suma alguna por concepto de
                indemnización. Dado el aviso de terminación y aceptado el mismo por la
                otra parte, se indicará la fecha en que se entregará o recibirá real y
                materialmente el inmueble, la cual no podrá ser superior a treinta
                (30) días calendario. <Text style={styles.subtitle}>QUINTA: </Text>
                <Text style={styles.text_red}>
                    <Text style={styles.text_red_bold}>RENOVACIÓN DEL CONTRATO. </Text>
                    Antes del vencimiento del plazo,
                    el contrato podrá renovarse mediante comunicado en el formato
                    establecido para el efecto y con una antelación de noventa (90) días
                    calendario anteriores a su terminación previo acuerdo entre las
                    partes, para lo cual se surtirán todos los trámites pertinentes de una
                    nueva relación contractual, de acuerdo con el procedimiento y política
                    vigente aplicable previo cumplimiento de trámites y documentos que
                    indicará el supervisor del contrato. <Text style={styles.text_red_bold}>PARÁGRAFO:</Text> En caso de que se acepte por las
                    partes la renovación del contrato, el canon aplicable será igual al
                    último pagado más el incremento del porcentaje que para el efecto haya
                    establecido la Subsecretaría de Catastro y se haya adoptado por la
                    Secretaría de Suministros y Servicios mediante circular para la vigencia
                    que corresponda.
                </Text>
                <Text style={styles.text_red_lined}>
                    <Text style={styles.text_red_bold}>PRÓRROGA DEL CONTRATO. </Text>
                    El presente contrato no podrá
                    prorrogarse de manera automática. No obstante, previo mutuo acuerdo
                    entre las partes y cumplimiento de los trámites y documentos que
                    indicará el supervisor del contrato, se podrá prorrogar el plazo por
                    un término igual al inicialmente pactado, a través de un otrosí
                    modificatorio. La solicitud de prórroga presentada por cualquiera de
                    las partes, se hará mediante comunicación escrita, en la cual se
                    manifieste de forma clara, expresa e inequívoca la voluntad de
                    prorrogar el plazo contractual y deberá solicitarse con una antelación
                    mínima de treinta (30) días calendario a la fecha de terminación del
                    contrato. Una vez agotado el requisito anterior, el Secretario de
                    Despacho con competencia para la celebración del otrosí modificatorio,
                    procederá a suscribirlo y dará validez con su firma.
                    <Text style={styles.text_red_bold}> PARÁGRAFO: </Text>
                    Podrá pactarse un plazo superior,
                    siempre que el mismo sea justificado, previo análisis de conveniencia
                    y oportunidad sobre los criterios técnicos, administrativos,
                    financieros y jurídicos del contrato.
                </Text>
                <Text style={styles.subtitle}> SEXTA: </Text>
                <Text style={styles.text_red}>
                    <Text style={styles.text_red_bold}>PRÓRROGA DEL CONTRATO. </Text>
                    El presente contrato no podrá prorrogarse de manera automática. No
                    obstante, previo mutuo acuerdo entre las partes y cumplimiento de
                    los trámites y documentos que indicará el supervisor del contrato,
                    se podrá prorrogar el plazo por un término igual al inicialmente
                    pactado, a través de un otrosí modificatorio. La solicitud de
                    prórroga presentada por cualquiera de las partes, se hará mediante
                    comunicación escrita, en la cual se manifieste de forma clara,
                    expresa e inequívoca la voluntad de prorrogar el plazo contractual y
                    deberá solicitarse con una antelación mínima de treinta (30) días
                    calendario a la fecha de terminación del contrato. Una vez agotado
                    el requisito anterior, el Secretario de Despacho con competencia
                    para la celebración del otrosí modificatorio, procederá a
                    suscribirlo y dará validez con su firma. :

                </Text>
                <Text style={styles.text_red_lined}>
                    <Text style={styles.text_red_bold}>RENOVACIÓN DEL CONTRATO.</Text>
                    A la terminación
                    del contrato, sólo por vencimiento del plazo, el contrato podrá
                    renovarse previo acuerdo entre las partes, para lo cual se surtirán
                    todos los trámites pertinentes de una nueva relación contractual, de
                    acuerdo con el procedimiento y política vigente aplicable.
                    <Text style={styles.text_red_bold}> PARÁGRAFO: </Text>
                    En caso de que se acepte por las
                    partes la renovación del contrato, el canon aplicable será igual al
                    último pagado más el incremento del porcentaje que para el efecto haya
                    establecido la Subsecretaría de Catastro y se haya adoptado por la
                    Secretaría de Suministros y Servicios mediante circular para la vigencia que corresponda.
                </Text>
                <Text style={styles.subtitle}> SÉPTIMA: CANON. </Text>
                El canon de arrendamiento como valor de este contrato corresponderá a la suma de
                <Text style={styles.subtitle}> (${realEstate?.canyon_value}) {writtenNumber(realEstate?.canyon_value, { lang: 'es' })} </Text>
                mensuales, más el IVA del 19% correspondiente a la suma de
                <Text style={styles.subtitle}> (${arrendamiento?.IVA}) {writtenNumber(arrendamiento?.IVA, { lang: 'es' })} </Text>
                mensuales, para un total mensual de <Text style={styles.subtitle}>
                    (${realEstate?.canyon_value + arrendamiento?.IVA}) {writtenNumber((realEstate?.canyon_value + arrendamiento?.IVA), { lang: 'es' })}. PARÁGRAFO PRIMERO: </Text>Cuando el plazo del
                contrato sea superior a un (01) año o cuando al vencimiento del plazo
                se realice la renovación con el nuevo contrato, el canon establecido
                en esta cláusula se aumentará anualmente en el porcentaje que para el
                efecto indique la Subsecretaría de Catastro y sea adoptado por la
                Secretaría de Suministros y Servicios mediante circular, lo anterior,
                conforme lo señala la Circular No. 003 del 10 de agosto de 2016 que
                establece las <Text style={styles.italic}>
                    “Políticas de Operación del Ingreso no Tributario arrendamientos e intereses de mora rentas
                    contractuales”,
                </Text> emanada de la Subsecretaria de Ingresos de la Secretaría de Hacienda.
                <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO</Text>: Para los inmuebles
                destinados a vivienda, se aplicará el incremento establecido por la
                ley 820 de 2003 o la normatividad que la modifique o derogue. De no
                aceptarse por parte de EL (LA) ARRENDATARIO(A) el incremento anual
                establecido, se podrá dar por terminado el presente contrato sin que
                ello genere indemnización alguna para EL ARRENDADOR ni para EL (LA)
                ARRENDATARIO(A). En este caso y después del aviso de terminación, se
                indicará la fecha en que se entregará o recibirá real y materialmente
                el inmueble, la cual no podrá ser superior a treinta (30) días
                calendario. <Text style={styles.subtitle}>OCTAVA: FORMA DE PAGO. </Text>EL (LA)
                ARRENDATARIO(A) estará en la obligación de pagar el canon de
                arrendamiento y demás valores (cuando apliquen), que deberán ser
                cancelados por EL (LA) ARRENDATARIO(A) hasta completar el tiempo de
                ejecución del contrato, previa elaboración de la factura por parte del
                arrendador. <Text style={styles.subtitle}>PARÁGRAFO PRIMERO: </Text>EL (LA)
                ARRENDATARIO(A), estará en la obligación de pagar el canon de
                arrendamiento y demás valores cuando apliquen. El Municipio de
                Medellín mediante la Circular No. 202160000060 de 2021 proferida por la Secretaria de
                Hacienda, dio cumplimiento a lo requerido por la DIAN en la resolución
                No. 000042 de 05 de mayo de 2020, modificada con la resolución 000094
                del 30 de septiembre de 2020, en lo relacionado a la facturación electrónica, motivo por el cual
                las facturas de cobro que le serán expedidas a EL (LA)
                ARRENDATARIO(A) le serán remitidas al correo electrónico <Text style={styles.subtitle}>
                    {arrendamiento.applicant.type_society === "Persona Natural" ? arrendamiento.detailsApplicant.email : arrendamiento.applicant.email}
                </Text> para lo cual deberá realizar el pago mediante la presentación de la factura
                ante la entidad bancaria respectiva o a través de los canales
                virtuales destinados para tal fin.
                El pago se deberá realizar dentro
                de las fechas señalas en la respectiva factura, fechas de vencimiento
                que son inmodificables; de presentarse pluralidad de arrendatarios la
                factura electrónica será expedida a nombre de
                <Text style={styles.subtitle}>
                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                        ` ${arrendamiento.applicant.company_name} `
                        :
                        ` ${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname} `

                    }
                </Text>
                sin perjuicio de que todos sean deudores solidarios.
                <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: </Text>En todo caso, EL (LA)
                ARRENDATARIO(A) pagará a EL ARRENDADOR cualquier fracción de mes que
                quede a deber por terminación anticipada.
                <Text style={styles.subtitle}> NOVENA: MORA. </Text>La mora en el pago del canon
                de arrendamiento, dará lugar al cobro de intereses moratorios en la
                forma y monto establecidos en la Ley y la gestión de la cartera podrá
                iniciarse desde el mismo momento que se incurra en la mora.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: </Text>Si la mora es en dos (2)
                períodos consecutivos de pago (mensualidades), se constituirá en una
                justa causa para solicitar la terminación del contrato por parte de EL
                ARRENDADOR y a exigir de inmediato la restitución del bien entregado
                en arrendamiento, así mismo, dará lugar a la activación de la cláusula
                penal contenida en la cláusula décima séptima.
                <Text style={styles.subtitle}> DÉCIMA: RENUNCIAS. </Text>EL (LA) ARRENDATARIO(A)
                renuncia expresamente a los requerimientos para ser constituido en
                mora, así como al derecho de retención que a cualquier título le
                conceda la Ley sobre el inmueble objeto del presente contrato.
                <Text style={styles.subtitle}> DÉCIMA PRIMERA: RÉGIMEN JURÍDICO APLICABLE AL CONTRATO.
                </Text> Las partes manifiestan que el régimen aplicable a este acto o contrato
                corresponde al descrito en el Código Civil para los contratos de
                arrendamiento, a lo dispuesto en la Ley 80 de 1993, ley 1150 del 2007
                sus decretos reglamentarios, o la normatividad vigente y manifiestan
                que este tipo de contratos no se consideran ni se pueden considerar
                actos mercantiles o de comercio, razón por la cual no será aplicable
                el régimen jurídico contenido en el Código de Comercio en parte
                alguna. Para los bienes inmuebles destinados a vivienda se aplicará la
                Ley 820 de 2003. <Text style={styles.subtitle}>DÉCIMA SEGUNDA:
                    OBLIGACIONES. (I) De EL (LA) ARRENDATARIO(A):
                </Text> Se obliga a: 1) Pagar el canon de arrendamiento pactado en la
                forma y términos convenidos y demás
                valores generados (cuando apliquen). 2) Emplear el mayor cuidado en la
                conservación del bien objeto de este contrato, siendo responsable de
                cualquier deterioro que no provenga de la naturaleza o uso legítimo de
                la cosa. 3) Adoptar todas las medidas de seguridad concernientes a la
                conservación, custodia y a la prevención del bien, dimensionando los
                riesgos inherentes a su conservación y frente a las actividades
                desarrolladas en el mismo. 4) Vigilar el inmueble por su cuenta y riesgo. En consecuencia, EL
                ARRENDADOR no asume responsabilidad por daños, pérdidas, robos,
                etc., que allí se llegaren a presentar y por ende, no se genera
                ninguna clase de responsabilidad civil por daños causados a terceros
                o a sus bienes atribuible a EL ARRENDADOR. 5) Dar aviso a EL
                ARRENDADOR sobre los daños del inmueble que lo pongan en peligro o
                el normal funcionamiento de los servicios.6) Destinar el bien únicamente
                para el fin acordado, previo el cumplimiento de los requisitos
                exigidos por la(s) autoridad(es) competente(s). 7) Restituir el
                inmueble en buenas condiciones, dentro de los plazos pactados y a paz
                y salvo por los conceptos que apliquen. 8) Constituir las garantías de
                que trata el texto contractual, cuando aplique. 9) Suscribir el acta
                de inicio. 10) Permitir la realización por parte de EL ARRENDADOR, de
                las mejoras o reparaciones que se requieran para el mantenimiento del
                inmueble y realizar sólo aquellas que le hayan sido autorizadas
                conforme a la normativa vigente. 11) Impedir que el inmueble entregado
                en arrendamiento sea utilizado para fines diferentes al determinado en
                el objeto del presente contrato. 12) Pagar con tiempo y en
                oportunidad, los servicios públicos domiciliarios existentes en el
                inmueble, que sean propios de éste o que hayan sido instalados a
                cuenta y riesgo de EL(LA) ARRENDATARIO(A), las cuotas de
                administración que se generen sobre el inmueble arrendado y los gastos
                generados por el uso normal, mantenimiento y vigilancia del inmueble,
                pagar los impuestos y gastos ne cesarios para la legalización del
                contrato, así como la consecución de licencias y permisos para la
                actividad a desarrollar en el bien inmueble arrendado, conforme a la
                normativa vigente; 13) Deberá enviar constancia mensual al supervisor
                del contrato, de los pagos correspondientes a los servicios públicos,
                administración u otros que apliquen; ya sea a través de correo
                electrónico o celular; según lo acordado en el acta de inicio. 14)
                EL(LA) ARRENDATARIO(A) estará obligado a realizar las reparaciones
                locativas y a reparar los deterioros que provengan de su actividad o
                de la de sus dependientes, salvo el deterioro que provenga por el paso
                del tiempo y el uso normal del inmueble; 15) En caso de renovación del
                presente contrato mediante uno nuevo, deberá ser aceptado el canon de
                arrendamiento con su respectivo incremento, so pena de iniciar proceso
                de devolución o entrega del inmueble con la finalización del presente
                contrato; 16) Informar oportunamente los cambios de los datos de contacto
                del arrendatario, tales como
                dirección, correo electrónico, teléfono, celular que figuran en el
                contrato; 17) Las demás que se establezcan
                en el presente contrato y en la Ley;
                {(arrendamiento.business_type.select === "Restaurante" || arrendamiento.business_type.select === "Cafetería") &&
                    <>
                        18) EL (LA) ARRENDATARIO (A) deberá cumplir con el Decreto Municipal 0440 de 2009
                        “Por medio del cual se adopta el Manual para el Manejo Integral de
                        Residuos Sólidos (PMIRS), del Área Metropolitana del Valle de Aburrá y
                        se dictan otras disposiciones generales para la Gestión Integral de
                        Residuos Sólidos en Municipio de Medellín” y con el Decreto Nacional
                        2981 de 2013, especialmente lo consagrado en el Capítulo II Artículo
                        17 “Obligaciones de los usuarios para el almacenamiento y presentación
                        de residuos sólidos”; EL (LA) ARRENDATARIO(A) no podrá utilizar ICOPOR
                        en la prestación de la actividad económica desarrollada en el local
                        objeto de este contrato. Para esto deberá dar opciones más amigables
                        con el ambiente como productos reutilizables, productos de polyboard
                        (cartón) y/o caña de azúcar y/o almidón de maíz y/o biodegradables; EL
                        (LA) ARRENDATARIO(A) deberá realizar el adecuado almacenamiento,
                        recolección y disposición final de aceite usado, con un gestor que
                        cumpla con la normatividad ambiental vigente.
                    </>
                }
                <Text style={styles.subtitle}> (II) DEL ARRENDADOR: </Text>1) Entregar el bien
                arrendado en condiciones de habitabilidad o de uso; 2) Realizar las
                mejoras que sean necesarias para garantizar las condiciones de
                habitabilidad o de uso en beneficio de EL (LA) ARRENDATARIO(A); 3)
                Entregar factura física o digital para el pago del canon de
                arrendamiento y demás conceptos.
                <Text style={styles.subtitle}> DÉCIMA TERCERA: PROHIBICIONES
                    ESPECIALES DE EL (LA) ARRENDATARIO(A). </Text>
                1) Queda expresamente prohibido a
                EL(LA) ARRENDATARIO(A) almacenar material inflamable, explosivo,
                radiactivo o similar o sustancias ilegales o prohibidas o cualquier
                tipo de armas de fuego y que puedan constituir violación de las leyes;
                2) Los inmuebles de propiedad del MUNICIPIO DE MEDELLÍN que sean
                entregados en arrendamiento, no podrán ser subarrendados sin la
                autorización previa, expresa y por escrito del Secretario de Despacho
                que tenga competencia para celebrar el contrato; 3) Realizar mejoras
                sin el cumplimiento de los requisitos establecidos en la normativa
                vigente; 4) EL(LA) ARRENDATARIO (A) tiene prohibido utilizar otras
                zonas o áreas diferentes a las del objeto del contrato sin la
                autorización escrita de la Unidad Administración de Bienes Inmuebles;
                <Text style={styles.subtitle}> DÉCIMA CUARTA: RÉGIMEN DE MEJORAS. </Text>Las
                mejoras son aquellas obras civiles, arquitectónicas, eléctricas, hidráulicas, telefónicas que requiera un
                inmueble para garantizar las condiciones de habitabilidad o de uso.
                Las partes convienen que en este contrato podrán ser ejecutadas por EL
                (LA) ARRENDATARIO(A) –a su cuenta y riesgo, quien deberá
                sin excepción y de manera previa, presentar a EL ARRENDADOR para su
                aprobación, el proyecto y/o los planos de las obras a realizar cuando
                aplique. Para emitir la aprobación del proyecto, EL ARRENDADOR tendrá
                en cuenta la destinación de que trata la cláusula tercera de este
                contrato, la infraestructura técnica existente, el Plan de
                Ordenamiento Territorial, las demás normas concordantes y consultar
                con la Dependencia o Secretaría competente para emitir el concepto
                técnico correspondiente acerca de la factibilidad y conveniencia de
                realizar tales adaptaciones y/o mejoras. Una vez se haya autorizado la
                realización de las mejoras y adaptaciones requeridas, EL (LA)
                ARRENDATARIO(A) deberá obtener los permisos que de acuerdo a la Ley
                corresponda, aportando copia de los mismos a la Secretaría con la cual
                celebró el contrato de arrendamiento. Así mismo, deberá realizar bajo
                su costa los trámites que sean necesarios ante la curaduría. Sin el
                cumplimiento de las anteriores exigencias no podrá realizarse por
                parte de EL (LA) ARRENDATARIO(A) ningún tipo de mejora y adaptación
                sobre el bien inmueble de propiedad municipal. Si EL (LA)
                ARRENDATARIO(A) lleva a cabo obras sin previa autorización o
                desconociendo lo autorizado, EL ARRENDADOR podrá ordenar su retiro
                inmediato, constituyéndose en una justa causa para dar por terminado
                anticipadamente el presente contrato. En todo caso, las partes
                entienden y así lo manifiestan, que las mejoras en general sólo
                reportan utilidad, beneficio y comodidad a EL (LA) ARRENDATARIO(A) y
                no son necesarias ni útiles para EL ARRENDADOR, por lo tanto, no habrá
                lugar a indemnización o compensación alguna por este concepto.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: MEJORAS REMOVIBLES.</Text>
                Son aquellas que pueden ser
                retiradas sin que se deterioren las condiciones normales del inmueble
                objeto de arrendamiento. Para el efecto, EL (LA) ARRENDATARIO(A)
                cuenta con diez (10) días contados a partir de la terminación del
                presente contrato para proceder a su retiro; EL (LA) ARRENDATARIO (A)
                deberá garantizar que el inmueble quede en perfecto estado al momento
                de su entrega. Cumplido el término anterior sin que EL (LA)
                ARRENDATARIO(A) retire las mencionadas mejoras, éstas pasarán a ser de
                propiedad de EL ARRENDADOR sin que haya lugar a indemnización alguna.
                <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: MEJORAS FIJAS. </Text>
                Son aquellas que no pueden ser retiradas porque conllevan el deterioro en las condiciones
                de habitabilidad o en el uso del inmueble objeto del contrato de
                arrendamiento o se afecta la estructura técnica existente, por lo
                tanto, acrecen a éste a la terminación del contrato por cualquier
                circunstancia, quedando de propiedad de EL ARRENDADOR sin que haya
                lugar a indemnización alguna. Las partes acuerdan, entienden y así lo
                manifiestan que dichas mejoras, en caso de ser autorizadas por EL
                ARRENDADOR, sólo reportan beneficios, utilidades y/o comodidades a EL
                (LA) ARRENDATARIO(A), quien las ejecuta por su cuenta y riesgo, que no
                son necesarias, útiles ni relevantes para EL ARRENDADOR y en
                consecuencia, no habrá lugar a indemnización alguna por este concepto.
                <Text style={styles.subtitle}> PARÁGRAFO TERCERO: </Text>EL (LA) ARRENDATARIO(A)
                efectuará por su cuenta y riesgo las reparaciones locativas que ordena
                la Ley de acuerdo a lo establecido en los artículos 2028, 2029 y 2030
                del Código Civil. <Text style={styles.subtitle}>PARÁGRAFO CUARTO: </Text>Los
                daños y perjuicios que EL (LA) ARRENDATARIO(A) cause con ocasión de
                las reparaciones o mejoras por él realizadas, correrán a cargo
                exclusivo de EL (LA) ARRENDATARIO(A).
                <Text style={styles.subtitle}> DÉCIMA QUINTA: SERVICIOS PÚBLICOS E IMPUESTOS. </Text> El
                pago de los servicios públicos, al igual que los impuestos de
                cualquier índole, ya sea nacionales, departamentales o municipales,
                que se originen en razón de la(s) actividad(es) que EL (LA)
                ARRENDATARIO(A) ejerza dentro del inmueble arrendado, serán de su
                cuenta y riesgo. El pago de los servicios públicos correrá por cuenta
                de EL (LA) ARRENDATARIO(A) desde la fecha de entrega del inmueble
                hasta la fecha de restitución del mismo, los cuales serán calculados
                mediante sistema de aforo o recobro o facturación directa de la
                empresas públicas, facturación que en todo caso, se realizará en la
                forma en que determine la Secretaría de Suministros y Servicios de
                conformidad con las normas vigentes o que le apliquen en cualquier
                momento de la ejecución del contrato y durante la ocupación del
                inmueble. <Text style={styles.subtitle}>PARÁGRAFO PRIMERO: </Text>Si EL (LA)
                ARRENDATARIO(A) no cancela en su oportunidad los servicios que le
                corresponden y como consecuencia de ello, las Empresas Públicas los
                suspendieren y/o retiraren los contadores o medidores, este hecho se
                entenderá como incumplimiento del contrato pudiendo exigir EL
                ARRENDADOR la restitución inmediata del inmueble.
                <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: </Text>EL ARRENDADOR recibirá el
                inmueble y podrá cobrar sumas generadas por el incumplimiento del
                contrato hasta tanto EL (LA)
                ARRENDATARIO(A) presente Certificado de Paz y Salvo por concepto de
                servicios públicos, pago de Impuesto de Industria y Comercio (si
                aplica), cánones y demás.
                <Text style={styles.subtitle}> DÉCIMA SEXTA: RESTITUCIÓN. </Text>Vencido el plazo
                de ejecución del contrato, EL LA ARRENDATARIO (A) deberá realizar al
                día siguiente calendario la entrega inmediata del inmueble libre de
                personas, animales o cosas; el inmueble deberá ser restituido en el
                mismo estado en que le fue entregado, incluidas las mejoras realizadas
                por EL ARRENDADOR, salvo el deterioro por el uso normal del inmueble y
                el deterioro por el paso del tiempo. Igualmente, el bien deberá estar
                a paz y salvo por concepto de servicios públicos domiciliarios
                expedido por las Empresas Públicas de Medellín u otros conceptos,
                conservando la posibilidad de llevarse consigo las mejoras realizadas
                no necesarias, consideradas voluntarias y que no afecten en manera
                alguna el bien inmueble entregado a través de este acto o contrato.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO</Text>: En el evento en que EL LA
                ARRENDATARIO (A) requiera un término adicional para la entrega del
                inmueble, que se encuentre debidamente justificado, este se deberá
                pactar de mutuo acuerdo mediante acta suscrita entre EL LA
                ARRENDATARIO (A) y el supervisor del contrato, documento en el cual se
                establecerá lo correspondiente al cobro de fracciones por concepto de
                ocupación, además de servicios públicos y administración en los
                eventos aplicables. Dicha acta será el documento soporte para la
                facturación de las fracciones adiciones a cobrar.
                <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: </Text>El acuerdo previamente
                señalado no generará novación del contrato de arrendamiento.
                <Text style={styles.subtitle}> DÉCIMA SÉPTIMA: ABANDONO DEL INMUEBLE. </Text>Al
                suscribirse el presente contrato, EL LA ARRENDATARIO (A), faculta
                expresamente a EL ARRENDADOR para ingresar al inmueble y recuperar su
                tenencia con el solo requisito de la presencia de dos testigos, en
                procura de evitar el deterioro o el desmantelamiento de tal inmueble y
                en aras de poder disponer del mismo y en cumplimiento de la debida
                administración de los bienes inmuebles del Municipio, siempre que por
                cualquier circunstancia el mismo permanezca abandonado o deshabitado
                por parte EL LA ARRENDATARIO (A) y que la exposición al riesgo amenace
                la integridad física del bien o de sus vecinos.
                <Text style={styles.subtitle}> DÉCIMA OCTAVA: GARANTÍAS. {values_contract.guarantee} </Text>
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: </Text>EL (LA)
                ARRENDATARIO (A) ampliará las garantías cuando se presenten
                modificaciones en el canon de arrendamiento y el plazo de ejecución
                del contrato. <Text style={styles.subtitle}>PARÁGRAFO SEGUNDO: </Text>Las citadas
                garantías las deberá entregar EL (LA) ARRENDATARIO(A) a EL ARRENDADOR,
                dentro de los diez (10) días calendario siguientes a la suscripción
                del presente contrato, de no ser así, se entenderá que desiste del
                contrato y se iniciarán los procedimientos requeridos para darlo por
                terminado. La aprobación de la póliza será requisito previo para la
                firma del acta de inicio del presente contrato.
                <Text style={styles.subtitle}> DÉCIMA NOVENA: CLÁUSULA PENAL. </Text>
                En el presente contrato se pacta entre las partes cláusula penal, la cual se hará exigible de
                manera unilateral sin necesidad de declaratoria judicial, cuando a
                juicio del Secretario competente, previo informe de supervisión, el
                contratista incurra en el incumplimiento del contrato. Esta cláusula
                penal se considerará como tasación anticipada de los perjuicios
                causados a EL ARRENDADOR, la que se estima en un veinte (20%) del
                valor total del contrato.
                <Text style={styles.subtitle}> VIGÉSIMA: PROHIBICIÓN DE CESIÓN O SUBARRIENDO. </Text>
                ARRENDATARIO(A) se obliga expresamente a no ceder o subarrendar el
                inmueble objeto de este contrato ni transferir su tenencia ni permitir el uso
                por parte de terceros a ningún título, a menos de que conste
                autorización expresa de EL ARRENDADOR y por escrito. El incumplimiento
                de lo aquí estipulado es causal de terminación del contrato por parte
                de EL ARRENDADOR y procederá la restitución del inmueble objeto del
                mismo por parte de EL (LA) ARRENDATARIO(A) de manera inmediata.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: </Text>Cuando en el caso que el
                inmueble esté ubicado dentro de un Centro Comercial Popular y
                pertenezca al programa de reubicación de venteros ambulantes, éste
                deberá ser atendido exclusivamente por EL (LA) ARRENDATARIO(A). El
                incumplimiento dará lugar a la terminación del contrato y restitución
                del bien. <Text style={styles.subtitle}>
                    VIGÉSIMA PRIMERA: CAUSALES DE TERMINACIÓN Y/O ANTICIPADA DEL CONTRATO.
                </Text> Son causales para terminar anticipadamente el presente contrato, dando lugar a la restitución
                inmediata del inmueble, las siguientes: a) Cuando las exigencias del
                servicio público lo requieran o la situación de orden público lo
                imponga; b) El incumplimiento de cualquiera de las obligaciones de EL
                (LA) ARRENDATARIO(A); c) Cuando se comprobare que la documentación
                aportada para la adjudicación fuere fraudulenta; d) Por la renuencia
                en la suscripción del acta de inicio se dará la terminación del
                contrato o se entenderá como desistimiento del contrato e)
                Por disolución o liquidación de persona jurídica de EL (LA)
                ARRENDATARIO(A); f) Por liquidación forzosa de EL (LA)
                ARRENDATARIO(A); g) Por embargos judiciales de EL (LA)
                ARRENDATARIO(A) que afecten el normal cumplimiento de las
                obligaciones surgidas por medio del presente contrato; h) Por no
                mantener vigente las garantías de este contrato; i) Por destrucción
                o deterioro del inmueble que haga imposible su utilización, j) Por
                las causales especiales de terminación anticipada previstas en este
                contrato; k) Por ceder o subarrendar el inmueble objeto de este
                contrato, transferir su tenencia o permitir el uso por parte de
                terceros l) Por no ocupación del inmueble arrendado por parte de
                EL(LA) ARRENDATARIO(A), dentro de los sesenta (60) días calendario
                siguientes a la fecha de la suscripción del contrato o del acta de
                entrega; m) Por solicitud de EL ARRENDADOR para ser utilizado en
                fines propios, n) El desuso del inmueble en virtud del contrato de
                arrendamiento por parte de EL(LA) ARRENDATARIO(A), será causal para
                la terminación del mismo, ñ) En caso que el inmueble se destine a
                objeto diferente al estipulado en este contrato, o) En el caso en
                que EL ARRENDADOR requiera el inmueble para ejercer las funciones
                que le son propias y p) Para los beneficiarios del programa de reubicación de
                venteros ambulantes en los Centros Comerciales Populares, el concepto
                desfavorable del estudio socioeconómico verificado en cualquier
                momento de la ejecución del presente contrato.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: </Text>EL (LA) ARRENDATARIO(A)
                está facultado para solicitar la terminación anticipada del presente
                contrato. Para el efecto, manifestará por escrito su interés de
                restituir el inmueble otorgado en arrendamiento con una antelación no
                inferior a tres (3) meses a la fecha de restitución proyectada. En
                este caso no habrá lugar a indemnización alguna. No obstante, para que
                proceda la solicitud de EL (LA) ARRENDATARIO(A), deberá encontrarse al
                día en el pago de los cánones de arrendamiento y demás obligaciones
                derivadas de este contrato.
                <Text style={styles.subtitle}> VIGÉSIMA SEGUNDA: RÉGIMEN LEGAL DE INHABILIDADES E
                    INCOMPATIBILIDADES. </Text>
                Las partes dejan expresa constancia bajo la gravedad del juramento
                que se entiende prestado con la firma de este contrato, que no se
                encuentran incursas en ninguna de las causales de inhabilidad e
                incompatibilidad de que tratan la Ley 80 de 1993 y las demás
                disposiciones legales vigentes.
                <Text style={styles.subtitle}> VIGÉSIMA TERCERA: PRIMA Y/O COMPENSACIÓN. </Text>
                EL(LA) ARRENDATARIO(A) manifiesta que no tiene derecho a prima, ni
                compensación alguna por la terminación del contrato, entrega del
                inmueble al vencimiento del plazo o por la ocurrencia de una,
                cualquiera de las causales de restitución del inmueble.
                <Text style={styles.subtitle}> VIGÉSIMA CUARTA: SUPERVISIÓN E INSPECCIÓN. </Text>
                La vigilancia técnica, administrativa, financiera, contable y
                jurídica sobre el presente contrato será ejercida por un servidor
                público designado mediante oficio por la Secretaría de Suministros y
                Servicios, el cual deberá velar por el cumplimiento de las
                obligaciones contractuales e informar sobre su incumplimiento y de
                toda irregularidad que se presente sobre hechos imputables a EL (LA)
                ARRENDATARIO(A), que pueda causar perjuicios al MUNICIPIO DE MEDELLÍN,
                como propietario del inmueble y cumplir con las demás disposiciones en
                materia de supervisión. EL MUNICIPIO DE MEDELLÍN se reserva el derecho
                de inspeccionar la parte física del inmueble y su ocupación,
                independientemente de la supervisión del contrato, con el fin de
                realizar las verificaciones requeridas al respecto como propietario
                del inmueble.
                <Text style={styles.subtitle}> VIGÉSIMA QUINTA: MÉRITO EJECUTIVO. </Text>El
                presente contrato de arrendamiento presta mérito ejecutivo de acuerdo
                con la Ley y para efectos del cumplimiento de las obligaciones en él
                contenidas. <Text style={styles.subtitle}> VIGÉSIMA SEXTA: </Text>
                <Text style={styles.subtitle}>VÍNCULO LABORAL. </Text>EL ARRENDADOR, sus
                empleados, dependientes, subordinados, entre otros; no adquieren
                ningún vínculo o relación de carácter laboral con EL (LA)
                ARRENDATARIO(A) ni con el personal que él designe para el cumplimiento
                de las obligaciones derivadas del presente contrato.
                <Text style={styles.subtitle}> VIGÉSIMA SÉTIMA: INDEMNIDAD. </Text>EL (LA)
                ARRENDATARIO(A) deberá mantener libre al MUNICIPIO DE MEDELLÍN de
                cualquier daño o perjuicio originado en reclamaciones de terceros y
                que se deriven de sus actuaciones o de las de sus subcontratistas o
                dependientes.
                <Text style={styles.subtitle}> VIGÉSIMA OCTAVA: TRATAMIENTO DE DATOS. </Text>El
                Municipio de Medellín, en concordancia con lo establecido en la
                Constitución Política de Colombia (arts. 15 y 20), la Ley 1581 de 2012
                <Text style={styles.italic}> "Por la cual se dictan disposiciones generales para la protección de
                    datos personales"
                </Text> y el Decreto 1377 de 2013
                <Text style={styles.italic}> "Por el cual se reglamenta parcialmente la Ley 1581 de 2012" </Text>
                comprometido con el uso legal, el tratamiento de datos de acuerdo con
                los fines establecidos y la seguridad y privacidad de la información
                que recolecte, almacene, use, circule o suprima, y en cumplimiento del
                mandato legal y el compromiso institucional en cuanto al tratamiento
                de la información, adopta la Política para el tratamiento de datos
                personales” mediante el Decreto 1096 de 2018, los cuales serán
                tratados con la finalidad de recolectar, incorporar, reportar,
                procesar y consultar en bancos de datos la información relacionada o
                derivada de este contrato, así como su entrega a terceros para las
                gestiones de cobro a que hubiere lugar. En este sentido, el Municipio
                de Medellín como entidad responsable del tratamiento de los datos, le
                comunica que la información suministrada, con ocasión a la celebración
                del contrato de arrendamiento suscrito con la Secretaría de
                Suministros y Servicios del Municipio de Medellín, serán tratados de
                manera segura y confidencial, y que le asisten los derechos de
                conocerlos, actualizarlos y rectificarlos, acorde con la norma de
                protección de datos personales y la política adoptada. Los datos
                personales recolectados y almacenados por el Municipio de Medellín, en
                la medida que dependen de la relación directa o indirecta que tenga
                con EL LA ARRENDATARIO (A), en este caso la suscripción del contrato
                de arrendamiento, podrá ser necesario obtener, su nombre, dirección,
                número telefónico, dirección de residencia, correo electrónico, entre
                otros. Así mismo, el Municipio de Medellín podrá, entregar o dar
                acceso a terceros a los datos personales que recopile y trate, caso en
                el cual dichos terceros actuarán como encargados del tratamiento y
                estarán sujetos a los
                deberes y obligaciones que para tal figura prevé la Ley 1581 de 2012 y
                sus decretos reglamentarios.
                <Text style={styles.subtitle}> VIGÉSIMA NOVENA: AUTORIZACIÓN DE TRATAMIENTO DE DATOS. </Text>
                EL LA ARRENDATARIO (A) manifiesta que ha sido informado por el Municipio de Medellín, de lo
                siguiente: 1) Que el Municipio de Medellín actuará como responsable
                del tratamiento de datos personales de los cuales es titular 2) De la
                finalidad del tratamiento de datos 3) De los derechos que como titular
                de los datos le asisten. 4) Que el Municipio de Medellín se reserva el
                derecho a realizar modificaciones a la Política de Tratamiento de
                Datos Personales en cualquier momento, lo cual será informado y
                publicado oportunamente en la página Web o por correo electrónico. En
                señal de conformidad con lo anterior, EL ARRENDATARIO, AUTORIZA a EL
                ARRENDADOR, para incorporar, reportar, procesar y consultar en bancos
                de datos la información relacionada o derivada de este contrato, así
                como su entrega a terceros para las gestiones de cobro a que hubiere
                lugar. <Text style={styles.subtitle}> TRIGÉSIMA: DEUDORES SOLIDARIOS. </Text>En
                caso de presentarse pluralidad de arrendatarios, los mismos serán
                deudores de forma solidaria e indivisible de todas las cargas y
                obligaciones contenidas en el presente contrato, tanto durante el
                termino inicialmente pactado como durante sus renovaciones y hasta la
                restitución real del inmueble a favor del ARRENDADOR. Serán deudores
                solidarios por concepto de: cánones de arrendamiento, pago de
                servicios públicos, cuotas de administración cuando apliquen,
                indemnizaciones, daños en el inmueble, clausulas penales, costas
                procesales y cualquier otro concepto derivado del presente contrato,
                las cuales podrán ser exigidas por EL ARRENDADOR a cualquiera de los
                obligados por la vía ejecutiva, sin necesidad de requerimientos
                privados o judiciales. Requerimientos a los cuales renuncian
                expresamente conforme a la cláusula octava del presente contrato.
                <Text style={styles.subtitle}> TRIGÉSIMA PRIMERA: AUDITORÍA INTERNA. </Text>En
                ejercicio de la función de auditoría interna, la Secretaría de
                Evaluación y Control mediante comunicación suscrita por el Secretario
                de Despacho o los Subsecretarios, podrá requerir del contratista toda
                la información relacionada con los aspectos técnicos, administrativos,
                financieros y legales del contrato, pudiendo ser necesario,
                inspeccionar los documentos, lugares o sedes donde se ejecute la
                prestación, según las técnicas de auditorías aplicadas. Los informes
                de auditoría interna son de uso reservado de la Secretaría de
                Evaluación y Control, el ordenador del gasto y señor Alcalde. La
                reticencia del contratista
                a atender los requerimientos de la auditoría interna será objeto de
                multa por mora en la entrega de información, con fundamento en el
                Decreto Municipal 2505 del 17 de Diciembre de 2013 y la Circular No.
                002 del 10 de Enero de 2014 emitida por el Comité Técnico de
                Orientación y Seguimiento de la Contratación.
                <Text style={styles.subtitle}> TRIGESIMA SEGUNDA: PUBLICACIÓN. </Text>De
                conformidad con el Decreto 1082 de 2015 y con el artículo 223 del
                Decreto-Ley 019 de 2012, el presente contrato una vez
                perfeccionado, deberá ser publicado por parte del MUNICIPIO DE
                MEDELLÍN. <Text style={styles.subtitle}> TRIGÉSIMA TERCERA: PERFECCIONAMIENTO DEL CONTRATO Y EJECUCIÓN. {values_contract?.object_contract} </Text>
                <Text style={styles.subtitle}> TRIGÉSIMA CUARTA: NOTIFICACIONES. </Text>Las
                notificaciones que cualquiera de las partes deseare hacer a la otra,
                deben formularse por escrito a las siguientes direcciones:
                DIRECCIÓN ARRENDATARIO <Text style={styles.subtitle}> {arrendamiento.location_applicant.address} </Text>
                DIRECCIÓN ARRENDADOR Oficina 701 Centro Administrativo Municipal – CAM
                – Calle 44 No. 52 – 165.
                <Text style={styles.subtitle}> TRIGÉSIMA QUINTA: IMPUESTOS. </Text>EL (LA)
                ARRENDATARIO(A) procederá a cancelar el impuesto de timbre así como
                cualquier otro impuesto y/o estampilla a que hubiere lugar con la
                legalización del presente contrato.
                <Text style={styles.subtitle}> TRIGÉSIMA SEXTA: DOMICILIO. </Text>Para todos los
                efectos legales distintos de la competencia en materia judicial, se
                fija como domicilio, el municipio de Medellín.
            </Text>
            <Text style={styles.text}>
                Para constancia, se firma en la ciudad de Medellín, a los  del {new Date().getDate()} dias del mes de  {months((new Date().getMonth() + 1).toString())} de  {new Date().getFullYear()}
            </Text>
            <Text style={styles.text}></Text>
            <Text style={styles.sub_text}>
                <Text style={styles.subtitle}>{values_contract.secretary.name}</Text>
            </Text>
            <Text style={styles.sub_text}>
                Cédula N°<Text style={styles.subtitle}> {values_contract.secretary.id_number} </Text>
            </Text>
            <Text style={styles.sub_text}>Secretario de Suministros y Servicios</Text>
            <Text style={styles.sub_text}>Municipio de Medellín</Text>
            <Text style={styles.sub_text}>Arrendador</Text>

            <Text style={styles.text}></Text>
            <Text style={styles.sub_text}>
                <Text style={styles.subtitle}>
                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                        `${arrendamiento?.detailsRepresentative.names.firstName} ${arrendamiento?.detailsRepresentative.names.lastName} ${arrendamiento?.detailsRepresentative.surnames.firstSurname} ${arrendamiento?.detailsRepresentative.surnames.lastSurname}`
                        :
                        `${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname}`
                    }
                </Text>
            </Text>
            <Text style={styles.sub_text}>
                Cédula N° <Text style={styles.subtitle}>
                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                        `${arrendamiento.detailsRepresentative.id_number}`
                        :
                        `${arrendamiento.detailsApplicant.id_number}`
                    }
                </Text>
            </Text>
            {arrendamiento.applicant.type_society === "Persona Juridica" &&
                <Text style={styles.sub_text}>
                    Obra en representacion de
                    <Text style={styles.subtitle}> {arrendamiento?.applicant.company_name}</Text>
                </Text>
            }
            <Text style={styles.sub_text}>
                Dirección: <Text style={styles.subtitle}>{arrendamiento?.location_applicant?.address}</Text>
            </Text>
            <Text style={styles.sub_text}>
                Teléfono: <Text style={styles.subtitle}>{arrendamiento.detailsApplicant.phone_number} </Text>
            </Text>
            <Text style={styles.sub_text}>
                Correo electrónico: <Text style={styles.subtitle}>{arrendamiento.detailsApplicant.email} </Text>
            </Text>
            <Text style={styles.sub_text}>
                NIT N° <Text style={styles.subtitle}> {arrendamiento.detailsApplicant.id_number} </Text>
            </Text>
            <Text style={styles.sub_text}>
                Arrendatario
            </Text>
            <Text style={styles.text}></Text>
            <Html>{table_lider}</Html>
        </DocumentPdf>
    )
}

export default LeaseContractPdf

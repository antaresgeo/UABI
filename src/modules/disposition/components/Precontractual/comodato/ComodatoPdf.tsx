
import { FC } from 'react';
import { Document, Image, Page, StyleSheet, Text } from '@react-pdf/renderer';
import imgbs64 from '../../../../../utils/assets/img/header.png';
import writtenNumber from 'written-number'
import months from './../../../../../utils/ui/months';
import Html from 'react-pdf-html';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
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
    },
    sub_text: {
        margin: '0 12',
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica',
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        margin: 10,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
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
    }
});

interface Idata {
    values?: any;
    realEstate?: any;
}


const ComodatoPdf: FC<Idata> = ({ values, realEstate }) => {
    let date = values?.registration_date.split("-")
    let prediationDate = values?.prediation_date.split("-")
    let contract_value = 0;
    if (values?.resolution === "si") {
        contract_value =
            (values?.Value_economic_obligations +
                values?.network_value +
                values?.administration_value +
                values?.conservation_value +
                values?.cleaning_value +
                values?.surveillance_value +
                values?.value_domiciliary_public +
                values?.value_repairs_damages +
                values?.value_locative_repairs)
    } else {
        contract_value = values?.commercial_appraisal;
    }
    const table_obligaciones = `
    <style>
        table {
            border: 1px solid #000;
            margin: 10px;
        }
        .p40 {
            text-align: left;
            font-size: 11px;
            padding-left: 3px;
            padding-right: 3px;
            margin-top: 0px;
            margin-bottom: 0px;
        }

    </style>
    <table cellPadding="0" cellSpacing="0" >
        <thead>
            <tr>

                <td>
                    <p class="p40">Tipificación</p>
                </td>
                <td>
                    <p class="p40">Estimación</p>
                </td>
                <td>
                    <p class="p40">Mecanismo de Cobertura</p>
                </td>
                <td><p class="p40">Asignación</p></td>
                <td><p class="p40">Vigencia</p></td>
                <td><p class="p40">Aplica</p></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <p class="p40">
                        Incumplimiento del contratista de las obligaciones y prohibiciones  contraídas en virtud del contrato
                    </p>
                </td>
                <td>
                    <p class="p40">
                        ${values?.lockable_base}% del valor del contrato
                    </p>
                </td>
                <td>
                    <p class="p40" >
                        Garantía de Cumplimiento: Ampara al Beneficiario el total y perfecto cumplimiento del contrato pactado de acuerdo a sus términos, condiciones y especificaciones contractuales
                    </p>
                </td>
                <td><p class="p40">Contratista</p></td>
                <td><p class="p40">Plazo del contrato y 4 meses más</p></td>
                <td><p class="p40 text-center">SI</p></td>
            </tr>
        </tbody>
    </table>
    `;

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
                font-size: 11px;
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
                </tr>
            </thead>
            <tbody>
                <tr class="middle_frame">
                    <td class="right_frame">${values?.elaborated.name}</td>
                    <td class="right_frame">${values?.revised.name}</td>
                    <td class="right_frame">${values?.approved.name}</td>
                </tr>
                <tr class="frame_down">
                    <td class="right_frame">${values?.elaborated.post}</td>
                    <td class="right_frame">${values?.revised.post}</td>
                    <td class="right_frame">${values?.approved.post}</td>
                </tr>
            </tbody>
        </table>

    `;

    const table_risk = `
        <style>
            table {
                border: 1px solid #000;
                margin: 10px;
            }
            td {
                padding-left: 3px;
                padding-right: 3px;
                font-size: 11px;
                font-family: Helvetica;
                text-align: left;
            }
        </style>
        <table>
            <thead>
                <tr>
                    <td>Riesgo Previsible</td>
                    <td>Grado de Ocurrencia</td>
                    <td>Grado de Impacto</td>
                    <td>Contratista</td>
                    <td>Municipio</td>
                    <td>Mecanismo de Mitigación</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>REGULATORIO</td>
                    <td>${values?.regulatory_risk.degree_occurrence}</td>
                    <td>${values?.regulatory_risk.impact_degree}</td>
                    <td>${values?.regulatory_risk.responsable === "Contratista" ? "X" : ""}</td>
                    <td>${values?.regulatory_risk.responsable === "municipio" ? "X" : ""}</td>
                    <td>${values?.regulatory_risk.mitigation_mechanism}</td>
                </tr>
                <tr>
                    <td>OPERATIVOS: Incumplimiento del contratista de las obligaciones y prohibiciones contraídas en virtud del contrato.</td>
                    <td>${values?.operational_risk.degree_occurrence}</td>
                    <td>${values?.operational_risk.impact_degree}</td>
                    <td>${values?.operational_risk.responsable === "Contratista" ? "X" : ""}</td>
                    <td>${values?.operational_risk.responsable === "municipio" ? "X" : ""}</td>
                    <td>${values?.operational_risk.mitigation_mechanism}</td>
                </tr>
            </tbody>
        </table>
    `;
    const table_values = `
        <style>
            table {
                border: 1px solid #000;
                margin: 10px;
            }
            td {
                padding-left: 3px;
                padding-right: 3px;
                font-size: 11px;
                font-family: Helvetica;
                text-align: left;
            }
        </style>
        <table>
            <thead>
                <tr>
                    <td>Obligaciones</td>
                    <td>Cuantía</td>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Valor de las reparaciones locativas y deterioros a cargo del comodatario.
                        (Estimación de valor de las posibles reparaciones y deterioros que pueda requerir el bien inmueble, según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble)
                    </td>
                    <td>$${values?.value_locative_repairs}</td>
                </tr>
                <tr>
                    <td>
                        Valor de eventuales reparaciones por daños a terceros (estimación según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble)
                    </td>
                    <td>$${values?.value_repairs_damages}</td>
                </tr>
                <tr>
                    <td>
                        Valor de los servicios públicos domiciliarios (incluir energía, acueducto, alcantarillado, saneamiento, gas, telefonía, internet, televisión y demás servicios suscritos con las empresas prestadoras de servicios públicos que se deban mantener al día por el uso del inmueble según informe realizado por la Secretaría o dependencia que tenga a cargo el inmueble)
                    </td>
                    <td>$${values?.value_domiciliary_public}</td>
                </tr>
                <tr>
                    <td>Valor gastos de vigilancia</td>
                    <td>$${values?.surveillance_value}</td>
                </tr>
                <tr>
                    <td>Valor gastos de aseo</td>
                    <td>$${values?.cleaning_value}</td>
                </tr>
                <tr>
                    <td>
                        Valor gastos de conservación y mantenimiento en general que le correspondan al comodatario, el cual deberá actualizarse para cada vigencia según IPC durante el termino de duración del contrato.
                    </td>
                    <td>$${values?.conservation_value}</td>
                </tr>
                <tr>
                    <td>
                        Valor cuotas de administración o expensas comunes ( si aplica)
                    </td>
                    <td>$${values?.administration_value}</td>
                </tr>
                <tr>
                    <td>
                        Valor mantenimiento de redes contra incendios y/o reposición de extintores.
                    </td>
                    <td>$${values?.network_value}</td>
                </tr>
                <tr>
                    <td>
                        Valor de todos aquellos gastos y obligaciones económicas o no que se requiera cuantificar, de manera tal que se garantice su cumplimiento o para que, ante una eventual afectación de la póliza de cumplimiento, el porcentaje del valor exigido tenga la suficiencia necesaria para que su incumplimiento quede cubierto
                    </td>
                    <td>$${values?.Value_economic_obligations}</td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>Valor total: ${contract_value} </td>
                </tr>
            </tbody>
        </table>
    `;

    return (
        <Document>
            <Page style={styles.body}>
                <Image fixed
                    style={styles.header}
                    src={imgbs64}
                />
                <Text style={styles.subtitle}>
                    1. Identificación del Ingreso: N/A.
                </Text>
                <Text style={styles.subtitle}>
                    2. Estimación del valor del contrato:
                </Text>
                <Text style={styles.text}>
                    Para efectos del contrato de comodato se tendrá como valor <Text style={styles.subtitle}>
                        (${contract_value}) {writtenNumber(contract_value, { lang: 'es' })}
                    </Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>3. Solicitante:</Text>
                    <Text style={styles.subtitle}>{` ${values?.applicant.company_name} NIT: ${values?.applicant.id_number}`}</Text>
                </Text>
                <Text style={styles.subtitle}>
                    4. Justificación de la contratación.
                </Text>
                <Text style={styles.text}>
                    El Municipio de Medellín, tiene dentro de sus bienes, inmuebles que no se requieren para
                    el desarrollo de su objeto misional, no se encuentran incluidos en un plan de ventas, no
                    serán enajenados; ni se requieren para la ejecución de una obra futura y que por sus
                    características pueden ser destinados al servicio de la comunidad a través de la
                    modalidad de contratación especial reglamentada en el decreto 092 de 2017, en la
                    tipología de contrato de comodato con
                    <Text style={styles.subtitle}> {values?.loan_typology} </Text>
                    como entidades de reconocida idoneidad y necesarias para el impulso y ejecución de
                    programas sociales requeridos a través del plan de desarrollo. Al presente contrato no
                    le asiste la realización de proceso competitivo atendiendo a la no existencia de
                    pluralidad de solicitantes, de acuerdo con la particularidad, función, reconocimiento y
                    operación territorial
                    <Text style={styles.subtitle}>
                        {values?.loan_typology === 'las juntas de acción comunal' &&
                            ' de la Junta de Acción Comunal de conformidad con el radio de acción' +
                            ' establecido en los respectivos estatutos de la organización y el' +
                            ' reconocimiento de la personería jurídica otorgada por la Secretaría' +
                            ' de Participación Ciudadana '}
                    </Text> con fundamento en lo establecido en el artículo 355 de la Constitución Política de
                    Colombia, el decreto 092 de 2017
                    <Text style={styles.subtitle}>
                        {values?.loan_typology === 'las juntas de acción comunal' &&
                            ', la Ley 743 de 2002 modificada por la ley 1989 de 2019 '}
                    </Text> y la Ley 9 de 1989.
                </Text>
                <Text style={styles.text}>
                    En este orden, las Entidades Estatales del Gobierno nacional, departamental, distrital y
                    municipal pueden contratar con entidades privadas sin ánimo de lucro y de reconocida
                    idoneidad en los términos del artículo 355 de la Constitución Política y del decreto 092
                    de 2017, en atención a lo establecido en el artículo 4 inciso primero, cuando en la etapa de planeación se
                    verifique que no existe más de una entidad sin ánimo de lucro para el desarrollo del
                    programa o actividad de interés público, no se requiere adelantar proceso competitivo.
                    Así las cosas, como se indicó antes y para el caso concreto, se identificó que
                    <Text style={styles.subtitle}>{` ${values?.applicant.company_name}, `}</Text>
                    de acuerdo con la circunscripción territorial, los proyectos y actividades a ejecutar
                    con la comunidad inscrita en la organización y la demás población beneficiaria de su
                    radio de acción, se pudo establecer que es la única entidad como organización de base,
                    para el uso, goce y disposición del inmueble.
                </Text>
                <Text style={styles.text}>
                    De acuerdo con lo expuesto y la documentación aportada,
                    <Text style={styles.subtitle}> {values?.applicant.company_name} </Text>
                    presentó solicitud mediante la cual indica que con el bien o los bienes entregados en
                    comodato, llevará a cabo las siguientes actividades,
                    <Text style={styles.subtitle}> {values?.activities}</Text> beneficiando a
                    <Text style={styles.subtitle}> la poblacion {values?.population} del
                        barrio {values?.location?.neighborhood} y comuna {values?.location?.commune} del
                        sector {values?.benefited_sector} </Text>
                    con el uso y puesta a disposición de la comunidad del inmueble con matrícula
                    <Text style={styles.subtitle}> {realEstate?.registry_number}</Text>, CBML
                    <Text style={styles.subtitle}> {realEstate?.address?.cbmls?.uabi}</Text>, activo fijo
                    <Text style={styles.subtitle}> {realEstate?.sap_id}</Text>, ubicado en la dirección
                    <Text style={styles.subtitle}> {realEstate?.address?.address}</Text>, cuyo tipo es
                    <Text style={styles.subtitle}> {values?.business_type}</Text>
                </Text>
                <Text style={styles.text}>
                    Según la factibilidad del bien, en cuanto a lo técnico, físico, estado de habitabilidad
                    y disponibilidad, se puede determinar que cumple requisitos mínimos para ser destinado
                    al servicio de la comunidad, bajo la modalidad del contrato de comodato, atendiendo a
                    los lineamientos contractuales de la norma vigente.
                </Text>
                <Text style={styles.text}>
                    De acuerdo con lo antes previsto, se formulan los estudios previos para proceder a la
                    elaboración del contrato de comodato, previa consideración de: 1) cuantificación de las
                    obligaciones contractuales. 2) análisis de riesgos, 3) análisis de requerimiento o no, de establecer garantías para
                    cumplir obligaciones derivadas del contrato, y 4) obligación de publicarse en la
                    plataforma correspondiente.
                </Text>
                <Text style={styles.subtitle}>
                    5. Relación del objeto del solicitante con el objeto misional de la Secretaría que
                    entrega el bien en comodato.
                </Text>
                <Text style={styles.text}>
                    Con la entrega del bien inmueble en comodato
                    <Text style={styles.subtitle}> {realEstate?.dependency}</Text>, contribuye
                    <Text style={styles.subtitle}> {values?.dependence}</Text>
                </Text>
                <Text style={styles.subtitle}>
                    6. Descripción del objeto a contratar.
                </Text>
                <Text style={styles.text}>
                    Suscribir contrato de comodato sobre el bien inmueble de propiedad del Municipio de
                    Medellín identificado con matrícula
                    <Text style={styles.subtitle}> {realEstate?.registry_number}</Text>, CBML
                    <Text style={styles.subtitle}> {realEstate?.address?.cbmls?.uabi}</Text>, activo fijo
                    <Text style={styles.subtitle}> {realEstate?.sap_id}</Text>, ubicado en la dirección
                    <Text style={styles.subtitle}> {realEstate?.address?.address}</Text>, cuyo tipo es
                    <Text style={styles.subtitle}> {values?.business_type}</Text>, escritura N°
                    <Text style={styles.subtitle}>
                        {realEstate?.acquisitions?.map((ad) => {
                            let i = ad.acquisition_date.split('-');
                            return ` ${ad.act_value} del ${i[2]} de ${months(i[1])} de ${i[0]}, `;
                        })}
                    </Text>
                    El espacio a entregar en comodato consta de
                    <Text style={styles.subtitle}>
                        {values?.horizontal_property === "si"
                            ?
                            ` ${realEstate?.construction_area}`
                            :
                            ` ${realEstate?.total_area}`
                        }
                    </Text> m2 el cual
                    <Text style={styles.subtitle}> {values?.Horizontal_property}</Text>
                    se encuentra sometido a régimen de propiedad horizontal, cuyas
                    áreas y linderos se describen de la siguiente manera, según informe técnico de
                    Prediación con fecha de
                    <Text style={styles.subtitle}> {prediationDate[2]} de {months(prediationDate[1])} de {prediationDate[0]}.</Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}> 7. Destinación</Text>: debe destinarse el inmueble para:
                    <Text style={styles.subtitle}> {values?.destination_realEstate}</Text>
                </Text>
                <Text style={styles.subtitle}>
                    8. Especificaciones:
                </Text>
                <Text style={styles.subtitle}>
                    8.1	Obligaciones del comodatario.
                </Text>
                <Text style={styles.text}>
                    El<Text style={styles.subtitle}> COMODATARIO</Text>, se obliga:
                    1) A emplear el mayor cuidado en la conservación de los bienes, objeto de este contrato,
                    siendo responsable de cualquier
                    deterioro que no provenga de la naturaleza o uso legítimo de la cosa. 2) A impedir que
                    el inmueble sea ocupado para asuntos diferentes a los mencionados en la cláusula
                    tercera. 3) A realizar las reparaciones locativas y a reparar los deterioros que
                    provengan de su actividad o de las de sus dependientes, salvo el deterioro que provenga
                    por el paso del tiempo y el uso normal del inmueble. 4) A impedir que personas ajenas al
                    presente contrato se instalen en forma temporal o definitiva en el inmueble mencionado.
                    5) A restituir el inmueble dentro de los treinta (30) días siguientes a la solicitud de
                    entrega formulada por la Administración Municipal. 6) A no variar la destinación y uso
                    propuesto para el bien, determinado en la cláusula tercera de este contrato. 7)
                    Responder por los daños que los bienes entregados causen a terceros. 8) A permitir el
                    ingreso del personal adscrito al Municipio de Medellín, cuando EL
                    <Text style={styles.subtitle}> COMODANTE </Text>lo considere necesario, para
                    inspecciones físicas de rutina del bien o efectos de la ejecución de supervisión del
                    presente contrato de comodato. 9) Deberá pagar y aportar los recibos de paz y salvos de
                    Servicios Públicos cancelados,
                    <Text style={styles.subtitle}> {values?.peacesafe} </Text>
                    de tal forma que se pueda verificar el pago de todos los servicios públicos contratados
                    y trabajos realizados por cuenta del
                    <Text style={styles.subtitle}> COMODATARIO</Text>, y ante los requerimientos de quién
                    tenga a su cargo la supervisión. 10) Deberá proveer la respectiva vigilancia del
                    inmueble. 11) Aportar cada año los respectivos certificados de mantenimiento, registro y
                    vigencia de extintores a quien ejerza la supervisión del contrato. 12) Estar registrado
                    previamente en el SECOP II, con el fin de publicar los documentos contractuales. 13)
                    Presentar un informe trimestral al supervisor del contrato sobre el uso, estado,
                    destino, conservación del bien y las cuentas de servicios canceladas, así como las
                    facturas de pago de las cuotas de administración, impuesto predial, u otro, cuando a
                    ello hubiere lugar. De igual forma deberá presentar el plan de mejoramiento y
                    conservación y su ejecución, como también el balance de ingresos y egresos de la entidad
                    sin ánimo de lucro en los casos en los cuales se haya autorizado explotación económica
                    14) Realizar adaptaciones y mejoras con la aprobación por escrito de la Secretaria de
                    Suministros y Servicios, las cuales serán por su cuenta y riesgo. 15) Asumir los gastos generados por el uso normal, el mantenimiento, la
                    conservación y vigilancia del bien inmueble, así como los correspondientes a la
                    legalización del contrato como garantías, impuestos y publicación cuando a ello haya
                    lugar. 16) Participar en la terminación y liquidación del contrato, así como suscribir
                    las actas correspondientes.
                    {values?.obligations?.length > 0 &&
                        values?.obligations.map((o) => ` ${o.id}) ${o.obligation}.`)
                    }
                    Las demás obligaciones propias de los contratos de comodatos, de acuerdo con las
                    disposiciones legales, en especial, de las contenidas en la normatividad vigente.
                </Text>
                <Text style={styles.subtitle}>
                    8.2 Prohibiciones del comodatario.
                </Text>
                <Text style={styles.text}>
                    1) Realizar en el inmueble objeto del contrato de comodato cualquier actividad de la
                    cual se genere aprovechamiento económico para este de manera privada y por fuera de
                    la destinación del inmueble, y las demás prohibiciones contempladas en la
                    normatividad vigente. El incumplimiento de esta cláusula, dará lugar a la
                    terminación del contrato de comodato. 2) Queda expresamente prohibido en los
                    inmuebles entregados en comodato almacenar, consumir o expender bebidas alcohólicas,
                    sustancias psicoactivas o alucinógenas. 3) Utilización para sala de velación,
                    eventos políticos, cultos religiosos, parqueaderos, almacenamiento de productos
                    ilegales, hurtados, entre otros que no estén estipulados expresamente dentro del
                    objeto y alcance del presente contrato de comodato. 4) Cobrar cualquier suma de
                    dinero o contraprestación a la comunidad por el ingreso o acceso al inmueble dado en
                    comodato, salvo en aquellos casos previamente autorizados por la Secretaría de
                    Suministros y Servicios. 5) Arrendar o ceder el inmueble, o parte de él, para
                    desarrollar cualquier tipo de actividad, sin obtener autorización previa y escrita
                    de la Secretaría de Suministros y Servicios. 6) Ubicar casetas, tiendas o publicidad
                    sin la debida autorización de la Subsecretaría, Defensoría del Espacio Público y de
                    la Secretaría de Suministros y Servicios. 7) Destinar el inmueble entregado en
                    comodato a actividades diferentes para la que fue concedido. 8) Instalar negocios
                    comunitarios. 9) Realizar bailes públicos entendidos como aquellos anunciados
                    abiertamente, con cobro de ingreso, venta de licor y cuyo único objetivo es el
                    recaudo de fondo para los organizadores. 10) Extender más allá del horario permitido
                    por las autoridades competentes las reuniones sociales
                    <Text style={styles.subtitle}> ({values?.social_event})</Text> y actividades de
                    integración, educación o financiación. 11) Desarrollar actividades que superen los
                    índices permitidos de ruido, para zonas residenciales o comunitarias o que generen
                    conflictos de convivencia con la vecindad, en acuerdo a lo preceptuado en el Código
                    Nacional de Policía vigente, sin perjuicio de los manuales o normas de convivencia
                    que regulen el tema a nivel Municipal o Departamental.12) Realizar cualquier
                    actividad económica que no esté previa y debidamente autorizada por la Secretaría
                    que institucionalmente tiene adscrito el inmueble entregado en comodato.
                    {values?.prohibitions?.length > 0 &&
                        values?.prohibitions.map((p) => ` ${p.id}) ${p.prohibition}. `)
                    }
                    Todas aquellas que en ejecución del contrato resulten contrarias a los fines del comodato,
                    la convivencia ciudadana y los intereses del Municipio de Medellín.
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle} >8.3 Plazo del contrato: </Text>
                    El plazo del contrato de comodato a celebrar será de <Text style={styles.subtitle}>
                        ({values?.contract_period}) {writtenNumber(values?.contract_period, { lang: 'es' })}
                    </Text> meses, contados a partir de la entrega del inmueble, mediante acta de inicio suscrita por las
                    partes y previa aprobación de la póliza de cumplimiento.
                </Text>
                <Text style={styles.text}>
                    No obstante, el plazo establecido y en caso de requerir la Administración Municipal el inmueble,
                    para desarrollar las funciones que le son propias, podrá dar por terminado el contrato de comodato de forma unilateral.
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>8.4 Aforo por pago de servicios públicos:</Text> El valor para el pago de Servicios
                    públicos será el indicado en el respectivo documento de cobro emitido por la entidad prestadora del servicio público. No obstante,
                    en el caso en el que el inmueble sea compartido por varias entidades el valor de Servicios públicos deberá
                    ser determinado a través de aforo por parte de la Unidad de Mantenimiento adscrita a la Subsecretaría de
                    Gestión de Bienes, con base en todos los elementos y artefactos eléctricos a utilizar que tengan relación
                    con las actividades a desempeñar en el espacio que se entregará en comodato.
                </Text>
                <Text style={styles.text}>
                    Cabe aclarar que no está permitido el uso de muebles privados dentro de la oficina, tales como neveras,
                    microondas, cafeteras entre otros.
                </Text>
                <Text style={styles.text}>
                    Para el presente contrato el valor de los servicios públicos
                    <Text style={styles.subtitle}> {values?.public_service} </Text>
                    se determinó por aforo.
                    <Text style={styles.subtitle} >
                        {values?.public_service === 'si' &&
                            `  especificación: ${values?.capacity_specification}, cuyo valor es ($${values?.value_public_service})
                                    ${writtenNumber(values?.value_public_service, { lang: 'es' })} pesos
                                `}
                    </Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>{values?.economic_exploitation} autorización de explotación económica: EL COMODATARIO </Text>
                    {values?.economic_exploitation === 'si' ? (
                        <>
                            tendrá la posibilidad de constituir o crear a su cuenta y riesgo unidades
                            productivas dentro del inmueble, tales como cafeterías, venta de boletería,
                            así como, podrá permitir el uso de los espacios a terceros que realicen
                            actividades culturales sociales, empresariales y pedagógicas, que impliquen
                            retribución económica. <Text style={styles.subtitle}>PARÁGRAFO PRIMERO: </Text>
                            Los dineros recaudados a partir de la autorización concedida, única y
                            exclusivamente podrán ser destinados conforme porcentajes previamente
                            definidos por el comodatario y verificados por el supervisor de la siguiente
                            manera: un porcentaje para la realización y gastos de funcionamiento propios
                            del objeto social de la persona jurídica y otro porcentaje para el
                            mantenimiento y conservación del bien inmueble y los bienes muebles
                            existentes, el <Text style={styles.subtitle}>COMODATARIO </Text>
                            deberá entregar al supervisor del contrato de forma trimestral el plan de
                            mejoramiento y conservación y su respectiva ejecución, así como el balance
                            de los ingresos y egresos de la entidad sin ánimo de lucro. En caso de que
                            el supervisor identifique que los dineros obtenidos a partir de la presente
                            explotación económica están siendo aprovechados a su propio beneficio por
                            parte del representante legal u otro particular, será causal inmediata de
                            terminación del contrato de comodato y deberá iniciar proceso de restitución
                            del inmueble <Text style={styles.subtitle}>PARÁGRAFO SEGUNDO: El COMODATARIO </Text>
                            renuncia a todas las adquisiciones, adaptaciones y mejoras tanto en bienes
                            inmuebles como muebles, que se realicen con los dineros generados a través
                            de la explotación económica concedida sin excepción alguna.

                        </>
                    ) : (

                        'No tendrá ninguna autorización para explotación económica en este inmueble entregado en comodato '
                    )}
                </Text>
                <Text style={styles.subtitle}>
                    9. Fundamentos jurídicos que soportan la modalidad de contratación.
                </Text>
                <Text style={styles.text}>
                    El presente contrato de comodato se fundamenta en su aplicación bajo el Código Civil Colombiano,
                    el artículo 355 de la Constitución Política de Colombia, Decreto 092 de 2017, Ley 9 de 1989 en
                    la modalidad de contratación especial, en la tipología de contrato de comodato con entidades sin
                    ánimo de lucro (ESAL), como entidades de reconocida idoneidad y necesarias para el impulso y
                    ejecución de programas sociales requeridos a través del plan de desarrollo. De igual forma bajo
                    lo preceptuado en el Decreto 092 de 2017, al presente contrato le asistirá o no realización de
                    proceso competitivo en cuanto a la verificación de un único o pluralidad de solicitantes realizada
                    por parte de la Secretaría a cargo del inmueble.
                </Text>
                <Text style={styles.text}>
                    De igual forma lo dispuesto en el Código Civil para los contratos de comodato y en lo pertinente por
                    la Ley 80 de 1993, 1150 de 2007 y sus decretos reglamentarios en especial el Decreto 1082 de 2015.
                </Text>
                <Text style={styles.text}>
                    También son fundamentos jurídicos del presente proceso contractual las disposiciones contenidas en
                    la Ley 9ª de 1989, Ley 388 de 1997, Código Civil, Acuerdo Municipal 048 de 2014 (POT).
                </Text>
                <Text style={styles.subtitle}>
                    10. La justificación de los factores de selección que permitan identificar el mejor
                    solicitante.
                </Text>
                <Text style={styles.text}>
                    En aplicación de la normatividad vigente, en cuanto a los aspectos que regulan la
                    selección del contratista con el cual se llevará a cabo contrato de comodato, se indica
                    por parte de la
                    <Text style={styles.subtitle}> {realEstate?.dependency} </Text>
                    lo siguiente:
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>Verificación de un solo solicitante: </Text>
                    Una vez realizado el análisis de la solicitud de contrato de comodato instaurada por
                    <Text style={styles.subtitle}> {values?.applicant.company_name}, </Text>
                    se identificó que el programa o actividad de interés público, la satisfacción de la
                    necesidad o aspiración de la comunidad desarrollada por la entidad no
                    es ofrecida por otro contratista.
                    <Text style={styles.subtitle}> {values?.action_field}</Text>
                </Text>
                <Text style={styles.text}>
                    Por lo que para la presente suscripción del contrato de comodato no se requiere llevar a
                    cabo proceso competitivo. El cual justifica y soporta la modalidad de contratación especial
                    según lo preceptuado en el Decreto 092 de 2017 atendiendo, a la particularidad, función,
                    reconocimiento y operación territorial indicada en el párrafo anterior.
                </Text>
                <Text style={styles.subtitle}>
                    11. El soporte que permita la estimación, tipificación y asignación de los riesgos previsibles
                    que puedan afectar el equilibrio económico del contrato:
                </Text>
                <Text style={styles.text}>
                    De acuerdo al artículo 4 de la Ley 1150 de 2007 y el Decreto Nacional 1082 de 2015, dispone que
                    las entidades públicas deben incluir en los estudios previos la estimación, tipificación y
                    asignación de riesgos.
                </Text>
                <Text style={styles.text}>
                    De conformidad con lo anterior se procede a hacer el análisis del riesgo que corresponde en los
                    siguientes términos:
                </Text>
                <Text style={styles.sub_text}>
                    11.1 Riesgo regulatorio:
                </Text>
                <Text style={styles.sub_text}>
                    Comprende cambios de la carga impositiva tributaria de las reformas legales futuras y la adopción
                    de decisiones administrativas:
                </Text>
                <Text style={styles.sub_text}>
                    Financieras del COMODATARIO
                </Text>
                <Text style={styles.sub_text}>
                    Perdida de liquidez del COMODATARIO
                </Text>
                <Text style={styles.text}></Text>
                <Text style={styles.sub_text}>
                    11.2 Riesgos operativos:
                </Text>
                <Text style={styles.sub_text}>
                    Son intrínsecos al contrato y comprende todas las formas de incumplimiento de las obligaciones
                    que pueden generarse producto del acuerdo de voluntades:
                </Text>
                <Text style={styles.sub_text}>
                    Incumplimiento de las obligaciones surgidas del contrato.
                </Text>
                <Text style={styles.sub_text}>
                    Pago de salarios, prestaciones sociales e indemnizaciones.
                </Text>
                <Text style={styles.subtitle}>
                    12. Estimación del riesgo:
                </Text>
                <Text style={styles.text}>
                    La estimación del riesgo consiste en medir la probabilidad de ocurrencia de un evento y su
                    impacto en el caso que se materialice. La medición efectiva y cuantitativa del riesgo se asocia con la
                    posibilidad de pérdida futura. Para el caso de la contratación estatal no se establece una metodología
                    para la cuantificación del riesgo, lo cual da a la entidad cierto grado de discrecionalidad.
                </Text>
                <Text style={styles.text}>
                    Frente a la necesidad que se pretende satisfacer, se establecerá el grado de probabilidad de ocurrencia y
                    de impacto en relación con el equilibrio económico del contrato, utilizando una escala ordinal en la que se
                    hace referencia a criterios de medición como se presenta a continuación: MUY ALTO, ALTO, MEDIO, BAJO, MUY BAJO
                </Text>
                <Html>{table_risk}</Html>
                {values?.resolution === 'si' ? (
                    <>
                        <Text style={styles.text}>
                            13. Análisis, revisión y evaluación de las obligaciones pecuniarias y económicas
                            derivadas del contrato de comodato que permiten cuantificar y establecer el
                            valor asegurable o base para el aseguramiento de las obligaciones.{' '}

                        </Text>
                        <Text style={styles.text}>
                            En aplicación de la normativa vigente la
                            cuantificación de las obligaciones que permiten determinar el valor del contrato
                            o base para el aseguramiento de las obligaciones son las siguientes:
                        </Text>
                        <Html>{table_values}</Html>
                    </>
                ) : (
                    <>

                        <Text style={styles.subtitle}>
                            13. Análisis del valor fiscal del contrato para la determinación del valor o la base
                            para el aseguramiento de las obligaciones.
                        </Text>
                        <Text style={styles.text}>
                            Se tendrá el obtenido a partir del avalúo comercial vigente del inmueble sobre
                            el cual la Secretaría que entrega el inmueble en comodato determinará el
                            porcentaje del valor de la garantía. (El cual también puede ser el reportado en
                            el módulo de activos fijos para el respectivo inmueble)
                        </Text>
                    </>
                )}
                <Text style={styles.subtitle}>
                    14. El análisis que sustenta la exigencia de los mecanismos de cobertura que
                    garantizan las obligaciones surgidas con ocasión de la contratación directa
                    y del contrato a celebrar.
                </Text>
                <Html>{table_obligaciones}</Html>
                <Text style={styles.text}>
                    Así mismo, con el fin de minimizar el riesgo y garantizar el cumplimiento del contrato,
                    el Municipio de Medellín establecerá en el texto del contrato cláusulas como la penal
                    pecuniaria y de auditoría interna así:
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>Cláusula Penal Pecuniaria: </Text>
                    Se estipula una cláusula penal equivalente al diez por ciento (10%) del valor total del contrato,
                    la cual se hará efectiva de manera unilateral sin necesidad de declaratoria judicial, cuando a
                    juicio del ordenador del gasto, previo informe del supervisor, el contratista incurra en un incumplimiento
                    grave y severo del contrato. Sin la constitución y aprobación de la garantía no podrá darse inicio al contrato,
                    ni hacerse entrega del bien inmueble, y si transcurrido el término de los diez (10) días a partir de la
                    firma del contrato, el COMODATARIO no aporta la garantía de cumplimiento exigida, se procederá a dejar
                    constancia por escrito y se iniciarán los procedimientos necesarios requeridos para que se dé por terminado
                    el contrato
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>Auditoría Interna: </Text>
                    La Secretaría de Evaluación y Control, mediante comunicación suscrita por el Secretario de Despacho o los
                    Subsecretarios, podrá requerir del CONTRATISTA toda la información relacionada con los aspectos técnicos,
                    administrativos, financieros y legales del contrato, pudiendo ser necesario, inspeccionar los documentos,
                    lugares o sedes donde se ejecute la prestación, según las técnicas de auditorías aplicadas. Los informes
                    de auditoría interna son de uso reservado de la Secretaria de Evaluación y Control, el ordenador del
                    gasto y señor Alcalde. La reticencia del contratista a atender los requerimientos de la Auditoría interna
                    serán sujetos de Multa por mora en la entrega de información. Con fundamento en el Decreto Municipal 2505
                    del 17 de Diciembre de 2013; y la Circular N° 002 del 10 de Enero de 2014, emitida por el Comité Técnico
                    de Orientación y Seguimiento de la Contratación.
                </Text>
                <Text style={styles.subtitle}>
                    15. Componente ambiental.
                </Text>
                <Text style={styles.text}>
                    Dentro del presente proceso contractual el contratista deberá cumplir con los riesgos
                    ambientales que le apliquen a la destinación del bien inmueble entregado en comodato{' '}
                    <Text style={styles.subtitle}> {values?.environmental_risk}. </Text>
                </Text>
                <Text style={styles.subtitle}>
                    16. Abandono del Inmueble:
                </Text>
                <Text style={styles.text}>
                    Al suscribirse el contrato, EL COMODATARIO, faculta expresamente a EL COMODANTE para
                    ingresar al inmueble y recuperar su tenencia con el solo requisito de la presencia de
                    dos testigos, en procura de evitar el deterioro o el desmantelamiento de tal inmueble
                    y en aras de poder disponer del mismo en cumplimiento de la debida administración de
                    los bienes inmuebles del Municipio, siempre que por cualquier circunstancia el mismo
                    permanezca abandonado o deshabitado por parte de EL COMODATARIO y que la exposición al
                    riesgo amenace la integridad física del bien o deshabitado por parte de EL COMODATARIO
                    y que la exposición al riesgo amenace la integridad física del bien o de sus vecinos.
                </Text>
                <Text style={styles.subtitle}>
                    17. Supervisión del contrato e inspección del inmueble:
                </Text>
                <Text style={styles.text}>
                    De conformidad con lo dispuesto por el artículo 83 de la Ley 1474 de 2011, y la normativa
                    aplicable, y conforme a lo dispuesto en el Decreto Municipal  0903 de 2013, artículo 3, y
                    toda vez que no se requiere de conocimientos especializados, la vigilancia técnica
                    administrativa, financiera, contable y jurídica sobre el presente contrato será ejercida por
                    un Servidor Público designado por la Secretaría responsable del bien, mediante oficio, el
                    cual deberá velar por el cumplimiento de las obligaciones contractuales e informar sobre su
                    incumplimiento y de toda irregularidad que se presente sobre hechos imputables al COMODATARIO
                    y que pueda causar perjuicios al Municipio de Medellín como propietario del inmueble. La
                    designación hará parte integrante del contrato.
                </Text>
                <Text style={styles.text}>
                    Igualmente, la Unidad de Bienes inmuebles, dentro de sus funciones podrá realizar inspecciones
                    y seguimientos tanto al inmueble como a la ejecución y supervisión del contrato.
                </Text>
                <Text style={styles.subtitle}>
                    18. Tratamiento de Datos:
                </Text>
                <Text style={styles.text}>
                    El Municipio de Medellín, en concordancia con lo establecido en la Constitución Política de Colombia
                    (arts. 15 y 20), la Ley 1581 de 2012 <Text style={styles.italic}>"Por la cual se dictan disposiciones generales para la protección
                    de datos personales"</Text> y el Decreto 1377 de 2013 <Text style={styles.italic}>"Por el cual se reglamenta parcialmente la Ley 1581 de
                    2012"</Text> y comprometido con el uso legal, el tratamiento de datos de acuerdo con los fines establecidos y
                    la seguridad y privacidad de la información que recolecte, almacene, use, circule o suprima, y en
                    cumplimiento del mandato legal y el compromiso institucional en cuanto al tratamiento de la información,
                    adopta la Política para el tratamiento de datos personales” mediante el Decreto 1096 de 2018, los cuales
                    serán tratados con la finalidad de recolectar, incorporar, reportar, procesar y consultar en bancos de
                    datos la información relacionada o derivada de este contrato, así como su entrega a terceros para las
                    gestiones de cobro a que hubiere lugar. En este sentido, el Municipio de Medellín como entidad
                    responsable del tratamiento de los datos, informará a EL (LA) COMODATARIO (A) que la información
                    suministrada, con ocasión a la celebración del contrato de COMODATO suscrito con la Secretaría de
                    Suministros y Servicios del Municipio de Medellín, serán tratados de manera segura y confidencial, y
                    que le asisten los derechos de conocerlos, actualizarlos y rectificarlos, acorde con la norma de
                    protección de datos personales y la política adoptadas. Los datos personales recolectados y almacenados
                    por el Municipio de Medellín, en la medida que dependen de la relación directa o indirecta que tenga
                    con EL (LA) COMODATARIO (A), en este caso la suscripción del contrato de comodato, podrá ser necesario
                    obtener, el nombre, dirección, número telefónico, dirección de residencia, correo electrónico, entre
                    otros. Así mismo, el Municipio de Medellín podrá, entregar o dar acceso a terceros a los datos
                    personales que recopile y trate, caso en el cual dichos terceros actuarán como encargados del
                    tratamiento y estarán sujetos a los deberes y obligaciones que para tal figura prevé la Ley 1581
                    de 2012 y sus decretos reglamentarios.
                </Text>
                <Text style={styles.subtitle}>
                    19. Autorización de tratamiento de Datos.
                </Text>
                <Text style={styles.text}>
                    El COMODATARIO, manifiesta que ha sido informado(a) por el Municipio de Medellín, de lo siguiente:
                    1) Que el Municipio de Medellín actuará como responsable del tratamiento de datos personales de los
                    cuales es titular 2) De la finalidad del tratamiento de datos 3) De los derechos que como titular de
                    los datos le asisten. 4) Que el Municipio de Medellín se reserva el derecho a realizar modificaciones
                    a la Política de Tratamiento de Datos Personales en cualquier momento, lo cual será informado y
                    publicado oportunamente en la página Web o por correo electrónico. En señal de conformidad con lo
                    anterior, EL COMODATARIO, AUTORIZA a EL COMODANTE, para incorporar, reportar, procesar y consultar en
                    bancos de datos la información relacionada o derivada de este contrato, así como su entrega a terceros
                    para las gestiones de cobro a que hubiere lugar
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>20. Lugar de Ejecución:</Text> Municipio de Medellín –Antioquia
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.subtitle}>21. Cláusula de Publicación.</Text> De conformidad con el Decreto 1082 de 2015, y con el artículo 223
                    del Decreto-Ley 019 de 2012, el presente contrato una vez perfeccionado, deberá ser publicado
                    por parte del <Text style={styles.subtitle}>MUNICIPIO DE MEDELLÍN</Text> en el Sistema Electrónico para la contratación Público,
                    SECOP y a través del Portal único de Contratación <Text style={styles.underlined}>www.colombiacompra.gov.co.</Text>
                </Text>
                <Text style={styles.text}>
                    Medellín, Antioquia, {`${date[2]} de ${months(date[1])} de ${date[0]}`}
                </Text>
                <Text style={styles.text}></Text>
                <Text style={styles.sub_text}>
                    {values?.detailsLeader.names.firstName} {values?.detailsLeader.names.lastName} {values?.detailsLeader.surnames.firstSurname} {values?.detailsLeader.surnames.lastSurname}
                </Text>
                <Text style={styles.sub_text}>{values?.leader.post}</Text>
                <Text style={styles.sub_text}>{values?.leader.dependence}</Text>
                <Text style={styles.sub_text}>{values?.leader.secretary}</Text>
                <Text style={styles.text}></Text>

                <Html>{table_lider}</Html>
            </Page>
        </Document >
    )
}

export default ComodatoPdf

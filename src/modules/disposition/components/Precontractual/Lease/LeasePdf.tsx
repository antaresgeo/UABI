import React, { FC } from 'react'
import { StyleSheet, Text } from '@react-pdf/renderer';
import writtenNumber from 'written-number'
import months from './../../../../../utils/ui/months';
import moment from 'moment';
import Html from 'react-pdf-html';
import DocumentPdf from './../../../../../utils/components/document_pdf/index';

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
        marginRight: 10,
        marginLeft: 10,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica'
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

const LeasePdf: FC<Idata> = ({ values, realEstate }) => {
    let date = values?.registration_date.split("-")
    let valueServPublic = 0;
    switch (values?.public_service) {
        case "Recobro":
            valueServPublic = values?.recovery_value;
            break;
        case "Aforo":
            valueServPublic = values?.value_aforo;
            break;
        case "Contador individualizado":
            valueServPublic = values?.counter_value;
            break;
        case "Prepago":
            valueServPublic = 0;
            break;

        default:
            break;
    }

    const table_obligaciones = `
    <style>
        table {
            border: 1px solid #000;
            margin: 10px;
        }
        .p40 {
            text-align: left;
            font-size: 12px;
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
                </tr>
            </thead>
            <tbody>
                <tr class="middle_frame">
                    <td class="right_frame">${values?.elaborated.first_name ?? ""} ${values?.elaborated.last_name ?? ""} ${values?.elaborated.first_surname ?? ""} ${values.elaborated.last_surname ?? ""}</td>
                    <td class="right_frame">${values?.revised.first_name ?? ""} ${values?.revised.last_name ?? ""} ${values?.revised.first_surname ?? ""} ${values.revised.last_surname ?? ""}</td>
                    <td class="right_frame">${values?.approved.first_name ?? ""} ${values?.approved.last_name ?? ""} ${values?.approved.first_surname ?? ""} ${values.approved.last_surname ?? ""}</td>
                </tr>
                <tr class="frame_down">
                    <td class="right_frame">${values?.elaborated.post ?? ""}</td>
                    <td class="right_frame">${values?.revised.post ?? ""}</td>
                    <td class="right_frame">${values?.approved.post ?? ""}</td>
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
                font-size: 12px;
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
                    <td>${values?.regulatory_risk.responsible === "Contratista" ? "X" : ""}</td>
                    <td>${values?.regulatory_risk.responsible === "municipio" ? "X" : ""}</td>
                    <td>${values?.regulatory_risk.mitigation_mechanism}</td>
                </tr>
                <tr>
                    <td>OPERATIVOS: Incumplimiento del contratista de las obligaciones y prohibiciones contraídas en virtud del contrato.</td>
                    <td>${values?.operational_risk.degree_occurrence}</td>
                    <td>${values?.operational_risk.impact_degree}</td>
                    <td>${values?.operational_risk.responsible === "Contratista" ? "X" : ""}</td>
                    <td>${values?.operational_risk.responsible === "municipio" ? "X" : ""}</td>
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
                font-size: 12px;
                font-family: Helvetica;
                text-align: left;
            }
        </style>
        <table>
            <thead>
                <tr>
                    <td>Vr. Canon mensual</td>
                    <td>IVA (19%)</td>
                    <td>Vr. Aforo Serv. Pub.</td>
                    <td>Vr. Admón</td>
                    <td>Total Vr. Mensual</td>
                    <td>Tiempo en meses</td>
                    <td>Vr. total del contrato </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>$${realEstate?.canyon_value}</td>
                    <td>$${values.iva}</td>
                    <td>$
                        ${values?.public_service === "Recobro" ? ` ${values?.recovery_value}`
            :
            values?.public_service === "Aforo" ? ` ${values?.value_aforo} `
                :
                values?.public_service === "Contador individualizado" ? ` ${values?.counter_value} `
                    :
                    values?.public_service === "Prepago" ? " 0"
                        :
                        ""
        }
                    </td>
                    <td>$${values.administration_value}</td>
                    <td>$${values.monthly_total}</td>
                    <td>${values.contract_period}</td>
                    <td>$${values.contract_value}</td>
                </tr>
            </tbody>
        </table>
    `;

    return (
        <DocumentPdf
            showToolbar={false}
            title="Estudio Previo para arrendamiento de Bien Inmueble"
            header={{
                code: 'Cód. FO-ADMI-137 ',
                version: 'Versión. 1',
                title: { prefix: 'Formato', name: 'FO-ADMI Estudio Previo para arrendamiento de Bien Inmueble' },
            }}
        >
            <Text style={styles.text}>
                <Text style={styles.subtitle}>1. Identificación del Ingreso </Text>
                el valor del presente contrato ingresará a la posición
                presupuestal correspondiente a arrendamientos dentro del presupuesto de rentas no
                tributarias de la(s) vigencia(s) fiscal(es) que abarque la duración del contrato.
            </Text>
            <Text style={styles.subtitle}>
                2. Estimación del valor del contrato:
            </Text>
            <Html>{table_values}</Html>
            <Text style={styles.text}>
                El canon de arrendamiento como valor de este contrato, corresponderá a
                la suma de <Text style={styles.subtitle}>{writtenNumber(values?.canon_value, { lang: 'es' })} Pesos M/L {` ($${values?.canon_value}) `}</Text>
                pesos mensuales, más el IVA del 19%, más los costos de aforo y
                administración cuando apliquen,
                para un total mensual de <Text style={styles.subtitle} >
                    {writtenNumber((values?.canon_value + Number(values?.iva) + values?.administration_value + valueServPublic), { lang: 'es' })} PESOS M/L
                    {` ($${ (parseFloat(values?.canon_value + Number(values?.iva) + values?.administration_value + valueServPublic)).toFixed(2)})`}
                </Text>. Este canon de arrendamiento deberá ser cancelado por el arrendatario hasta
                completar un año de ejecución del contrato, en los sitios y por los
                canales indicados en la factura de cobro que le enviará EL ARRENDADOR,
                física o electrónicamente; en caso de no recibirse la factura en las
                fechas establecidas el arrendatario tendrá la obligación de reclamar
                la factura de cobro en las oficina de la Unidad Administración de
                Bienes Inmuebles, de la Secretaría de Suministros y Servicios.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Solicitante: </Text>
                {values?.applicant.document_type === "CC" ?
                    `${values.applicant.first_name ?? ""} ${values.applicant.last_name ?? ""} ${values.applicant.first_surname ?? ""} ${values.applicant.last_surname ?? ""}`
                    :
                    `${values.applicant.company_name}`
                }
                {values?.applicant.document_type === "CC" ? ` C.C.: ${values.applicant.document_number}` : ` NIT: ${values.applicant.document_number}`}
            </Text>
            <Text style={styles.subtitle}>1. Justificación de la contratación.</Text>
            <Text style={styles.text}>
                El Municipio de Medellín, tiene dentro de sus bienes, inmuebles que no requiere para el
                desarrollo de su objeto misional, que no se encuentran incluidos en un plan de ventas,
                que no serán enajenados; ni se requieren para la ejecución de una obra futura y que por
                sus características pueden ser destinados al servicio de la comunidad a través de la
                modalidad de arrendamiento en la forma y términos establecidos conforme a la normativa
                vigente.
            </Text>
            <Text style={styles.text}>
                El inmueble con matrícula <Text style={styles.subtitle}>{realEstate?.registry_number}</Text>, CBML
                <Text style={styles.subtitle}>{` ${realEstate?.address?.cbmls?.sap.cb}${realEstate?.address?.cbmls?.sap.ml}`}</Text>, activo fijo
                <Text style={styles.subtitle}>{` ${realEstate?.active_code}`}</Text>, ubicado en la dirección
                <Text style={styles.subtitle}>{` ${realEstate?.address?.address}`}</Text>, cuyo tipo es
                <Text style={styles.subtitle}> {values?.business_type?.select === "otro" ? values?.business_type?.input : values?.business_type?.select}. </Text>
                Según la factibilidad del bien, en cuanto lo técnico, físico, estado de
                habitabilidad y disponibilidad, se puede determinar que cumple
                requisitos mínimos para ser destinado al servicio de la comunidad,
                bajo la modalidad del contrato de arrendamiento, atendiendo a los
                lineamientos contractuales de la norma citada anteriormente.
            </Text>
            <Text style={styles.text}>
                De acuerdo con lo antes previsto, se formulan los estudios previos para proceder a la
                elaboración del contrato de arrendamiento, previa consideración del: (i) análisis de
                riesgos, (ii) análisis de requerimiento o no de establecer garantías para cumplir
                obligaciones derivadas del contrato y (iii) obligación de publicarse en la
                plataforma correspondiente.
            </Text>
            <Text style={styles.subtitle}>2. Descripción del objeto a contratar.</Text>
            <Text style={styles.text}>
                Suscribir contrato de arrendamiento del bien inmueble de propiedad del
                Municipio de Medellín identificado con matrícula
                <Text style={styles.subtitle}> {realEstate?.registry_number}</Text>, CBML
                <Text style={styles.subtitle}> {realEstate?.address?.cbmls?.uabi}</Text>, activo fijo
                <Text style={styles.subtitle}> {realEstate?.active_code}</Text>, ubicado en la dirección
                <Text style={styles.subtitle}> {realEstate?.address?.address}</Text>, cuyo tipo es
                <Text style={styles.subtitle}> {values?.business_type?.select === "otro" ? values?.business_type?.input : values?.business_type?.select}</Text>, escritura N°
                <Text style={styles.subtitle}>
                    {realEstate?.acquisitions?.map(ad => {
                        let i = ad.acquisition_date.split("-")
                        return ` ${ad.act_value} del ${i[2]} de ${months(i[1])} de ${i[0]} Notaría ${ad.entity_number} de ${ad.city}, `
                    })}
                </Text>
                el espacio a entregar en arrendamiento consta de {realEstate?.total_area} m2,
                cuyas áreas y linderos se describen de la siguiente manera según
                informe de Prediación con radicado: <Text style={styles.subtitle}>{values.prediation_number}, de {moment(values.prediation_date).format('DD/MM/YYYY')}.</Text>
            </Text>

            <Text style={styles.text}>
                {values?.boundaries}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>3. Destinación</Text>: debe
                destinarse el inmueble para: <Text style={styles.subtitle}>{values?.destination_realestate}</Text>
            </Text>
            <Text style={styles.subtitle}>
                4. Especificaciones:
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Aforo: </Text>
                Es el valor de Servicios públicos determinado
                por la Unidad de Mantenimiento, de la Subsecretaría de Gestión de Bienes, cuando se
                requiera, con base en la declaración previa del arrendatario de todos los elementos y
                artefactos eléctricos a utilizar en el espacio que se entregará en arrendamiento; así
                como los promedios de consumo de agua y uso del alcantarillado que correspondan.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Administración: </Text>Corresponde al valor por concepto de
                administración si diere lugar, de acuerdo al reglamento de propiedad horizontal, cuando
                aplique.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>5. Plazo del contrato: </Text>El plazo del contrato
                de arrendamiento a celebrar será de <Text style={styles.subtitle}>({values.contract_period}) {writtenNumber(values.contract_period, { lang: 'es' })} meses, </Text>
                contado a partir de la entrega del inmueble, mediante acta suscrita por las partes, previa aprobación de la póliza
                de cumplimiento, si aplica.
            </Text>
            <Text style={styles.text}>
                No obstante el plazo establecido y en caso de requerir la Administración Municipal el
                inmueble, para desarrollar las funciones que le son propias, podrá dar por terminado el
                contrato de arrendamiento de forma unilateral.
            </Text>
            <Text style={styles.subtitle}>
                6. Fundamentos jurídicos que soportan la modalidad de contratación.
            </Text>
            <Text style={styles.text}>
                Corresponde a lo dispuesto en el Código Civil para los contratos de arrendamiento y en
                lo pertinente por la Ley 80 de 1993, 1150 de 2007 y sus decretos reglamentarios en
                especial el Decreto 1082 de 2015 y normas complementarias, que manifiestan que este tipo
                de contratos no se consideran, ni se pueden considerar actos mercantiles o de comercio,
                razón por la cual no será aplicable el régimen jurídico contenido en el Código de
                Comercio en parte alguna.
            </Text>
            <Text style={styles.text}>
                También son fundamentos jurídicos del presente proceso contractual las disposiciones
                contenidas en la Ley 9ª de 1989, Ley 388 de 1997, Código Civil, Acuerdo Municipal 048 de 2014 (POT).
            </Text>
            <Text style={styles.subtitle}>
                7. El análisis técnico y económico que soporta el valor estimado del contrato.
            </Text>
            <Text style={styles.text}>
                Las condiciones del mercado fueron analizadas y tomadas en cuenta por la Unidad
                Administración de Bienes de la Subsecretaría de Gestión de Bienes, en el avalúo
                comercial, al momento de fijar el canon de arrendamiento correspondiente al inmueble,
                como lo establece la normativa vigente.
                Está soportado con el informe técnico de avalúo y fijación de canon de
                arrendamiento N° <Text style={styles.subtitle}>{values?.appraisal_number}</Text>, de
                <Text style={styles.subtitle}> {moment(values.appraisal_date).format('DD/MM/YYYY')} </Text>
                de la Unidad Administración de Bienes
                Inmuebles, de la Subsecretaría de Gestión de Bienes del Municipio de
                Medellín.
            </Text>
            <Text style={styles.subtitle}>
                8. La justificación de los factores de selección que permitan identificar la oferta más
                favorable
            </Text>
            <Text style={styles.text}>
                Los factores de selección del arrendatario cuando exista más de un solicitante se regirá
                por los definidos en la normativa vigente, para lo cual se dejará un documento anexo de
                la evaluación de los requisitos.
            </Text>
            <Text style={styles.subtitle}>
                9. El soporte que permita la estimación, tipificación y asignación de los riesgos
                previsibles que puedan afectar el equilibrio económico del contrato:
            </Text>
            <Text style={styles.text}>
                De acuerdo al artículo 4 de la Ley 1150 de 2007 y el Decreto Nacional 1082 de 2015,
                dispone que las entidades públicas deben incluir en los estudios previos la estimación,
                tipificación y asignación de riesgos.
            </Text>
            <Text style={styles.text}>
                De conformidad con lo anterior se procede a hacer el análisis del riesgo que
                corresponde en los siguientes términos:
            </Text>
            <Text style={styles.sub_text}>9.1 Riesgo regulatorio:</Text>
            <Text style={styles.text}>
                Comprende variaciones de las tarifas de mercado regulado, cambios de la carga impositiva
                tributaria de las reformas legales futuras y la adopción de decisiones administrativas:
            </Text>
            <Text style={styles.sub_text}>Financieras del arrendatario.</Text>
            <Text style={styles.sub_text}>Perdida de liquidez del arrendatario.</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.sub_text}>9.2 Riesgos operativos: </Text>
            <Text style={styles.text}>
                Son intrínsecos al contrato y comprende todas las formas de incumplimiento de las obligaciones
                que pueden generarse producto del acuerdo de voluntades:
            </Text>
            <Text style={styles.sub_text}>Incumplimiento de las obligaciones surgidas del contrato.</Text>
            <Text style={styles.sub_text}>Pago de salarios, prestaciones sociales e indemnizaciones.</Text>
            <Text style={styles.subtitle}>
                10. Estimación del riesgo:
            </Text>
            <Text style={styles.text}>
                La estimación del riesgo consiste en medir la probabilidad de ocurrencia de un evento y
                su impacto en el caso de que se materialice. La medición efectiva y cuantitativa del
                riesgo se asocia con la posibilidad de pérdida futura. Para el caso de la contratación
                estatal no se establece una metodología para la cuantificación del riesgo, lo cual da a
                la entidad cierto grado de discrecionalidad.
            </Text>
            <Text style={styles.text}>
                Frente a la necesidad que se pretende satisfacer, se establecerá el grado de
                probabilidad de ocurrencia y de impacto en relación con el equilibrio económico del
                contrato, utilizando una escala ordinal en la que se hace referencia a criterios de
                medición como se presenta a continuación: MUY ALTO, ALTO, MEDIO, BAJO, MUY BAJO
            </Text>
            <Html>{table_risk}</Html>
            <Text style={styles.subtitle}>
                11. El análisis que sustenta la exigencia de los mecanismos de cobertura que garantizan
                las obligaciones surgidas con ocasión de la contratación directa y del contrato a celebrar.
            </Text>
            <Html>{table_obligaciones}</Html>
            <Text style={styles.text}>
                Así mismo, con el fin de minimizar el riesgo y garantizar el cumplimiento del contrato, el
                Municipio de Medellín establecerá en el texto del contrato cláusulas como la penal
                pecuniaria y de auditoría interna así:
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>12. Cláusula Penal Pecuniaria</Text>: Se estipula una clausula
                penal equivalente al diez por ciento (10%) del valor total del contrato, la cual se hará
                efectiva de manera unilateral sin necesidad de declaratoria judicial, cuando a juicio
                del ordenador del gasto, previo informe del interventor, el contratista incurra en un
                incumplimiento grave y severo del contrato, conforme a la normativa vigente.
            </Text>
            <Text style={styles.subtitle}>
                13. Auditoria Interna:
            </Text>
            <Text style={styles.text}>
                La Secretaría de Evaluación y Control, mediante comunicación suscrita por el Secretario de
                Despacho o los Subsecretarios, podrá requerir del CONTRATISTA toda la información relacionada
                con los aspectos técnicos, administrativos, financieros y legales del contrato, pudiendo ser
                necesario, inspeccionar los documentos, lugares o sedes donde se ejecute la prestación,
                según las técnicas de auditorías aplicadas. Los informes de auditoría interna son de uso
                reservado de la Secretaria de Evaluación y Control, el ordenador del gasto y señor Alcalde.
                La reticencia del contratista a atender los requerimientos de la Auditoría interna serán sujetos de
                Multa por mora en la entrega de información, con fundamento en la normativa vigente.
            </Text>
            <Text style={styles.subtitle}>
                14. Componente ambiental
            </Text>
            <Text style={styles.text}>
                Dentro del presente proceso contractual el contratista deberá cumplir
                con los riesgos ambientales que le apliquen a la destinación del bien
                inmueble entregado en arrendamiento <Text style={styles.subtitle}>{values?.environmental_risk}.</Text>
            </Text>
            <Text style={styles.subtitle}>
                15. Supervisión del contrato:
            </Text>
            <Text style={styles.text}>
                De conformidad con lo dispuesto por el artículo 83 de la Ley 1474 de 2011 y la normativa
                aplicable, y toda vez que no se requiere de conocimientos especializados, la vigilancia
                técnica administrativa, financiera, contable y jurídica sobre el presente contrato será
                ejercida por un Servidor Público de la dependencia que tiene a cargo el bien, designado
                por la Secretaría de Suministros y Servicios, mediante oficio, el cual deberá velar por
                el cumplimiento de las obligaciones contractuales e informar sobre su incumplimiento y
                de toda irregularidad que se presente sobre hechos imputables al arrendatario y que
                pueda causar perjuicios al Municipio de Medellín, como propietario del inmueble. La
                designación hará parte integrante del contrato.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>16. Lugar de Ejecución:</Text> Municipio de Medellín –Antioquia
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>17. Multas: </Text>
                <Text style={styles.subtitle}>{values?.fines} </Text>
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>18. Publicación.</Text> De conformidad con el Decreto 1082 de 2015, y con el artículo 223 del Decreto-Ley 019 de 2012,
                el presente contrato una vez perfeccionado, deberá ser publicado por parte del <Text style={styles.subtitle}>MUNICIPIO DE MEDELLÍN</Text> en el
                Sistema Electrónico para la Contratación Público, SECOP y a través del Portal Único de Contratación <Text style={styles.underlined}>www.colombiacompra.gov.co.</Text>
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>19. Línea del Plan de Desarrollo:</Text> Dimensión:
                1 Creemos en la confianza ciudadana; Reto: 1.3 Medellín bien administrado;
                Programa: 1.3.4 Gestión efectiva. Proyecto 1.3.4.5 Gestión y conservación de activos.
            </Text>
            <Text style={styles.text}>
                Medellín, Antioquia, {`${date[2]} de ${months(date[1])} de ${date[0]}`}
            </Text>
            <Text style={styles.text}></Text>
            <Text style={styles.sub_text}>{`${values?.leader?.first_name} ${values?.leader?.last_name ?? ""} ${values?.leader?.first_surname ?? ""} ${values?.leader?.last_surname ?? ""}  `}</Text>
            <Text style={styles.sub_text}>Líder de Programa</Text>
            <Text style={styles.sub_text}>Unidad Administración de Bienes Inmuebles</Text>
            <Text style={styles.sub_text}>Subsecretaría de Gestión de Bienes</Text>
            <Html>{table_lider}</Html>
        </DocumentPdf>
    )
}

export default LeasePdf

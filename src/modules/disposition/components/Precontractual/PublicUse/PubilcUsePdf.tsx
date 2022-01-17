import { StyleSheet, Text } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import writtenNumber from 'written-number'
import months from '../../../../../utils/ui/months';
import { FC } from 'react';
import DocumentPdf from './../../../../../utils/components/document_pdf/index';



const styles = StyleSheet.create({
    subtitle: {
        fontSize: 11,
        margin: 12,
        fontFamily: 'Helvetica-Bold',
    },
    text: {
        fontSize: 11,
        margin: 12,
        textAlign: 'justify',
        fontFamily: 'Helvetica'
    },
    sub_text: {
        marginRight: 12,
        marginLeft: 12,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica'
    },
    underlined: {
        fontSize: 11,
        margin: 12,
        fontFamily: 'Helvetica-Bold',
        textDecoration: 'underline'
    },
    italic: {
        fontSize: 11,
        margin: 12,
        fontFamily: 'Helvetica-Oblique',
    }
});

interface Idata {
    values?: any;
    realEstate?: any;
}


const PubilcUsePdf: FC<Idata> = ({ values, realEstate }) => {
    let date = values?.registration_date.split("-")
    let prediationDate = values?.prediation_date.split("-")
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

    return (
        <DocumentPdf
            showToolbar={false}
            title="Estudio Previo para Administración del Espacio Público de Bien Inmueble"
            header={{
                code: 'Cód. FO-ADMI-194',
                version: 'Versión. 1',
                title: { prefix: 'Formato', name: 'FO-ADMI Estudio Previo para Administración del Espacio Público de Bien Inmueble' },
            }}
        >
            <Text style={styles.subtitle}>
                1.Identificación del Ingreso: N/A
            </Text>
            <Text style={styles.subtitle}>
                2.Estimación del valor del contrato:
            </Text>
            <Text style={styles.text}>
                Para efectos del contrato de Administración del Espacio Público se
                tendrá como valor el avalúo catastral
                <Text style={styles.subtitle}>{` ${writtenNumber(values?.cadastral_value, { lang: 'es' })} ($${values?.cadastral_value}).`}</Text>
            </Text>
            <Text style={styles.subtitle}>
                3.Solicitante: {values?.applicant.company_name} <Text style={styles.text}>NIT: </Text>
                {values?.applicant.id_number}
            </Text>
            <Text style={styles.subtitle}>
                4.La descripción de la necesidad que el MUNICIPIO DE MEDELLÍN pretende satisfacer con la contratación.
            </Text>
            <Text style={styles.text}>
                La Constitución Política de Colombia, elevó al rango constitucional al
                Espacio Público; dicha protección es compatible con los principios que
                la rigen y como garantía a unos derechos sociales y colectivos, como la
                recreación y el aprovechamiento del tiempo libre, el goce de un medio
                ambiente sano y el derecho a reunirse y manifestarse públicamente.
            </Text>
            <Text style={styles.text}>
                El artículo 5 de la Ley 9 de 1989, determinó que el espacio público, alude
                al conjunto de inmuebles públicos y los elementos arquitectónicos y naturales
                de los inmuebles privados, destinados por su naturaleza, por su uso o afectación,
                a la satisfacción de necesidades urbanas colectivas que trascienden, por tanto,
                los límites de los intereses individuales de los habitantes.
            </Text>
            <Text style={styles.text}>
                El espacio público de la ciudad está compuesto por las áreas requeridas para la
                circulación, tanto peatonal como vehicular, las áreas para la recreación pública,
                activa o pasiva, para la seguridad y tranquilidad ciudadana, las franjas de retiro
                de las edificaciones sobre las vías, fuentes de agua, parques, plazas, zonas verdes,
                entre otras. Así mismo, en su Artículo 7º, los Municipios tienen el deber de:
                <Text style={styles.italic}> “Crear,
                    de acuerdo con su organización legal, entidades responsables de administrar, desarrollar,
                    mantener y apoyar financieramente el espacio público, el patrimonio inmobiliario y las
                    áreas de cesión obligatoria para vías, zonas verdes y servicios comunales”, </Text> así, como
                para contratar la administración, mantenimiento y aprovechamiento económico de los
                bienes anteriores.
            </Text>
            <Text style={styles.text}>
                Estipula el artículo 25 de la Resolución SSS 201850043580, que la administración,
                conservación y aprovechamiento económico del espacio público del Municipio de Medellín,
                estará a cargo de la Secretaría de Gobierno Municipal, a través de la Subsecretaría de
                Defensoría del Espacio Público, será esta Secretaría la dependencia encargada de velar
                por la protección, conservación y restitución del espacio público de la ciudad, así
                como de llevar a cabo, todos los procesos contractuales encaminados a lograr un adecuado
                aprovechamiento económico del mismo, de conformidad con las normas vigentes sobre la
                materia., exceptuando las zonas verdes, las vías y demás inmuebles constitutivos del
                espacio público de la ciudad, cedidos al Municipio de Medellín en cumplimiento de las
                obligaciones urbanísticas, cuya administración y conservación correrá por cuenta de la
                Secretaría de Hacienda, actualmente Secretaría de Suministros y Servicios según el
                Decreto 883 de 2015.
            </Text>
            <Text style={styles.text}>
                De conformidad con las competencias legales y constitucionales del Estado, y
                particularmente de los Municipios, correspondientes a velar por la protección de la
                integridad del Espacio Público y su destinación al uso común con prevalencia sobre el
                interés particular. Así como para el cumplimiento de los fines previstos en la
                Constitución y en la Ley dichos espacios públicos requieren de una adecuada, eficiente
                y eficaz administración.
            </Text>
            <Text style={styles.text}>
                Se diseñaron en el Plan de Ordenamiento Territorial, acuerdo 048 de 2014, unos Instrumentos
                para la Gestión del Espacio Público, enfocados en el manejo y administración del espacio
                público a través de la celebración de Contratos de Administración del Espacio Público.
            </Text>
            <Text style={styles.text}>
                Que dicho instrumento se define como: El acto jurídico mediante el cual, el Municipio
                entrega a personas jurídicas, uno o varios elementos constitutivos del espacio público,
                para su administración, con la posibilidad de realizar mejoras, de conformidad con los
                usos del suelo, siempre y cuando, cuenten con la respectiva licencia de intervención,
                para efectos de garantizar la conservación, protección y mejoramiento de los mismos y su entorno.
            </Text>
            <Text style={styles.underlined}>
                Dicho contrato no implica el cerramiento de áreas públicas, las cuales no podrán ser privatizadas,
                salvo por razones de seguridad previamente acreditadas.
            </Text>
            <Text style={styles.subtitle}>
                1.2 Forma de satisfacer la necesidad.
            </Text>
            <Text style={styles.text}>
                El Municipio de Medellín administra los bienes inmuebles de su propiedad
                dando prelación al interés general, fundamentándose en los principios de
                igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad,
                los cuales rigen la función administrativa de conformidad con lo establecido por
                el artículo 209 de la Constitución Política de Colombia. En ese sentido, se ha
                convenido suscribir contratos de administración de bienes de uso público con la
                finalidad de permitir que las personas naturales o jurídicas, públicas o privadas,
                se aprovechen de los espacios de uso público dándoles su debida administración,
                uso y mantenimiento.
            </Text>
            <Text style={styles.text}>
                Previsto lo anterior y para satisfacer la necesidad planteada, se solicita celebrar
                un contrato de Administración de Bien Inmueble de Uso Público, el cual permita entregar
                en calidad de administración un bien inmueble propiedad del Municipio de Medellín a la
                <Text style={styles.subtitle}> {values?.applicant.company_name},</Text> persona Jurídica, de naturaleza civil, sin ánimo
                de lucro, identificado con número de identificación tributaria No. <Text style={styles.subtitle}> {values?.applicant.id_number} </Text>
            </Text>
            <Text style={styles.text}>
                El Departamento Administrativo de Planeación, mediante oficio No. 3286  del 3 de octubre
                de 2014 emitió concepto positivo para la celebración del contrato de administración de
                bienes inmuebles de uso público, requerido.
            </Text>
            <Text style={styles.subtitle}>
                5. Descripción del objeto a contratar.
            </Text>
            <Text style={styles.text}>
                Suscribir contrato de administración de espacio público del bien inmueble de propiedad
                del Municipio de Medellín identificado con matrícula
                <Text style={styles.subtitle}> {realEstate?.registry_number}, </Text>
                CBML <Text style={styles.subtitle}>{realEstate?.address?.cbmls?.uabi}, </Text>
                activo fijo <Text style={styles.subtitle}>{realEstate?.sap_id}, </Text>
                ubicado en la dirección <Text style={styles.subtitle}>{realEstate?.address?.address}, </Text>
                cuyo tipo es <Text style={styles.subtitle}>{values?.business_type}, </Text>
                escritura N° <Text style={styles.subtitle}>
                    {realEstate?.acquisitions?.length > 0 &&
                        realEstate?.acquisitions?.map(ad => {
                            let i = ad.acquisition_date.split("-")
                            return ` ${ad.act_value} del ${i[2]} de ${months(i[1])} de ${i[0]}, `
                        })}
                </Text>
                el espacio a entregar en Administración del Espacio Público consta de
                <Text style={styles.subtitle}> {realEstate?.total_area}</Text> m2, cuyas áreas
                y linderos se describen de la siguiente manera, según informe de prediación con radicado:
                <Text style={styles.subtitle}>{values?.prediation_number} </Text>
                del <Text style={styles.subtitle}>{` ${prediationDate[2]} de ${months(prediationDate[1])} de ${prediationDate[0]}.`}</Text>
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Descripción de Linderos: </Text>{values?.boundaries}.
            </Text>
            <Text style={styles.subtitle}>
                3. Destinación: debe destinarse el inmueble para: <Text style={styles.text}>{values?.destination_realEstate}</Text>
            </Text>
            <Text style={styles.subtitle}>
                4. Especificaciones:
            </Text>
            <Text style={styles.subtitle}>
                4.1	Obligaciones del administrador.
            </Text>
            <Text style={styles.text}>
                El ADMINISTRADOR, se obliga: 1) A emplear el mayor cuidado en la conservación de los bienes,
                objeto de este contrato, siendo responsable de cualquier deterioro que no provenga de la
                naturaleza o uso legítimo de la cosa. 2) A impedir que el inmueble sea ocupado para asuntos
                diferentes a los mencionados en la cláusula tercera. 3) A realizar las reparaciones locativas
                y a reparar los deterioros que provengan de su actividad o de las de sus dependientes, salvo
                el deterioro que provenga por el paso del tiempo y el uso normal del inmueble. 4) A impedir
                que personas ajenas al presente contrato se instalen en forma temporal o definitiva en el
                inmueble mencionado. 5) A restituir el inmueble dentro de los treinta (30) días siguientes a
                la solicitud de entrega formulada por la Administración Municipal. 6) A no variar la destinación
                y uso propuesto para el bien, determinado en la cláusula tercera de este contrato. 7) Responder
                por los daños que los bienes entregados causen a terceros. 8) A permitir el ingreso del personal
                adscrito al Municipio de Medellín, cuando EL ADMINISTRADOR lo considere necesario,
                para inspecciones físicas de rutina del bien o efectos de la ejecución de supervisión del presente
                contrato de Administración del Espacio Público. 9) Deberá pagar y aportar los paz y salvos de Servicios
                Públicos y cuotas de administración cuando aplique en el cual conste el pago de todos los servicios
                públicos contratados y trabajos realizados por cuenta del ADMINISTRADOR, y ante los requerimientos de
                quién tenga a su cargo la supervisión. 10) Deberá proveer la respectiva vigilancia del inmueble.
                11) Estar registrado previamente en el SECOP II, con el fin de publicar los documentos contractuales.
                12) Presentar un informe trimestral al supervisor del contrato sobre el uso, estado, destino, conservación
                del bien y las cuentas de servicios canceladas, así como de la facturas de pago de las cuotas de
                administración, cuando a ello hubiere lugar. 13) Realizar adaptaciones y mejoras con la aprobación
                por escrito de la Secretaria de Suministros y Servicios, las cuales serán por su cuenta y riesgo.
                14) Asumir los gastos generados por el uso normal, el mantenimiento, la conservación y vigilancia
                del bien inmueble, así como los correspondientes a la legalización del contrato como garantías,
                impuestos y publicación cuando a ello haya lugar. 15) Presentar un informe trimestral al supervisor
                del contrato, sobre el uso, estado, destino, conservación del bien y las cuentas de servicios
                canceladas y cuotas de administración cuando hubiera lugar. 16) Restituir el inmueble
                dado den Administración del Espacio Público dentro de los treinta (30) días hábiles siguientes
                a la solicitud del mismo. 17) Participar en la liquidación del contrato y suscribir las actas
                correspondientes.
                {values?.obligations?.length > 0 &&
                    <Text style={styles.subtitle}>
                        {values?.obligations.map(o =>
                            ` ${o.id}) ${o.obligation}. `
                        )}

                    </Text>

                }
            </Text>
            <Text style={styles.text}>
                Las demás obligaciones propias de los contratos de Administración del Espacio Públicos, de acuerdo
                con las disposiciones legales, en especial, de las contenidas en la normatividad vigente.
            </Text>
            <Text style={styles.subtitle}>
                4.2	Prohibiciones del administrador.
            </Text>
            <Text style={styles.text}>
                1) Realizar en el inmueble objeto del contrato de administración de espacio público, cualquier
                actividad de la cual se genere aprovechamiento económico para este de manera privada y por fuera
                de la destinación del inmueble, y las demás prohibiciones contempladas en la normatividad vigente.
                El incumplimiento de esta cláusula, dará lugar a la terminación del contrato de administración de
                espacio público. 2) Queda expresamente prohibido en los inmuebles entregados en Administración del
                Espacio Público no deben almacenar, consumir o expender bebidas alcohólicas, sustancias psicoactivas
                o alucinógenas. 3) Utilización para eventos políticos, cultos religiosos, parqueaderos entre otros
                que no estén estipulados expresamente dentro del objeto y alcance del presente contrato de
                Administración del Espacio Público. 4) Cobrar cualquier suma de dinero o contraprestación a la
                comunidad por el ingreso o acceso al inmueble dado en Administración del Espacio Público, salvo en
                aquellos casos previamente autorizados por la Secretaría de Suministros y Servicios. 5) Arrendar o
                ceder el inmueble, o parte de él, para desarrollar cualquier tipo de actividad, sin obtener
                autorización previa y escrita de la Secretaría de Suministros y Servicios. 6) Ubicar casetas,
                tiendas o publicidad sin la debida autorización de la Subsecretaría, Defensoría del Espacio
                Público y de la Secretaría de Suministros y Servicios. 7) Destinar el inmueble entregado en
                Administración del Espacio Público a actividades diferentes para la que fue concedido.
                8) Instalar negocios comunitarios. 9) Realizar bailes públicos entendidos como aquellos
                anunciados abiertamente, con cobro de ingreso, venta de licor y cuyo único objetivo es el
                recaudo de fondo para los organizadores. 10) Extender más allá del horario permitido por
                las autoridades competentes las reuniones sociales (primeras comuniones, matrimonios, cumpleaños)
                y actividades de integración, educación o financiación. 11) Desarrollar actividades que superen
                los índices permitidos de ruido, para zonas residenciales o comunitarias o que generen conflictos
                de convivencia con la vecindad, en acuerdo a lo preceptuado en el Código Nacional de Policía vigente,
                sin perjuicio de los manuales o normas de convivencia que regulen el tema nivel Municipal o
                Departamental.
                <Text style={styles.subtitle} >
                    {values?.prohibitions?.length > 0 &&
                        values?.prohibitions.map(p =>
                            ` ${p.id}) ${p.prohibition}.`
                        )
                    }
                </Text>
            </Text>
            <Text style={styles.text}>
                Todas aquellas que en ejecución del contrato resulten contrarias a los fines del Administración del
                Espacio Público, la convivencia ciudadana y los intereses del Municipio de Medellín.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}> Plazo del contrato: </Text>
                El plazo del contrato de Administración del Espacio Público a celebrar será de
                <Text style={styles.subtitle}> ({values?.contract_period}) {writtenNumber(values?.contract_period, { lang: 'es' })}</Text> meses,
                contados a partir de la entrega
                del inmueble, mediante acta suscrita por las partes y previa aprobación de la póliza de cumplimiento.
            </Text>
            <Text style={styles.text}>
                No obstante el plazo establecido y en caso de requerir la Administración Municipal el inmueble,
                para desarrollar las funciones que le son propias, podrá dar por terminado el contrato de
                Administración del Espacio Público de forma unilateral.
            </Text>
            <Text style={styles.subtitle}>
                5. Fundamentos jurídicos que soportan la modalidad de contratación.
            </Text>
            <Text style={styles.text}>
                La Ley 80 de 1993, 1150 de 2007 y sus decretos reglamentarios en especial el Decreto 1082 de 2015.
            </Text>
            <Text style={styles.text}>
                También son fundamentos jurídicos del presente proceso contractual las disposiciones contenidas
                en la Ley 9ª de 1989, Ley 388 de 1997, Código Civil, Acuerdo Municipal 048 de 2014 (POT).
            </Text>
            <Text style={styles.subtitle}>
                6. El análisis técnico y económico que soporta el valor estimado del contrato.
            </Text>
            <Text style={styles.text}>
                Si bien el contrato de Administración del Espacio Público no afecta el presupuesto
                Municipal, para efectos fiscales y de constitución de las garantías a que haya lugar,
                se le asigna al mismo <Text style={styles.subtitle}> {writtenNumber(values?.contract_value, { lang: 'es' })} {`($${values?.contract_value}), `}</Text>
                que corresponde a la debida administración
                y mantenimiento del inmueble entregado a título de Administración de Bien Inmueble de
                Uso Público. Dicha suma es el resultado del valor que deberá costear EL ADMINISTRADOR,
                de conformidad con la cotización de mantenimiento anual presentada por la misma.
            </Text>
            <Text style={styles.subtitle}>
                7. La justificación de los factores de selección que permitan identificar el mejor solicitante.
            </Text>
            <Text style={styles.text}>
                Los factores de selección del ADMINISTRADOR cuando exista más de un solicitante se regirá
                por los definidos en la normativa vigente, para lo cual se dejará un documento anexo de la
                evaluación de los requisitos.
            </Text>
            <Text style={styles.subtitle}>
                8. El soporte que permita la estimación, tipificación y asignación de los riesgos
                previsibles que puedan afectar el equilibrio económico del contrato:
            </Text>
            <Text style={styles.text}>
                De acuerdo al artículo 4 de la Ley 1150 de 2007 y el Decreto Nacional 1082 de 2015,
                dispone que las entidades públicas deben incluir en los estudios previos la estimación,
                tipificación y asignación de riesgos.
            </Text>
            <Text style={styles.text}>
                De conformidad con lo anterior se procede a hacer el análisis del riesgo que corresponde
                en los siguientes términos:
            </Text>
            <Text style={styles.sub_text}>
                8.1 Riesgo regulatorio:
            </Text>
            <Text style={styles.sub_text}>
                Comprende cambios de la carga impositiva tributaria de las reformas legales futuras
                y la adopción de decisiones administrativas:
            </Text>
            <Text style={styles.sub_text}>
                Financieras del ADMINISTRADOR
            </Text>
            <Text style={styles.sub_text}>
                Perdida de liquidez del ADMINISTRADOR
            </Text>
            <Text style={styles.text}>
            </Text>

            <Text style={styles.sub_text}>
                8.2 Riesgos operativos:
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
                9. Estimación del riesgo:
            </Text>
            <Text style={styles.text}>
                La estimación del riesgo consiste en medir la probabilidad de ocurrencia de un evento y su impacto
                en el caso que se materialice. La medición efectiva y cuantitativa del riesgo se asocia con la
                posibilidad de pérdida futura. Para el caso de la contratación estatal no se establece una
                metodología para la cuantificación del riesgo, lo cual da a la entidad cierto grado de
                discrecionalidad.
            </Text>
            <Text style={styles.text}>
                Frente a la necesidad que se pretende satisfacer, se establecerá el grado de probabilidad
                de ocurrencia y de impacto en relación con el equilibrio económico del contrato,
                utilizando una escala ordinal en la que  se hace referencia  a criterios de medición
                como se presenta a continuación: MUY ALTO, ALTO, MEDIO, BAJO, MUY BAJO
            </Text>
            <Html>{table_risk}</Html>
            <Text style={styles.subtitle}>
                10. El análisis que sustenta la exigencia de los mecanismos de cobertura que garantizan
                las obligaciones surgidas con ocasión de la contratación directa y del contrato a celebrar.
            </Text>
            <Html>{table_obligaciones}</Html>
            <Text style={styles.text}>
                Así mismo, con el fin de minimizar el riesgo y garantizar el cumplimiento del contrato,
                el Municipio de Medellín establecerá en el texto del contrato cláusulas como la penal
                pecuniaria y de auditoria interna así
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Cláusula Penal Pecuniaria: </Text>
                Se estipula una clausula penal equivalente al diez por ciento (10%) del valor total del
                contrato, la cual se hará efectiva de manera unilateral sin necesidad de declaratoria
                judicial, cuando a juicio del ordenador del gasto, previo informe del supervisor, el
                contratista incurra en un incumplimiento grave y severo del contrato. Sin la constitución
                y aprobación de la garantía no podrá darse inicio al contrato, ni hacerse entrega del bien
                inmueble, y si transcurrido el término de los diez (10) días a partir de la firma del
                contrato, el ADMINISTRADOR no aporta la garantía de cumplimiento exigida, se procederá
                a dejar constancia por escrito y se iniciarán los procedimientos necesarios requeridos
                para que se dé por terminado el contrato.
            </Text>
            <Text style={styles.subtitle}>
                11. Auditoria Interna:
            </Text>
            <Text style={styles.text}>
                La Secretaría de Evaluación y Control, mediante comunicación suscrita por el Secretario
                de Despacho o los Subsecretarios, podrá requerir del CONTRATISTA toda la información
                relacionada con los aspectos técnicos, administrativos, financieros y legales del contrato,
                pudiendo ser necesario, inspeccionar los documentos, lugares o sedes donde se ejecute la
                prestación, según las técnicas de auditorías aplicadas. Los informes de auditoría interna
                son de uso reservado de la Secretaria de Evaluación y Control, el ordenador del gasto y
                señor Alcalde. La reticencia del contratista a atender los requerimientos de la Auditoria
                interna serán sujetos de Multa por mora en la entrega de información. Con fundamento en
                el Decreto Municipal 2505 del 17 de Diciembre de 2013; y la Circular N° 002 del 10 de
                Enero de 2014,  emitida por el Comité Técnico de Orientación y Seguimiento de la Contratación.
            </Text>
            <Text style={styles.subtitle}>
                12. Componente ambiental.
            </Text>
            <Text style={styles.text}>
                Dentro del presente proceso contractual el contratista deberá cumplir con los riesgos ambientales
                que le apliquen a la destinación del bien inmueble entregado en Administración del Espacio
                Público <Text style={styles.subtitle}>{` ${values?.environmental_risk}. `}</Text>
            </Text>
            <Text style={styles.subtitle}>
                13. Supervisión del contrato e inspección del inmueble:
            </Text>
            <Text style={styles.text}>
                De conformidad con lo dispuesto por el artículo 83 de la Ley 1474 de 2011, y la normativa aplicable,
                y conforme a lo dispuesto en el Decreto Municipal  0903 de 2013, artículo 3, y toda vez que no se
                requiere de conocimientos especializados, la vigilancia técnica administrativa, financiera, contable
                y jurídica sobre el presente contrato será ejercida por un Servidor Público designado por la
                Secretaría de Suministros y Servicios, mediante oficio, el cual deberá velar por el cumplimiento de
                las obligaciones contractuales e informar sobre su incumplimiento y de toda irregularidad que se
                presente sobre hechos imputables al ADMINISTRADOR y que pueda causar perjuicios al Municipio de
                Medellín como propietario del inmueble.  La designación hará parte integrante del contrato.
            </Text>
            <Text style={styles.text}>
                Igualmente la Unidad de Bienes inmuebles, dentro de sus funciones podrá realizar inspecciones
                y seguimientos tanto al inmueble como a la ejecución y supervisión del contrato.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>14. Lugar de Ejecución: </Text>
                Municipio de Medellín –Antioquia
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>15. Cláusula de Publicación. </Text>
                De conformidad con el Decreto 1082 de 2015, y con el artículo 223 del Decreto-Ley 019 de 2012,
                el presente contrato una vez perfeccionado, deberá ser publicado por parte del
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN </Text> en el Sistema Electrónico para la
                contratación Público, SECOP y a través del Portal único de Contratación www.colombiacompra.gov.co.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>16. Línea del Plan de Desarrollo: </Text>
                Dimensión: 1 Creemos en la confianza ciudadana; Reto: 1.3 Medellín bien administrado;
                Programa: 1.3.4 Gestión efectiva. Proyecto 1.3.4.5 Gestión y conservación de activos.
            </Text>

            <Text style={styles.text}></Text>

            <Text style={styles.text}>
                Medellín, Antioquia, {`${date[2]} de ${months(date[1])} de ${date[0]}`}
            </Text>

            <Text style={styles.text}></Text>

            <Text style={styles.sub_text}>
                {values?.detailsLeader.names.firstName} {values?.detailsLeader.names.lastName} {values?.detailsLeader.surnames.firstSurname} {values?.detailsLeader.surnames.lastSurname}
            </Text>
            <Text style={styles.sub_text}>
                {values?.leader.post}
            </Text>
            <Text style={styles.sub_text}>
                {values?.leader.dependence}
            </Text>
            <Text style={styles.sub_text}>
                {values?.leader.secretary}
            </Text>
            <Html>{table_lider}</Html>

        </DocumentPdf>
    )
}

export default PubilcUsePdf




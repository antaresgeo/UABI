import React from 'react'
import DocumentPdf from './../../../../../utils/components/document_pdf/index';
import { StyleSheet, Text } from '@react-pdf/renderer';
import moment from 'moment';
import writtenNumber from 'written-number';
import months from './../../../../../utils/ui/months';
import Html from 'react-pdf-html';

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
    },
    sub_text: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Helvetica'
    },
    header: {
        marginTop: -15,
        marginBottom: 10,
        fontSize: 8,
        textAlign: 'center',
        fontFamily: 'Helvetica',
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

const ComodatoContractPdf = ({ values_contract, comodato, realEstate }) => {
    let date = values_contract?.subscription_date.split("-")
    let contract_value = 0;
    if (comodato?.resolution === "si") {
        contract_value =
            (comodato?.value_economic_obligations +
                comodato?.network_value +
                comodato?.administration_value +
                comodato?.conservation_value +
                comodato?.cleaning_value +
                comodato?.surveillance_value +
                comodato?.value_domiciliary_public +
                comodato?.value_repairs_damages +
                comodato?.value_locative_repairs)
    } else {
        contract_value = comodato?.commercial_appraisal;
    }

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
                    <td class="right_frame">${comodato?.elaborated.name}</td>
                    <td class="right_frame">${comodato?.revised.name}</td>
                    <td class="right_frame">${comodato?.approved.name}</td>
                </tr>
                <tr class="frame_down">
                    <td class="right_frame">${comodato?.elaborated.post}</td>
                    <td class="right_frame">${comodato?.revised.post}</td>
                    <td class="right_frame">${comodato?.approved.post}</td>
                </tr>
            </tbody>
        </table>

    `;

    const table_principal = `
        <style>
            table {
                margin: 25px;
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
                    <td class="p40">COMODANTE:</td>
                    <td class="p40">MUNICIPIO DE MEDELLÍN - ${realEstate.dependency}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p40">NIT.</td>
                    <td class="p40">890.905.211-1</td>
                </tr>
                <tr>
                    <td class="p40">COMODATARIO:</td>
                    <td class="p40">
                        ${comodato.applicant.type_society === "Persona Juridica" ?
            comodato.applicant.company_name
            :
            `${comodato.detailsApplicant.names.firstName} ${comodato.detailsApplicant.names.lastName} ${comodato.detailsApplicant.surnames.firstSurname} ${comodato.detailsApplicant.surnames.lastSurname}`

        }
                    </td>
                </tr>
                <tr>
                    <td class="p40">NIT.</td>
                    <td class="p40"> ${comodato?.applicant.id_number}</td>
                </tr>
                <tr>
                    <td class="p40">REPRESENTANTE LEGAL:</td>
                        <td class="p40">${comodato?.detailsRepresentative.names.firstName} ${comodato?.detailsRepresentative.names.lastName} ${comodato?.detailsRepresentative.surnames.firstSurname} ${comodato?.detailsRepresentative.surnames.lastSurname}
                    </td>
                </tr>
                <tr>
                    <td class="p40">NÚMERO DE IDENTIFICACIÓN:</td>
                    <td class="p40">${comodato?.detailsRepresentative.id_number}</td>
                </tr>
                <tr>
                    <td class="p40">PLAZO:</td>
                    <td class="p40">${`(${comodato.contract_period}) ${writtenNumber(comodato.contract_period, { lang: 'es' })} meses`}</td>
                </tr>
                <tr>
                    <td class="p40">MATRÍCULA INMOBILIARIA:</td>
                    <td class="p40">${realEstate?.registry_number}</td>
                </tr>
                <tr>
                    <td class="p40">CÓDIGO DE ACTIVO FIJO:</td>
                    <td class="p40">${realEstate?.sap_id}</td>
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
                    <td class="p40">DIRECCIÓN DEL INMUEBLE:</td>
                    <td class="p40">${realEstate?.address?.address}</td>
                </tr>
                <tr>
                    <td class="p40">TIPO DE INMUEBLE:</td>
                    <td class="p40">${comodato.business_type.select === "otro" ? comodato.business_type.input : comodato.business_type.select}</td>
                </tr>
            </tbody>
        </table>

    `;
    return (
        <DocumentPdf
            showToolbar={false}
            title="Contrato de Comodato Bien Inmueble"
            header={{
                code: 'Cód. FO-ADMI-125',
                version: 'Versión. 3',
                title: { prefix: 'Formato', name: 'FO-ADMI Minuta Contrato de Comodato Bien Inmueble' },
            }}
        >
            <Text style={styles.header} fixed>CONTRATO DE COMODATO N° (DIGITAR SÓLO NÚMERO DE CONTRATO – SIN FECHA)  </Text>
            <Text style={styles.title}>CONTRATO DE COMODATO N° (DIGITAR SÓLO NÚMERO DE CONTRATO – SIN FECHA)  </Text>
            <Html>{table_principal}</Html>
            <Text style={styles.sub_text}>
                Entre los suscritos a saber,
                <Text style={styles.subtitle}> {values_contract.secretary.name} </Text>identificado con cédula
                de ciudadanía <Text style={styles.subtitle}> {values_contract.secretary.id_number}</Text>, en su
                calidad de Secretario de Suministros y Servicios del Municipio
                de Medellín, nombrado mediante Decreto Municipal N° <Text style={styles.subtitle}>{values_contract.decree_number} del {moment(values_contract.decree_date).format('DD/MM/YYYY')} </Text>
                mediante Acta N°. <Text style={styles.subtitle}>{values_contract.act_number} del {moment(values_contract.minutes_date).format('DD/MM/YYYY')}, </Text>
                en uso de sus facultades legales y las otorgadas por los
                Decretos Municipales Nros. <Text style={styles.subtitle}>{values_contract.contract_decree}</Text>, expedidos por el Señor Alcalde de Medellín, obrando en
                nombre y representación del
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN </Text>, facultado por
                la Ley 136 de 1994, Ley 80 de 1993, sus decretos reglamentarios
                y de acuerdo a las disposiciones pertinentes del Código Civil,
                de una parte, quien en adelante se denominará el
                <Text style={styles.subtitle}> COMODANTE y
                    {` ${comodato.detailsRepresentative.names.firstName} ${comodato.detailsRepresentative.names.lastName} ${comodato.detailsRepresentative.surnames.firstSurname} ${comodato.detailsRepresentative.surnames.lastSurname}`}
                </Text>,
                identificado con cédula de ciudadanía N° <Text style={styles.subtitle}>{comodato.detailsRepresentative.id_number}</Text>, quien actua en nombre
                y representacion legal de la <Text style={styles.subtitle}>{comodato.applicant.company_name} </Text>
                con NIT. <Text style={styles.subtitle}>{comodato.applicant.id_number}, </Text>
                de la otra parte, quien en adelante se denominará el
                <Text style={styles.subtitle}> COMODATARIO, </Text>
                se ha convenido celebrar el presente contrato de comodato,
                el cual se regirá por las siguientes cláusulas, previas las siguientes consideraciones:
                a) Que el <Text style={styles.subtitle}>MUNICIPIO DE MEDELLÍN </Text>tiene dentro de
                sus bienes inmuebles, uno que no requiere para el cumplimiento
                directo de su actividad misional;
                b) Que en consecuencia, es prudente y necesario, a fin de evitar un
                eventual deterioro por desuso del inmueble, entregarlo a través
                de <Text style={styles.subtitle}>CONTRATO DE COMODATO </Text>a una entidad
                pública o privada previo cumplimiento de los requisitos
                establecidos en la normatividad vigente, para los fines legales
                y constitucionales; c) Que,
                <Text style={styles.subtitle}> EL COMODATARIO</Text>, cumplió con el
                análisis, revisión y evaluación realizado por la dependencia
                responsable del inmueble, tal como consta en los Estudio
                Previos, d) Que la normativa vigente permite esta clase de
                contratos, lo que contribuye indirectamente a que el
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN </Text>cumpla con su
                finalidad misional, razón por la cual se procede, así:
                <Text style={styles.subtitle}> PRIMERA: OBJETO DEL CONTRATO. El COMODANTE </Text>
                se compromete a entregar al <Text style={styles.subtitle}>COMODATARIO</Text>, el inmueble identificado
                en la parte inicial del presente contrato. <Text style={styles.subtitle}>SEGUNDA: ÁREAS Y LINDEROS. </Text>Las áreas y
                los linderos son los siguientes: <Text style={styles.subtitle}>{comodato.boundaries}</Text> con base al informe técnico de Prediación con fecha de
                <Text style={styles.subtitle}> {moment(comodato.prediation_date).format('DD/MM/YYYY')} </Text>
                <Text style={styles.subtitle}>. TERCERA: DESTINACIÓN. </Text>En el
                presente contrato de comodato debe destinarse el inmueble para:
                <Text style={styles.subtitle}> {comodato.destination_realestate}. </Text>
                <Text style={styles.subtitle}>CUARTA: PROHIBICIONES DEL COMODATARIO. </Text>
                Le queda expresamente prohibido al
                <Text style={styles.subtitle}> COMODATARIO </Text>realizar en el inmueble
                objeto del contrato cualquier actividad de la cual se genere
                aprovechamiento económico para este de manera privada, por fuera
                de la destinación del inmueble, y las demás prohibiciones
                contempladas en la normativa vigente. El incumplimiento de esta
                cláusula, dará lugar a la terminación del contrato.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: </Text>Queda expresamente
                prohibido en los inmuebles entregados en comodato almacenar,
                consumir o expender bebidas alcohólicas, sustancias psicoactivas
                o alucinógenas. Así como su utilización para sala de velación,
                eventos políticos, cultos religiosos, parqueaderos,
                almacenamiento de productos ilegales, hurtados, entre otros que
                no estén estipulados expresamente dentro del objeto y alcance
                del presente contrato de comodato.
                {comodato.prohibitions.length > 0 &&
                    <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: {comodato?.prohibitions.map((p) => ` ${p.id}) ${p.prohibition}.`)}</Text>

                }
                <Text style={styles.subtitle}> QUINTA: TÉRMINO DE DURACIÓN. </Text>El
                término de duración del presente contrato de comodato será
                <Text style={styles.subtitle}>
                    {` (${comodato.contract_period})  ${writtenNumber(comodato.contract_period, { lang: 'es' })} meses, `}
                </Text>
                contado a partir de la suscripción del acta de inicio y
                entrega material del inmueble, de conformidad con lo establecido
                por el artículo 38 de la ley 9 de 1989. La duración del presente
                contrato de comodato podrá ser renovada únicamente mediante un
                nuevo contrato, no habrá lugar a prórrogas automáticas.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO</Text>: No obstante lo
                anterior, el MUNICIPIO DE MEDELLÍN se reserva la facultad de
                pedir los inmuebles dados en comodato en cualquier tiempo, de
                conformidad a lo establecido en el artículo 2219 del Código
                Civil, razón por la cual deberá el COMODATARIO restituirlos sin
                oposición alguna.
                <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: </Text>Cumplido el término
                de duración establecido en el presente contrato de comodato,
                deberá iniciarse un nuevo proceso contractual, previo concepto
                del supervisor de este contrato y manifestación escrita de la
                voluntad del comodatario con este propósito. En el evento en el
                que en la etapa de planeación para la elaboración de un nuevo
                contrato, se identifique que el programa o actividad de interés
                público que se requiere desarrollar es ofrecido por más de una
                entidad sin ánimo de lucro, la dependencia a cargo del inmueble
                solicitará a la Subsecretaría de Selección de Proveedores inicio
                de proceso competitivo con el cual se determinará la entidad con
                la cual se celebrará el contrato de comodato.
                <Text style={styles.subtitle}>SEXTA: ABANDONO DEL INMUEBLE. </Text>Al
                suscribirse el presente contrato, EL COMODATARIO, faculta
                expresamente a EL COMODANTE para ingresar al inmueble y
                recuperar su tenencia con el solo requisito de la presencia de
                dos testigos, en procura de evitar el deterioro o el
                desmantelamiento de tal inmueble y en aras de poder disponer del
                mismo y en cumplimiento de la debida administración de los
                bienes inmuebles del municipio, siempre que por cualquier
                circunstancia el mismo permanezca abandonado o deshabitado por
                parte EL COMODATARIO y que la exposición al riesgo amenace la
                integridad física del bien o de sus vecinos.
                <Text style={styles.subtitle}>SÉPTIMA: RESTITUCIÓN ANTICIPADA. </Text>Habrá
                restitución anticipada de los inmuebles en los siguientes casos:
                1) Por cancelación de la personería jurídica de la entidad
                comodataria o por disolución de la misma. 2) Si el inmueble se
                destina a actividades diferentes de las estipuladas en la
                cláusula tercera de este contrato. 3) Por incumplimiento de las
                obligaciones estipuladas en la cláusula Novena de este
                documento. 4) Por cesión o arriendo contemplado en la cláusula
                Octava. 5) Por razones de necesidad, utilidad pública o conveniencia a
                juicio de la Administración Municipal. 6) Cualquier otra
                situación actual o antecedente al contrato, no conocida al
                momento de su celebración y que afecte el desarrollo del
                mismo. 7) Cuando sin autorización alguna, se explote el
                inmueble para la obtención de frutos civiles desligados de la
                destinación del inmueble.
                <Text style={styles.subtitle}> OCTAVA: </Text>
                <Text style={styles.subtitle}>
                    {comodato.economic_exploitation === "si" ?
                        <>
                            SI AUTORIZACIÓN DE EXPLOTACIÓN ECONÓMICA: EL
                            COMODATARIO{" "}
                        </>
                        :
                        <>
                            NO AUTORIZACIÓN DE EXPLOTACIÓN ECONÓMICA: EL
                            COMODATARIO{" "}
                        </>
                    }
                </Text>
                {comodato.economic_exploitation === "si" ?
                    <>
                        tendrá la posibilidad de constituir o crear a su cuenta y riesgo
                        unidades productivas dentro del inmueble, tales como cafeterías,
                        venta de boletería, así como, podrá permitir el uso de los
                        espacios a terceros que realicen actividades culturales
                        sociales, empresariales y pedagógicas, que impliquen retribución
                        económica.
                        <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: </Text>Los dineros
                        recaudados a partir de la autorización concedida, única y
                        exclusivamente podrán ser destinados conforme porcentajes
                        previamente definidos por el comodatario y verificados por el
                        supervisor de la siguiente manera: un porcentaje para la
                        realización y gastos de funcionamiento propios del objeto social
                        de la persona jurídica y otro porcentaje para el mantenimiento y
                        conservación del bien inmueble y los bienes muebles existentes,
                        el COMODATARIO deberá entregar al supervisor del contrato de
                        forma trimestral el plan de mejoramiento y conservación y su
                        respectiva ejecución, así como el balance de los ingresos y
                        egresos de la entidad sin ánimo de lucro. En caso de que el
                        supervisor identifique que los dineros obtenidos a partir de la
                        presente explotación económica están siendo aprovechados a su
                        propio beneficio por parte del representante legal u otro
                        particular, será causal inmediata de terminación del contrato de
                        comodato y deberá iniciar proceso de restitución del inmueble
                        <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: El COMODATARIO </Text>
                        renuncia a todas las adquisiciones, adaptaciones y mejoras tanto
                        en bienes inmuebles como muebles, que se realicen con los
                        dineros generados a través de la explotación económica concedida sin excepción alguna.
                    </>
                    :
                    <>
                        No tendrá ninguna autorización para explotación económica en este
                        inmueble entregado en comodato.
                    </>
                }
                <Text style={styles.subtitle}>NOVENA: ADAPTACIONES Y/O MEJORAS. </Text>
                Las adaptaciones y/o mejoras que se requieran para el desarrollo
                del presente contrato de comodato, serán por cuenta del
                <Text style={styles.subtitle}>COMODATARIO</Text>, previa aceptación por
                parte del Comité de Mantenimiento de la Secretaría de
                Suministros y Servicios. El{" "}
                <Text style={styles.subtitle}>COMODATARIO </Text>deberá renunciar a todas
                las mejoras y construcciones que realice, las cuales quedarán de
                propiedad del <Text style={styles.subtitle}>MUNICIPIO DE MEDELLÍN</Text>,
                sin que haya exigencia, contraprestación o indemnización alguna
                por este concepto, en consecuencia, el{" "}
                <Text style={styles.subtitle}>COMODATARIO </Text>renuncia expresamente al
                derecho de retención de que trata la ley y a cualquier
                requerimiento previo relacionado con la restitución del
                inmueble. El régimen de mejoras se sujetará a la normatividad
                del Código Civil y a la normatividad vigente. Para el manejo de
                áreas húmedas, entre ellas, piscinas, deberán observar con celo,
                lo dispuesto en la normatividad vigente, aclarando que el
                <Text style={styles.subtitle}>MUNICIPIO DE MEDELLÍN </Text>no se hace
                responsable por ningún siniestro que ocurra con ocasión a este
                tema y otros, lo que acepta así, el{" "}
                <Text style={styles.subtitle}>COMODATARIO</Text>.
                <Text style={styles.subtitle}>PARÁGRAFO: </Text>Los gastos ordinarios se
                encuentran a cargo del <Text style={styles.subtitle}>COMODATARIO</Text>,
                como quiera que corresponden al derecho de usar la cosa (gastos
                de uso) y a la obligación de conservarla en el estado en que fue
                entregada (gastos de conservación), y los gastos extraordinarios
                incumben al
                <Text style={styles.subtitle}>COMODANTE</Text>, en tanto que hacen relación
                a cuestiones urgentes que van más allá del uso natural
                convenido, de conformidad al artículo 2216 del Código Civil.
                <Text style={styles.subtitle}>DÉCIMA: CESIÓN Y ARRENDAMIENTO. </Text>El
                <Text style={styles.subtitle}>COMODATARIO </Text>no podrá ceder ni arrendar
                el (los) inmueble(s) entregado(s) en comodato(s) a persona
                alguna, natural o jurídica, temporal o definitiva, parcial o
                totalmente. El incumplimiento a esta disposición será causal de
                restitución inmediata del inmueble.{" "}
                <Text style={styles.subtitle}>PARÁGRAFO PRIMERO: </Text>El uso compartido
                de las sedes con otras organizaciones se sujetará a lo dispuesto
                por cada dependencia en sus reglamentos de uso de sedes y
                equipamientos sociales, quienes en todo caso, estarán sujetos a
                las obligaciones y prohibiciones contenidas en el presente
                contrato de comodato.
                <Text style={styles.subtitle}> DÉCIMA PRIMERA: OBLIGACIONES
                    DEL COMODATARIO.</Text> El
                <Text style={styles.subtitle}> COMODATARIO</Text>, se obliga: 1) A emplear
                el mayor cuidado en la conservación de los bienes, objeto de
                este contrato, siendo responsable de cualquier deterioro que no
                provenga de la naturaleza o uso legítimo de la cosa. 2) A
                impedir que el inmueble sea ocupado para asuntos diferentes a
                los mencionados en la cláusula tercera. 3) A realizar las
                reparaciones locativas y a reparar los deterioros que provengan
                de su actividad o de las de sus dependientes, salvo el deterioro
                que provenga por el paso del tiempo y el uso normal del
                inmueble. 4) A impedir que personas ajenas al presente contrato
                se instalen en forma temporal o definitiva en el inmueble
                mencionado. 5) A restituir el inmueble dentro de los treinta
                (30) días siguientes a la solicitud de entrega formulada por la
                Administración Municipal. 6) A no variar la destinación y uso
                propuesto para el bien, determinado en la cláusula tercera de
                este contrato. 7) Responder por los daños que los bienes
                entregados causen a terceros. 8) A permitir el ingreso del
                personal adscrito al Municipio de Medellín, cuando EL
                <Text style={styles.subtitle}> COMODANTE </Text>lo considere necesario, para
                inspecciones físicas de rutina del bien o efectos de la
                ejecución de supervisión del presente contrato de comodato. 9)
                Deberá pagar y aportar los recibos de paz y salvos de Servicios
                Públicos cancelados, <Text style={styles.subtitle}>{comodato.peacesafe}</Text> de tal forma que se pueda
                verificar el pago de todos los servicios públicos contratados y
                trabajos realizados por cuenta del
                <Text style={styles.subtitle}> COMODATARIO</Text>, y ante los requerimientos
                de quién tenga a su cargo la supervisión. 10) Deberá proveer la
                respectiva vigilancia del inmueble. 11) Aportar cada año los
                respectivos certificados de mantenimiento, registro y vigencia
                de extintores a quien ejerza la supervisión del contrato. 12)
                Estar registrado previamente en el SECOP II, con el fin de
                publicar los documentos contractuales. 13) Presentar un informe
                trimestral al supervisor del contrato sobre el uso, estado,
                destino, conservación del bien y las cuentas de servicios
                canceladas, así como las facturas de pago de las cuotas de
                administración, impuesto predial, u otro, cuando a ello hubiere
                lugar. De igual forma deberá presentar el plan de mejoramiento y
                conservación y su ejecución, como también el balance de ingresos
                y egresos de la entidad sin ánimo de lucro en los casos en los
                cuales se haya autorizado explotación económica 14) Realizar
                adaptaciones y mejoras con la aprobación por escrito de la
                Secretaria de Suministros y Servicios, las cuales serán por su
                cuenta y riesgo. 15) Asumir los gastos generados por el uso
                normal, el mantenimiento, la conservación y vigilancia del bien
                inmueble, así como los correspondientes a la legalización del
                contrato como garantías, impuestos y publicación cuando a ello
                haya lugar. 16) Participar en la terminación y liquidación del
                contrato así como suscribir las actas correspondientes.
                {comodato.obligations.length > 0 &&
                    <Text style={styles.subtitle}> {comodato?.prohibitions.map((p) => ` ${p.id}) ${p.prohibition}.`)}</Text>
                }
                <Text style={styles.subtitle}> DÉCIMA SEGUNDA: RELACIÓN CON TERCEROS. </Text>
                El<Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN </Text>no adquiere ni
                adquirirá vínculo alguno de carácter laboral con el personal que
                administre o preste sus servicios al
                <Text style={styles.subtitle}> COMODATARIO</Text>. Por lo tanto, serán de
                cargo exclusivo del <Text style={styles.subtitle}>COMODATARIO </Text>todos
                los gastos que se generen, incluyendo el pago de salarios,
                prestaciones sociales, entre otros.
                <Text style={styles.subtitle}> DÉCIMA TERCERA: SERVICIOS PÚBLICOS. </Text>
                Los servicios públicos de manera general y sin excepción,
                estarán a cargo del <Text style={styles.subtitle}> COMODATARIO</Text>.
                <Text style={styles.subtitle}>PARÁGRAFO PRIMERO: El COMODATARIO </Text>
                deberá mantener al día el pago de los servicios públicos
                domiciliarios, será obligación enviar constancia de pago, de
                acuerdo a la periodicidad de los mismos al supervisor del
                contrato para que éste haga la verificación correspondiente y
                deje constancia en el respectivo informe. El incumplimiento de
                esta obligación dará lugar a la terminación del contrato y como
                consecuencia la restitución del inmueble.{" "}
                <Text style={styles.subtitle}>PARÁGRAFO SEGUNDO: </Text>en caso de que el
                valor correspondiente a servicios públicos u otro concepto sea
                determinado por aforo la Secretaria de Suministro y Servicios a
                través de la Unidad de Administración de Bienes Inmuebles -
                UABI- elaborará factura de acuerdo a la periodicidad del valor
                aforado; si
                <Text style={styles.subtitle}> EL COMODATARIO </Text>no recibe la factura en
                su domicilio en los diez (10) primeros días calendario de cada
                mes, no será justificación para
                cumplimiento en el pago y deberá presentarse en la UABI a
                reclamarla para el respectivo pago.
                <Text style={styles.subtitle}> DÉCIMA CUARTA: REQUERIMIENTO DEL
                    INMUEBLE.</Text> El inmueble entregado
                en comodato seguirá conformando el patrimonio del
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN</Text>, quien podrá
                solicitarlos en cualquier tiempo, antes del vencimiento del
                contrato si el <Text style={styles.subtitle}>COMODATARIO </Text>no cumple
                con el objeto para el cual le fue entregado el inmueble o si el
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN </Text>los necesitare
                para otros fines. <Text style={styles.subtitle}>DÉCIMA QUINTA: DERECHO DE USO DEL INMUEBLE POR PARTE DEL COMODANTE: </Text>
                El Municipio de Medellín podrá realizar eventos o actividades en el inmueble
                entregado en comodato, previo aviso al
                <Text style={styles.subtitle}> COMODATARIO, </Text>para lo cual éste no
                podrá oponerse, y no habrá lugar al pago de contraprestación
                alguna por el uso de las instalaciones.
                <Text style={styles.subtitle}> DÉCIMA SEXTA: GARANTÍAS. </Text>El
                <Text style={styles.subtitle}> COMODATARIO </Text>deberá otorgar garantía
                única de cumplimiento que avale las obligaciones derivadas del
                presente contrato, de conformidad con lo establecido por el
                artículo 2.2.1.2.3.1.7 el Decreto Nacional 1082 de 2015, la
                normatividad vigente, y demás que lo modifiquen, adicionen o
                sustituyan, la cual debe ser aceptada por el{" "}
                <Text style={styles.subtitle}>COMODANTE </Text>y deberá cubrir el siguiente
                amparo:
                <Text style={styles.subtitle}> Cumplimiento del contrato: </Text>Con el fin
                de garantizar las obligaciones que en razón de este contrato
                asume el
                <Text style={styles.subtitle}> COMODATARIO, </Text>deberá otorgar una
                garantía correspondiente al <Text style={styles.subtitle}> {writtenNumber(comodato.lockable_base, { lang: 'es' })} (%) </Text> por ciento de
                acuerdo con la base asegurable obtenida a partir de{" "}
                {comodato.resolution === "si" ?
                    <>
                        la sumatoria de la cuantificación de las obligaciones
                        contractuales y extracontractuales del comodatario la cual asciende a
                        <Text style={styles.subtitle}>(${contract_value}) {writtenNumber(contract_value, { lang: 'es' })} pesos </Text>
                    </>
                    :
                    <>
                        el valor obtenido como avalúo comercial vigente del inmueble
                        el cual es de <Text style={styles.subtitle}> ($${contract_value}) ${writtenNumber(contract_value, { lang: 'es' })} pesos </Text>
                    </>

                }
                con una vigencia igual al plazo pactado y cuatro (4) meses más, para dar
                cumplimiento a lo estipulado en la Ley 80 de 1993 y sus decretos
                reglamentarios.
                <Text style={styles.subtitle}> PARÁGRAFO PRIMERO: </Text>Sera obligación del
                supervisor del presente contrato de comodato informar a la
                Aseguradora que expide la póliza de cumplimiento, la fecha de
                inicio del contrato para que proceda a la modificación de la
                vigencia de la misma y se cumpla con el amparo estipulado en la
                presenta cláusula.
                <Text style={styles.subtitle}> PARÁGRAFO SEGUNDO: </Text>Las citadas
                garantías las deberá entregar{" "}
                <Text style={styles.subtitle}>EL COMODATARIO </Text>al
                <Text style={styles.subtitle}> COMODANTE</Text>, dentro de los diez (10)
                días hábiles siguientes a la suscripción del presente contrato,
                de no ser así, se entenderá que desiste del contrato y se dará
                por terminado, iniciando los trámites de recuperación del
                inmueble en caso de ser una renovación.{" "}
                <Text style={styles.subtitle}>
                    DÉCIMA SÉPTIMA: INDEMNIDAD: El COMODATARIO{" "}
                </Text>
                mantendrá indemne al
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN </Text>de todo reclamo,
                demanda, acción legal y costos que puedan causarse o surgir por
                daños o lesiones a personas o bienes, ocasionados por el
                <Text style={styles.subtitle}> COMODATARIO </Text>o su personal, durante la
                ejecución del objeto y obligaciones del presente contrato de
                comodato. En caso de que se formule reclamo, demanda o acción
                legal contra el
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN </Text>por perjuicios
                ocasionados en la ejecución del contrato que sean de
                responsabilidad del <Text style={styles.subtitle}>COMODATARIO</Text>, se le
                comunicará de manera inmediata de ello para que por su cuenta
                adopte oportunamente las medidas previstas por la ley para mantener indemne al
                <Text style={styles.subtitle}>MUNICIPIO DE MEDELLÍN </Text>y adelante los
                trámites para llegar a un arreglo del conflicto.
                <Text style={styles.subtitle}>DÉCIMA OCTAVA: CLÁUSULA PENAL</Text>. En caso
                de incumplimiento del contrato se hará efectiva la cláusula
                penal, la cual será considerada como pago parcial por los
                perjuicios causados al
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN</Text>. Su valor se
                fija, para cada vez que se imponga, en un 10% del valor del
                contrato y podrá hacerse efectiva de manera unilateral sin
                necesidad de declaratoria judicial, previo informe del
                supervisor.{" "}
                <Text style={styles.subtitle}>
                    DÉCIMA NOVENA: INHABILIDADES E INCOMPATIBILIDADES.{" "}
                </Text>
                El <Text style={styles.subtitle}>COMODATARIO </Text>declara bajo la
                gravedad del juramento, que se entiende prestado con la firma
                del contrato, que no se encuentra incurso en ninguna de las
                causales de inhabilidad e incompatibilidad establecidas en el
                artículo 8 de la Ley 80 de 1993 y en las demás disposiciones
                vigentes, así mismo que se encuentra a paz y salvo con la
                Administración Municipal.
                <Text style={styles.subtitle}>VIGÉSIMA: SUPERVISIÓN</Text>. La supervisión
                del presente contrato de comodato la realizará la
                <Text style={styles.subtitle}> {realEstate.dependency} </Text>
                conforme lo establecen las normas de
                los artículos 82 y siguientes de la Ley 1474 de 2011 y demás
                disposiciones concordantes, normatividad de la entidad, entre
                otras que regulen la materia, para ello se designará por escrito
                un servidor público, el cual deberá velar por el cumplimiento de
                las obligaciones contractuales desde el inicio de la ejecución
                del presente contrato de comodato hasta la liquidación del mismo
                e informar al
                <Text style={styles.subtitle}> COMODANTE</Text>, sobre su cumplimiento y de
                toda irregularidad que se presente sobre hechos imputables al
                <Text style={styles.subtitle}> COMODATARIO </Text>y que pueda causar
                perjuicios al
                <Text style={styles.subtitle}> MUNICIPIO DE MEDELLÍN</Text>, propietario del
                inmueble.
                <Text style={styles.subtitle}> VIGÉSIMA PRIMERA: AUDITORÍA INTERNA. </Text>
                En ejercicio de la función de auditoría interna, la Secretaría
                de Evaluación y Control mediante comunicación suscrita por el
                Secretario de Despacho o los subsecretarios, podrá requerir del
                <Text style={styles.subtitle}> COMODATARIO </Text>toda la información
                relacionada con los aspectos técnicos, administrativos,
                financieros y legales del contrato, pudiendo ser necesario,
                inspeccionar los documentos, lugares o sedes donde se ejecute la
                prestación, según las técnicas de auditoría aplicadas. Los
                informes de auditoría interna son de uso reservado de la
                Secretaría de Evaluación y Control, el ordenador del gasto y el
                señor Alcalde. La reticencia del
                <Text style={styles.subtitle}> COMODATARIO </Text>a atender los
                requerimientos de la Auditoría Interna serán sujetos de Multa
                por mora en la entrega de información.
                <Text style={styles.subtitle}> VIGÉSIMA SEGUNDA: RÉGIMEN APLICABLE: </Text>
                El presente contrato de comodato se
                fundamenta en su aplicación bajo el Código Civil Colombiano, el
                artículo 355 de la Constitución Política de Colombia, Decreto 092 de 2017
                {comodato.loan_typology === "las juntas de acción comunal" &&
                    <Text style={styles.subtitle}> "la Ley 743 de 2002 modificada por la ley 1989 de 2019" </Text>
                }, Ley 9 de 1989 en la modalidad de contratación especial, en la tipología de
                contrato de comodato con entidades sin ánimo de lucro (ESAL),
                como entidades de reconocida idoneidad y necesarias para el
                impulso y ejecución de programas sociales requeridos a través
                del plan de desarrollo. De igual forma bajo lo preceptuado en el
                Decreto 092 de 2017, al presente contrato le asistirá o no
                realización de proceso competitivo en cuanto a la verificación
                de un único o pluralidad de solicitantes realizada por parte de
                la Secretaría a cargo del inmueble. De igual forma a lo
                dispuesto en el Código Civil para los contratos de comodato y en
                lo pertinente por la Ley 80 de 1993, 1150 de 2007 y sus decretos
                reglamentarios en especial el Decreto 1082 de 2015.
                <Text style={styles.subtitle}> VIGÉSIMA TERCERA: PUBLICACIÓN. </Text>De
                conformidad con el artículo 2.2.1.1.1.7.1 del Decreto 1082 de
                2015, y con el artículo 223 del <Text>Decreto-Ley</Text> 019 de
                2012, el presente contrato una vez perfeccionado, deberá ser
                publicado por parte del{" "}
                <Text style={styles.subtitle}>MUNICIPIO DE MEDELLÍN </Text>en el Sistema
                Electrónico para la contratación Pública, SECOP y a través del
                Portal único de Contratación
                <a href="http://www.colombiacompra.gov.co">
                    <Text style={styles.subtitle}>www.colombiacompra.gov.co</Text>
                </a>
                , de acuerdo a los lineamientos establecidos por la
                Administración Municipal en concordancia con lo dispuesto por la
                Agencia Nacional de Contratación Pública Colombia Compra
                Eficiente.
                <Text style={styles.subtitle}> VIGÉSIMA CUARTA: </Text>El Municipio de
                Medellín, en concordancia con lo establecido en la Constitución
                Política de Colombia (arts. 15 y 20), la Ley 1581 de 2012
                <Text style={styles.italic}> "Por la cual se dictan disposiciones generales para la protección de datos personales" </Text>
                y el Decreto 1377 de 2013
                <Text style={styles.italic}> "Por el cual parcialmente la Ley 1581 de 2012" </Text>
                y comprometido con el uso legal, el tratamiento de datos de
                acuerdo con los fines establecidos y la seguridad y privacidad
                de la información que recolecte, almacene, use, circule o
                suprima, y en cumplimiento del mandato legal y el compromiso
                institucional en cuanto al tratamiento de la información, adopta
                la Política para el tratamiento de datos personales” mediante el
                Decreto 1096 de 2018, los cuales serán tratados con la finalidad
                de recolectar, incorporar, reportar, procesar y consultar en
                bancos de datos la información relacionada o derivada de este
                contrato, así como su entrega a terceros para las gestiones de
                cobro a que hubiere lugar. En este sentido, el Municipio de
                Medellín como entidad responsable del tratamiento de los datos,
                le comunica que la información suministrada, con ocasión a la
                celebración del contrato de Comodato suscrito con la Secretaría
                de Suministros y Servicios del Municipio de Medellín, serán
                tratados de manera segura y confidencial, y que le asisten los
                derechos de conocerlos, actualizarlos y rectificarlos, acorde
                con la norma de protección de datos personales y la política
                adoptada. Los datos personales recolectados y almacenados por el
                Municipio de Medellín, en la medida que dependen de la relación
                directa o indirecta que tenga con EL COMODATARIO, en este caso
                la suscripción del contrato de comodato, podrá ser necesario
                obtener, su nombre, dirección, número telefónico, dirección de
                residencia, correo electrónico, entre otros. Así mismo, el
                Municipio de Medellín podrá, entregar o dar acceso a terceros a
                los datos personales que recopile y trate, caso en el cual
                dichos terceros actuarán como encargados del tratamiento y
                estarán sujetos a los deberes y obligaciones que para tal figura
                prevé la Ley 1581 de 2012 y sus decretos reglamentarios.
                <Text style={styles.subtitle}>
                    VIGÉSIMA QUINTA: AUTORIZACIÓN DE TRATAMIENTO DE DATOS.{" "}
                </Text>
                El COMODATARIO<Text style={styles.subtitle}>, </Text>manifiesta que ha sido
                informado por el Municipio de Medellín, de lo siguiente: 1) Que
                el Municipio de Medellín actuará como responsable del
                tratamiento de datos personales de los cuales es titular 2) De
                la finalidad del tratamiento de datos 3) De los derechos que
                como titular de los datos le asisten. 4) Que el Municipio de
                Medellín se reserva el derecho a realizar modificaciones a la
                Política de Tratamiento de Datos Personales en cualquier
                momento, lo cual será informado y publicado oportunamente en la
                página Web o por correo electrónico. En señal de conformidad con
                lo anterior, EL COMODATARIO, AUTORIZA a EL COMODANTE, para
                incorporar, reportar, procesar y consultar en bancos de datos la
                información relacionada o derivada de este contrato, así
                como su entrega a terceros para las gestiones de cobro a que
                hubiere lugar.{" "}
                <Text style={styles.subtitle}>VIGÉSIMA SEXTA: NOTIFICACIONES</Text>: Las
                notificaciones que cualquiera de las partes deseare hacer a la
                otra, deben formularse por escrito a las siguientes direcciones:
                <Text style={styles.subtitle}> COMODANTE: {comodato.location_leader.address} </Text>
                <Text style={styles.subtitle}> COMODATARIO:
                    Dirección: ${comodato.location_applicant.address} Correo electrónico:
                    ${comodato.applicant.email} Teléfono: ${comodato.applicant.phone_number}
                </Text>
            </Text>
            <Text style={styles.text}>
                Para constancia se firma en la ciudad de Medellín, en la fecha {`${date[2]} de ${months(date[1])} de ${date[0]}`}
            </Text>
            <Text style={styles.sub_text}>{values_contract.secretary.name}</Text>
            <Text style={styles.sub_text}>Secretario de Despacho</Text>
            <Text style={styles.sub_text}>Secretaría de Suministros y Servicios</Text>
            <Text style={styles.sub_text}>Comodante</Text>

            <Text style={styles.text}></Text>
            <Text style={styles.sub_text}>{comodato.applicant.company_name}</Text>
            <Text style={styles.sub_text}>NIT {comodato.applicant.id_number}</Text>
            <Text style={styles.sub_text}>Teléfono: {comodato.applicant.phone_number}</Text>
            <Text style={styles.sub_text}>Dirección: {comodato.location_applicant.address}</Text>
            <Text style={styles.sub_text}>Correo electrónico: {comodato.applicant.email}</Text>
            <Text style={styles.sub_text}>Comodatario</Text>
            <Text style={styles.text}></Text>
            <Html>{table_lider}</Html>

        </DocumentPdf>
    )
}

export default ComodatoContractPdf

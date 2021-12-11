import React from 'react'
import { Card } from '../../../../../utils/ui';
import imgbs64 from '../../../../../utils/assets/img/header.png';
import '../../../../../utils/assets/styles/contract_comodato.css';
import { useLocation, useHistory } from 'react-router-dom';
interface IParams {
    values: any;
    realEstate: any;
    dispositionType: any;

}
const ComodatoDocContract = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const { values, realEstate, dispositionType } = location.state;
    console.log(values, realEstate, dispositionType);
    return (
        <div className="h-100 d-flex flex-column">
            <div className="container-fluid">
                <Card className="" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_1_ContratoComodato">
                        <div id="p1dimg1">
                            <img src={imgbs64} alt="" id="p1img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id1_1_ContratoComodato">
                            <div id="id1_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id1_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id1_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p4_ContratoComodato ft4_ContratoComodato">
                                CONTRATO DE COMODATO N° (DIGITAR SÓLO NÚMERO DE CONTRATO – SIN
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t0_ContratoComodato">
                                <tr>
                                    <td className="tr0_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr0_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft5_ContratoComodato">&nbsp;</p>
                                    </td>
                                    <td className="tr0_ContratoComodato td2_ContratoComodato">
                                        <p className="p6_ContratoComodato ft4_ContratoComodato">FECHA)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr1_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr2_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">COMODANTE:</p>
                                    </td>
                                    <td className="tr1_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            Municipio de Medellín - (Digitar nombre de
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr4_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft7_ContratoComodato">
                                            Secretaría o Departamento Administrativo)
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr5_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr6_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">NIT.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr1_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr1_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            890.905.211-1
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr1_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr7_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">COMODATARIO:</p>
                                    </td>
                                    <td className="tr1_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            (Digitar nombre completo o razón social del
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr8_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr4_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft7_ContratoComodato">comodatario)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr9_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr6_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">NIT.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr10_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr10_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">(Digitar número de identificación)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr1_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr1_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft8_ContratoComodato">REPRESENTANTE LEGAL:</p>
                                    </td>
                                    <td className="tr1_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">(Digitar nombre completo)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr1_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr1_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft8_ContratoComodato">NÚMERO DE</p>
                                    </td>
                                    <td rowSpan={2} className="tr11_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">(Digitar número de identificación)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr12_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr13_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft9_ContratoComodato">IDENTIFICACIÓN:</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr5_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr5_ContratoComodato td2_ContratoComodato">
                                        <p className="p5_ContratoComodato ft10_ContratoComodato">&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr14_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr14_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">PLAZO:</p>
                                    </td>
                                    <td className="tr14_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            (Digite tiempo en letras), (tiempo en número)
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr4_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr2_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">MATRICULA INMOBILIARIA:</p>
                                    </td>
                                    <td className="tr4_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft7_ContratoComodato">
                                            {realEstate?.registry_number}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr9_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr6_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">CÓDIGO DE ACTIVO FIJO:</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr10_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr10_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            {realEstate?.sap_id}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr1_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr2_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">C B M L:</p>
                                    </td>
                                    <td className="tr1_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            {`${realEstate?.address?.location?.commune_code}, ${realEstate?.address?.location?.neighborhood_code}`}
                                            {/* TODO: falta agregar manzana y lote */}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr5_ContratoComodato tr0_ContratoComodato"></td>
                                    <td rowSpan={2} className="tr6_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">ESCRITURA</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr1_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr1_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            (Digite; Nro. Escritura) / (Fecha escritura) /
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr10_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr10_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">/FECHA/NOTARIA:</p>
                                    </td>
                                    <td className="tr10_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">(Notaría donde se hizo)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr4_ContratoComodato tr0_ContratoComodato"></td>
                                    <td  className="tr2_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">DIRECCIÓN DEL INMUEBLE:</p>
                                    </td>
                                    <td className="tr4_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft7_ContratoComodato">{realEstate?.address?.address}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr9_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr9_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft11_ContratoComodato">&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr10_ContratoComodato tr0_ContratoComodato"></td>
                                    <td  className="tr15_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft4_ContratoComodato">TIPO DE INMUEBLE:</p>
                                    </td>
                                    <td className="tr10_ContratoComodato td2_ContratoComodato">
                                        <p className="p7_ContratoComodato ft6_ContratoComodato">
                                            (Digite si es; casa, apartamento, bodega, lote etc)
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr16_ContratoComodato tr0_ContratoComodato"></td>
                                    <td className="tr16_ContratoComodato td1_ContratoComodato">
                                        <p className="p5_ContratoComodato ft12_ContratoComodato">&nbsp;</p>
                                    </td>
                                </tr>
                            </table>
                            <p className="p8_ContratoComodato ft4_ContratoComodato">
                                <span className="ft6_ContratoComodato">Entre los suscritos a saber, </span>Digite en
                                mayúscula sostenida el nombre del Secretario
                            </p>
                            <p className="p9_ContratoComodato ft14_ContratoComodato">
                                <span className="ft13_ContratoComodato">de Despacho, </span>identificado con cédula
                                de ciudadanía Digite el número del documento de identidad, en su
                                calidad de Secretario de Suministros y Servicios del Municipio
                                de Medellín, nombrado mediante Decreto Municipal N° Digite el
                                número y fecha del Decreto de nombramiento y posesionado
                                mediante Acta N°. Digite el número y fecha del Acta de posesión,
                                en uso de sus facultades legales y las otorgadas por los
                                Decretos Municipales Nros. 883 de 2015, 1039 de 2016 y 0455 de
                                2019, expedidos por el Señor Alcalde de Medellín, obrando en
                                nombre y representación del
                                <span className="ft13_ContratoComodato">MUNICIPIO DE MEDELLÍN</span>, facultado por
                                la Ley 136 de 1994, Ley 80 de 1993, sus decretos reglamentarios
                                y de acuerdo a las disposiciones pertinentes del Código Civil,
                                de una parte, quien en adelante se
                            </p>
                            <p className="p10_ContratoComodato ft13_ContratoComodato">
                                <span className="ft14_ContratoComodato">denominará el </span>COMODANTE y (DIGITAR
                                NOMBRE COMPLETO DEL REPRESENTANTE LEGAL DEL COMODATARIO)
                                <span className="ft14_ContratoComodato">, identificado con cédula de</span>
                            </p>
                            <p className="p3_ContratoComodato ft6_ContratoComodato">
                                ciudadanía N° <span className="ft4_ContratoComodato">(</span>Digitar número de
                                identificación<span className="ft4_ContratoComodato">)</span>, quien actua en nombre
                                y representacion
                            </p>
                            <p className="p3_ContratoComodato ft4_ContratoComodato">
                                <span className="ft6_ContratoComodato">legal de la </span>(DIGITAR RAZÓN SOCIAL DEL
                                COMODATARIO) <span className="ft6_ContratoComodato">con NIT. (Digitar número</span>
                            </p>
                            <p className="p11_ContratoComodato ft14_ContratoComodato">
                                de identificación tributaria del comodatario)
                                <span className="ft13_ContratoComodato">, </span>de la otra parte, quien en adelante
                                se denominará el
                                <span className="ft13_ContratoComodato">COMODATARIO</span>, se ha convenido celebrar
                                el presente contrato de comodato, el cual se regirá por las
                                siguientes cláusulas, previas las siguientes consideraciones
                                <span className="ft13_ContratoComodato">: </span>a) Que el{" "}
                                <span className="ft13_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>tiene dentro de
                                sus bienes inmuebles, uno que no requiere para el cumplimiento
                                directo de su actividad misional; b)
                            </p>
                            <p className="p12_ContratoComodato ft15_ContratoComodato">Página 1 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_2_ContratoComodato">
                        <div id="p2dimg1">
                            <img src={imgbs64} alt="" id="p2img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id2_1_ContratoComodato">
                            <div id="id2_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id2_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id2_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p18_ContratoComodato ft19_ContratoComodato">
                                Que en consecuencia, es prudente y necesario, a fin de evitar un
                                eventual deterioro por desuso del inmueble, entregarlo a través
                                de
                                <span className="ft18_ContratoComodato">CONTRATO DE COMODATO </span>a una entidad
                                pública o privada previo cumplimiento de los requisitos
                                establecidos en la normatividad vigente, para los fines legales
                                y constitucionales; c) Que,{" "}
                                <span className="ft18_ContratoComodato">EL COMODATARIO</span>, cumplió con el
                                análisis, revisión y evaluación realizado por la dependencia
                                responsable del inmueble, tal como consta en los Estudio
                                Previos, d) Que la normativa vigente permite esta clase de
                                contratos, lo que contribuye indirectamente a que el
                                <span className="ft18_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>cumpla con su
                                finalidad misional, razón por la cual se procede, así:
                            </p>
                            <p className="p19_ContratoComodato ft4_ContratoComodato">
                                PRIMERA: OBJETO DEL CONTRATO. El COMODANTE
                                <span className="ft6_ContratoComodato">se compromete a entregar </span>al
                            </p>
                            <p className="p10_ContratoComodato ft14_ContratoComodato">
                                <span className="ft13_ContratoComodato">COMODATARIO</span>, el inmueble identificado
                                en la parte inicial del presente contrato.
                                <span className="ft13_ContratoComodato">SEGUNDA: ÁREAS Y LINDEROS. </span>Las áreas y
                                los linderos son los siguientes: (Digitar descripción de áreas y
                                linderos) con base al informe técnico de Prediación con fecha de
                                (Digitar fecha de elaboración del informe técnico de prediación
                                <span className="ft13_ContratoComodato">). TERCERA: DESTINACIÓN. </span>En el
                                presente contrato de comodato debe destinarse el inmueble para:
                                (Digitar descripción de la destinación tomada literalmente del
                                estudio previo
                                <span className="ft13_ContratoComodato">
                                    ). CUARTA: PROHIBICIONES DEL COMODATARIO.{" "}
                                </span>
                                Le queda expresamente prohibido al
                                <span className="ft13_ContratoComodato">COMODATARIO </span>realizar en el inmueble
                                objeto del contrato cualquier actividad de la cual se genere
                                aprovechamiento económico para este de manera privada, por fuera
                                de la destinación del inmueble, y las demás prohibiciones
                                contempladas en la normativa vigente. El incumplimiento de esta
                                cláusula, dará lugar a la terminación del contrato.
                                <span className="ft13_ContratoComodato">PARÁGRAFO PRIMERO: </span>Queda expresamente
                                prohibido en los inmuebles entregados en comodato almacenar,
                                consumir o expender bebidas alcohólicas, sustancias psicoactivas
                                o alucinógenas. Así como su utilización para sala de velación,
                                eventos políticos, cultos religiosos, parqueaderos,
                                almacenamiento de productos ilegales, hurtados, entre otros que
                                no estén estipulados expresamente dentro del objeto y alcance
                                del presente contrato de comodato.{" "}
                                <span className="ft13_ContratoComodato">PARÁGRAFO SEGUNDO: </span>(Digitar las
                                prohibiciones adicionales que considere la dependencia encargada
                                del inmueble que se encuentren en los estudios previos y
                                enumérelas
                                <span className="ft13_ContratoComodato">). QUINTA: TÉRMINO DE DURACIÓN. </span>El
                                término de duración del presente contrato de comodato será
                                <span className="ft13_ContratoComodato">
                                    (Digite tiempo en letras), (Tiempo en números)
                                </span>
                                , contado a partir de la suscripción del acta de inicio y
                                entrega material del inmueble, de conformidad con lo establecido
                                por el artículo 38 de la ley 9 de 1989. La duración del presente
                                contrato de comodato podrá ser renovada únicamente mediante un
                                nuevo contrato, no habrá lugar a prórrogas automáticas.
                                <span className="ft13_ContratoComodato">PARÁGRAFO PRIMERO</span>: No obstante lo
                                anterior, el MUNICIPIO DE MEDELLÍN se reserva la facultad de
                                pedir los inmuebles dados en comodato en cualquier tiempo, de
                                conformidad a lo establecido en el artículo 2219 del Código
                                Civil, razón por la cual deberá el COMODATARIO restituirlos sin
                                oposición alguna.
                                <span className="ft13_ContratoComodato">PARÁGRAFO SEGUNDO: </span>Cumplido el término
                                de duración establecido en el presente contrato de comodato,
                                deberá iniciarse un nuevo proceso contractual, previo concepto
                                del supervisor de este contrato y manifestación escrita de la
                                voluntad del comodatario con este propósito. En el evento en el
                                que en la etapa de planeación para la elaboración de un nuevo
                                contrato, se identifique que el programa o actividad de interés
                                público que se requiere desarrollar es ofrecido por más de una
                            </p>
                            <p className="p20_ContratoComodato ft15_ContratoComodato">Página 2 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_3_ContratoComodato">
                        <div id="p3dimg1">
                            <img src={imgbs64} alt="" id="p3img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id3_1_ContratoComodato">
                            <div id="id3_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id3_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id3_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p18_ContratoComodato ft14_ContratoComodato">
                                entidad sin ánimo de lucro, la dependencia a cargo del inmueble
                                solicitará a la Subsecretaría de Selección de Proveedores inicio
                                de proceso competitivo con el cual se determinará la entidad con
                                la cual se celebrará el contrato de comodato.
                                <span className="ft13_ContratoComodato">SEXTA: ABANDONO DEL INMUEBLE. </span>Al
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
                                <span className="ft13_ContratoComodato">SÉPTIMA: RESTITUCIÓN ANTICIPADA. </span>Habrá
                                restitución anticipada de los inmuebles en los siguientes casos:
                                1) Por cancelación de la personería jurídica de la entidad
                                comodataria o por disolución de la misma. 2) Si el inmueble se
                                destina a actividades diferentes de las estipuladas en la
                                cláusula tercera de este contrato. 3) Por incumplimiento de las
                                obligaciones estipuladas en la cláusula Novena de este
                                documento. 4) Por cesión o arriendo contemplado en la cláusula
                                Octava.
                            </p>
                            <p className="p18_ContratoComodato ft19_ContratoComodato">
                                <span className="ft6_ContratoComodato">5)</span>
                                <span className="ft20_ContratoComodato">
                                    Por razones de necesidad, utilidad pública o conveniencia a
                                    juicio de la Administración Municipal. 6) Cualquier otra
                                    situación actual o antecedente al contrato, no conocida al
                                    momento de su celebración y que afecte el desarrollo del
                                    mismo. 7) Cuando sin autorización alguna, se explote el
                                    inmueble para la obtención de frutos civiles desligados de la
                                    destinación del inmueble.{" "}
                                </span>
                                <span className="ft18_ContratoComodato">OCTAVA: </span>(
                                <span className="ft18_ContratoComodato">
                                    NO AUTORIZACIÓN O SI AUTORIZACIÓN DE EXPLOTACIÓN ECONÓMICA: EL
                                    COMODATARIO{" "}
                                </span>
                                (Digite si se autoriza una explotación económica del tipo
                                redactado en los casos de realizarse el contrato con un teatro,
                                un museo o entidad cultural que le asista lo siguiente): tendrá
                                la posibilidad de constituir o crear a su cuenta y riesgo
                                unidades productivas dentro del inmueble, tales como cafeterías,
                                venta de boletería, así como, podrá permitir el uso de los
                                espacios a terceros que realicen actividades culturales
                                sociales, empresariales y pedagógicas, que impliquen retribución
                                económica.
                                <span className="ft18_ContratoComodato">PARÁGRAFO PRIMERO: </span>Los dineros
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
                                <span className="ft18_ContratoComodato">PARÁGRAFO SEGUNDO: El COMODATARIO </span>
                                renuncia a todas las adquisiciones, adaptaciones y mejoras tanto
                                en bienes inmuebles como muebles, que se realicen con los
                                dineros generados a través de la explotación
                            </p>
                            <p className="p21_ContratoComodato ft15_ContratoComodato">Página 3 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_4_ContratoComodato">
                        <div id="p4dimg1">
                            <img src={imgbs64} alt="" id="p4img1" />
                        </div>
                        <div className="dclr_ContratoComodato"></div>
                        <div id="id4_1_ContratoComodato">
                            <div id="id4_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id4_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id4_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p22_ContratoComodato ft22_ContratoComodato">
                                económica concedida sin excepción alguna. En caso de que no se
                                autorice ninguna explotación económica al inmueble digite: No
                                tendrá ninguna autorización para explotación económica en este
                                inmueble entregado en comodato)
                                <span className="ft21_ContratoComodato">. NOVENA: ADAPTACIONES Y/O MEJORAS. </span>
                                Las adaptaciones y/o mejoras que se requieran para el desarrollo
                                del presente contrato de comodato, serán por cuenta del
                                <span className="ft21_ContratoComodato">COMODATARIO</span>, previa aceptación por
                                parte del Comité de Mantenimiento de la Secretaría de
                                Suministros y Servicios. El{" "}
                                <span className="ft21_ContratoComodato">COMODATARIO </span>deberá renunciar a todas
                                las mejoras y construcciones que realice, las cuales quedarán de
                                propiedad del <span className="ft21_ContratoComodato">MUNICIPIO DE MEDELLÍN</span>,
                                sin que haya exigencia, contraprestación o indemnización alguna
                                por este concepto, en consecuencia, el{" "}
                                <span className="ft21_ContratoComodato">COMODATARIO </span>renuncia expresamente al
                                derecho de retención de que trata la ley y a cualquier
                                requerimiento previo relacionado con la restitución del
                                inmueble. El régimen de mejoras se sujetará a la normatividad
                                del Código Civil y a la normatividad vigente. Para el manejo de
                                áreas húmedas, entre ellas, piscinas, deberán observar con celo,
                                lo dispuesto en la normatividad vigente, aclarando que el
                                <span className="ft21_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>no se hace
                                responsable por ningún siniestro que ocurra con ocasión a este
                                tema y otros, lo que acepta así, el{" "}
                                <span className="ft21_ContratoComodato">COMODATARIO</span>.
                                <span className="ft21_ContratoComodato">PARÁGRAFO: </span>Los gastos ordinarios se
                                encuentran a cargo del <span className="ft21_ContratoComodato">COMODATARIO</span>,
                                como quiera que corresponden al derecho de usar la cosa (gastos
                                de uso) y a la obligación de conservarla en el estado en que fue
                                entregada (gastos de conservación), y los gastos extraordinarios
                                incumben al
                                <span className="ft21_ContratoComodato">COMODANTE</span>, en tanto que hacen relación
                                a cuestiones urgentes que van más allá del uso natural
                                convenido, de conformidad al artículo 2216 del Código Civil.
                                <span className="ft21_ContratoComodato">DÉCIMA: CESIÓN Y ARRENDAMIENTO. </span>El
                                <span className="ft21_ContratoComodato">COMODATARIO </span>no podrá ceder ni arrendar
                                el (los) inmueble(s) entregado(s) en comodato(s) a persona
                                alguna, natural o jurídica, temporal o definitiva, parcial o
                                totalmente. El incumplimiento a esta disposición será causal de
                                restitución inmediata del inmueble.{" "}
                                <span className="ft21_ContratoComodato">PARÁGRAFO PRIMERO: </span>El uso compartido
                                de las sedes con otras organizaciones se sujetará a lo dispuesto
                                por cada dependencia en sus reglamentos de uso de sedes y
                                equipamientos sociales, quienes en todo caso, estarán sujetos a
                                las obligaciones y prohibiciones contenidas en el presente
                                contrato de
                            </p>
                            <p className="p23_ContratoComodato ft4_ContratoComodato">
                                <span className="ft6_ContratoComodato">comodato. </span>DÉCIMA PRIMERA: OBLIGACIONES
                                DEL COMODATARIO. <span className="ft6_ContratoComodato">El</span>
                            </p>
                            <p className="p10_ContratoComodato ft14_ContratoComodato">
                                <span className="ft13_ContratoComodato">COMODATARIO</span>, se obliga: 1) A emplear
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
                                <span className="ft13_ContratoComodato">COMODANTE </span>lo considere necesario, para
                            </p>
                            <p className="p24_ContratoComodato ft15_ContratoComodato">Página 4 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_5_ContratoComodato">
                        <div id="p5dimg1">
                            <img src={imgbs64} alt="" id="p5img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id5_1_ContratoComodato">
                            <div id="id5_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id5_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id5_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p18_ContratoComodato ft24_ContratoComodato">
                                inspecciones físicas de rutina del bien o efectos de la
                                ejecución de supervisión del presente contrato de comodato. 9)
                                Deberá pagar y aportar los recibos de paz y salvos de Servicios
                                Públicos cancelados, (paz y salvo de cuotas de administración,
                                constancia de pago de impuesto predial cuando el inmueble se
                                encuentre por fuera de la circunscripción territorial del
                                Municipio de Medellín, entre otros) de tal forma que se pueda
                                verificar el pago de todos los servicios públicos contratados y
                                trabajos realizados por cuenta del
                                <span className="ft23_ContratoComodato">COMODATARIO</span>, y ante los requerimientos
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
                                contrato así como suscribir las actas correspondientes. (17) Si
                                requiere más obligaciones digítelas en este espacio siguiendo la
                                numeración, de lo contrario suprima todo este texto y numeral).
                                Las demás obligaciones propias de los contratos de comodatos, de
                                acuerdo con las disposiciones legales, en especial, de las
                                contenidas en la normatividad vigente.
                                <span className="ft23_ContratoComodato">
                                    DÉCIMA SEGUNDA: RELACIÓN CON TERCEROS.{" "}
                                </span>
                                El
                                <span className="ft23_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>no adquiere ni
                                adquirirá vínculo alguno de carácter laboral con el personal que
                                administre o preste sus servicios al
                                <span className="ft23_ContratoComodato">COMODATARIO</span>. Por lo tanto, serán de
                                cargo exclusivo del <span className="ft23_ContratoComodato">COMODATARIO </span>todos
                                los gastos que se generen, incluyendo el pago de salarios,
                                prestaciones sociales, entre otros.
                                <span className="ft23_ContratoComodato">DÉCIMA TERCERA: SERVICIOS PÚBLICOS. </span>
                                Los servicios públicos de manera general y sin excepción,
                                estarán a cargo del <span className="ft23_ContratoComodato">COMODATARIO</span>.
                                <span className="ft23_ContratoComodato">PARÁGRAFO PRIMERO: El COMODATARIO </span>
                                deberá mantener al día el pago de los servicios públicos
                                domiciliarios, será obligación enviar constancia de pago, de
                                acuerdo a la periodicidad de los mismos al supervisor del
                                contrato para que éste haga la verificación correspondiente y
                                deje constancia en el respectivo informe. El incumplimiento de
                                esta obligación dará lugar a la terminación del contrato y como
                                consecuencia la restitución del inmueble.{" "}
                                <span className="ft23_ContratoComodato">PARÁGRAFO SEGUNDO: </span>en caso de que el
                                valor correspondiente a servicios públicos u otro concepto sea
                                determinado por aforo la Secretaria de Suministro y Servicios a
                                través de la Unidad de Administración de Bienes Inmuebles -
                                UABI- elaborará factura de acuerdo a la periodicidad del valor
                                aforado; si
                                <span className="ft23_ContratoComodato">EL COMODATARIO </span>no recibe la factura en
                                su domicilio en los diez (10) primeros días calendario de cada
                                mes, no será justificación para
                            </p>
                            <p className="p16_ContratoComodato ft15_ContratoComodato">Página 5 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_6_ContratoComodato">
                        <div id="p6dimg1">
                            <img src={imgbs64} alt="" id="p6img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id6_1_ContratoComodato">
                            <div id="id6_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id6_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id6_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p3_ContratoComodato ft6_ContratoComodato">
                                cumplimiento en el pago y deberá presentarse en la UABI a
                                reclamarla para el respectivo
                            </p>
                            <p className="p25_ContratoComodato ft4_ContratoComodato">
                                <span className="ft6_ContratoComodato">pago. </span>DÉCIMA CUARTA: REQUERIMIENTO DEL
                                INMUEBLE. <span className="ft6_ContratoComodato">El inmueble entregado</span>
                            </p>
                            <p className="p10_ContratoComodato ft14_ContratoComodato">
                                en comodato seguirá conformando el patrimonio del
                                <span className="ft13_ContratoComodato">MUNICIPIO DE MEDELLÍN</span>, quien podrá
                                solicitarlos en cualquier tiempo, antes del vencimiento del
                                contrato si el <span className="ft13_ContratoComodato">COMODATARIO </span>no cumple
                                con el objeto para el cual le fue entregado el inmueble o si el
                                <span className="ft13_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>los necesitare
                                para otros fines. <span className="ft13_ContratoComodato">DÉCIMA QUINTA:</span>
                            </p>
                            <p className="p3_ContratoComodato ft4_ContratoComodato">
                                DERECHO DE USO DEL INMUEBLE POR PARTE DEL COMODANTE:
                                <span className="ft6_ContratoComodato">El Municipio de</span>
                            </p>
                            <p className="p26_ContratoComodato ft14_ContratoComodato">
                                Medellín podrá realizar eventos o actividades en el inmueble
                                entregado en comodato, previo aviso al
                                <span className="ft13_ContratoComodato">COMODATARIO, </span>para lo cual éste no
                                podrá oponerse, y no habrá lugar al pago de contraprestación
                                alguna por el uso de las instalaciones.
                                <span className="ft13_ContratoComodato">DÉCIMA SEXTA: GARANTÍAS. </span>El
                                <span className="ft13_ContratoComodato">COMODATARIO </span>deberá otorgar garantía
                                única de cumplimiento que avale las obligaciones derivadas del
                                presente contrato, de conformidad con lo establecido por el
                                artículo 2.2.1.2.3.1.7 el Decreto Nacional 1082 de 2015, la
                                normatividad vigente, y demás que lo modifiquen, adicionen o
                                sustituyan, la cual debe ser aceptada por el{" "}
                                <span className="ft13_ContratoComodato">COMODANTE </span>y deberá cubrir el siguiente
                                amparo:
                                <span className="ft13_ContratoComodato">Cumplimiento del contrato: </span>Con el fin
                                de garantizar las obligaciones que en razón de este contrato
                                asume el
                                <span className="ft13_ContratoComodato">COMODATARIO, </span>deberá otorgar una
                                garantía correspondiente al (número en letras) (%) por ciento de
                                acuerdo con la base asegurable (
                                <span className="ft13_ContratoComodato">INDICAR PARA EL CASO CONCRETO</span>
                            </p>
                            <p className="p22_ContratoComodato ft22_ContratoComodato">
                                <span className="ft21_ContratoComodato">SI ES) </span>obtenida a partir de
                                <span className="ft25_ContratoComodato">
                                    (la sumatoria de la cuantificación de las obligaciones
                                    contractuales y extracontractuales del comodatario
                                </span>
                                la cual asciende a ( indique valor en letras), (indique valor en
                                números)) <span className="ft21_ContratoComodato">O </span>(
                                <span className="ft25_ContratoComodato">
                                    el valor obtenido como avalúo comercial vigente del inmueble
                                    el cual es de( indique el valor en letras), (indique el valor
                                    en números))
                                </span>
                            </p>
                            <p className="p10_ContratoComodato ft13_ContratoComodato">
                                (DEJAR LA OPCIÓN QUE CORRESPONDE DE ACUERDO A LA APLICACIÓN O NO
                                DE LA RESOLUCIÓN SSS 202050083439 DE 2020) (EL PORCENTAJE NO
                                PODRÁ
                            </p>
                            <p className="p18_ContratoComodato ft19_ContratoComodato">
                                <span className="ft18_ContratoComodato">SER INFERIOR AL 10%)</span>, con una vigencia
                                igual al plazo pactado y cuatro (4) meses más, para dar
                                cumplimiento a lo estipulado en la Ley 80 de 1993 y sus decretos
                                reglamentarios.
                                <span className="ft18_ContratoComodato">PARÁGRAFO PRIMERO: </span>Sera obligación del
                                supervisor del presente contrato de comodato informar a la
                                Aseguradora que expide la póliza de cumplimiento, la fecha de
                                inicio del contrato para que proceda a la modificación de la
                                vigencia de la misma y se cumpla con el amparo estipulado en la
                                presenta cláusula.
                                <span className="ft18_ContratoComodato">PARÁGRAFO SEGUNDO: </span>Las citadas
                                garantías las deberá entregar{" "}
                                <span className="ft18_ContratoComodato">EL COMODATARIO </span>al
                                <span className="ft18_ContratoComodato">COMODANTE</span>, dentro de los diez (10)
                                días hábiles siguientes a la suscripción del presente contrato,
                                de no ser así, se entenderá que desiste del contrato y se dará
                                por terminado, iniciando los trámites de recuperación del
                                inmueble en caso de ser una renovación.
                                <span className="ft18_ContratoComodato">
                                    DÉCIMA SÉPTIMA: INDEMNIDAD: El COMODATARIO{" "}
                                </span>
                                mantendrá indemne al
                                <span className="ft18_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>de todo reclamo,
                                demanda, acción legal y costos que puedan causarse o surgir por
                                daños o lesiones a personas o bienes, ocasionados por el
                                <span className="ft18_ContratoComodato">COMODATARIO </span>o su personal, durante la
                                ejecución del objeto y obligaciones del presente contrato de
                                comodato. En caso de que se formule reclamo, demanda o acción
                                legal contra el
                                <span className="ft18_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>por perjuicios
                                ocasionados en la ejecución del contrato que sean de
                                responsabilidad del <span className="ft18_ContratoComodato">COMODATARIO</span>, se le
                                comunicará de manera inmediata de ello para que por su cuenta
                                adopte oportunamente las medidas previstas
                            </p>
                            <p className="p27_ContratoComodato ft15_ContratoComodato">Página 6 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_7_ContratoComodato">
                        <div id="p7dimg1">
                            <img src={imgbs64} alt="" id="p7img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id7_1_ContratoComodato">
                            <div id="id7_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id7_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id7_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p22_ContratoComodato ft22_ContratoComodato">
                                por la ley para mantener indemne al
                                <span className="ft21_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>y adelante los
                                trámites para llegar a un arreglo del conflicto.
                                <span className="ft21_ContratoComodato">DÉCIMA OCTAVA: CLÁUSULA PENAL</span>. En caso
                                de incumplimiento del contrato se hará efectiva la cláusula
                                penal, la cual será considerada como pago parcial por los
                                perjuicios causados al
                                <span className="ft21_ContratoComodato">MUNICIPIO DE MEDELLÍN</span>. Su valor se
                                fija, para cada vez que se imponga, en un 10% del valor del
                                contrato y podrá hacerse efectiva de manera unilateral sin
                                necesidad de declaratoria judicial, previo informe del
                                supervisor.
                                <span className="ft21_ContratoComodato">
                                    DÉCIMA NOVENA: INHABILIDADES E INCOMPATIBILIDADES.{" "}
                                </span>
                                El <span className="ft21_ContratoComodato">COMODATARIO </span>declara bajo la
                                gravedad del juramento, que se entiende prestado con la firma
                                del contrato, que no se encuentra incurso en ninguna de las
                                causales de inhabilidad e incompatibilidad establecidas en el
                                artículo 8 de la Ley 80 de 1993 y en las demás disposiciones
                                vigentes, así mismo que se encuentra a paz y salvo con la
                                Administración Municipal.
                                <span className="ft21_ContratoComodato">VIGÉSIMA: SUPERVISIÓN</span>. La supervisión
                                del presente contrato de comodato la realizará la
                                <span className="ft21_ContratoComodato">(DIGITE EL NOMBRE DE LA</span>
                            </p>
                            <p className="p28_ContratoComodato ft6_ContratoComodato">
                                <span className="ft4_ContratoComodato">DEPENDENCIA ENCARGADA DEL INMUEBLE)</span>,
                                conforme lo establecen las normas de
                            </p>
                            <p className="p18_ContratoComodato ft19_ContratoComodato">
                                los artículos 82 y siguientes de la Ley 1474 de 2011 y demás
                                disposiciones concordantes, normatividad de la entidad, entre
                                otras que regulen la materia, para ello se designará por escrito
                                un servidor público, el cual deberá velar por el cumplimiento de
                                las obligaciones contractuales desde el inicio de la ejecución
                                del presente contrato de comodato hasta la liquidación del mismo
                                e informar al
                                <span className="ft18_ContratoComodato">COMODANTE</span>, sobre su cumplimiento y de
                                toda irregularidad que se presente sobre hechos imputables al
                                <span className="ft18_ContratoComodato">COMODATARIO </span>y que pueda causar
                                perjuicios al
                                <span className="ft18_ContratoComodato">MUNICIPIO DE MEDELLÍN</span>, propietario del
                                inmueble.
                                <span className="ft18_ContratoComodato">VIGÉSIMA PRIMERA: AUDITORÍA INTERNA. </span>
                                En ejercicio de la función de auditoría interna, la Secretaría
                                de Evaluación y Control mediante comunicación suscrita por el
                                Secretario de Despacho o los subsecretarios, podrá requerir del
                                <span className="ft18_ContratoComodato">COMODATARIO </span>toda la información
                                relacionada con los aspectos técnicos, administrativos,
                                financieros y legales del contrato, pudiendo ser necesario,
                                inspeccionar los documentos, lugares o sedes donde se ejecute la
                                prestación, según las técnicas de auditoría aplicadas. Los
                                informes de auditoría interna son de uso reservado de la
                                Secretaría de Evaluación y Control, el ordenador del gasto y el
                                señor Alcalde. La reticencia del
                                <span className="ft18_ContratoComodato">COMODATARIO </span>a atender los
                                requerimientos de la Auditoría Interna serán sujetos de Multa
                                por mora en la entrega de información.
                            </p>
                            <p className="p29_ContratoComodato ft4_ContratoComodato">
                                VIGÉSIMA SEGUNDA: RÉGIMEN APLICABLE:
                                <span className="ft6_ContratoComodato">El presente contrato de comodato se</span>
                            </p>
                            <p className="p11_ContratoComodato ft27_ContratoComodato">
                                fundamenta en su aplicación bajo el Código Civil Colombiano, el
                                artículo 355 de la Constitución Política de Colombia, Decreto
                                092 de 2017, <span className="ft26_ContratoComodato">(cite la Ley 743 de 2002</span>
                            </p>
                            <p className="p3_ContratoComodato ft6_ContratoComodato">
                                <span className="ft28_ContratoComodato">modificada por la ley 1989 de 2019) </span>
                                <span className="ft29_ContratoComodato">SI APLICA EN EL CASO DE JAC</span>
                                <span className="ft28_ContratoComodato">)</span> ,Ley 9 de 1989 en
                            </p>
                            <p className="p22_ContratoComodato ft27_ContratoComodato">
                                la modalidad de contratación especial, en la tipología de
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
                            </p>
                            <p className="p16_ContratoComodato ft15_ContratoComodato">Página 7 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_8_ContratoComodato">
                        <div id="p8dimg1">
                            <img src={imgbs64} alt="" id="p8img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id8_1_ContratoComodato">
                            <div id="id8_1_1">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id8_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id8_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p18_ContratoComodato ft14_ContratoComodato">
                                reglamentarios en especial el Decreto 1082 de 2015.
                                <span className="ft13_ContratoComodato">VIGÉSIMA TERCERA: PUBLICACIÓN. </span>De
                                conformidad con el artículo 2.2.1.1.1.7.1 del Decreto 1082 de
                                2015, y con el artículo 223 del <span>Decreto-Ley</span> 019 de
                                2012, el presente contrato una vez perfeccionado, deberá ser
                                publicado por parte del{" "}
                                <span className="ft13_ContratoComodato">MUNICIPIO DE MEDELLÍN </span>en el Sistema
                                Electrónico para la contratación Pública, SECOP y a través del
                                Portal único de Contratación
                                <a href="http://www.colombiacompra.gov.co">
                                    <span className="ft30_ContratoComodato">www.colombiacompra.gov.co</span>
                                </a>
                                , de acuerdo a los lineamientos establecidos por la
                                Administración Municipal en concordancia con lo dispuesto por la
                                Agencia Nacional de Contratación Pública Colombia Compra
                                Eficiente.
                                <span className="ft13_ContratoComodato">VIGÉSIMA CUARTA: </span>El Municipio de
                                Medellín, en concordancia con lo establecido en la Constitución
                                Política de Colombia
                            </p>
                            <p className="p3_ContratoComodato ft31_ContratoComodato">
                                <span className="ft6_ContratoComodato">(arts. 15 y 20), la Ley 1581 de </span>2012
                                "Por la cual se dictan disposiciones generales para la
                            </p>
                            <p className="p25_ContratoComodato ft31_ContratoComodato">
                                protección de datos personales"
                                <span className="ft6_ContratoComodato">y el Decreto 1377 de 2013 </span>"Por el cual
                                se reglamenta
                            </p>
                            <p className="p9_ContratoComodato ft14_ContratoComodato">
                                <span className="ft32_ContratoComodato">parcialmente la Ley 1581 de 2012" </span>y
                                comprometido con el uso legal, el tratamiento de datos de
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
                                <span className="ft13_ContratoComodato">
                                    VIGÉSIMA QUINTA: AUTORIZACIÓN DE TRATAMIENTO DE DATOS.{" "}
                                </span>
                                El COMODATARIO<span className="ft13_ContratoComodato">, </span>manifiesta que ha sido
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
                            </p>
                            <p className="p30_ContratoComodato ft15_ContratoComodato">Página 8 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: "850px", margin: "0 auto" }}>
                    <div id="page_9_ContratoComodato">
                        <div id="p9dimg1">
                            <img src={imgbs64} alt="" id="p9img1" />
                        </div>

                        <div className="dclr_ContratoComodato"></div>
                        <div id="id9_1_ContratoComodato">
                            <div id="id9_1_1_ContratoComodato">
                                <p className="p0_ContratoComodato ft0_ContratoComodato">
                                    Cód. <span>FO-ADMI-125</span>
                                </p>
                                <p className="p1_ContratoComodato ft0_ContratoComodato">Versión. 3</p>
                            </div>
                            <div id="id9_1_2_ContratoComodato">
                                <p className="p2_ContratoComodato ft1_ContratoComodato">Formato</p>
                                <p className="p0_ContratoComodato ft2_ContratoComodato">
                                    <span>FO-ADMI</span> Minuta Contrato de Comodato Bien Inmueble
                                </p>
                            </div>
                        </div>
                        <div id="id9_2_ContratoComodato">
                            <p className="p3_ContratoComodato ft3_ContratoComodato">
                                Contrato de Comodato No. (DIGITE SÓLO NÚMERO DE CONTRATO – SIN
                                FECHA)
                            </p>
                            <p className="p22_ContratoComodato ft14_ContratoComodato">
                                como su entrega a terceros para las gestiones de cobro a que
                                hubiere lugar.{" "}
                                <span className="ft13_ContratoComodato">VIGÉSIMA SEXTA: NOTIFICACIONES</span>: Las
                                notificaciones que cualquiera de las partes deseare hacer a la
                                otra, deben formularse por escrito a las siguientes direcciones:
                                <span className="ft13_ContratoComodato">COMODANTE: (</span>digite la dirección de
                                correspondencia del comodante
                                <span className="ft13_ContratoComodato">COMODATARIO: </span>Dirección: (Digite la
                                dirección de correspondencia del comodatario, si es posible
                                digite varias opciones)<span className="ft13_ContratoComodato">. </span>Correo
                                electrónico: (Digite el correo electrónico del comodatario, si
                                es posible digite varias opciones)<span className="ft13_ContratoComodato">.</span>
                                Teléfono:<span className="ft13_ContratoComodato">(</span>Digite el número del
                                teléfono y/o celular del comodatario, si es posible digite
                                varias opciones)
                            </p>
                            <p className="p8_ContratoComodato ft6_ContratoComodato">
                                Para constancia se firma en la ciudad de Medellín, en la fecha
                            </p>
                            <p className="p31_ContratoComodato ft6_ContratoComodato">______________________</p>
                            <p className="p32_ContratoComodato ft4_ContratoComodato">
                                DIGITE NOMBRE COMPLETO DEL SECRETARIO DE DESPACHO
                            </p>
                            <p className="p25_ContratoComodato ft6_ContratoComodato">Secretario de Despacho</p>
                            <p className="p3_ContratoComodato ft6_ContratoComodato">Secretaría de Suministros y Servicios</p>
                            <p className="p3_ContratoComodato ft6_ContratoComodato">Comodante</p>
                            <p className="p33_ContratoComodato ft4_ContratoComodato">(DIGITAR NOMBRE COMPLETO DEL COMODATARIO)</p>
                            <p className="p3_ContratoComodato ft6_ContratoComodato">
                                Cedula N° (Digitar número de identificación
                                <span className="ft4_ContratoComodato">)</span>
                            </p>
                            <p className="p31_ContratoComodato ft6_ContratoComodato">
                                Teléfono: Digite el número del teléfono y/o celular del
                                comodatario)
                            </p>
                            <p className="p31_ContratoComodato ft6_ContratoComodato">
                                Dirección: (Digite la dirección de correspondencia del
                                comodatario)
                            </p>
                            <p className="p34_ContratoComodato ft6_ContratoComodato">
                                Correo electrónico: (Digite el correo electrónico del
                                comodatario) Comodatario
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t1_ContratoComodato">
                                <tr>
                                    <td className="tr1_ContratoComodato td3_ContratoComodato">
                                        <p className="p35_ContratoComodato ft6_ContratoComodato">Elaboró:</p>
                                    </td>
                                    <td className="tr1_ContratoComodato td4_ContratoComodato">
                                        <p className="p36_ContratoComodato ft6_ContratoComodato">Revisó:</p>
                                    </td>
                                    <td className="tr1_ContratoComodato td4_ContratoComodato">
                                        <p className="p36_ContratoComodato ft6_ContratoComodato">Aprobó:</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr10_ContratoComodato tr13_ContratoComodato">
                                        <p className="p35_ContratoComodato ft6_ContratoComodato">(Nombre)</p>
                                    </td>
                                    <td className="tr10_ContratoComodato td6_ContratoComodato">
                                        <p className="p36_ContratoComodato ft6_ContratoComodato">(Nombre)</p>
                                    </td>
                                    <td className="tr10_ContratoComodato td6_ContratoComodato">
                                        <p className="p36_ContratoComodato ft6_ContratoComodato">(Nombre)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr14_ContratoComodato tr13_ContratoComodato">
                                        <p className="p35_ContratoComodato ft6_ContratoComodato">(Cargo)</p>
                                    </td>
                                    <td className="tr14_ContratoComodato td6_ContratoComodato">
                                        <p className="p36_ContratoComodato ft6_ContratoComodato">(Cargo)</p>
                                    </td>
                                    <td className="tr14_ContratoComodato td6_ContratoComodato">
                                        <p className="p36_ContratoComodato ft6_ContratoComodato">(Cargo)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr13_ContratoComodato td7_ContratoComodato">
                                        <p className="p5_ContratoComodato ft33_ContratoComodato">&nbsp;</p>
                                    </td>
                                    <td className="tr13_ContratoComodato td8_ContratoComodato">
                                        <p className="p5_ContratoComodato ft33_ContratoComodato">&nbsp;</p>
                                    </td>
                                    <td className="tr13_ContratoComodato td8_ContratoComodato">
                                        <p className="p5_ContratoComodato ft33_ContratoComodato">&nbsp;</p>
                                    </td>
                                </tr>
                            </table>
                            <p className="p37_ContratoComodato ft15_ContratoComodato">Página 9 de 9</p>
                            <p className="p13_ContratoComodato ft16_ContratoComodato">
                                ______________________________________________________________________________________
                            </p>
                            <p className="p14_ContratoComodato ft17_ContratoComodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p15_ContratoComodato ft17_ContratoComodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p16_ContratoComodato ft17_ContratoComodato">www.medellin.gov.co</p>
                            <p className="p17_ContratoComodato ft17_ContratoComodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        //console.log('@values',values)
                        history.goBack();
                        //history.push({ pathname: "/disposition/create/", state: { dispositionType, realEstate, values } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    )
}

export default ComodatoDocContract

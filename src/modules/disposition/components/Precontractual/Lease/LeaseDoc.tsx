import React from 'react'
import imgbs64 from '../../../../../utils/assets/img/header.png';
import '../../../../../utils/assets/styles/lease.css';
import { Card } from '../../../../../utils/ui';
import { useHistory, useLocation } from 'react-router-dom';

interface IParams {
    values: any;
    realEstate: any;

}
const LeaseDoc = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const { values, realEstate } = location.state;
    console.log(values, realEstate);
    return (
        <div className="h-100 d-flex flex-column">
            <div className="container-fluid">
                <Card className="" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_1">
                        <div id="p1dimg1">

                            <img src={imgbs64} alt="" id="p1img1" />
                        </div>

                        <div className="dclr"></div>
                        <div id="id1_1">
                            <div id="id1_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-137</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id1_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3 ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id1_2">
                            <p className="p4 ft0">
                                <span className="ft3">1.</span
                                ><span className="ft4">Identificación del Ingreso: </span>el valor del
                                presente contrato ingresará a la posición presupuestal correspondiente
                                a arrendamientos dentro del presupuesto de rentas no tributarias de
                                la(s) vigencia(s) fiscal(es) que abarque la duración del contrato.
                            </p>
                            <p className="p5 ft3">
                                <span className="ft3">2.</span
                                ><span className="ft5">Estimación del valor del contrato:</span>
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t0">
                                <tr>
                                    <td className="tr0 td0"><p className="p6 ft6">Vr.</p></td>
                                    <td className="tr0 td1"><p className="p7 ft6">Canon</p></td>
                                    <td rowSpan={2} className="tr1 td2"><p className="p8 ft6">IVA (19%)</p></td>
                                    <td className="tr0 td3"><p className="p6 ft6">Vr.</p></td>
                                    <td className="tr0 td4"><p className="p7 ft6">Aforo</p></td>
                                    <td rowSpan={2} className="tr1 td5"><p className="p8 ft6">Vr. Admón</p></td>
                                    <td className="tr0 td6"><p className="p8 ft6">Total</p></td>
                                    <td className="tr0 td7"><p className="p7 ft6">Vr.</p></td>
                                    <td className="tr0 td8"><p className="p6 ft6">Tiempo</p></td>
                                    <td className="tr0 td9"><p className="p7 ft6">en</p></td>
                                    <td className="tr0 td10"><p className="p8 ft6">Vr.</p></td>
                                    <td className="tr0 td11"><p className="p7 ft6">total</p></td>
                                    <td className="tr0 td12"><p className="p7 ft6">del</p></td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className="tr2 td13"><p className="p6 ft7">mensual</p></td>
                                    <td className="tr3 td14"><p className="p7 ft8">&nbsp;</p></td>
                                    <td colSpan={2} rowSpan={2} className="tr2 td15">
                                        <p className="p6 ft6">Serv. Pub.</p>
                                    </td>
                                    <td rowSpan={2} className="tr2 td16"><p className="p8 ft6">Mensual</p></td>
                                    <td className="tr3 td17"><p className="p7 ft8">&nbsp;</p></td>
                                    <td rowSpan={2} className="tr2 td18"><p className="p6 ft6">meses</p></td>
                                    <td className="tr3 td19"><p className="p7 ft8">&nbsp;</p></td>
                                    <td colSpan={2} rowSpan={2} className="tr2 td20">
                                        <p className="p8 ft6">contrato</p>
                                    </td>
                                    <td className="tr3 td21"><p className="p7 ft8">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr4 td22"><p className="p7 ft9">&nbsp;</p></td>
                                    <td className="tr4 td23"><p className="p7 ft9">&nbsp;</p></td>
                                    <td className="tr4 td24"><p className="p7 ft9">&nbsp;</p></td>
                                    <td className="tr4 td25"><p className="p7 ft9">&nbsp;</p></td>
                                    <td className="tr4 td26"><p className="p7 ft9">&nbsp;</p></td>
                                    <td className="tr4 td27"><p className="p7 ft9">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr5 td13"><p className="p6 ft10">$ {realEstate.canyon_value}</p></td>
                                    <td className="tr5 td22"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr5 td23"><p className="p8 ft10">$ {values.IVA}</p></td>
                                    <td colSpan={2} className="tr5 td15"><p className="p6 ft10">$xxxxx</p></td>
                                    <td className="tr5 td24"><p className="p8 ft10">$ {values.administration_value}</p></td>
                                    <td className="tr5 td16"><p className="p8 ft10">$ {values.subtotal}</p></td>
                                    <td className="tr5 td25"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr5 td18"><p className="p6 ft10">{ values.contract_period}</p></td>
                                    <td className="tr5 td26"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr5 td20">
                                        <p className="p8 ft10">$ {values.total}</p>
                                    </td>
                                    <td className="tr5 td27"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                            </table>
                            <p className="p9 ft0">
                                El canon de arrendamiento como valor de este contrato, corresponderá a
                                la suma de <span className="ft3">(Digite el valor</span>
                            </p>
                            <p className="p10 ft3">
                                en letras del canon mensual) Pesos M/L ($ digite el valor en números
                                del canon mensual)
                            </p>
                            <p className="p10 ft0">
                                pesos mensuales, más el IVA del 19%, más los costos de aforo y
                                administración cuando apliquen,
                            </p>
                            <p className="p11 ft13">
                                <span className="ft12">para un total mensual de </span>(digite en letras
                                el valor del canon más el IVA, más Vr. Aforo, más Vr. Administración)
                                PESOS M/L ($ Digite en números el valor en letras que acabó de
                                digitar). <span className="ft12">Este</span>
                            </p>
                            <p className="p4 ft0">
                                canon de arrendamiento deberá ser cancelado por el arrendatario hasta
                                completar un año de ejecución del contrato, en los sitios y por los
                                canales indicados en la factura de cobro que le enviará EL ARRENDADOR,
                                física o electrónicamente; en caso de no recibirse la factura en las
                                fechas establecidas el arrendatario tendrá la obligación de reclamar
                                la factura de cobro en las oficina de la Unidad Administración de
                                Bienes Inmuebles, de la Secretaría de Suministros y Servicios.
                            </p>
                            <p className="p12 ft0">
                                <span className="ft3">Solicitante: </span>{`${values.names_applicant} ${values.surnames_applicant}`} NIT o C.C.:{values.number_doc_applicant_id}
                            </p>
                            <p className="p13 ft0">

                            </p>
                            <p className="p14 ft3">1. Justificación de la contratación.</p>
                            <p className="p15 ft0">
                                El Municipio de Medellín, tiene dentro de sus bienes, inmuebles que no
                                requiere para el desarrollo de su objeto misional, que no se
                                encuentran incluidos en un plan de ventas, que no serán enajenados; ni
                                se requieren para la ejecución de una obra futura y que por sus
                                características pueden ser destinados al servicio de la comunidad a
                                través de la modalidad de arrendamiento en la forma y términos
                                establecidos conforme a la normativa vigente.
                            </p>
                            <p className="p16 ft0">
                                El inmueble con matrícula {realEstate.registry_number},
                                CBML (Digite el número de CBML), activo fijo (Digite el código),
                                ubicado en la dirección {realEstate.address.address}, cuyo tipo es {realEstate.active_type}. Según la
                                factibilidad del bien, en cuanto lo técnico, físico, estado de
                                habitabilidad y disponibilidad, se puede determinar que cumple
                                requisitos mínimos para ser destinado al servicio de la comunidad,
                                bajo la modalidad del contrato de arrendamiento, atendiendo a los
                                lineamientos contractuales de la norma citada anteriormente.
                            </p>
                            <p className="p16 ft0">
                                De acuerdo con lo antes previsto, se formulan los estudios previos
                                para proceder a la elaboración del contrato de arrendamiento, previa
                                consideración del: (i) análisis de riesgos, (ii) análisis de
                                requerimiento o no de establecer garantías para cumplir obligaciones
                                derivadas del contrato y (iii)
                            </p>
                            <p className="p17 ft14">Página 1 de 6</p>
                            <p className="p18 ft15">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p19 ft16">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p20 ft17">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p21 ft18">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p22 ft16">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_2">
                        <div id="p2dimg1">
                            <img src={imgbs64} alt="" id="p2img1" />
                        </div>

                        <div className="dclr"></div>
                        <div id="id2_1">
                            <div id="id2_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-137</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id2_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3 ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id2_2">
                            <p className="p10 ft0">
                                obligación de publicarse en la plataforma correspondiente.
                            </p>
                            <p className="p23 ft3">2. Descripción del objeto a contratar.</p>
                            <p className="p24 ft0">
                                Suscribir contrato de arrendamiento del bien inmueble de propiedad del
                                Municipio de Medellín identificado con matrícula {realEstate.registry_number}, CBML (Digite el número de CBML), activo fijo
                                (Digite el código), ubicado en la dirección {realEstate.address.address}, cuyo
                                tipo es {realEstate.active_type}, escritura N° (digite el número de la escritura) del (Digite el
                                día, mes y año en el formato dd/mm/aaaa), Notaría (Digite el número de
                                la notaría) de (Digite la ciudad de ubicación de la notaría), el
                                espacio a entregar en arrendamiento consta de (digite la dimensión del
                                área a entregar en metros cuadrados) m<span className="ft19">2</span>,
                                cuyas áreas y linderos se describen de la siguiente manera según
                                informe de Prediación con radicado: (digite el número del radicado del
                                informe), de (Digite la fecha del informe en el formato dd/mm/aaaa).
                            </p>
                            <p className="p4 ft21">
                                <span className="ft20">(</span>Insertar descripción áreas y linderos citar
                                informe de prediación por radicado y fecha de elaboración).
                            </p>
                            <p className="p25 ft21">
                                <span className="ft3">3.</span><span className="ft22">Destinación</span>: debe
                                destinarse el inmueble para: (Describir la tipología y el uso
                                exclusivo que se le debe dar al bien por parte del arrendatario)
                            </p>
                            <p className="p26 ft3">
                                <span className="ft3">4.</span><span className="ft5">Especificaciones</span
                                ><span className="ft0">:</span>
                            </p>
                            <p className="p16 ft0">
                                <span className="ft3">Aforo: </span>Es el valor de Servicios públicos
                                determinado por la Unidad de Mantenimiento, de la Subsecretaría de
                                Gestión de Bienes, cuando se requiera, con base en la declaración
                                previa del arrendatario de todos los elementos y artefactos eléctricos
                                a utilizar en el espacio que se entregará en arrendamiento; así como
                                los promedios de consumo de agua y uso del alcantarillado que
                                correspondan.
                            </p>
                            <p className="p24 ft0">
                                <span className="ft3">Administración: </span>Corresponde al valor por
                                concepto de administración si diere lugar, de acuerdo al reglamento de
                                propiedad horizontal, cuando aplique.
                            </p>
                            <p className="p24 ft21">
                                <span className="ft3">5.</span
                                ><span className="ft23">Plazo del contrato: </span>El plazo del contrato
                                de arrendamiento a celebrar será de (digite en letras y números la
                                duración del contrato), contado a partir de la entrega del inmueble,
                                mediante acta suscrita por las partes, previa aprobación de la póliza
                                de cumplimiento, si aplica.
                            </p>
                            <p className="p27 ft0">
                                No obstante el plazo establecido y en caso de requerir la
                                Administración Municipal el inmueble, para desarrollar las funciones
                                que le son propias, podrá dar por terminado el contrato de
                                arrendamiento de forma unilateral.
                            </p>
                            <p className="p14 ft3">
                                6. Fundamentos jurídicos que soportan la modalidad de contratación.
                            </p>
                            <p className="p28 ft0">
                                Corresponde a lo dispuesto en el Código Civil para los contratos de
                                arrendamiento y en lo pertinente por la Ley 80 de 1993, 1150 de 2007 y
                                sus decretos reglamentarios en especial el Decreto 1082 de 2015 y
                                normas complementarias, que manifiestan que este tipo de contratos no
                                se consideran, ni se
                            </p>
                            <p className="p29 ft14">Página 2 de 6</p>
                            <p className="p18 ft15">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p19 ft16">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p20 ft17">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p21 ft18">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p22 ft16">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_3">
                        <div id="p3dimg1">
                            <img
                                src={imgbs64} alt="" id="p3img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id3_1">
                            <div id="id3_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-137</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id3_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3 ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id3_2">
                            <p className="p4 ft0">
                                pueden considerar actos mercantiles o de comercio, razón por la cual
                                no será aplicable el régimen jurídico contenido en el Código de
                                Comercio en parte alguna.
                            </p>
                            <p className="p16 ft21">
                                También son fundamentos jurídicos del presente proceso contractual las
                                disposiciones contenidas en la Ley 9ª de 1989, Ley 388 de 1997, Código
                                Civil, Acuerdo Municipal 048 de 2014 (POT).
                            </p>
                            <p className="p23 ft3">
                                7. El análisis técnico y económico que soporta el valor estimado del
                                contrato.
                            </p>
                            <p className="p24 ft0">
                                Las condiciones del mercado fueron analizadas y tomadas en cuenta por
                                la Unidad Administración de Bienes de la Subsecretaría de Gestión de
                                Bienes, en el avalúo comercial, al momento de fijar el canon de
                                arrendamiento correspondiente al inmueble, como lo establece la
                                normativa vigente.
                            </p>
                            <p className="p13 ft0">
                                Está soportado con el informe técnico de avalúo y fijación de canon de
                                arrendamiento N° (digite el número de avalúo), de (Digite la fecha del
                                avalúo en el formato dd/mm/aaaa) de la Unidad Administración de Bienes
                                Inmuebles, de la Subsecretaría de Gestión de Bienes del Municipio de
                                Medellín.
                            </p>
                            <p className="p5 ft3">
                                8. La justificación de los factores de selección que permitan
                                identificar la oferta más favorable
                            </p>
                            <p className="p16 ft21">
                                Los factores de selección del arrendatario cuando exista más de un
                                solicitante se regirá por los definidos en la normativa vigente, para
                                lo cual se dejará un documento anexo de la evaluación de los
                                requisitos.
                            </p>
                            <p className="p25 ft24">
                                <span className="ft3">9.</span
                                ><span className="ft23"
                                >El soporte que permita la estimación, tipificación y asignación de
                                    los riesgos previsibles que puedan afectar el equilibrio económico
                                    del contrato:</span
                                >
                            </p>
                            <p className="p27 ft0">
                                De acuerdo al artículo 4 de la Ley 1150 de 2007 y el Decreto Nacional
                                1082 de 2015, dispone que las entidades públicas deben incluir en los
                                estudios previos la estimación, tipificación y asignación de riesgos.
                            </p>
                            <p className="p16 ft21">
                                De conformidad con lo anterior se procede a hacer el análisis del
                                riesgo que corresponde en los siguientes términos<span className="ft25"
                                >:</span
                                >
                            </p>
                            <p className="p14 ft0">9.1 Riesgo regulatorio:</p>
                            <p className="p4 ft0">
                                Comprende variaciones de las tarifas de mercado regulado, cambios de
                                la carga impositiva tributaria de las reformas legales futuras y la
                                adopción de decisiones administrativas:
                            </p>
                            <p className="p30 ft0">
                                <span className="ft26"></span
                                ><span className="ft27">Financieras del arrendatario.</span>
                            </p>
                            <p className="p30 ft0">
                                <span className="ft26"></span
                                ><span className="ft27">Perdida de liquidez del arrendatario.</span>
                            </p>
                            <p className="p14 ft0">
                                <span className="ft0">9.2</span
                                ><span className="ft28">Riesgos operativos:</span>
                            </p>
                            <p className="p31 ft0">
                                Son intrínsecos al contrato y comprende todas las formas de
                                incumplimiento de las obligaciones que pueden generarse producto del
                                acuerdo de voluntades:
                            </p>
                            <p className="p30 ft0">
                                <span className="ft26"></span
                                ><span className="ft27"
                                >Incumplimiento de las obligaciones surgidas del contrato.</span
                                >
                            </p>
                            <p className="p30 ft0">
                                <span className="ft26"></span
                                ><span className="ft27"
                                >Pago de salarios, prestaciones sociales e indemnizaciones.</span
                                >
                            </p>
                            <p className="p32 ft14">Página 3 de 6</p>
                            <p className="p18 ft15">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p19 ft16">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p20 ft17">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p21 ft18">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p22 ft16">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_4">
                        <div id="p4dimg1">
                            <img
                                src={imgbs64} alt="" id="p4img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id4_1">
                            <div id="id4_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-137</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id4_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3 ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id4_2">
                            <p className="p0 ft3">10. Estimación del riesgo:</p>
                            <p className="p33 ft0">
                                La estimación del riesgo consiste en medir la probabilidad de
                                ocurrencia de un evento y su impacto en el caso de que se materialice.
                                La medición efectiva y cuantitativa del riesgo se asocia con la
                                posibilidad de pérdida futura. Para el caso de la contratación estatal
                                no se establece una metodología para la cuantificación del riesgo, lo
                                cual da a la entidad cierto grado de discrecionalidad.
                            </p>
                            <p className="p34 ft0">
                                Frente a la necesidad que se pretende satisfacer, se establecerá el
                                grado de probabilidad de ocurrencia y de impacto en relación con el
                                equilibrio económico del contrato, utilizando una escala ordinal en la
                                que se hace referencia a criterios de medición como se presenta a
                                continuación: MUY ALTO, ALTO, MEDIO, BAJO, MUY BAJO
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t1">
                                <tr>
                                    <td colSpan={2} rowSpan={2} className="tr6 td28">
                                        <p className="p35 ft0">Riesgo Previsible</p>
                                    </td>
                                    <td rowSpan={2} className="tr6 td29"><p className="p8 ft0">Grado</p></td>
                                    <td rowSpan={2} className="tr6 td30"><p className="p7 ft0">de</p></td>
                                    <td className="tr7 td31"><p className="p8 ft0">Grado</p></td>
                                    <td className="tr7 td32"><p className="p7 ft11">&nbsp;</p></td>
                                    <td rowSpan={2} className="tr6 td2"><p className="p8 ft0">Municipio</p></td>
                                    <td className="tr7 td33"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td34"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td35"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td36"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td37"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td38"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td39"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr8 td40"><p className="p8 ft29">de</p></td>
                                    <td className="tr8 td41"><p className="p8 ft29">Contratista</p></td>
                                    <td colSpan={7} className="tr8 td42">
                                        <p className="p8 ft29">Mecanismo de Mitigación</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr9 td43"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr9 td45">
                                        <p className="p8 ft0">Ocurrencia</p>
                                    </td>
                                    <td rowSpan={2} className="tr10 td46"><p className="p8 ft0">Impacto</p></td>
                                    <td className="tr9 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td48"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td49"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td50"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td51"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td52"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td53"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td44"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr11 td54"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td55"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td56"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td57"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td58"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td23"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td59"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td60"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td61"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td62"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td63"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td64"><p className="p7 ft30">&nbsp;</p></td>
                                    <td className="tr11 td55"><p className="p7 ft30">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td48"><p className="p8 ft0">Ejercer</p></td>
                                    <td className="tr12 td49"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td50"><p className="p36 ft0">un</p></td>
                                    <td className="tr12 td51"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td67"><p className="p7 ft0">control</p></td>
                                    <td className="tr12 td44"><p className="p37 ft0">y</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="tr12 td68">
                                        <p className="p35 ft0">REGULATORIO</p>
                                    </td>
                                    <td rowSpan={2} className="tr13 td65"><p className="p8 ft0">MEDIO</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td rowSpan={2} className="tr13 td40"><p className="p8 ft0">MEDIO</p></td>
                                    <td rowSpan={2} className="tr13 td41"><p className="p8 ft0">X</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td69">
                                        <p className="p8 ft0">vigilancia</p>
                                    </td>
                                    <td className="tr12 td50"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td70">
                                        <p className="p7 ft0">estrictos</p>
                                    </td>
                                    <td className="tr12 td53"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td44"><p className="p37 ft0">al</p></td>
                                </tr>
                                <tr>
                                    <td className="tr3 td43"><p className="p7 ft8">&nbsp;</p></td>
                                    <td className="tr3 td44"><p className="p7 ft8">&nbsp;</p></td>
                                    <td className="tr3 td66"><p className="p7 ft8">&nbsp;</p></td>
                                    <td className="tr3 td47"><p className="p7 ft8">&nbsp;</p></td>
                                    <td colSpan={2} rowSpan={2} className="tr5 td69">
                                        <p className="p8 ft10">contrato</p>
                                    </td>
                                    <td colSpan={2} rowSpan={2} className="tr5 td71">
                                        <p className="p8 ft10">por</p>
                                    </td>
                                    <td rowSpan={2} className="tr5 td52"><p className="p38 ft10">parte</p></td>
                                    <td className="tr3 td53"><p className="p7 ft8">&nbsp;</p></td>
                                    <td rowSpan={2} className="tr5 td44"><p className="p37 ft10">del</p></td>
                                </tr>
                                <tr>
                                    <td className="tr14 td43"><p className="p7 ft31">&nbsp;</p></td>
                                    <td className="tr14 td44"><p className="p7 ft31">&nbsp;</p></td>
                                    <td className="tr14 td65"><p className="p7 ft31">&nbsp;</p></td>
                                    <td className="tr14 td66"><p className="p7 ft31">&nbsp;</p></td>
                                    <td className="tr14 td40"><p className="p7 ft31">&nbsp;</p></td>
                                    <td className="tr14 td41"><p className="p7 ft31">&nbsp;</p></td>
                                    <td className="tr14 td47"><p className="p7 ft31">&nbsp;</p></td>
                                    <td className="tr14 td53"><p className="p7 ft31">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr9 td54"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td55"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td56"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td57"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td46"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td58"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td23"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={3} className="tr9 td72">
                                        <p className="p8 ft0">supervisor.</p>
                                    </td>
                                    <td className="tr9 td62"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td63"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td64"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td55"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="tr5 td68">
                                        <p className="p35 ft10">OPERATIVOS:</p>
                                    </td>
                                    <td className="tr5 td65"><p className="p7 ft32">&nbsp;</p></td>
                                    <td className="tr5 td66"><p className="p7 ft32">&nbsp;</p></td>
                                    <td className="tr5 td40"><p className="p7 ft32">&nbsp;</p></td>
                                    <td className="tr5 td41"><p className="p7 ft32">&nbsp;</p></td>
                                    <td className="tr5 td47"><p className="p7 ft32">&nbsp;</p></td>
                                    <td colSpan={2} className="tr5 td69">
                                        <p className="p8 ft10">Realizar</p>
                                    </td>
                                    <td className="tr5 td50"><p className="p7 ft32">&nbsp;</p></td>
                                    <td className="tr5 td51"><p className="p7 ft32">&nbsp;</p></td>
                                    <td colSpan={3} className="tr5 td73">
                                        <p className="p37 ft10">visitas</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p35 ft0">Incumplimiento</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={3} className="tr12 td74">
                                        <p className="p8 ft0">trimestrales</p>
                                    </td>
                                    <td className="tr12 td51"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td52"><p className="p38 ft0">al</p></td>
                                    <td colSpan={2} className="tr12 td75"><p className="p37 ft0">bien</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p35 ft0">del contratista</p></td>
                                    <td className="tr12 td44"><p className="p37 ft0">de</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td69">
                                        <p className="p8 ft0">inmueble</p>
                                    </td>
                                    <td className="tr12 td50"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td70"><p className="p38 ft0">objeto</p></td>
                                    <td className="tr12 td53"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td44"><p className="p37 ft0">del</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="tr12 td68">
                                        <p className="p35 ft0">las obligaciones y</p>
                                    </td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td69">
                                        <p className="p8 ft0">contrato</p>
                                    </td>
                                    <td className="tr12 td50"><p className="p6 ft0">y</p></td>
                                    <td colSpan={4} className="tr12 td76">
                                        <p className="p37 ft0">seguimiento</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p35 ft0">prohibiciones</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={7} className="tr12 td42">
                                        <p className="p8 ft0">mensual a los pagos de</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr5 td43"><p className="p35 ft10">contraídas</p></td>
                                    <td className="tr5 td44"><p className="p37 ft10">en</p></td>
                                    <td rowSpan={2} className="tr6 td65"><p className="p8 ft0">MEDIO</p></td>
                                    <td className="tr5 td66"><p className="p7 ft32">&nbsp;</p></td>
                                    <td rowSpan={2} className="tr6 td40"><p className="p8 ft0">MEDIO</p></td>
                                    <td rowSpan={2} className="tr6 td41"><p className="p8 ft0">X</p></td>
                                    <td className="tr5 td47"><p className="p7 ft32">&nbsp;</p></td>
                                    <td colSpan={2} className="tr5 td69">
                                        <p className="p8 ft10">cánones,</p>
                                    </td>
                                    <td className="tr5 td50"><p className="p7 ft32">&nbsp;</p></td>
                                    <td className="tr5 td51"><p className="p7 ft32">&nbsp;</p></td>
                                    <td colSpan={3} className="tr5 td73">
                                        <p className="p37 ft10">servicios</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p35 ft0">virtud</p></td>
                                    <td className="tr12 td44"><p className="p37 ft0">del</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td69">
                                        <p className="p8 ft0">públicos</p>
                                    </td>
                                    <td colSpan={5} className="tr12 td77">
                                        <p className="p37 ft0">y administración</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p35 ft0">contrato.</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={7} className="tr12 td42">
                                        <p className="p8 ft0">cuando aplique, por parte</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td48"><p className="p8 ft0">del</p></td>
                                    <td colSpan={4} className="tr12 td78">
                                        <p className="p7 ft0">supervisor</p>
                                    </td>
                                    <td colSpan={2} className="tr12 td75"><p className="p37 ft0">para</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td69">
                                        <p className="p8 ft0">realizar</p>
                                    </td>
                                    <td colSpan={4} className="tr12 td79">
                                        <p className="p39 ft0">seguimiento</p>
                                    </td>
                                    <td className="tr12 td44"><p className="p37 ft0">y</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td43"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td65"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td66"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td40"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td41"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td47"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={3} className="tr12 td74">
                                        <p className="p8 ft0">evaluación</p>
                                    </td>
                                    <td className="tr12 td51"><p className="p7 ft0">al</p></td>
                                    <td colSpan={3} className="tr12 td73">
                                        <p className="p37 ft0">desarrollo</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr12 td54"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td55"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td56"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td57"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td46"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td58"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td23"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={5} className="tr12 td80">
                                        <p className="p8 ft0">del objeto contractual</p>
                                    </td>
                                    <td className="tr12 td64"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td55"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                            </table>
                            <p className="p40 ft3">
                                <span className="ft3">11.</span
                                ><span className="ft33"
                                >El análisis que sustenta la exigencia de los mecanismos de
                                    cobertura que garantizan las obligaciones surgidas con ocasión de la
                                    contratación directa y del contrato a celebrar.</span
                                >
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t2">
                                <tr>
                                    <td className="tr1 td81"><p className="p6 ft0">Tipificación</p></td>
                                    <td className="tr1 td82"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr1 td83">
                                        <p className="p8 ft0">Estimación</p>
                                    </td>
                                    <td className="tr1 td84"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr1 td85"><p className="p7 ft0">Mecanismo</p></td>
                                    <td className="tr1 td86"><p className="p36 ft0">de</p></td>
                                    <td className="tr1 td87"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr1 td88"><p className="p8 ft0">Asignación</p></td>
                                    <td className="tr1 td89"><p className="p8 ft0">Vigencia</p></td>
                                    <td className="tr1 td90"><p className="p8 ft0">Aplica</p></td>
                                </tr>
                                <tr>
                                    <td className="tr15 td91"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td92"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td93"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td55"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td94"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td95"><p className="p7 ft35">Cobertura</p></td>
                                    <td className="tr15 td96"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td97"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td98"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td99"><p className="p7 ft34">&nbsp;</p></td>
                                    <td className="tr15 td100"><p className="p7 ft34">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="tr9 td101">
                                        <p className="p6 ft0">Incumplimiento</p>
                                    </td>
                                    <td className="tr9 td102"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td103"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td95"><p className="p7 ft0">Garantía</p></td>
                                    <td className="tr12 td96"><p className="p41 ft0">de</p></td>
                                    <td className="tr9 td104"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td105"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td106"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td107"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="tr7 td101">
                                        <p className="p6 ft0">del contratista</p>
                                    </td>
                                    <td className="tr7 td102"><p className="p8 ft0">10%</p></td>
                                    <td className="tr7 td44"><p className="p7 ft0">del</p></td>
                                    <td className="tr7 td103"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td108">
                                        <p className="p7 ft0"><span className="ft36">Cumplimiento</span>:</p>
                                    </td>
                                    <td rowSpan={2} className="tr6 td109"><p className="p41 ft0">al</p></td>
                                    <td className="tr7 td104"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td105"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td106"><p className="p8 ft0">Plazo del</p></td>
                                    <td className="tr7 td107"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr8 td110"><p className="p6 ft29">de</p></td>
                                    <td className="tr8 td111"><p className="p37 ft37">las</p></td>
                                    <td rowSpan={2} className="tr16 td102"><p className="p8 ft0">valor</p></td>
                                    <td rowSpan={2} className="tr16 td44"><p className="p7 ft0">del</p></td>
                                    <td className="tr8 td103"><p className="p7 ft38">&nbsp;</p></td>
                                    <td className="tr8 td108"><p className="p7 ft29">Ampara</p></td>
                                    <td className="tr8 td104"><p className="p7 ft38">&nbsp;</p></td>
                                    <td rowSpan={2} className="tr16 td105">
                                        <p className="p8 ft0">Contratista</p>
                                    </td>
                                    <td rowSpan={2} className="tr16 td106">
                                        <p className="p8 ft0">contrato y 4</p>
                                    </td>
                                    <td rowSpan={2} className="tr16 td107"><p className="p8 ft0">SI</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="tr17 td101">
                                        <p className="p6 ft39">obligaciones y</p>
                                    </td>
                                    <td className="tr17 td103"><p className="p7 ft40">&nbsp;</p></td>
                                    <td colSpan={2} className="tr17 td112">
                                        <p className="p7 ft39">Beneficiario el total y</p>
                                    </td>
                                    <td className="tr17 td104"><p className="p7 ft40">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} rowSpan={2} className="tr7 td101">
                                        <p className="p6 ft0">prohibiciones</p>
                                    </td>
                                    <td className="tr9 td102"><p className="p8 ft0">contrato</p></td>
                                    <td className="tr9 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td103"><p className="p7 ft11">&nbsp;</p></td>
                                    <td rowSpan={2} className="tr7 td108">
                                        <p className="p7 ft0">perfecto</p>
                                    </td>
                                    <td className="tr9 td109"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td104"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td105"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td106"><p className="p8 ft0">meses más</p></td>
                                    <td className="tr9 td107"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr18 td102"><p className="p7 ft41">&nbsp;</p></td>
                                    <td className="tr18 td44"><p className="p7 ft41">&nbsp;</p></td>
                                    <td className="tr18 td103"><p className="p7 ft41">&nbsp;</p></td>
                                    <td className="tr18 td109"><p className="p7 ft41">&nbsp;</p></td>
                                    <td className="tr18 td104"><p className="p7 ft41">&nbsp;</p></td>
                                    <td className="tr18 td105"><p className="p7 ft41">&nbsp;</p></td>
                                    <td className="tr18 td106"><p className="p7 ft41">&nbsp;</p></td>
                                    <td className="tr18 td107"><p className="p7 ft41">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr9 td91"><p className="p6 ft0">contraídas</p></td>
                                    <td className="tr9 td92"><p className="p37 ft0">en</p></td>
                                    <td className="tr9 td93"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td55"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td94"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td95"><p className="p7 ft0">cumplimiento</p></td>
                                    <td className="tr9 td96"><p className="p41 ft0">del</p></td>
                                    <td className="tr9 td97"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td98"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td99"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td100"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                            </table>
                            <p className="p42 ft14">Página 4 de 6</p>
                            <p className="p43 ft15">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p44 ft16">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p45 ft17">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p46 ft18">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p47 ft16">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_5">
                        <div id="p5dimg1">
                            <img
                                src={imgbs64} alt="" id="p5img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id5_1">
                            <div id="id5_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-137</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id5_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3 ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id5_2">
                            <table cellPadding="0" cellSpacing="0" className="t3">
                                <tr>
                                    <td className="tr7 td113"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td39"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td83"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td114"><p className="p8 ft0">contrato</p></td>
                                    <td className="tr7 td115"><p className="p7 ft0">pactado</p></td>
                                    <td className="tr7 td116"><p className="p6 ft0">de</p></td>
                                    <td className="tr7 td88"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td89"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr7 td90"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className="tr19 td117"><p className="p6 ft0">virtud</p></td>
                                    <td rowSpan={2} className="tr19 td44"><p className="p7 ft0">del</p></td>
                                    <td className="tr9 td118"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td69"><p className="p8 ft0">acuerdo</p></td>
                                    <td className="tr9 td119"><p className="p48 ft0">a</p></td>
                                    <td className="tr9 td120"><p className="p49 ft42">sus</p></td>
                                    <td className="tr9 td105"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td106"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr9 td107"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td118"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td69"><p className="p8 ft0">términos,</p></td>
                                    <td className="tr12 td119"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td120"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td105"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td106"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td107"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td117"><p className="p6 ft0">contrato</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td118"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td121">
                                        <p className="p8 ft0">condiciones</p>
                                    </td>
                                    <td className="tr12 td120"><p className="p49 ft0">y</p></td>
                                    <td className="tr12 td105"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td106"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td107"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td117"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td44"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td118"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td121">
                                        <p className="p8 ft0">especificaciones</p>
                                    </td>
                                    <td className="tr12 td120"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td105"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td106"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td107"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td className="tr12 td122"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td55"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td123"><p className="p7 ft11">&nbsp;</p></td>
                                    <td colSpan={2} className="tr12 td124">
                                        <p className="p8 ft0">contractuales</p>
                                    </td>
                                    <td className="tr12 td125"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td98"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td99"><p className="p7 ft11">&nbsp;</p></td>
                                    <td className="tr12 td100"><p className="p7 ft11">&nbsp;</p></td>
                                </tr>
                            </table>
                            <p className="p50 ft0">
                                Así mismo, con el fin de minimizar el riesgo y garantizar el
                                cumplimiento del contrato, el Municipio de Medellín establecerá en el
                                texto del contrato cláusulas como la penal pecuniaria y de auditoría
                                interna así:
                            </p>
                            <p className="p51 ft0">
                                <span className="ft3">12.</span
                                ><span className="ft5">Cláusula Penal Pecuniaria</span>: Se estipula una
                                clausula penal equivalente al diez por ciento (10%) del valor total
                                del contrato, la cual se hará efectiva de manera unilateral sin
                                necesidad de declaratoria judicial, cuando a juicio del ordenador del
                                gasto, previo informe del interventor, el contratista incurra en un
                                incumplimiento grave y severo del contrato, conforme a la normativa
                                vigente.
                            </p>
                            <p className="p23 ft3">
                                <span className="ft3">13.</span><span className="ft5">Auditoria Interna</span
                                ><span className="ft0">:</span>
                            </p>
                            <p className="p16 ft0">
                                La Secretaría de Evaluación y Control, mediante comunicación suscrita
                                por el Secretario de Despacho o los Subsecretarios, podrá requerir del
                                CONTRATISTA toda la información relacionada con los aspectos técnicos,
                                administrativos, financieros y legales del contrato, pudiendo ser
                                necesario, inspeccionar los documentos, lugares o sedes donde se
                                ejecute la prestación, según las técnicas de auditorías aplicadas. Los
                                informes de auditoría interna son de uso reservado de la Secretaria de
                                Evaluación y Control, el ordenador del gasto y señor Alcalde. La
                                reticencia del contratista a atender los requerimientos de la
                                Auditoría interna serán sujetos de Multa por mora en la entrega de
                                información, con fundamento en la normativa vigente.
                            </p>
                            <p className="p14 ft3">14. Componente ambiental</p>
                            <p className="p15 ft0">
                                Dentro del presente proceso contractual el contratista deberá cumplir
                                con los riesgos ambientales que le apliquen a la destinación del bien
                                inmueble entregado en arrendamiento (Digitar los riesgos ambientales
                                que apliquen para el contrato).
                            </p>
                            <p className="p5 ft3">15. Supervisión del contrato:</p>
                            <p className="p16 ft0">
                                De conformidad con lo dispuesto por el artículo 83 de la Ley 1474 de
                                2011 y la normativa aplicable, y toda vez que no se requiere de
                                conocimientos especializados, la vigilancia técnica administrativa,
                                financiera, contable y jurídica sobre el presente contrato será
                                ejercida por un Servidor Público de la dependencia que tiene a cargo
                                el bien, designado por la Secretaría de Suministros y Servicios,
                                mediante oficio, el cual deberá velar por el cumplimiento de las
                                obligaciones contractuales e informar sobre su incumplimiento y de
                                toda irregularidad que se presente sobre hechos imputables al
                                arrendatario y que pueda causar perjuicios al Municipio de Medellín,
                                como propietario del inmueble. La designación hará parte integrante
                                del contrato.
                            </p>
                            <p className="p52 ft14">Página 5 de 6</p>
                            <p className="p18 ft15">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p19 ft16">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p20 ft17">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p21 ft18">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p22 ft16">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_6">
                        <div id="p6dimg1">
                            <img
                                src={imgbs64} id="p6img1" alt=""
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id6_1">
                            <div id="id6_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-137</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id6_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3 ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id6_2">
                            <p className="p10 ft0">
                                <span className="ft3">16.</span
                                ><span className="ft5">Lugar de Ejecución: </span>Municipio de Medellín
                                <span>–Antioquia</span>
                            </p>
                            <p className="p16 ft0">
                                <span className="ft3">17.</span><span className="ft43">Multas: </span>(En los
                                contratos de arrendamientos de vivienda NO se pactan multas. De
                                ocurrir incumplimientos, el ARRENDADOR tiene facultades expresas para
                                darlo por terminado de manera unilateral, ante cualquiera de las
                                causales de incumplimiento y procederá a cobrar la cláusula penal)
                            </p>
                            <p className="p53 ft21">
                                (Las multas serán fijadas de acuerdo a las condiciones especiales del
                                bien inmueble dado en arrendamiento y se verificaran al momento de la
                                elaboración de cada estudio previo, cuales aplican).
                            </p>
                            <p className="p9 ft0">
                                <span className="ft3">18.</span><span className="ft44">Publicación. </span>De
                                conformidad con el Decreto 1082 de 2015, y con el artículo 223 del
                                <span>Decreto-Ley</span>
                            </p>
                            <p className="p54 ft0">
                                <span className="ft0">019</span
                                ><span className="ft45"
                                >de 2012, el presente contrato una vez perfeccionado, deberá ser
                                    publicado por parte del </span
                                ><span className="ft3">MUNICIPIO DE MEDELLÍN </span>en el Sistema
                                Electrónico para la Contratación Público, SECOP y a través del Portal
                                Único de Contratación
                                <a href="http://www.colombiacompra.gov.co"
                                ><span className="ft46">www.colombiacompra.gov.co</span></a
                                >.
                            </p>
                            <p className="p12 ft0">
                                <span className="ft3">19.</span
                                ><span className="ft4">Línea del Plan de Desarrollo: </span>Dimensión: 1
                                Creemos en la confianza ciudadana; Reto: 1.3
                            </p>
                            <p className="p55 ft21">
                                Medellín bien administrado; Programa: 1.3.4 Gestión efectiva. Proyecto
                                1.3.4.5 Gestión y conservación de activos.
                            </p>
                            <p className="p56 ft0">
                                Medellín, Antioquia, (Digite el día) de (Digite el mes) de (digite el
                                año)
                            </p>
                            <p className="p57 ft0">Nombres y apellidos</p>
                            <p className="p58 ft0">Líder de Programa</p>
                            <p className="p10 ft0">Unidad Administración de Bienes Inmuebles</p>
                            <p className="p10 ft0">Subsecretaría de Gestión de Bienes</p>
                            <table cellPadding="0" cellSpacing="0" className="t4">
                                <tr>
                                    <td className="tr2 td126"><p className="p35 ft16">Elaboró:</p></td>
                                    <td className="tr2 td127"><p className="p8 ft16">Revisó:</p></td>
                                    <td className="tr2 td128"><p className="p8 ft16">Aprobó:</p></td>
                                </tr>
                                <tr>
                                    <td className="tr17 td129"><p className="p35 ft17">(Nombre)</p></td>
                                    <td className="tr17 td130"><p className="p8 ft17">(Nombre)</p></td>
                                    <td className="tr17 td131"><p className="p8 ft17">(Nombre)</p></td>
                                </tr>
                                <tr>
                                    <td className="tr17 td132"><p className="p35 ft17">(Cargo)</p></td>
                                    <td className="tr17 td133"><p className="p8 ft17">(Cargo)</p></td>
                                    <td className="tr17 td134"><p className="p8 ft17">(Cargo)</p></td>
                                </tr>
                            </table>
                            <p className="p59 ft14">Página 6 de 6</p>
                            <p className="p18 ft15">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p19 ft16">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p20 ft17">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p21 ft18">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p22 ft16">Medellín - Colombia</p>
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
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>

    )
}

export default LeaseDoc

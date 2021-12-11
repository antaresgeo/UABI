import React, { useState } from 'react'
import imgbs64 from '../../../../../utils/assets/img/header.png';
import '../../../../../utils/assets/styles/lease.css';
import { Card } from '../../../../../utils/ui';
import { useHistory, useLocation } from 'react-router-dom';
import writtenNumber from 'written-number';
import moment from 'moment';
import months from './../../../../../utils/ui/months';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
interface IParams {
    values: any;
    realEstate: any;
    dispositionType: any;

}
const LeaseDoc = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const dispatch = useDispatch();
    const { values, realEstate, dispositionType } = location.state;
    console.log(values, realEstate, dispositionType);
    let today_date = new Date().getMonth() + 1;
    let valueServPublic = 0
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
    return (
        <div className="h-100 d-flex flex-column">
            <div className="container-fluid">
                <Card className="" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_1_lease">
                        <div id="p1dimg1">
                            <img src={imgbs64} alt="" id="p1img1" />
                        </div>

                        <div className="dclr_lease" />
                        <div id="id1_1">
                            <div id="id1_1_1">
                                <p className="p0_lease ft0_lease">
                                    Cód. <span>FO-ADMI-137</span>
                                </p>
                                <p className="p1_lease ft0_lease">Versión. 1</p>
                            </div>
                            <div id="id1_1_2">
                                <p className="p2_lease ft1_lease">Formato</p>
                                <p className="p0_lease ft2_lease">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3_lease ft2_lease">Inmueble</p>
                            </div>
                        </div>
                        <div id="id1_2">
                            <p className="p4_lease ft0_lease">
                                <span className="ft3_lease">1.</span>
                                <span className="ft4_lease">Identificación del Ingreso: </span>el valor del presente
                                contrato ingresará a la posición presupuestal correspondiente a arrendamientos dentro
                                del presupuesto de rentas no tributarias de la(s) vigencia(s) fiscal(es) que abarque la
                                duración del contrato.
                            </p>
                            <p className="p5_lease ft3_lease">
                                <span className="ft3_lease">2.</span>
                                <span className="ft5_lease">Estimación del valor del contrato:</span>
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t0_lease">
                                <tr>
                                    <td className="tr0_lease td0_lease">
                                        <p className="p6_lease ft6_lease">Vr.</p>
                                    </td>
                                    <td className="tr0_lease td1_lease">
                                        <p className="p7_lease ft6_lease">Canon</p>
                                    </td>
                                    <td rowSpan={2} className="tr1_lease td2_lease">
                                        <p className="p8_lease ft6_lease">IVA (19%)</p>
                                    </td>
                                    <td className="tr0_lease td3_lease">
                                        <p className="p6_lease ft6_lease">Vr.</p>
                                    </td>
                                    <td className="tr0_lease td4_lease">
                                        <p className="p7_lease ft6_lease">{values.public_service}</p>
                                    </td>
                                    <td rowSpan={2} className="tr1_lease td5_lease">
                                        <p className="p8_lease ft6_lease">Vr. Admón</p>
                                    </td>
                                    <td className="tr0_lease td6_lease">
                                        <p className="p8_lease ft6_lease">Total</p>
                                    </td>
                                    <td className="tr0_lease td7_lease">
                                        <p className="p7_lease ft6_lease">Vr.</p>
                                    </td>
                                    <td className="tr0_lease td8_lease">
                                        <p className="p6_lease ft6_lease">Tiempo</p>
                                    </td>
                                    <td className="tr0_lease td9_lease">
                                        <p className="p7_lease ft6_lease">en</p>
                                    </td>
                                    <td className="tr0_lease td10_lease">
                                        <p className="p8_lease ft6_lease">Vr.</p>
                                    </td>
                                    <td className="tr0_lease td11_lease">
                                        <p className="p7_lease ft6_lease">total</p>
                                    </td>
                                    <td className="tr0_lease td12_lease">
                                        <p className="p7_lease ft6_lease">del</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className="tr2_lease td13_lease">
                                        <p className="p6_lease ft7_lease">mensual</p>
                                    </td>
                                    <td className="tr3_lease td14_lease">
                                        <p className="p7_lease ft8_lease">&nbsp;</p>
                                    </td>
                                    <td colSpan={2} rowSpan={2} className="tr2_lease td15_lease">
                                        <p className="p6_lease ft6_lease">Serv. Pub.</p>
                                    </td>
                                    <td rowSpan={2} className="tr2_lease td16_lease">
                                        <p className="p8_lease ft6_lease">Mensual</p>
                                    </td>
                                    <td className="tr3_lease td17_lease">
                                        <p className="p7_lease ft8_lease">&nbsp;</p>
                                    </td>
                                    <td rowSpan={2} className="tr2_lease td18_lease">
                                        <p className="p6_lease ft6_lease">meses</p>
                                    </td>
                                    <td className="tr3_lease td19_lease">
                                        <p className="p7_lease ft8_lease">&nbsp;</p>
                                    </td>
                                    <td colSpan={2} rowSpan={2} className="tr2_lease td20_lease">
                                        <p className="p8_lease ft6_lease">contrato</p>
                                    </td>
                                    <td className="tr3_lease td21_lease">
                                        <p className="p7_lease ft8_lease">&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr4_lease td22_lease">
                                        <p className="p7_lease ft9_lease">&nbsp;</p>
                                    </td>
                                    <td className="tr4_lease td23_lease">
                                        <p className="p7_lease ft9_lease">&nbsp;</p>
                                    </td>
                                    <td className="tr4_lease td24_lease">
                                        <p className="p7_lease ft9_lease">&nbsp;</p>
                                    </td>
                                    <td className="tr4_lease td25_lease">
                                        <p className="p7_lease ft9_lease">&nbsp;</p>
                                    </td>
                                    <td className="tr4_lease td26_lease">
                                        <p className="p7_lease ft9_lease">&nbsp;</p>
                                    </td>
                                    <td className="tr4_lease td27_lease">
                                        <p className="p7_lease ft9_lease">&nbsp;</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr5_lease td13_lease"><p className="p6_lease ft10_lease">$ {realEstate?.canyon_value}</p></td>
                                    <td className="tr5_lease td22_lease"><p className="p7_lease ft11_lease">&nbsp;</p></td>
                                    <td className="tr5_lease td23_lease"><p className="p8_lease ft10_lease">$ {values.IVA}</p></td>
                                    <td colSpan={2} className="tr5_lease td15_lease"><p className="p6_lease ft10_lease">$
                                        {values?.public_service === "Recobro" && ` ${values?.recovery_value}`}
                                        {values?.public_service === "Aforo" && ` ${values?.value_aforo}`}
                                        {values?.public_service === "Contador individualizado" && ` ${values?.counter_value}`}
                                        {values?.public_service === "Prepago" && "--"}
                                    </p></td>
                                    <td className="tr5_lease td24_lease"><p className="p8_lease ft10_lease">$ {values.administration_value}</p></td>
                                    <td className="tr5_lease td16_lease"><p className="p8_lease ft10_lease">$ {values.subtotal}</p></td>
                                    <td className="tr5_lease td25_lease"><p className="p7_lease ft11_lease">&nbsp;</p></td>
                                    <td className="tr5_lease td18_lease"><p className="p6_lease ft10_lease">{values.contract_period}</p></td>
                                    <td className="tr5_lease td26_lease"><p className="p7_lease ft11_lease">&nbsp;</p></td>
                                    <td colSpan={2} className="tr5_lease td20_lease">
                                        <p className="p8_lease ft10_lease">$ {values.total}</p>
                                    </td>
                                    <td className="tr5_lease td27_lease">
                                        <p className="p7_lease ft11_lease">&nbsp;</p>
                                    </td>
                                </tr>
                            </table>
                            <p className="my-3 p11_lease ft0_lease">
                                El canon de arrendamiento como valor de este contrato, corresponderá a
                                la suma de <span className="ft3_lease">{writtenNumber(values?.canon_value, { lang: 'es' })} Pesos M/L {` ($${values?.canon_value}) `}</span>
                                pesos mensuales, más el IVA del 19%, más los costos de aforo y
                                administración cuando apliquen,
                                para un total mensual de <span className="ft3_lease">
                                    {writtenNumber((values?.canon_value + values?.IVA + values?.administration_value + valueServPublic), { lang: 'es' })} PESOS M/L
                                    {/* (digite en letrasel valor del canon más el IVA, más Vr. Aforo, más Vr. Administración) */}
                                    {` ($${values?.canon_value + values?.IVA + values?.administration_value + valueServPublic})`}
                                    {/* ($ Digite en números el valor en letras que acabó de digitar) */}
                                </span>. Este canon de arrendamiento deberá ser cancelado por el arrendatario hasta
                                completar un año de ejecución del contrato, en los sitios y por los
                                canales indicados en la factura de cobro que le enviará EL ARRENDADOR,
                                física o electrónicamente; en caso de no recibirse la factura en las
                                fechas establecidas el arrendatario tendrá la obligación de reclamar
                                la factura de cobro en las oficina de la Unidad Administración de
                                Bienes Inmuebles, de la Secretaría de Suministros y Servicios.
                            </p>
                            <p className="p12_lease ft0_lease">
                                <span className="ft3_lease">Solicitante: </span>
                                {values?.type_society_applicant === "Persona Natural" ?
                                    `${values.firstname_applicant} ${values.secondname_applicant} ${values.surname_applicant} ${values.secondsurname_applicant}`
                                :
                                    `${values.companyname_applicant}`
                                }
                                {values?.type_society_applicant === "Persona Natural" ? ` C.C.: ${values.number_doc_applicant}` : ` NIT: ${values.number_doc_applicant}`}
                            </p>
                            <p className="p13_lease ft0_lease">

                            </p>
                            <p className="p13_lease ft0_lease" />
                            <p className="p14_lease ft3_lease">1. Justificación de la contratación.</p>
                            <p className="p15_lease ft0_lease">
                                El Municipio de Medellín, tiene dentro de sus bienes, inmuebles que no requiere para el
                                desarrollo de su objeto misional, que no se encuentran incluidos en un plan de ventas,
                                que no serán enajenados; ni se requieren para la ejecución de una obra futura y que por
                                sus características pueden ser destinados al servicio de la comunidad a través de la
                                modalidad de arrendamiento en la forma y términos establecidos conforme a la normativa
                                vigente.
                            </p>
                            <p className="p16_lease ft0_lease">
                                El inmueble con matrícula <span className="ft3_lease">{realEstate?.registry_number}</span>, CBML
                                <span className="ft3_lease">{` ${realEstate?.address?.cbmls?.sap.cb}${realEstate?.address?.cbmls?.sap.ml}`}</span>, activo fijo
                                <span className="ft3_lease">{` ${realEstate?.sap_id}`}</span>, ubicado en la dirección
                                <span className="ft3_lease">{` ${realEstate?.address?.address}`}</span>, cuyo tipo es
                                <span className="ft3_lease">{` ${values?.business_type}`}</span>.
                                Según la factibilidad del bien, en cuanto lo técnico, físico, estado de
                                habitabilidad y disponibilidad, se puede determinar que cumple
                                requisitos mínimos para ser destinado al servicio de la comunidad,
                                bajo la modalidad del contrato de arrendamiento, atendiendo a los
                                lineamientos contractuales de la norma citada anteriormente.
                            </p>
                            <p className="p16_lease ft0_lease">
                                De acuerdo con lo antes previsto, se formulan los estudios previos para proceder a la
                                elaboración del contrato de arrendamiento, previa consideración del: (i) análisis de
                                riesgos, (ii) análisis de requerimiento o no de establecer garantías para cumplir
                                obligaciones derivadas del contrato y (iii)
                            </p>
                            <p className="p17_lease ft14_lease">Página 1 de 6</p>
                            <p className="p18_lease ft15_lease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p21_lease ft16_lease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p21_lease ft17_lease">Línea Única de Atención a la Ciudadanía 44 44 144</p>
                            <p className="p21_lease ft18_lease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p21_lease ft16_lease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_2_lease">
                        <div id="p2dimg1">
                            <img src={imgbs64} alt="" id="p2img1" />
                        </div>

                        <div className="dclr_lease" />
                        <div id="id2_1">
                            <div id="id2_1_1">
                                <p className="p0_lease ft0_lease">
                                    Cód. <span>FO-ADMI-137</span>
                                </p>
                                <p className="p1_lease ft0_lease">Versión. 1</p>
                            </div>
                            <div id="id2_1_2">
                                <p className="p2_lease ft1_lease">Formato</p>
                                <p className="p0_lease ft2_lease">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3_lease ft2_lease">Inmueble</p>
                            </div>
                        </div>
                        <div id="id2_2">
                            <p className="p10_lease ft0_lease">
                                obligación de publicarse en la plataforma correspondiente.
                            </p>
                            <p className="p23_lease ft3_lease">2. Descripción del objeto a contratar.</p>
                            <p className="p24_lease ft0_lease">
                                Suscribir contrato de arrendamiento del bien inmueble de propiedad del
                                Municipio de Medellín identificado con matrícula
                                <span className="ft3_lease">{` ${realEstate?.registry_number}`}</span>, CBML
                                <span className="ft3_lease">{` ${realEstate?.address?.cbmls?.sap.cb}${realEstate?.address?.cbmls?.sap.ml}`}</span>, activo fijo
                                <span className="ft3_lease">{` ${realEstate?.sap_id}`}</span>, ubicado en la dirección
                                <span className="ft3_lease">{` ${realEstate?.address?.address}`}</span>, cuyo tipo es
                                <span className="ft3_lease">{` ${values?.business_type}`}</span>, escritura N°
                                <span className="ft3_lease">
                                    {realEstate?.acquisitions?.map(ad => {
                                        let i = ad.acquisition_date.split("-")
                                        return ` ${ad.act_value} del ${i[2]} de ${months(i[1])} de ${i[0]} Notaría ${ad.entity_number} de ${ad.city}, `
                                    })}
                                </span>
                                el espacio a entregar en arrendamiento consta de {realEstate?.total_area} m<span className="ft19_lease">2</span>,
                                cuyas áreas y linderos se describen de la siguiente manera según
                                informe de Prediación con radicado: <span className="ft3_lease">{values.prediation_number}, de {moment(values.prediation_date).format('DD/MM/YYYY')}.</span>
                            </p>
                            <p className="p25_lease ft21_lease">
                                <span className="ft3_lease">3.</span><span className="ft22_lease">Destinación</span>: debe
                                destinarse el inmueble para: <span className="ft3_comodato">{values?.destination_realEstate}</span>
                            </p>
                            <p className="p26_lease ft3_lease">
                                <span className="ft3_lease">4.</span>
                                <span className="ft5_lease">Especificaciones</span>
                                <span className="ft0_lease">:</span>
                            </p>
                            <p className="p16_lease ft0_lease">
                                <span className="ft3_lease">Aforo: </span>Es el valor de Servicios públicos determinado
                                por la Unidad de Mantenimiento, de la Subsecretaría de Gestión de Bienes, cuando se
                                requiera, con base en la declaración previa del arrendatario de todos los elementos y
                                artefactos eléctricos a utilizar en el espacio que se entregará en arrendamiento; así
                                como los promedios de consumo de agua y uso del alcantarillado que correspondan.
                            </p>
                            <p className="p24_lease ft0_lease">
                                <span className="ft3_lease">Administración: </span>Corresponde al valor por concepto de
                                administración si diere lugar, de acuerdo al reglamento de propiedad horizontal, cuando
                                aplique.
                            </p>
                            <p className="p24_lease ft21_lease">
                                <span className="ft3_lease">5.</span
                                ><span className="ft23_lease">Plazo del contrato: </span>El plazo del contrato
                                de arrendamiento a celebrar será de <span className="ft3_comodato">({values.contract_period}) {writtenNumber(values.contract_period, { lang: 'es' })} meses, </span>
                                contado a partir de la entrega del inmueble, mediante acta suscrita por las partes, previa aprobación de la póliza
                                de cumplimiento, si aplica.
                            </p>
                            <p className="p27_lease ft0_lease">
                                No obstante el plazo establecido y en caso de requerir la Administración Municipal el
                                inmueble, para desarrollar las funciones que le son propias, podrá dar por terminado el
                                contrato de arrendamiento de forma unilateral.
                            </p>
                            <p className="p14_lease ft3_lease">
                                6. Fundamentos jurídicos que soportan la modalidad de contratación.
                            </p>
                            <p className="p28_lease ft0_lease">
                                Corresponde a lo dispuesto en el Código Civil para los contratos de arrendamiento y en
                                lo pertinente por la Ley 80 de 1993, 1150 de 2007 y sus decretos reglamentarios en
                                especial el Decreto 1082 de 2015 y normas complementarias, que manifiestan que este tipo
                                de contratos no se consideran, ni se
                            </p>
                            <p className="p29_lease ft14_lease">Página 2 de 6</p>
                            <p className="p18_lease ft15_lease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p21_lease ft16_lease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p21_lease ft16_lease">Línea Única de Atención a la Ciudadanía 44 44 144</p>
                            <p className="p21_lease ft16_lease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p21_lease ft16_lease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_3_lease">
                        <div id="p3dimg1">
                            <img src={imgbs64} alt="" id="p3img1" />
                        </div>

                        <div className="dclr_lease" />
                        <div id="id3_1">
                            <div id="id3_1_1">
                                <p className="p0_lease ft0_lease">
                                    Cód. <span>FO-ADMI-137</span>
                                </p>
                                <p className="p1_lease ft0_lease">Versión. 1</p>
                            </div>
                            <div id="id3_1_2">
                                <p className="p2_lease ft1_lease">Formato</p>
                                <p className="p0_lease ft2_lease">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3_lease ft2_lease">Inmueble</p>
                            </div>
                        </div>
                        <div id="id3_2">
                            <p className="p4_lease ft0_lease">
                                pueden considerar actos mercantiles o de comercio, razón por la cual no será aplicable
                                el régimen jurídico contenido en el Código de Comercio en parte alguna.
                            </p>
                            <p className="p16_lease ft21_lease">
                                También son fundamentos jurídicos del presente proceso contractual las disposiciones
                                contenidas en la Ley 9ª de 1989, Ley 388 de 1997, Código Civil, Acuerdo Municipal 048 de
                                2014 (POT).
                            </p>
                            <p className="p23_lease ft3_lease">
                                7. El análisis técnico y económico que soporta el valor estimado del contrato.
                            </p>
                            <p className="p24_lease ft0_lease">
                                Las condiciones del mercado fueron analizadas y tomadas en cuenta por la Unidad
                                Administración de Bienes de la Subsecretaría de Gestión de Bienes, en el avalúo
                                comercial, al momento de fijar el canon de arrendamiento correspondiente al inmueble,
                                como lo establece la normativa vigente.
                            </p>
                            <p className="p13_lease ft0_lease">
                                Está soportado con el informe técnico de avalúo y fijación de canon de
                                arrendamiento N° <span className="ft3_lease">{values?.appraisal_number}</span>, de
                                <span className="ft3_lease"> {moment(values.appraisal_date).format('DD/MM/YYYY')} </span>
                                de la Unidad Administración de Bienes
                                Inmuebles, de la Subsecretaría de Gestión de Bienes del Municipio de
                                Medellín.
                            </p>
                            <p className="p5_lease ft3_lease">
                                8. La justificación de los factores de selección que permitan identificar la oferta más
                                favorable
                            </p>
                            <p className="p16_lease ft21_lease">
                                Los factores de selección del arrendatario cuando exista más de un solicitante se regirá
                                por los definidos en la normativa vigente, para lo cual se dejará un documento anexo de
                                la evaluación de los requisitos.
                            </p>
                            <p className="p25_lease ft24_lease">
                                <span className="ft3_lease">9.</span>
                                <span className="ft23_lease">
                                    El soporte que permita la estimación, tipificación y asignación de los riesgos
                                    previsibles que puedan afectar el equilibrio económico del contrato:
                                </span>
                            </p>
                            <p className="p27_lease ft0_lease">
                                De acuerdo al artículo 4 de la Ley 1150 de 2007 y el Decreto Nacional 1082 de 2015,
                                dispone que las entidades públicas deben incluir en los estudios previos la estimación,
                                tipificación y asignación de riesgos.
                            </p>
                            <p className="p16_lease ft21_lease">
                                De conformidad con lo anterior se procede a hacer el análisis del riesgo que corresponde
                                en los siguientes términos<span className="ft25">:</span>
                            </p>
                            <p className="p14_lease ft0_lease">9.1 Riesgo regulatorio:</p>
                            <p className="p4_lease ft0_lease">
                                Comprende variaciones de las tarifas de mercado regulado, cambios de la carga impositiva
                                tributaria de las reformas legales futuras y la adopción de decisiones administrativas:
                            </p>
                            <p className="p30_lease ft0_lease">
                                <span className="ft26_lease"></span>
                                <span className="ft27_lease">Financieras del arrendatario.</span>
                            </p>
                            <p className="p30_lease ft0_lease">
                                <span className="ft26_lease"></span>
                                <span className="ft27_lease">Perdida de liquidez del arrendatario.</span>
                            </p>
                            <p className="p14_lease ft0_lease">
                                <span className="ft0_lease">9.2</span>
                                <span className="ft28_lease">Riesgos operativos:</span>
                            </p>
                            <p className="p31_lease ft0_lease">
                                Son intrínsecos al contrato y comprende todas las formas de incumplimiento de las
                                obligaciones que pueden generarse producto del acuerdo de voluntades:
                            </p>
                            <p className="p30_lease ft0_lease">
                                <span className="ft26_lease"></span>
                                <span className="ft27_lease">
                                    Incumplimiento de las obligaciones surgidas del contrato.
                                </span>
                            </p>
                            <p className="p30_lease ft0_lease">
                                <span className="ft26_lease"></span>
                                <span className="ft27_lease">
                                    Pago de salarios, prestaciones sociales e indemnizaciones.
                                </span>
                            </p>
                            <p className="p32_lease ft14_lease">Página 3 de 6</p>
                            <p className="p18_lease ft15_lease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p21_lease ft17_lease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p21_lease ft17_lease">Línea Única de Atención a la Ciudadanía 44 44 144</p>
                            <p className="p21_lease ft17_lease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p21_lease ft17_lease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_4_lease">
                        <div id="p4dimg1">
                            <img src={imgbs64} alt="" id="p4img1" />
                        </div>

                        <div className="dclr_lease" />
                        <div id="id4_1">
                            <div id="id4_1_1">
                                <p className="p0_lease ft0_lease">
                                    Cód. <span>FO-ADMI-137</span>
                                </p>
                                <p className="p1_lease ft0_lease">Versión. 1</p>
                            </div>
                            <div id="id4_1_2">
                                <p className="p2_lease ft1_lease">Formato</p>
                                <p className="p0_lease ft2_lease">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3_lease ft2_lease">Inmueble</p>
                            </div>
                        </div>
                        <div id="id4_2">
                            <p className="p0_lease ft3_lease">10. Estimación del riesgo:</p>
                            <p className="p33_lease ft0_lease">
                                La estimación del riesgo consiste en medir la probabilidad de ocurrencia de un evento y
                                su impacto en el caso de que se materialice. La medición efectiva y cuantitativa del
                                riesgo se asocia con la posibilidad de pérdida futura. Para el caso de la contratación
                                estatal no se establece una metodología para la cuantificación del riesgo, lo cual da a
                                la entidad cierto grado de discrecionalidad.
                            </p>
                            <p className="p34_lease ft0_lease">
                                Frente a la necesidad que se pretende satisfacer, se establecerá el grado de
                                probabilidad de ocurrencia y de impacto en relación con el equilibrio económico del
                                contrato, utilizando una escala ordinal en la que se hace referencia a criterios de
                                medición como se presenta a continuación: MUY ALTO, ALTO, MEDIO, BAJO, MUY BAJO
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t1_lease">
                                <tr>
                                    <td className="tr6_lease td28_lease">
                                        <p className="p35_lease ft0_lease" style={{ width: '124px', height: "auto" }}>Riesgo Previsible</p>
                                    </td>
                                    <td className="tr6_lease td29_lease" style={{ borderRight: '1px solid #000' }}>
                                        <p className="p8_lease ft0_lease">Grado de Ocurrencia</p>
                                    </td>
                                    <td className="tr7_lease td31_lease">
                                        <p className="p8_lease ft0_lease">Grado de Impacto</p>
                                    </td>
                                    <td className="tr6_lease td2_lease">
                                        <p className="p8_lease ft0_lease">Contratista</p>
                                    </td>
                                    <td className="tr6_lease td2_lease">
                                        <p className="p8_lease ft0_lease">Municipio</p>
                                    </td>
                                    <td className="tr6_lease td2_lease">
                                        <p className="p8_lease ft0_lease" style={{ width: '190px', height: 'auto' }}>Mecanismo de Mitigación</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr6_lease td28_lease">
                                        <p className="p35_lease ft0_lease">REGULATORIO</p>
                                    </td>
                                    <td className="tr6_lease td29_lease" style={{ borderRight: '1px solid #000' }}><p className="p8_lease ft0_lease" >{values?.regulatory_degree_occurrence === "" ? "MEDIO" : values?.regulatory_degree_occurrence}</p></td>
                                    <td className="tr7_lease td31_lease"><p className="p8_lease ft0_lease">{values?.regulatory_impact_degree === "" ? "MEDIO" : values?.regulatory_impact_degree}</p></td>
                                    {values?.regulatory_responsable === "municipio" &&
                                        <>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center"></p></td>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center">X</p></td>
                                        </>
                                    }
                                    {(values?.regulatory_responsable === "Contratista" || values?.regulatory_responsable === "") &&
                                        <>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center">X</p></td>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center"></p></td>
                                        </>
                                    }

                                    <td className="tr6_lease td2_lease">
                                        <p className="p8_lease ft0_lease">
                                            {values?.regulatory_mitigation_mechanism === ""
                                                ?
                                                "Ejercer un control y vigilancia estrictos al contrato por parte del supervisor."
                                                :
                                                values?.regulatory_mitigation_mechanism
                                            }
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #000' }}>
                                    <td className="tr6_lease td28_lease">
                                        <p className="p35_lease ft0_lease">
                                            OPERATIVOS: Incumplimiento del contratista de las obligaciones y prohibiciones  contraídas en virtud del contrato.
                                        </p>
                                    </td>
                                    <td className="tr6_lease td29_lease" style={{ borderRight: '1px solid #000' }} ><p className="p8_lease ft0_lease" >{values?.operative_degree_occurrence === "" ? "MEDIO" : values?.operative_degree_occurrence}</p></td>
                                    <td className="tr7_lease td31_lease"><p className="p8_lease ft0_lease">{values?.operative_impact_degree === "" ? "MEDIO" : values?.operative_impact_degree}</p></td>
                                    {values?.operative_responsable === "municipio" &&
                                        <>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center"></p></td>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center">X</p></td>
                                        </>
                                    }
                                    {(values?.operative_responsable === "Contratista" || values?.operative_responsable === "") &&
                                        <>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center">X</p></td>
                                            <td className="tr6_lease td2_lease"><p className="p8_lease ft0_lease text-center"></p></td>
                                        </>
                                    }

                                    <td className="tr6_lease td2_lease">
                                        <p className="p8_lease ft0_lease">
                                            {values?.operative_mitigation_mechanism === ""
                                                ?
                                                "Realizar visitas trimestrales al bien inmueble objeto del contrato y seguimiento mensual a los pagos de cánones, servicios públicos y administración cuando aplique, por parte del supervisor para realizar seguimiento y evaluación al desarrollo del objeto contractual"
                                                :
                                                values?.operative_mitigation_mechanism
                                            }
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <p className="p40_lease ft3_lease">
                                <span className="ft3_lease">11.</span>
                                <span className="ft33_lease">
                                    El análisis que sustenta la exigencia de los mecanismos de cobertura que garantizan
                                    las obligaciones surgidas con ocasión de la contratación directa y del contrato a
                                    celebrar.
                                </span>
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t2_lease">
                                <tr>
                                    <td className="tr1_lease td81_lease" style={{ borderRight: '1px solid #000' }}><p className="p6_lease ft0_lease" style={{ width: '120px', height: 'auto' }}>Tipificación</p></td>
                                    <td className="tr1_lease td83_lease"> <p className="p8_lease ft0_lease" style={{ width: '100px', height: 'auto' }}>Estimación</p></td>
                                    <td className="tr1_lease td85_lease" style={{ borderRight: '1px solid #000' }}><p className="p7_lease ft0_lease" style={{ width: '170px', height: 'auto' }}>Mecanismo de Cobertura</p></td>
                                    <td className="tr1_lease td88_lease"><p className="p8_lease ft0_lease" style={{ width: '100px', height: 'auto' }}>Asignación</p></td>
                                    <td className="tr1_lease td89_lease"><p className="p8_lease ft0_lease" style={{ width: '100px', height: 'auto' }}>Vigencia</p></td>
                                    <td className="tr1_lease td90_lease"><p className="p8_lease ft0_lease">Aplica</p></td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #000' }}>
                                    <td className="tr1_lease td81_lease" style={{ borderRight: '1px solid #000' }}>
                                        <p className="p6_lease ft0_lease">
                                            Incumplimiento del contratista de las obligaciones y prohibiciones  contraídas en virtud del contrato
                                        </p>
                                    </td>
                                    <td className="tr1_lease td83_lease">
                                        <p className="p8_lease ft0_lease">
                                            {values?.lockable_base === 0 ?
                                                '10% del valor del contrato'
                                            :
                                                `${values?.lockable_base}% del valor del contrato`

                                            }
                                        </p>
                                    </td>
                                    <td className="tr1_lease td85_lease" style={{ borderRight: '1px solid #000' }}>
                                        <p className="p7_lease ft0_lease">
                                            Garantía de {values?.coverage}: Ampara al Beneficiario el total y perfecto cumplimiento del contrato pactado de acuerdo a sus términos, condiciones y especificaciones contractuales
                                        </p>
                                    </td>
                                    <td className="tr1_lease td88_lease"><p className="p8_lease ft0_lease">Contratista</p></td>
                                    <td className="tr1_lease td89_lease"><p className="p8_lease ft0_lease">Plazo del contrato y 4 meses más</p></td>
                                    <td className="tr1_lease td90_lease"><p className="p8_lease ft0_lease">SI</p></td>
                                </tr>
                            </table>
                            <p className="p42_lease ft14_lease">Página 4 de 6</p>
                            <p className="p43_lease ft15_lease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p21_lease ft17_lease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p21_lease ft17_lease">Línea Única de Atención a la Ciudadanía 44 44 144</p>
                            <p className="p21_lease ft17_lease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p21_lease ft17_lease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_5_lease">
                        <div id="p5dimg1">
                            <img src={imgbs64} alt="" id="p5img1" />
                        </div>

                        <div className="dclr_lease" />
                        <div id="id5_1">
                            <div id="id5_1_1">
                                <p className="p0_lease ft0_lease">
                                    Cód. <span>FO-ADMI-137</span>
                                </p>
                                <p className="p1_lease ft0_lease">Versión. 1</p>
                            </div>
                            <div id="id5_1_2">
                                <p className="p2_lease ft1_lease">Formato</p>
                                <p className="p0_lease ft2_lease">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3_lease ft2_lease">Inmueble</p>
                            </div>
                        </div>
                        <div id="id5_2">
                            <p className="p50_lease ft0_lease">
                                Así mismo, con el fin de minimizar el riesgo y garantizar el cumplimiento del contrato,
                                el Municipio de Medellín establecerá en el texto del contrato cláusulas como la penal
                                pecuniaria y de auditoría interna así:
                            </p>
                            <p className="p51_lease ft0_lease">
                                <span className="ft3_lease">12.</span>
                                <span className="ft5_lease">Cláusula Penal Pecuniaria</span>: Se estipula una clausula
                                penal equivalente al diez por ciento (10%) del valor total del contrato, la cual se hará
                                efectiva de manera unilateral sin necesidad de declaratoria judicial, cuando a juicio
                                del ordenador del gasto, previo informe del interventor, el contratista incurra en un
                                incumplimiento grave y severo del contrato, conforme a la normativa vigente.
                            </p>
                            <p className="p23_lease ft3_lease">
                                <span className="ft3_lease">13.</span>
                                <span className="ft5_lease">Auditoria Interna</span>
                                <span className="ft0_lease">:</span>
                            </p>
                            <p className="p16_lease ft0_lease">
                                La Secretaría de Evaluación y Control, mediante comunicación suscrita por el Secretario
                                de Despacho o los Subsecretarios, podrá requerir del CONTRATISTA toda la información
                                relacionada con los aspectos técnicos, administrativos, financieros y legales del
                                contrato, pudiendo ser necesario, inspeccionar los documentos, lugares o sedes donde se
                                ejecute la prestación, según las técnicas de auditorías aplicadas. Los informes de
                                auditoría interna son de uso reservado de la Secretaria de Evaluación y Control, el
                                ordenador del gasto y señor Alcalde. La reticencia del contratista a atender los
                                requerimientos de la Auditoría interna serán sujetos de Multa por mora en la entrega de
                                información, con fundamento en la normativa vigente.
                            </p>
                            <p className="p14_lease ft3_lease">14. Componente ambiental</p>
                            <p className="p15_lease ft0_lease">
                                Dentro del presente proceso contractual el contratista deberá cumplir
                                con los riesgos ambientales que le apliquen a la destinación del bien
                                inmueble entregado en arrendamiento <span className="ft3_lease">{values?.environmental_risk}.</span>
                            </p>
                            <p className="p5_lease ft3_lease">15. Supervisión del contrato:</p>
                            <p className="p16_lease ft0_lease">
                                De conformidad con lo dispuesto por el artículo 83 de la Ley 1474 de 2011 y la normativa
                                aplicable, y toda vez que no se requiere de conocimientos especializados, la vigilancia
                                técnica administrativa, financiera, contable y jurídica sobre el presente contrato será
                                ejercida por un Servidor Público de la dependencia que tiene a cargo el bien, designado
                                por la Secretaría de Suministros y Servicios, mediante oficio, el cual deberá velar por
                                el cumplimiento de las obligaciones contractuales e informar sobre su incumplimiento y
                                de toda irregularidad que se presente sobre hechos imputables al arrendatario y que
                                pueda causar perjuicios al Municipio de Medellín, como propietario del inmueble. La
                                designación hará parte integrante del contrato.
                            </p>
                            <p className="p52_lease ft14_lease">Página 5 de 6</p>
                            <p className="p18_lease ft15_lease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p21_lease ft17_lease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p21_lease ft17_lease">Línea Única de Atención a la Ciudadanía 44 44 144</p>
                            <p className="p21_lease ft17_lease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p21_lease ft17_lease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card className="my-3" style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_6_lease">
                        <div id="p6dimg1">
                            <img src={imgbs64} id="p6img1" alt="" />
                        </div>

                        <div className="dclr_lease" />
                        <div id="id6_1">
                            <div id="id6_1_1">
                                <p className="p0_lease ft0_lease">
                                    Cód. <span>FO-ADMI-137</span>
                                </p>
                                <p className="p1_lease ft0_lease">Versión. 1</p>
                            </div>
                            <div id="id6_1_2">
                                <p className="p2_lease ft1_lease">Formato</p>
                                <p className="p0_lease ft2_lease">
                                    <span>FO-ADMI</span> Estudio Previo para arrendamiento de Bien
                                </p>
                                <p className="p3_lease ft2_lease">Inmueble</p>
                            </div>
                        </div>
                        <div id="id6_2">
                            <p className="p10_lease ft0_lease">
                                <span className="ft3_lease">16.</span
                                ><span className="ft5_lease">Lugar de Ejecución: </span>Municipio de Medellín–Antioquia
                            </p>
                            <p className="p16_lease ft0_lease">
                                <span className="ft3_lease">17.</span><span className="ft43_lease">Multas: </span>
                                <span className="ft3_lease">{values?.fines} </span>
                                {/* (En los contratos de arrendamientos de vivienda NO se pactan multas. De
                                ocurrir incumplimientos, el ARRENDADOR tiene facultades expresas para
                                darlo por terminado de manera unilateral, ante cualquiera de las
                                causales de incumplimiento y procederá a cobrar la cláusula penal) */}
                            </p>
                            <p className="p53_lease ft21_lease">
                                (Las multas serán fijadas de acuerdo a las condiciones especiales del bien inmueble dado
                                en arrendamiento y se verificaran al momento de la elaboración de cada estudio previo,
                                cuales aplican).
                            </p>
                            <p className="p9_lease ft0_lease">
                                <span className="ft3_lease">18.</span><span className="ft44_lease">Publicación. </span>De
                                conformidad con el Decreto 1082 de 2015, y con el artículo 223 del Decreto-Ley
                            </p>
                            <p className="p54_lease ft0_lease">
                                <span className="ft0_lease">019</span
                                ><span className="ft45_lease"
                                >de 2012, el presente contrato una vez perfeccionado, deberá ser
                                    publicado por parte del </span
                                ><span className="ft3_lease">MUNICIPIO DE MEDELLÍN </span>en el Sistema
                                Electrónico para la Contratación Público, SECOP y a través del Portal
                                Único de Contratación <span className="ft46_lease">www.colombiacompra.gov.co</span>
                            </p>
                            <p className="p12_lease ft0_lease">
                                <span className="ft3_lease">19.</span>
                                <span className="ft4_lease">Línea del Plan de Desarrollo: </span>Dimensión: 1 Creemos en
                                la confianza ciudadana; Reto: 1.3
                            </p>
                            <p className="p55_lease ft21_lease">
                                Medellín bien administrado; Programa: 1.3.4 Gestión efectiva. Proyecto 1.3.4.5 Gestión y
                                conservación de activos.
                            </p>
                            <p className="p56_lease ft0_lease">
                                Medellín, Antioquia,  {`${new Date().getDate()} de ${months(today_date.toString())} de ${new Date().getFullYear()}`}
                            </p>
                            <p className="p57_lease ft0_lease">{`${values?.name_Leader} ${values?.lastname_Leader}`}</p>
                            <p className="p58_lease ft0_lease">Líder de Programa</p>
                            <p className="p10_lease ft0_lease">Unidad Administración de Bienes Inmuebles</p>
                            <p className="p10_lease ft0_lease">Subsecretaría de Gestión de Bienes</p>
                            <table cellPadding="0" cellSpacing="0" className="t2">
                                <tr>
                                    <td className="tr17 td83"><p className="p40 ft0">Elaboró:</p></td>
                                    <td className="tr17 td84"><p className="p41 ft0">Revisó:</p></td>
                                    <td className="tr17 td85"><p className="p41 ft0">Aprobó:</p></td>
                                </tr>
                                <tr>
                                    <td className="tr2 td86"><p className="p40 ft0">{values?.name_elaborated}{/*(Nombre)*/}</p></td>
                                    <td className="tr2 td87"><p className="p41 ft0">{values?.name_revised}{/*(Nombre)*/}</p></td>
                                    <td className="tr2 td88"><p className="p41 ft0">{values?.name_approved}{/*(Nombre)*/}</p></td>
                                </tr>
                                <tr>
                                    <td className="tr18 td86"><p className="p40 ft0">{values?.post_elaborated}{/*(Cargo)*/}</p></td>
                                    <td className="tr18 td87"><p className="p41 ft0">{values?.post_revised}{/*(Cargo)*/}</p></td>
                                    <td className="tr18 td88"><p className="p41 ft0">{values?.post_approved}{/*(Cargo)*/}</p></td>
                                </tr>
                                <tr>
                                    <td className="tr9 td89"><p className="p42 ft30">&nbsp;</p></td>
                                    <td className="tr9 td90"><p className="p42 ft30">&nbsp;</p></td>
                                    <td className="tr9 td91"><p className="p42 ft30">&nbsp;</p></td>
                                </tr>
                            </table>
                            <p className="p59_lease ft14_lease">Página 6 de 6</p>
                            <p className="p18_lease ft15_lease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p21_lease ft17_lease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p21_lease ft17_lease">Línea Única de Atención a la Ciudadanía 44 44 144</p>
                            <p className="p21_lease ft17_lease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p21_lease ft17_lease">Medellín - Colombia</p>
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
                        history.push({ pathname: "/disposition/create/", state: { dispositionType, realEstate, values } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        let value_public_service = 0
                        console.log(values)
                        if(values.public_service === "Recobro") {
                            value_public_service = values.recovery_value;
                        }else if(values.public_service === "Aforo") {
                            value_public_service = values.value_aforo;
                        }else if(values.public_service === "Contador individualizado") {
                            value_public_service = values.counter_value;
                        }else if(values.public_service === "Prepago") {
                            value_public_service = 0
                        }
                        const values_final = {
                            ...values,
                            value_public_service
                        }
                        dispatch(actions.create_precontract(values_final, dispositionType))
                        //history.push({ pathname: "/disposition/create/", state: { dispositionType, realEstate, values } })
                    }}
                >
                    guardar y descargar
                </button>
            </div>
        </div>
    );
};

export default LeaseDoc;

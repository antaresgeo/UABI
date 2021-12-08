import { Card } from '../../../../../utils/ui';
import '../../../../../utils/assets/styles/comodato.css';
import imgbs64 from '../../../../../utils/assets/img/header.png';
import { useLocation, useHistory } from 'react-router-dom';
import writtenNumber from 'written-number';
import months from './../../../../../utils/ui/months';
interface IParams {
    values: any;
    realEstate: any;
}

const ComodatoDoc = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    let date = [];
    const { values, realEstate } = location.state;
    console.log(values, realEstate);
    date = values?.registration_date.split('-');

    return (
        <div className="h-100 d-flex flex-column">
            <div className="comodato container-fluid">
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_1">
                        <div id="p1dimg1">
                            <img src={imgbs64} alt="" id="p1img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id1_1">
                            <div id="id1_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id1_1_2">
                                <p className="p2_comodato ft1">Formato</p>
                                <p className="p0_comodato ft2">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id1_2">
                            <p className="p4_comodato ft3">
                                <span className="ft3">1.</span>
                                <span className="ft4">Identificación del Ingreso: </span>
                                <span className="ft0_comodato">N/A.</span>
                            </p>
                            <p className="p5_comodato ft3">
                                <span className="ft3">2.</span>
                                <span className="ft4">Estimación del valor del contrato:</span>
                            </p>
                            <p className="p6_comodato ft5">
                                Para efectos del contrato de comodato se tendrá como valor (Digite la opción que aplique
                                continuando con el párrafo)
                            </p>
                            <p className="p7_comodato ft0_comodato">
                                -la sumatoria de todas las obligaciones cuantificadas a cargo del comodatario.{' '}
                                <span className="ft6_comodato">(Inserte valor en</span>
                            </p>
                            <p className="p4_comodato ft7_comodato">
                                <span className="ft6_comodato">letras), (Inserte valor en números). </span>(CUANDO EL
                                CONTRATO A CELEBRAR SEA CON
                            </p>
                            <p className="p8_comodato ft8_comodato">
                                LAS ENTIDADES QUE ENMARCA EL ARTÍCULO SEGUNDO, PARÁGRAFO SEGUNDO DE LA RESOLUCIÓN SSS
                                202050083439 DE 2020, EJEMPLO: JAC)
                            </p>
                            <p className="p9_comodato ft10_comodato">
                                -el avalúo comercial vigente del inmueble
                                <span className="ft8_comodato"> (PUEDE SER EL DE SAP SI SE CUENTA CON ESTE</span>)
                                (Inserte valor en letras), (Inserte valor en números).
                                <span className="ft8_comodato">(CUANDO EL CONTRATO A</span>
                            </p>
                            <p className="p8_comodato ft8_comodato">
                                REALIZAR SEA CON ENTIDADES A LAS CUALES NO SE LES APLIQUE EL ARTÍCULO SEGUNDO, PARÁGRAFO
                                SEGUNDO DE LA RESOLUCIÓN SSS 202050083439 DE 2020 y que tengan un único solicitante).
                            </p>
                            <p className="p10_comodato ft0_comodato">
                                <span className="ft3">3.</span>
                                <span className="ft11_comodato">Solicitante:</span>
                                <span className="ft3_comodato">{` ${values?.names_applicant} ${values?.surnames_applicant} ${values?.id_type_document}: ${values?.number_doc_applicant_id}`}</span>
                                {/* (Digite el nombre de la
                                entidad pública que solicita el inmueble en comodato) NIT: (Digite el
                                número de identificación tributaria de la entidad pública que solicita
                                el inmueble en comodato) */}
                            </p>
                            <p className="p11_comodato ft3">
                                <span className="ft3">4.</span>
                                <span className="ft4">Justificación de la contratación.</span>
                            </p>
                            <p className="p12_comodato ft13_comodato">
                                El Municipio de Medellín, tiene dentro de sus bienes, inmuebles que no se requieren para
                                el desarrollo de su objeto misional, no se encuentran incluidos en un plan de ventas, no
                                serán enajenados; ni se requieren para la ejecución de una obra futura y que por sus
                                características pueden ser destinados al servicio de la comunidad a través de la
                                modalidad de contratación especial reglamentada en el decreto 092 de 2017, en la
                                tipología de contrato de comodato con
                                <span className="ft3_comodato"> {values?.loan_typology}</span>
                                {/*<span className="ft12_comodato"> (indicar según el caso</span>: las
                                <span className="ft14_comodato"> Juntas de Acción Comunal</span> u
                                <span className="ft14_comodato"> entidades sin ánimo de lucro</span>)*/}{' '}
                                como entidades de reconocida idoneidad y necesarias para el impulso y ejecución de
                                programas sociales requeridos a través del plan de desarrollo. Al presente contrato no
                                le asiste la realización de proceso competitivo atendiendo a la no existencia de
                                pluralidad de solicitantes, de acuerdo con la particularidad, función, reconocimiento y
                                operación territorial
                                <span className="ft3_comodato">
                                    {values?.loan_typology === 'las juntas de acción comunal' &&
                                        ' de la Junta de Acción Comunal de conformidad con el radio de acción' +
                                            ' establecido en los respectivos estatutos de la organización y el' +
                                            ' reconocimiento de la personería jurídica otorgada por la Secretaría' +
                                            ' de Participación Ciudadana '}
                                </span>
                                con fundamento en lo establecido en el artículo 355 de la Constitución Política de
                                Colombia, el decreto 092 de 2017
                                <span className="ft3_comodato">
                                    {values?.loan_typology === 'las juntas de acción comunal' &&
                                        ', la Ley 743 de 2002 modificada por la ley 1989 de 2019 '}
                                </span>
                                y la Ley 9 de 1989.
                            </p>
                            <p className="p10_comodato ft0_comodato">
                                En este orden, las Entidades Estatales del Gobierno nacional, departamental, distrital y
                                municipal pueden contratar con entidades privadas sin ánimo de lucro y de reconocida
                                idoneidad en los términos del artículo 355 de la Constitución Política y del decreto 092
                                de 2017, en atención a lo
                            </p>
                            <p className="p13_comodato ft23_comodato">Página 1 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_2">
                        <div id="p2dimg1">
                            <img src={imgbs64} alt="" id="p2img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id2_1">
                            <div id="id2_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id2_1_2">
                                <p className="p2_comodato ft1_comodato">Formato</p>
                                <p className="p0_comodato ft2_comodato">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2_comodato">Inmueble</p>
                            </div>
                        </div>
                        <div id="id2_2">
                            <p className="p8_comodato ft0_comodato">
                                establecido en el artículo 4 inciso primero, cuando en la etapa de planeación se
                                verifique que no existe más de una entidad sin ánimo de lucro para el desarrollo del
                                programa o actividad de interés público, no se requiere adelantar proceso competitivo.
                                Así las cosas, como se indicó antes y para el caso concreto, se identificó que{' '}
                                <span className="ft3_comodato">{` ${values?.names_applicant}, `}</span>
                                {/* <span className="ft3_comodato">(DIGITE LA RAZÓN SOCIAL DE LA ENTIDAD COMODATARIA)</span>, */}
                                de acuerdo con la circunscripción territorial, los proyectos y actividades a ejecutar
                                con la comunidad inscrita en la organización y la demás población beneficiaria de su
                                radio de acción, se pudo establecer que es la única entidad como organización de base,
                                para el uso, goce y disposición del inmueble.
                            </p>
                            <p className="p19_comodato ft0_comodato">
                                De acuerdo con lo expuesto y la documentación aportada,{' '}
                                <span className="ft3_comodato">{` ${values?.names_applicant}, `}</span>
                                {/* <span className="ft3_comodato"> (DIGITE LA RAZÓN SOCIAL DE LA ENTIDAD COMODATARIA)</span> */}
                                presentó solicitud mediante la cual indica que con el bien o los bienes entregados en
                                comodato, llevará a cabo las siguientes actividades,{' '}
                                <span className="ft3_comodato">{`${values?.activities} `}</span>(Realice una descripción
                                detallada de la necesidad que se pretende solucionarle al solicitante con la entrega en
                                comodato del inmueble- se deben describir los programas específicos de la entidad y su
                                relación en cuanto a la línea del plan de desarrollo actual que se apoyará con su
                                operación), beneficiando a
                                <span className="ft3_comodato">{` la poblacion ${values?.population} del barrio ${values?.location?.neighborhood} y comuna ${values?.location?.commune} del sector ${values?.benefited_sector} `}</span>
                                {/*(indicar población, barrio,comuna, sector beneficiado y con su nombre)*/}
                                con el uso y puesta a disposición de la comunidad del inmueble con matrícula
                                <span className="ft3_comodato">{` ${realEstate?.registry_number}`}</span>,{' '}
                                {/*(digite el
                                número de la matrícula inmobiliaria del bien a entregar en comodato)*/}
                                CBML{' '}
                                <span className="ft3_comodato">{` ${realEstate?.address?.cbmls?.sap.cb}${realEstate?.address?.cbmls?.sap.ml}`}</span>
                                {/*(Digite el número del CMBL del bien inmueble)*/}, activo fijo{' '}
                                <span className="ft3_comodato">{`${realEstate?.sap_id}`}</span>,
                                {/* (Digite el número del código del activo fijo correspondiente al bien a entregar en comodato)  */}
                                ubicado en la dirección{' '}
                                <span className="ft3_comodato">{realEstate?.address?.address}</span>,{' '}
                                {/*(digite la dirección
                                del bien teniendo en cuenta el manual de nomenclatura)*/}{' '}
                                cuyo tipo es
                                <span className="ft3_comodato">{` ${values?.tipology?.tipology}`}</span>
                                {/* (Digite el tipo de bien, si es casa, local, bodega, etc.). */}
                            </p>
                            <p className="p20_comodato ft0_comodato">
                                Según la factibilidad del bien, en cuanto a lo técnico, físico, estado de habitabilidad
                                y disponibilidad, se puede determinar que cumple requisitos mínimos para ser destinado
                                al servicio de la comunidad, bajo la modalidad del contrato de comodato, atendiendo a
                                los lineamientos contractuales de la norma vigente.
                            </p>
                            <p className="p12_comodato ft26_comodato">
                                De acuerdo con lo antes previsto, se formulan los estudios previos para proceder a la
                                elaboración del contrato de comodato, previa consideración de: 1) cuantificación de las
                                obligaciones contractuales.
                            </p>
                            <p className="p8_comodato ft22_comodato">
                                <span className="ft0_comodato">2)</span>
                                <span className="ft27_comodato">
                                    análisis de riesgos, 3) análisis de requerimiento o no, de establecer garantías para
                                    cumplir obligaciones derivadas del contrato, y 4) obligación de publicarse en la
                                    plataforma correspondiente.
                                </span>
                            </p>
                            <p className="p21_comodato ft3_comodato">
                                <span className="ft3_comodato">5.</span>
                                <span className="ft4_comodato">
                                    Relación del objeto del solicitante con el objeto misional de la Secretaría que
                                    entrega el bien en comodato.
                                </span>
                            </p>
                            <p className="p19_comodato ft10_comodato">
                                <span className="ft22_comodato">Con la entrega del bien inmueble en comodato </span>
                                <span className="ft3_comodato">{realEstate?.dependency}</span>, contribuye
                                {/*(Digite Secretaría o dependencia encargada del inmueble)*/}
                                <span className="ft3_comodato"> {values?.dependence}</span>
                                {/* (Digite claramente en la forma como la dependencia que entrega el
                                inmueble se ve identificada en el objeto social y la forma como
                                contribuye según la gestión misional). */}
                            </p>
                            <p className="p22_comodato ft3_comodato">6. Descripción del objeto a contratar.</p>
                            <p className="p23_comodato ft22_comodato">
                                Suscribir contrato de comodato sobre el bien inmueble de propiedad del Municipio de
                                Medellín identificado con matrícula{' '}
                                <span className="ft3_comodato">{realEstate?.registry_number}</span>,
                                {/*(digite el número de la matrícula inmobiliaria del bien a entregar en comodato)*/}{' '}
                                CBML
                                <span className="ft3_comodato">{` ${realEstate?.address?.cbmls?.sap.cb}${realEstate?.address?.cbmls?.sap.ml}`}</span>
                                ,{/*(Digite el número del CMBL del bien inmueble)*/} activo fijo
                                <span className="ft3_comodato">{` ${realEstate?.sap_id}`}</span>,
                                {/* (Digite el número del código del activo fijo correspondiente al bien a entregar en comodato) */}
                            </p>
                            <p className="p24_comodato ft23_comodato">Página 2 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_3">
                        <div id="p3dimg1">
                            <img src={imgbs64} alt="" id="p3img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id3_1">
                            <div id="id3_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id3_1_2">
                                <p className="p2_comodato ft1">Formato</p>
                                <p className="p0_comodato ft2">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id3_2">
                            <p className="p8_comodato ft0_comodato">
                                ubicado en la dirección{' '}
                                <span className="ft3_comodato">{realEstate?.address?.address}</span>,
                                {/*(digite la dirección del bien teniendo en cuenta el manual de nomenclatura)*/} cuyo
                                tipo es
                                <span className="ft3_comodato">{` ${values?.tipology?.tipology}`}</span>, escritura N°
                                {/* (Digite el tipo de bien, si es casa, local, bodega, etc.)  */}
                                <span className="ft3_comodato">
                                    {realEstate?.acquisitions?.map((ad) => {
                                        let i = ad.acquisition_date.split('-');
                                        return ` ${ad.act_value} del ${i[2]} de ${months(i[1])} de ${i[0]}, `;
                                    })}
                                </span>
                                {/* (digite el número de la escritura) del (digite el día de la escritura) de
                                (Digite el mes de la escritura) de (Digite el número del año de la
                                escritura).*/}
                                El espacio a entregar en comodato consta de
                                <span className="ft3_comodato">
                                    {values?.Horizontal_property === 'si'
                                        ? ` ${realEstate?.construction_area}`
                                        : ` ${realEstate?.total_area}`}
                                </span>
                                {/*(Digite el
                                número de metros cuadrados que comprende el bien a entregar, tanto del
                                área de la construcción como el área del lote con base al informe
                                técnico de prediación- en los inmuebles que se encuentren sometidos al
                                régimen de propiedad horizontal no se indica área del lote)*/}{' '}
                                m<span className="ft28_comodato">2 </span>el cual{' '}
                                <span className="ft3_comodato">{values?.Horizontal_property}</span>{' '}
                                {/*(indicar si o no)*/} se encuentra sometido a régimen de propiedad horizontal, cuyas
                                áreas y linderos se describen de la siguiente manera, según informe técnico de
                                Prediación con fecha de
                                <span className="ft3_comodato">{` ${date[2]} de ${months(date[1])} de ${
                                    date[0]
                                }.`}</span>
                                {/* (digite el día del informe) de (Digite el mes del informe) de (Digite
                                el número del año del informe). */}
                            </p>
                            <p className="p8_comodato ft0_comodato my-3 ">
                                <span className="ft3">7.</span>
                                <span className="ft4">Destinación</span>: debe destinarse el inmueble para:{' '}
                                <span className="ft3_comodato">{values?.destination_realEstate}</span>
                                {/* (Describir la destinación del inmueble) */}
                            </p>
                            <p className="p11_comodato ft3">
                                <span className="ft3">8.</span>
                                <span className="ft4">Especificaciones</span>
                                <span className="ft0_comodato">:</span>
                            </p>
                            <p className="p11_comodato ft3_comodato">8.1 Obligaciones del comodatario.</p>
                            <p className="p25_comodato ft30_comodato">
                                <span className="ft0_comodato">El </span>
                                <span className="ft3">COMODATARIO</span>
                                <span className="ft0_comodato">, se obliga: </span>1) A emplear el mayor cuidado en la
                                conservación de los bienes, objeto de este contrato, siendo responsable de cualquier
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
                                <span className="ft29_comodato"> COMODANTE </span>lo considere necesario, para
                                inspecciones físicas de rutina del bien o efectos de la ejecución de supervisión del
                                presente contrato de comodato. 9) Deberá pagar y aportar los recibos de paz y salvos de
                                Servicios Públicos cancelados,
                                <span className="ft3_comodato">{` ${values?.peacesafe}`}</span>
                                {/* (paz y salvo de cuotas de administración, constancia de pago de
                                impuesto predial cuando el inmueble se encuentre por fuera de la
                                circunscripción territorial del Municipio de Medellín, entre otros)*/}{' '}
                                de tal forma que se pueda verificar el pago de todos los servicios públicos contratados
                                y trabajos realizados por cuenta del
                                <span className="ft29_comodato"> COMODATARIO</span>, y ante los requerimientos de quién
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
                                Suministros y Servicios, las cuales serán por su
                            </p>
                            <p className="p26_comodato ft23_comodato">Página 3 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_4">
                        <div id="p4dimg1">
                            <img src={imgbs64} alt="" id="p4img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id4_1">
                            <div id="id4_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id4_1_2">
                                <p className="p2_comodato ft1">Formato</p>
                                <p className="p0_comodato ft2">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id4_2">
                            <p className="p8_comodato ft0_comodato">
                                cuenta y riesgo. 15) Asumir los gastos generados por el uso normal, el mantenimiento, la
                                conservación y vigilancia del bien inmueble, así como los correspondientes a la
                                legalización del contrato como garantías, impuestos y publicación cuando a ello haya
                                lugar. 16) Participar en la terminación y liquidación del contrato, así como suscribir
                                las actas correspondientes.
                            </p>
                            <span className="ft3_comodato">
                                {values?.obligations?.length > 0 && (
                                    <p className="p27_comodato ft10_comodato">
                                        {values?.obligations.map((o) => ` ${o.id}) ${o.obligation}.`)}
                                        {/* <span className="ft6_comodato">(17) Si</span>
                                    requiere más obligaciones digítelas en este espacio siguiendo la
                                    numeración, de lo contrario suprima todo este texto y numeral). Las
                                    demás obligaciones propias de los contratos de comodatos, de acuerdo
                                    con las disposiciones legales, en especial, de las contenidas en la
                                    normatividad vigente. */}
                                    </p>
                                )}
                            </span>
                            <p className="p7_comodato ft3">8.2 Prohibiciones del comodatario.</p>
                            <p className="p23_comodato ft6_comodato">
                                <span className="ft6_comodato">1)</span>
                                <span className="ft32_comodato">
                                    Realizar en el inmueble objeto del contrato de comodato cualquier actividad de la
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
                                    por las autoridades competentes las reuniones sociales{' '}
                                    <span className="ft3_comodato">{`(${values?.social_event})`}</span> y actividades de
                                    integración, educación o financiación. 11) Desarrollar actividades que superen los
                                    índices permitidos de ruido, para zonas residenciales o comunitarias o que generen
                                    conflictos de convivencia con la vecindad, en acuerdo a lo preceptuado en el Código
                                    Nacional de Policía vigente, sin perjuicio de los manuales o normas de convivencia
                                    que regulen el tema a nivel Municipal o Departamental.12) Realizar cualquier
                                    actividad económica que no esté previa y debidamente autorizada por la Secretaría
                                    que institucionalmente tiene adscrito el inmueble entregado en comodato.
                                </span>
                            </p>
                            <span className="ft3_comodato">
                                {values?.prohibitions?.length > 0 && (
                                    <p className="p27_comodato ft10_comodato">
                                        {values?.prohibitions.map((p) => ` ${p.id}) ${p.prohibition}.`)}
                                        {/* (13) Si requiere
                                    más prohibiciones de las anteriores digítelas en este espacio
                                    siguiendo la numeración, de lo contrario suprima todo este texto y
                                    numeral). Todas aquellas que en ejecución del contrato resulten
                                    contrarias a los fines del comodato, la convivencia ciudadana y los
                                    intereses del Municipio de Medellín. */}
                                    </p>
                                )}
                            </span>
                            <p className="p29_comodato ft23_comodato">Página 4 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_5">
                        <div id="p5dimg1">
                            <img src={imgbs64} alt="" id="p5img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id5_1">
                            <div id="id5_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id5_1_2">
                                <p className="p2_comodato ft1">Formato</p>
                                <p className="p0_comodato ft2">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id5_2">
                            <p className="p8_comodato ft0_comodato">
                                <span className="ft3_comodato">8.3</span>
                                <span className="ft34_comodato">Plazo del contrato: </span>El plazo del contrato de
                                comodato a celebrar será de{' '}
                                <span className="ft3_comodato">
                                    ({values?.contract_period}) {writtenNumber(values?.contract_period, { lang: 'es' })}
                                </span>{' '}
                                meses,
                                {/*(Digite en letras y números la duración
                                del contrato)*/}{' '}
                                contados a partir de la entrega del inmueble, mediante acta de inicio suscrita por las
                                partes y previa aprobación de la póliza de cumplimiento.
                            </p>
                            <p className="p23_comodato ft22_comodato">
                                No obstante, el plazo establecido y en caso de requerir la Administración Municipal el
                                inmueble, para desarrollar las funciones que le son propias, podrá dar por terminado el
                                contrato de comodato de forma unilateral.
                            </p>
                            <p className="p20_comodato ft6_comodato">
                                <span className="ft3_comodato">8.4</span>
                                <span className="ft11_comodato">Aforo por pago de servicios públicos: </span>El valor
                                para el pago de Servicios públicos será el indicado en el respectivo documento de cobro
                                emitido por la entidad prestadora del servicio público. No obstante, en el caso en el
                                que el inmueble sea compartido por varias entidades el valor de Servicios públicos
                                deberá ser determinado a través de aforo por parte de la Unidad de Mantenimiento
                                adscrita a la Subsecretaría de Gestión de Bienes, con base en todos los elementos y
                                artefactos eléctricos a utilizar que tengan relación con las actividades a desempeñar en
                                el espacio que se entregará en comodato.
                            </p>
                            <p className="p30_comodato ft5_comodato">
                                Cabe aclarar que no está permitido el uso de muebles privados dentro de la oficina,
                                tales como neveras, microondas, cafeteras entre otros.
                            </p>
                            <p className="p10_comodato ft22_comodato">
                                Para el presente contrato el valor de los servicios públicos{' '}
                                <span className="ft3_comodato">{values?.public_service}</span>{' '}
                                {/*(indicar
                                si o no)*/}{' '}
                                se determinó por aforo.
                                <span className="ft3_comodato">
                                    {values?.public_service === 'si' &&
                                        ` cuyo valor es ($${values?.value_public_service})
                                    ${writtenNumber(values?.value_public_service, { lang: 'es' })} pesos
                                    (en caso de ser determinado por
                                    aforo, indicar la especificación del aforo para su determinación, así
                                    como el valor en números y letras que indica el documento)
                                `}
                                </span>
                            </p>
                            <p className="p31_comodato ft35_comodato">
                                <span className="ft35_comodato">8.5.</span>
                                <span className="ft36_comodato">
                                    {values?.economic_exploitation} autorización de explotación económica: EL
                                    COMODATARIO{' '}
                                </span>

                                {values?.economic_exploitation === 'si' && values?.type_economic_exploitation !== '' ? (
                                    <>
                                        <span className="ft0_comodato">
                                            tendrá la posibilidad de constituir o crear a su cuenta y riesgo unidades
                                            productivas dentro del inmueble, tales como cafeterías, venta de boletería,
                                            así como, podrá permitir el uso de los espacios a terceros que realicen
                                            actividades culturales sociales, empresariales y pedagógicas, que impliquen
                                            retribución económica.{' '}
                                        </span>
                                        PARÁGRAFO PRIMERO:
                                        <span className="ft0_comodato">
                                            {' '}
                                            Los dineros recaudados a partir de la autorización concedida, única y
                                            exclusivamente podrán ser destinados conforme porcentajes previamente
                                            definidos por el comodatario y verificados por el supervisor de la siguiente
                                            manera: un porcentaje para la realización y gastos de funcionamiento propios
                                            del objeto social de la persona jurídica y otro porcentaje para el
                                            mantenimiento y conservación del bien inmueble y los bienes muebles
                                            existentes, el{' '}
                                        </span>
                                        COMODATARIO
                                        <span className="ft0_comodato">
                                            {' '}
                                            deberá entregar al supervisor del contrato de forma trimestral el plan de
                                            mejoramiento y conservación y su respectiva ejecución, así como el balance
                                            de los ingresos y egresos de la entidad sin ánimo de lucro. En caso de que
                                            el supervisor identifique que los dineros obtenidos a partir de la presente
                                            explotación económica están siendo aprovechados a su propio beneficio por
                                            parte del representante legal u otro particular, será causal inmediata de
                                            terminación del contrato de comodato y deberá iniciar proceso de restitución
                                            del inmueble{' '}
                                        </span>
                                        PARÁGRAFO SEGUNDO: El COMODATARIO
                                        <span className="ft0_comodato">
                                            {' '}
                                            renuncia a todas las adquisiciones, adaptaciones y mejoras tanto en bienes
                                            inmuebles como muebles, que se realicen con los dineros generados a través
                                            de la explotación económica concedida sin excepción alguna.
                                        </span>
                                    </>
                                ) : (
                                    // En caso de que no se autorice ninguna explotación económica al inmueble digite:
                                    'No tendrá ninguna autorización para explotación económica en este inmueble entregado en comodato '
                                )}
                                {/* (Digite si se autoriza una explotación económica del tipo redactado
                                    en los casos de realizarse el contrato con un teatro, museo o
                                    entidad cultural que le asista lo siguiente):*/}
                            </p>
                            <p className="p32_comodato ft23_comodato">Página 5 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_6">
                        <div id="p6dimg1">
                            <img src={imgbs64} alt="" id="p6img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id6_1">
                            <div id="id6_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id6_1_2">
                                <p className="p2_comodato ft1_comodato">Formato</p>
                                <p className="p0_comodato ft2_comodato">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2_comodato">Inmueble</p>
                            </div>
                        </div>
                        <div id="id6_2">
                            <p className="p11_comodato ft3_comodato">
                                9. Fundamentos jurídicos que soportan la modalidad de contratación.
                            </p>
                            <p className="p23_comodato ft0_comodato">
                                El presente contrato de comodato se fundamenta en su aplicación bajo el Código Civil
                                Colombiano, el artículo 355 de la Constitución Política de Colombia, Decreto 092 de
                                2017, Ley 9 de 1989 en la modalidad de contratación especial, en la tipología de
                                contrato de comodato con entidades sin ánimo de lucro (ESAL), como entidades de
                                reconocida idoneidad y necesarias para el impulso y ejecución de programas sociales
                                requeridos a través del plan de desarrollo. De igual forma bajo lo preceptuado en el
                                Decreto 092 de 2017, al presente contrato le asistirá o no realización de proceso
                                competitivo en cuanto a la verificación de un único o pluralidad de solicitantes
                                realizada por parte de la Secretaría a cargo del inmueble.
                            </p>
                            <p className="p25_comodato ft37_comodato">
                                De igual forma lo dispuesto en el Código Civil para los contratos de comodato y en lo
                                pertinente por la Ley 80 de 1993, 1150 de 2007 y sus decretos reglamentarios en especial
                                el Decreto 1082 de 2015.
                            </p>
                            <p className="p10_comodato ft0_comodato">
                                También son fundamentos jurídicos del presente proceso contractual las disposiciones
                                contenidas en la Ley 9ª de 1989, Ley 388 de 1997, Código Civil, Acuerdo Municipal 048 de
                                2014 (POT).
                            </p>
                            <p className="p5_comodato ft3_comodato">
                                10. La justificación de los factores de selección que permitan identificar el mejor
                                solicitante.
                            </p>
                            <p className="p23_comodato ft0_comodato">
                                En aplicación de la normatividad vigente, en cuanto a los aspectos que regulan la
                                selección del contratista con el cual se llevará a cabo contrato de comodato, se indica
                                por parte de la {/* Secretaría */}
                                <span className="ft3_comodato">{realEstate?.dependency} </span>
                                {/*(DIGITE EL NOMBRE DE LA SECRETARÍA QUE TIENE A CARGO EL INMUEBLE)*/}
                                lo siguiente:
                            </p>
                            <p className="p23_comodato ft0_comodato">
                                <span className="ft3_comodato">Verificación de un solo solicitante: </span>
                                Una vez realizado el análisis de la solicitud de contrato de comodato instaurada por
                                <span className="ft3_comodato"> {`${values?.names_applicant} `}</span>
                                {/* (DIGITAR EL NOMBRE DE LA ENTIDAD SOLICITANTE) */}
                                se identificó que el programa o actividad de interés público, la satisfacción de la
                                necesidad o aspiración de la comunidad desarrollada por la entidad no es ofrecida por
                                otro contratista.
                                <span className="ft3_comodato">{values?.Action_field}</span>
                                {/* (<span className="ft38_comodato">
                                    La Secretaría que tiene a cargo el inmueble debe motivar el por qué las actividades
                                    desarrolladas por el contratista solo pueden ser ejecutadas por el
                                    mismo, en razón de su campo de acción. ejemplo: Atención de
                                    necesidades territoriales, beneficios que presta para la Secretaría en
                                    razón de sus objetivos misionales y que no sean prestados por otros
                                    contratistas, entre otros que marquen factor decisivo y directo de su
                                    escogencia
                                </span>) */}
                            </p>
                            <p className="p9_comodato ft0_comodato">
                                Por lo que para la presente suscripción del contrato de comodato no se requiere llevar a
                                cabo proceso competitivo. El cual justifica y soporta la modalidad de contratación
                                especial según lo preceptuado en el Decreto 092 de 2017 atendiendo, a la particularidad,
                                función, reconocimiento y operación territorial indicada en el párrafo anterior.
                            </p>
                            <p className="p35_comodato ft21_comodato">
                                <span className="ft3">11.</span>
                                <span className="ft39_comodato">
                                    El soporte que permita la estimación, tipificación y asignación de los riesgos
                                    previsibles que puedan afectar el equilibrio económico del contrato:
                                </span>
                            </p>
                            <p className="p36_comodato ft0_comodato">
                                De acuerdo al artículo 4 de la Ley 1150 de 2007 y el Decreto Nacional 1082 de 2015,
                                dispone que las entidades públicas deben incluir en los estudios previos la estimación,
                                tipificación y asignación de riesgos.
                            </p>
                            <p className="p37_comodato ft23_comodato">Página 6 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_7">
                        <div id="p7dimg1">
                            <img src={imgbs64} alt="" id="p7img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id7_1">
                            <div id="id7_1_1">
                                <p className="p0 ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1 ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id7_1_2">
                                <p className="p2_comodato ft1">Formato</p>
                                <p className="p0_comodato ft2">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3 ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id7_2">
                            <p className="p38_comodato ft0_comodato">
                                De conformidad con lo anterior se procede a hacer el análisis del riesgo que corresponde
                                en los siguientes términos<span className="ft40_comodato">:</span>
                            </p>
                            <p className="p39_comodato ft3_comodato">11.1 Riesgo regulatorio:</p>
                            <p className="p40_comodato ft22_comodato">
                                Comprende cambios de la carga impositiva tributaria de las reformas legales futuras y la
                                adopción de decisiones administrativas:
                            </p>
                            <p className="p41_comodato ft0_comodato">Financieras del COMODATARIO</p>
                            <p className="p40_comodato ft0_comodato">Perdida de liquidez del COMODATARIO</p>
                            <p className="p39_comodato ft3_comodato">11.2 Riesgos operativos:</p>
                            <p className="p42_comodato ft22_comodato">
                                Son intrínsecos al contrato y comprende todas las formas de incumplimiento de las
                                obligaciones que pueden generarse producto del acuerdo de voluntades:
                            </p>
                            <p className="p43_comodato ft22_comodato">
                                Incumplimiento de las obligaciones surgidas del contrato.
                            </p>
                            <p className="p40_comodato ft22_comodato">
                                Pago de salarios, prestaciones sociales e indemnizaciones.
                            </p>
                            <p className="p39_comodato ft3_comodato">12. Estimación del riesgo:</p>
                            <p className="p44_comodato ft0_comodato">
                                La estimación del riesgo consiste en medir la probabilidad de ocurrencia de un evento y
                                su impacto en el caso que se materialice. La medición efectiva y cuantitativa del riesgo
                                se asocia con la posibilidad de pérdida futura. Para el caso de la contratación estatal
                                no se establece una metodología para la cuantificación del riesgo, lo cual da a la
                                entidad cierto grado de discrecionalidad.
                            </p>
                            <p className="p38_comodato ft0_comodato">
                                Frente a la necesidad que se pretende satisfacer, se establecerá el grado de
                                probabilidad de ocurrencia y de impacto en relación con el equilibrio económico del
                                contrato, utilizando una escala ordinal en la que se hace referencia a criterios de
                                medición como se presenta a continuación: MUY ALTO, ALTO, MEDIO, BAJO, MUY BAJO
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t0_comodato">
                                <tr>
                                    <td colSpan={2} className="tr0 td0">
                                        <p className="text-center my-3 ft0">Riesgo Previsible</p>
                                    </td>
                                    <td className="tr0 td1">
                                        <p className="p46_comodato  ft0">Grado de ocurrencia</p>
                                    </td>
                                    <td className="tr0 td2">
                                        <p className="p46_comodato  ft0">Grado de impacto</p>
                                    </td>
                                    <td className="tr0 td1">
                                        <p className="p46_comodato my-3 ft0">Contratista</p>
                                    </td>
                                    <td className="tr0 td3">
                                        <p className="p46_comodato my-3 ft0">Municipio</p>
                                    </td>
                                    <td colSpan={6} className="tr0 td4">
                                        <p className="text-center my-3 ft0">Mecanismo de Mitigación</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        colSpan={2}
                                        className="tr0 td1_comodato"
                                        style={{ borderLeft: '1px solid #000' }}
                                    >
                                        <p className="p45_comodato my-4 ft0">REGULATORIO</p>
                                    </td>
                                    <td className="tr0 td1_comodato">
                                        <p className="text-center my-4 ft0">
                                            {values?.regulatory_degree_occurrence === ''
                                                ? 'MEDIO'
                                                : values?.regulatory_degree_occurrence}
                                        </p>
                                    </td>
                                    <td className="tr0 td1_comodato">
                                        <p className="text-center  my-4 ft0">
                                            {values?.regulatory_impact_degree === ''
                                                ? 'MEDIO'
                                                : values?.regulatory_impact_degree}
                                        </p>
                                    </td>
                                    {values?.regulatory_responsable === 'municipio' && (
                                        <>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center my-4 ft0"></p>
                                            </td>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center my-4 ft0">X</p>
                                            </td>
                                        </>
                                    )}
                                    {(values?.regulatory_responsable === 'Contratista' ||
                                        values?.regulatory_responsable === '') && (
                                        <>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center my-4 ft0">X</p>
                                            </td>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center my-4 ft0"></p>
                                            </td>
                                        </>
                                    )}
                                    <td colSpan={6} className="tr0 td1_comodato">
                                        <p className="p46_comodato ft0">
                                            {values?.regulatory_mitigation_mechanism === ''
                                                ? 'Ejercer un control y vigilancia estrictos al contrato por parte del supervisor.'
                                                : values?.regulatory_mitigation_mechanism}
                                        </p>
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #000' }}>
                                    <td
                                        colSpan={2}
                                        className="tr0 td1_comodato"
                                        style={{ borderLeft: '1px solid #000' }}
                                    >
                                        <p className="p46_comodato ft0 my-3">
                                            OPERATIVOS: Incumplimiento del contratista de las obligaciones y
                                            prohibiciones contraídas en virtud del contrato.
                                        </p>
                                    </td>
                                    <td className="tr0 td1_comodato">
                                        <p className="text-center ft0">
                                            {values?.operative_degree_occurrence === ''
                                                ? 'MEDIO'
                                                : values?.operative_degree_occurrence}
                                        </p>
                                    </td>
                                    <td className="tr0 td1_comodato">
                                        <p className="text-center ft0">
                                            {values?.operative_impact_degree === ''
                                                ? 'MEDIO'
                                                : values?.operative_impact_degree}
                                        </p>
                                    </td>
                                    {values?.operative_responsable === 'municipio' && (
                                        <>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center ft0"></p>
                                            </td>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center ft0">X</p>
                                            </td>
                                        </>
                                    )}
                                    {(values?.operative_responsable === 'Contratista' ||
                                        values?.operative_responsable === '') && (
                                        <>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center ft0">X</p>
                                            </td>
                                            <td className="tr0 td1_comodato">
                                                <p className="text-center ft0"></p>
                                            </td>
                                        </>
                                    )}

                                    <td colSpan={6} className="tr0 td1_comodato">
                                        <p className="p46_comodato ft0">
                                            {values?.operative_mitigation_mechanism === ''
                                                ? 'Realizar visitas trimestrales al bien inmueble objeto del contrato y seguimiento mensual a los pagos de cánones, servicios públicos y administración cuando aplique, por parte del supervisor para realizar seguimiento y evaluación al desarrollo del objeto contractual'
                                                : values?.operative_mitigation_mechanism}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <p className="p57_comodato ft23_comodato">Página 7 de 12</p>
                            <p className="p58_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p59_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p60_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p61_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p62_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_8">
                        <div id="p8dimg1">
                            <img src={imgbs64} alt="" id="p8img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id8_1">
                            <div id="id8_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id8_1_2">
                                <p className="p2_comodato ft1_comodato">Formato</p>
                                <p className="p0_comodato ft2_comodato">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2_comodato">Inmueble</p>
                            </div>
                        </div>
                        <div id="id8_2">
                            {values?.resolution === 'si' ? (
                                <>
                                    <p className="p20_comodato ft3_comodato">
                                        <span className="ft3_comodato">13.</span>
                                        <span className="ft34_comodato">
                                            Análisis, revisión y evaluación de las obligaciones pecuniarias y económicas
                                            derivadas del contrato de comodato que permiten cuantificar y establecer el
                                            valor asegurable o base para el aseguramiento de las obligaciones.{' '}
                                            {/*(HAGA USO DE ESTE TÍTULO Y SU
                                            DESARROLLO EN CASO DE QUE EL CONTRATO A SUSCRIBIR SEA CON UNA
                                            ENTIDAD A LA CUAL LE ES APLICABLE LA RESOLUCIÓN SSS202050083439 Del
                                            29 de diciembre del 2020, DE LO CONTRARIO SUPRIMA)*/}
                                        </span>
                                    </p>
                                    <p className="p28_comodato ft10_comodato">
                                        <span className="ft22_comodato">En aplicación de la normativa vigente l</span>a
                                        cuantificación de las obligaciones que permiten determinar el valor del contrato
                                        o base para el aseguramiento de las obligaciones son las siguientes:
                                    </p>
                                    <table cellPadding="0" cellSpacing="0" className="t1_comodato">
                                        <tr>
                                            <td className="tr8_comodato td38_comodato">
                                                <p className="p64_comodato ft3">Obligaciones</p>
                                            </td>
                                            <td className="tr8_comodato td39_comodato">
                                                <p className="p65_comodato ft3">Cuantía</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr2_comodato td43_comodato">
                                                <p
                                                    className="p55_comodato ft0_comodato"
                                                    style={{ width: '280px', height: 'auto' }}
                                                >
                                                    Valor de las reparaciones locativas y deterioros a cargo del
                                                    comodatario. (Estimación de valor de las posibles reparaciones y
                                                    deterioros que pueda requerir el bien inmueble, según informe
                                                    realizado por la Secretaría o dependencia que tenga a cargo el
                                                    inmueble)
                                                </p>
                                            </td>
                                            <td className="tr2_comodato td44_comodato">
                                                <p className="p65_comodato ft3" style={{ marginBottom: '60px' }}>
                                                    ${values?.value_locative_repairs}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr5_comodato td43_comodato">
                                                <p
                                                    className="p55_comodato ft18_comodato"
                                                    style={{ width: '280px', height: 'auto' }}
                                                >
                                                    Valor de eventuales reparaciones por daños a terceros (estimación
                                                    según informe realizado por la Secretaría o dependencia que tenga a
                                                    cargo el inmueble)
                                                </p>
                                            </td>
                                            <td className="tr5_comodato td44_comodato">
                                                <p className="p65_comodato ft3" style={{ marginBottom: '30px' }}>
                                                    $ {values?.value_repairs_damages}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr5_comodato td43_comodato">
                                                <p
                                                    className="p55_comodato ft18_comodato"
                                                    style={{ width: '280px', height: 'auto' }}
                                                >
                                                    Valor de los servicios públicos domiciliarios (incluir energía,
                                                    acueducto, alcantarillado, saneamiento, gas, telefonía, internet,
                                                    televisión y demás servicios suscritos con las empresas prestadoras
                                                    de servicios públicos que se deban mantener al día por el uso del
                                                    inmueble según informe realizado por la Secretaría o dependencia que
                                                    tenga a cargo el inmueble)
                                                </p>
                                            </td>
                                            <td className="tr5_comodato td44_comodato">
                                                <p className="p65_comodato ft3" style={{ marginBottom: '60px' }}>
                                                    $ {values?.value_domiciliary_public}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr2_comodato td43_comodato">
                                                <p className="p55_comodato ft0_comodato">Valor gastos de vigilancia</p>
                                            </td>
                                            <td className="tr2_comodato td44_comodato">
                                                <p className="p65_comodato ft3">$ {values?.surveillance_value}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr5_comodato td43_comodato">
                                                <p className="p55_comodato ft18_comodato">Valor gastos de aseo</p>
                                            </td>
                                            <td className="tr5_comodato td44_comodato">
                                                <p className="p65_comodato ft3">$ {values?.cleaning_value}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr2_comodato td43_comodato">
                                                <p className="p55_comodato ft0_comodato">
                                                    Valor gastos de conservación y mantenimiento en general que le
                                                    correspondan al comodatario, el cual deberá actualizarse para cada
                                                    vigencia según IPC durante el termino de duración del contrato.
                                                </p>
                                            </td>
                                            <td className="tr2_comodato td44_comodato">
                                                <p className="p65_comodato ft3" style={{ marginBottom: '30px' }}>
                                                    $ {values?.conservation_value}
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </>
                            ) : (
                                <>
                                    <p className="p10_comodato ft21_comodato">
                                        <span className="ft3_comodato">13.</span>
                                        Análisis del valor fiscal del contrato para la determinación del valor o la base
                                        para el aseguramiento de las obligaciones.
                                    </p>
                                    <p className="p20_comodato ft0_comodato">
                                        Se tendrá el obtenido a partir del avalúo comercial vigente del inmueble sobre
                                        el cual la Secretaría que entrega el inmueble en comodato determinará el
                                        porcentaje del valor de la garantía. (El cual también puede ser el reportado en
                                        el módulo de activos fijos para el respectivo inmueble)
                                    </p>
                                    <p className="p35_comodato ft21_comodato">
                                        <span className="ft3">14.</span>
                                        <span className="ft39_comodato">
                                            El análisis que sustenta la exigencia de los mecanismos de cobertura que
                                            garantizan las obligaciones surgidas con ocasión de la contratación directa
                                            y del contrato a celebrar.
                                        </span>
                                    </p>
                                    <table cellPadding="0" cellSpacing="0" className="t2_comodato">
                                        <tr>
                                            <td
                                                className="tr13_comodato td48_comodato"
                                                style={{ borderRight: '1px solid #000' }}
                                            >
                                                <p className="p45_comodato ft0_comodato my-3">Tipificación</p>
                                            </td>
                                            <td className="tr13_comodato td1">
                                                <p className="p46_comodato ft0_comodato my-3">Estimación</p>
                                            </td>
                                            <td className="tr11_comodato td1">
                                                <p className="p46_comodato ft0_comodato">Mecanismo de Cobertura</p>
                                            </td>
                                            <td className="tr11_comodato td1">
                                                <p className="p55_comodato ft0_comodato my-3">Asignación</p>
                                            </td>
                                            <td className="tr13_comodato td1">
                                                <p className="p46_comodato ft0_comodato my-3">Vigencia</p>
                                            </td>
                                            <td className="tr13_comodato td54_comodato">
                                                <p className="p46_comodato ft0_comodato my-3">Aplica</p>
                                            </td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #000' }}>
                                            <td
                                                className="tr13_comodato td1_comodato"
                                                style={{ borderRight: '1px solid #000', borderLeft: '1px solid #000' }}
                                            >
                                                <p className="p45_comodato ft0_comodato">
                                                    {' '}
                                                    {/*style={{ marginBottom: '320px' }}*/}
                                                    Incumplimiento del contratista de las obligaciones y prohibiciones
                                                    contraídas en virtud del contrato
                                                </p>
                                            </td>
                                            <td className="tr13_comodato td1_comodato">
                                                <p className="p46_comodato ft0_comodato">
                                                    {/*(indicar el número)*/}
                                                    {values?.lockable_base} % del valor obtenido como base asegurable.
                                                    {/* (La Secretaría que entrega el inmueble debe determinar el % de
                                                    acuerdo a la base asegurable obtenida a partir de la sumatoria de la
                                                    cuantificación de las obligaciones contractuales y extracontractuale
                                                    vigente del inmueble, que cubra con suficiencia los riesgos que se
                                                    derivan del incumplimiento, el cual no podrá ser inferior al 10%) */}
                                                </p>
                                            </td>
                                            <td className="tr11_comodato td1_comodato">
                                                <p className="p46_comodato ft0_comodato">
                                                    {' '}
                                                    {/*style={{ marginBottom: '250px' }}*/}
                                                    Garantía de Cumplimiento: Ampara al Beneficiario el total y perfecto
                                                    cumplimiento del contrato pactado de acuerdo a sus términos,
                                                    condiciones y especificaciones contractuales
                                                </p>
                                            </td>
                                            <td className="tr11_comodato td1_comodato">
                                                <p className="p55_comodato ft0_comodato">
                                                    {' '}
                                                    {/*style={{ marginBottom: '435px' }}*/}
                                                    Contratista
                                                </p>
                                            </td>
                                            <td className="tr13_comodato td1_comodato">
                                                <p className="p46_comodato ft0_comodato">
                                                    {' '}
                                                    {/*style={{ marginBottom: '380px' }}*/}
                                                    Plazo del contrato y 4 meses más
                                                </p>
                                            </td>
                                            {/* <td className="tr11_comodato td49_comodato"><p className="p47_comodato ft43_comodato">&nbsp;</p></td> */}
                                            <td className="tr11_comodato td1_comodato">
                                                <p className="text-center p46_comodato ft0_comodato">SI</p>
                                            </td>{' '}
                                            {/*style={{ marginBottom: '430px' }}*/}
                                        </tr>
                                    </table>
                                </>
                            )}

                            <p className="p37_comodato ft23_comodato">Página 8 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                {values?.resolution === 'si' && (
                    <Card style={{ width: '850px', margin: '0 auto' }}>
                        <div id="page_9">
                            <div id="p9dimg1">
                                <img src={imgbs64} alt="" id="p9img1" />
                            </div>

                            <div className="dclr_comodato"></div>
                            <div id="id9_1">
                                <div id="id9_1_1">
                                    <p className="p0 ft0_comodato">
                                        Cód. <span>FO-ADMI-138</span>
                                    </p>
                                    <p className="p1 ft0_comodato">Versión. 4</p>
                                </div>
                                <div id="id9_1_2">
                                    <p className="p2 ft1">Formato</p>
                                    <p className="p0 ft2">
                                        <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                    </p>
                                    <p className="p3 ft2">Inmueble</p>
                                </div>
                            </div>
                            <div id="id9_2">
                                <>
                                    <table cellPadding="0" cellSpacing="0" className="t1_comodato">
                                        <tr style={{ borderTop: '1px solid #000' }}>
                                            <td className="tr2_comodato td43_comodato">
                                                <p className="p55_comodato ft0_comodato">
                                                    Valor cuotas de administración o expensas comunes ( si aplica)
                                                </p>
                                            </td>
                                            <td className="tr2_comodato td44_comodato">
                                                <p className="p65_comodato ft3" style={{ marginBottom: '10px' }}>
                                                    $ {values?.administration_value}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr5_comodato td43_comodato">
                                                <p className="p55_comodato ft18_comodato">
                                                    Valor mantenimiento de redes contra incendios y/o reposición de
                                                    extintores.
                                                </p>
                                            </td>
                                            <td className="tr5_comodato td44_comodato">
                                                <p className="p65_comodato ft3" style={{ marginBottom: '10px' }}>
                                                    $ {values?.network_value}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr5_comodato td43_comodato">
                                                <p className="p55_comodato ft18_comodato">
                                                    Valor de todos aquellos gastos y obligaciones económicas o no que se
                                                    requiera cuantificar, de manera tal que se garantice su cumplimiento
                                                    o para que, ante una eventual afectación de la póliza de
                                                    cumplimiento, el porcentaje del valor exigido tenga la suficiencia
                                                    necesaria para que su incumplimiento quede cubierto
                                                </p>
                                            </td>
                                            <td className="tr5_comodato td44_comodato">
                                                <p className="p65_comodato ft3" style={{ marginBottom: '60px' }}>
                                                    $ {values?.Value_economic_obligations}
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tr2_comodato td43_comodato">&nbsp;</td>
                                            <td className="tr2_comodato td44_comodato">
                                                <p className="p55_comodato ft3_comodato">
                                                    Valor total:
                                                    <span className="ft3" style={{ paddingLeft: '30px' }}>
                                                        ${' '}
                                                        {values?.Value_economic_obligations +
                                                            values?.network_value +
                                                            values?.administration_value +
                                                            values?.conservation_value +
                                                            values?.cleaning_value +
                                                            values?.surveillance_value +
                                                            values?.value_domiciliary_public +
                                                            values?.value_repairs_damages +
                                                            values?.value_locative_repairs}
                                                    </span>
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                    <p className="p35_comodato ft21_comodato">
                                        <span className="ft3">14.</span>
                                        <span className="ft39_comodato">
                                            El análisis que sustenta la exigencia de los mecanismos de cobertura que
                                            garantizan las obligaciones surgidas con ocasión de la contratación directa
                                            y del contrato a celebrar.
                                        </span>
                                    </p>
                                    <table cellPadding="0" cellSpacing="0" className="t2_comodato">
                                        <tr>
                                            <td
                                                className="tr13_comodato td48_comodato"
                                                style={{ borderRight: '1px solid #000' }}
                                            >
                                                <p className="p45_comodato ft0_comodato my-3">Tipificación</p>
                                            </td>
                                            <td className="tr13_comodato td1">
                                                <p className="p46_comodato ft0_comodato my-3">Estimación</p>
                                            </td>
                                            <td className="tr11_comodato td1">
                                                <p className="p46_comodato ft0_comodato">Mecanismo de Cobertura</p>
                                            </td>
                                            <td className="tr11_comodato td1">
                                                <p className="p55_comodato ft0_comodato my-3">Asignación</p>
                                            </td>
                                            <td className="tr13_comodato td1">
                                                <p className="p46_comodato ft0_comodato my-3">Vigencia</p>
                                            </td>
                                            <td className="tr13_comodato td54_comodato">
                                                <p className="p46_comodato ft0_comodato my-3">Aplica</p>
                                            </td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #000' }}>
                                            <td
                                                className="tr13_comodato td48_comodato"
                                                style={{ borderRight: '1px solid #000' }}
                                            >
                                                <p
                                                    className="p45_comodato ft0_comodato"
                                                    style={{ marginBottom: '320px' }}
                                                >
                                                    Incumplimiento del contratista de las obligaciones y prohibiciones
                                                    contraídas en virtud del contrato
                                                </p>
                                            </td>
                                            <td className="tr13_comodato td1">
                                                <p className="p46_comodato ft0_comodato">
                                                    (indicar el número) % del valor obtenido como base asegurable. (La
                                                    Secretaría que entrega el inmueble debe determinar el % de acuerdo a
                                                    la base asegurable obtenida a partir de la sumatoria de la
                                                    cuantificación de las obligaciones contractuales y extracontractuale
                                                    vigente del inmueble, que cubra con suficiencia los riesgos que se
                                                    derivan del incumplimiento, el cual no podrá ser inferior al 10%)
                                                </p>
                                            </td>
                                            <td className="tr11_comodato td52_comodato">
                                                <p
                                                    className="p46_comodato ft0_comodato"
                                                    style={{ marginBottom: '250px' }}
                                                >
                                                    Garantía de Cumplimiento: Ampara al Beneficiario el total y perfecto
                                                    cumplimiento del contrato pactado de acuerdo a sus términos,
                                                    condiciones y especificaciones contractuales
                                                </p>
                                            </td>
                                            <td className="tr11_comodato td1">
                                                <p
                                                    className="p55_comodato ft0_comodato"
                                                    style={{ marginBottom: '435px' }}
                                                >
                                                    Contratista
                                                </p>
                                            </td>
                                            <td className="tr13_comodato td1">
                                                <p
                                                    className="p46_comodato ft0_comodato"
                                                    style={{ marginBottom: '380px' }}
                                                >
                                                    Plazo del contrato y 4 meses más
                                                </p>
                                            </td>
                                            {/* <td className="tr11_comodato td49_comodato"><p className="p47_comodato ft43_comodato">&nbsp;</p></td> */}
                                            <td className="tr11_comodato td49_comodato">
                                                <p
                                                    className="text-center p46_comodato ft0_comodato"
                                                    style={{ marginBottom: '430px' }}
                                                >
                                                    SI
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </>

                                {/* <p className="p33_comodato ft3_comodato">
                                Si el contrato a realizar es con una entidad a la cual no le es
                                aplicable la Resolución <span className="ft7_comodato">SSS</span>
                            </p>
                            <p className="p70_comodato ft3_comodato">
                                202050083439 DE 2020 indique para el numeral 13 el siguiente título y
                                suprima lo anterior
                            </p> */}

                                <p className="p32_comodato ft23_comodato">Página 9 de 12</p>
                                <p className="p14_comodato ft24_comodato">
                                    _________________________________________________________________________________________________
                                </p>
                                <p className="p15_comodato ft25_comodato">
                                    Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                                </p>
                                <p className="p16_comodato ft25_comodato">
                                    Línea Única de Atención a la Ciudadanía 44 44 144
                                </p>
                                <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                                <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                            </div>
                        </div>
                    </Card>
                )}
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_10">
                        <div id="p10dimg1">
                            <img src={imgbs64} alt="" id="p10img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id10_1">
                            <div id="id10_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id10_1_2">
                                <p className="p2_comodato ft1_comodato">Formato</p>
                                <p className="p0_comodato ft2_comodato">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2_comodato">Inmueble</p>
                            </div>
                        </div>
                        <div id="id10_2">
                            <p className="p19_comodato ft22_comodato">
                                Así mismo, con el fin de minimizar el riesgo y garantizar el cumplimiento del contrato,
                                el Municipio de Medellín establecerá en el texto del contrato cláusulas como la penal
                                pecuniaria y de auditoría interna así:
                            </p>
                            <p className="p10_comodato ft0_comodato">
                                <span className="ft3">Cláusula Penal Pecuniaria</span>: Se estipula una cláusula penal
                                equivalente al diez por ciento (10%) del valor total del contrato, la cual se hará
                                efectiva de manera unilateral sin necesidad de declaratoria judicial, cuando a juicio
                                del ordenador del gasto, previo informe del supervisor, el contratista incurra en un
                                incumplimiento grave y severo del contrato. Sin la constitución y aprobación de la
                                garantía no podrá darse inicio al contrato, ni hacerse entrega del bien inmueble, y si
                                transcurrido el término de los diez (10) días a partir de la firma del contrato, el
                                COMODATARIO no aporta la garantía de cumplimiento exigida, se procederá a dejar
                                constancia por escrito y se iniciarán los procedimientos necesarios requeridos para que
                                se dé por terminado el contrato
                            </p>
                            <p className="p19_comodato ft0_comodato">
                                <span className="ft3">Auditoría Interna</span>: La Secretaría de Evaluación y Control,
                                mediante comunicación suscrita por el Secretario de Despacho o los Subsecretarios, podrá
                                requerir del CONTRATISTA toda la información relacionada con los aspectos técnicos,
                                administrativos, financieros y legales del contrato, pudiendo ser necesario,
                                inspeccionar los documentos, lugares o sedes donde se ejecute la prestación, según las
                                técnicas de auditorías aplicadas. Los informes de auditoría interna son de uso reservado
                                de la Secretaria de Evaluación y Control, el ordenador del gasto y señor Alcalde. La
                                reticencia del contratista a atender los requerimientos de la Auditoría interna serán
                                sujetos de Multa por mora en la entrega de información. Con fundamento en el Decreto
                                Municipal 2505 del 17 de Diciembre de 2013; y la Circular N° 002 del 10 de Enero de
                                2014, emitida por el Comité Técnico de Orientación y Seguimiento de la Contratación.
                            </p>
                            <p className="p74_comodato ft3">15. Componente ambiental.</p>
                            <p className="p75_comodato ft0_comodato">
                                Dentro del presente proceso contractual el contratista deberá cumplir con los riesgos
                                ambientales que le apliquen a la destinación del bien inmueble entregado en comodato{' '}
                                <span className="ft3_comodato">{values?.environmental_risk}.</span>
                                {/*(Digitar los riesgos ambientales que apliquen para el contrato)*/}
                            </p>
                            <p className="p76_comodato ft23_comodato">Página 10 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_11">
                        <div id="p11dimg1">
                            <img src={imgbs64} alt="" id="p11img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id11_1">
                            <div id="id11_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id11_1_2">
                                <p className="p2_comodato ft1">Formato</p>
                                <p className="p0_comodato ft2">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id11_2">
                            <p className="p5_comodato ft3">16. Abandono del Inmueble:</p>
                            <p className="p75_comodato ft0_comodato">
                                Al suscribirse el contrato, EL COMODATARIO, faculta expresamente a EL COMODANTE para
                                ingresar al inmueble y recuperar su tenencia con el solo requisito de la presencia de
                                dos testigos, en procura de evitar el deterioro o el desmantelamiento de tal inmueble y
                                en aras de poder disponer del mismo en cumplimiento de la debida administración de los
                                bienes inmuebles del Municipio, siempre que por cualquier circunstancia el mismo
                                permanezca abandonado o deshabitado por parte de EL COMODATARIO y que la exposición al
                                riesgo amenace la integridad física del bien o deshabitado por parte de EL COMODATARIO y
                                que la exposición al riesgo amenace la integridad física del bien o de sus vecinos.
                            </p>
                            <p className="p11_comodato ft3">17. Supervisión del contrato e inspección del inmueble:</p>
                            <p className="p75_comodato ft0_comodato">
                                De conformidad con lo dispuesto por el artículo 83 de la Ley 1474 de 2011, y la
                                normativa aplicable, y conforme a lo dispuesto en el Decreto Municipal 0903 de 2013,
                                artículo 3, y toda vez que no se requiere de conocimientos especializados, la vigilancia
                                técnica administrativa, financiera, contable y jurídica sobre el presente contrato será
                                ejercida por un Servidor Público designado por la Secretaría responsable del bien,
                                mediante oficio, el cual deberá velar por el cumplimiento de las obligaciones
                                contractuales e informar sobre su incumplimiento y de toda irregularidad que se presente
                                sobre hechos imputables al COMODATARIO y que pueda causar perjuicios al Municipio de
                                Medellín como propietario del inmueble. La designación hará parte integrante del
                                contrato.
                            </p>
                            <p className="p23_comodato ft0_comodato">
                                Igualmente, la Unidad de Bienes inmuebles, dentro de sus funciones podrá realizar
                                inspecciones y seguimientos tanto al inmueble como a la ejecución y supervisión del
                                contrato.
                            </p>
                            <p className="p5_comodato ft3">
                                18. Tratamiento de Datos<span className="ft0_comodato">:</span>
                            </p>
                            <p className="p77_comodato ft0_comodato">
                                El Municipio de Medellín, en concordancia con lo establecido en la Constitución Política
                                de Colombia
                            </p>
                            <p className="p34_comodato ft51_comodato">
                                <span className="ft50_comodato">(arts. 15 y 20), la Ley 1581 de </span>2012 "Por la cual
                                se dictan disposiciones generales para la protección de datos personales"{' '}
                                <span className="ft50_comodato">y el Decreto 1377 de 2013 </span>"Por el cual se
                                reglamenta parcialmente la Ley 1581
                            </p>
                            <p className="p34_comodato ft0_comodato">
                                <span className="ft52_comodato">de 2012" </span>y comprometido con el uso legal, el
                                tratamiento de datos de acuerdo con los fines establecidos y la seguridad y privacidad
                                de la información que recolecte, almacene, use, circule o suprima, y en cumplimiento del
                                mandato legal y el compromiso institucional en cuanto al tratamiento de la información,
                                adopta la Política para el tratamiento de datos personales” mediante el Decreto 1096 de
                                2018, los cuales serán tratados con la finalidad de recolectar, incorporar, reportar,
                                procesar y consultar en bancos de datos la información relacionada o derivada de este
                                contrato, así como su entrega a terceros para las gestiones de cobro a que hubiere
                                lugar. En este sentido, el Municipio de Medellín como entidad responsable del
                                tratamiento de los datos, informará a EL (LA) COMODATARIO (A) que la información
                                suministrada, con ocasión a la celebración del contrato de COMODATO suscrito con la
                                Secretaría de Suministros y Servicios del Municipio de Medellín, serán tratados de
                                manera segura y confidencial, y que le asisten los derechos de conocerlos, actualizarlos
                                y rectificarlos, acorde con la norma de protección de datos personales y la política
                                adoptadas. Los datos personales recolectados y almacenados por el Municipio de Medellín,
                                en la medida que
                            </p>
                            <p className="p78_comodato ft23_comodato">Página 11 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p18_comodato ft25_comodato">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_12">
                        <div id="p12dimg1">
                            <img src={imgbs64} alt="" id="p12img1" />
                        </div>

                        <div className="dclr_comodato"></div>
                        <div id="id12_1">
                            <div id="id12_1_1">
                                <p className="p0_comodato ft0_comodato">
                                    Cód. <span>FO-ADMI-138</span>
                                </p>
                                <p className="p1_comodato ft0_comodato">Versión. 4</p>
                            </div>
                            <div id="id12_1_2">
                                <p className="p2_comodato ft1">Formato</p>
                                <p className="p0_comodato ft2">
                                    <span>FO-ADMI</span> Estudio Previo para comodato de Bien
                                </p>
                                <p className="p3_comodato ft2">Inmueble</p>
                            </div>
                        </div>
                        <div id="id12_2">
                            <p className="p42_comodato ft0_comodato">
                                dependen de la relación directa o indirecta que tenga con EL (LA) COMODATARIO (A), en
                                este caso la suscripción del contrato de comodato, podrá ser necesario obtener, el
                                nombre, dirección, número telefónico, dirección de residencia, correo electrónico, entre
                                otros. Así mismo, el Municipio de Medellín podrá, entregar o dar acceso a terceros a los
                                datos personales que recopile y trate, caso en el cual dichos terceros actuarán como
                                encargados del tratamiento y estarán sujetos a los deberes y obligaciones que para tal
                                figura prevé la Ley 1581 de 2012 y sus decretos reglamentarios.
                            </p>
                            <p className="p79_comodato ft3">19. Autorización de tratamiento de Datos.</p>
                            <p className="p38_comodato ft0_comodato">
                                El COMODATARIO, manifiesta que ha sido informado(a) por el Municipio de Medellín, de lo
                                siguiente: 1) Que el Municipio de Medellín actuará como responsable del tratamiento de
                                datos personales de los cuales es titular 2) De la finalidad del tratamiento de datos 3)
                                De los derechos que como titular de los datos le asisten. 4) Que el Municipio de
                                Medellín se reserva el derecho a realizar modificaciones a la Política de Tratamiento de
                                Datos Personales en cualquier momento, lo cual será informado y publicado oportunamente
                                en la página Web o por correo electrónico. En señal de conformidad con lo anterior, EL
                                COMODATARIO, AUTORIZA a EL COMODANTE, para incorporar, reportar, procesar y consultar en
                                bancos de datos la información relacionada o derivada de este contrato, así como su
                                entrega a terceros para las gestiones de cobro a que hubiere lugar
                            </p>
                            <p className="p80_comodato ft0_comodato">
                                <span className="ft3">20.</span>
                                <span className="ft4">Lugar de Ejecución: </span>Municipio de Medellín–Antioquia
                            </p>
                            <p className="p44_comodato ft0_comodato">
                                <span className="ft3">21.</span>
                                <span className="ft4">Cláusula de Publicación. </span>De conformidad con el Decreto 1082
                                de 2015, y con el artículo 223 del Decreto-Ley 019 de 2012, el presente contrato una vez
                                perfeccionado, deberá ser publicado por parte del
                                <span className="ft3"> MUNICIPIO DE MEDELLÍN </span>en el Sistema Electrónico para la
                                contratación Público, SECOP y a través del Portal único de Contratación{' '}
                                <a href="http://www.colombiacompra.gov.co">
                                    <span className="ft14_comodato">www.colombiacompra.gov.co</span>
                                </a>
                                .
                            </p>
                            <p className="p79_comodato ft0_comodato">
                                Medellín, Antioquia, (deje este espacio para fechar los estudios previos por parte de la
                                Unidad
                            </p>
                            <p className="p81_comodato ft22_comodato" style={{ marginTop: '49px' }}>
                                {`${values?.name_Leader} ${values?.lastname_Leader}`}
                                {/*(Digite Nombres y apellidos)*/}
                            </p>
                            <p className="p81_comodato ft22_comodato">
                                {`${values?.post_leader}`}
                                {/*(Digite cargo)*/}
                            </p>
                            <p className="p81_comodato ft22_comodato">
                                {`${values?.dependence_leader}`}
                                {/*(Digite dependencia)*/}
                            </p>
                            <p className="p81_comodato ft22_comodato">
                                {`${values?.Secretary_leader}`}
                                {/*(Digite secretaria)*/}
                            </p>
                        </div>
                        <div id="id12_3">
                            <table cellPadding="0" cellSpacing="0" className="t3_comodato">
                                <tr>
                                    <td className="tr17 td83">
                                        <p className="p40 ft0">Elaboró:</p>
                                    </td>
                                    <td className="tr17 td84">
                                        <p className="p41 ft0">Revisó:</p>
                                    </td>
                                    <td className="tr17 td85">
                                        <p className="p41 ft0">Aprobó:</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr2 td86">
                                        <p className="ft0" style={{ width: '215px', paddingLeft: '7px' }}>
                                            {values?.name_elaborated}
                                            {/*(Nombre)*/}
                                        </p>
                                    </td>
                                    <td className="tr2 td87">
                                        <p className="ft0" style={{ width: '215px', paddingLeft: '7px' }}>
                                            {values?.name_revised}
                                            {/*(Nombre)*/}
                                        </p>
                                    </td>
                                    <td className="tr2 td88">
                                        <p className="ft0" style={{ width: '215px', paddingLeft: '7px' }}>
                                            {values?.name_approved}
                                            {/*(Nombre)*/}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr18 td86">
                                        <p className="p40 ft0">
                                            {values?.post_elaborated}
                                            {/*(Cargo)*/}
                                        </p>
                                    </td>
                                    <td className="tr18 td87">
                                        <p className="p41 ft0">
                                            {values?.post_revised}
                                            {/*(Cargo)*/}
                                        </p>
                                    </td>
                                    <td className="tr18 td88">
                                        <p className="p41 ft0">
                                            {values?.post_approved}
                                            {/*(Cargo)*/}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr9 td89">
                                        <p className="p42 ft30">&nbsp;</p>
                                    </td>
                                    <td className="tr9 td90">
                                        <p className="p42 ft30">&nbsp;</p>
                                    </td>
                                    <td className="tr9 td91">
                                        <p className="p42 ft30">&nbsp;</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div id="id12_4">
                            <p className="p17_comodato ft23_comodato">Página 12 de 12</p>
                            <p className="p14_comodato ft24_comodato">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p83_comodato ft25_comodato">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p84_comodato ft25_comodato">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17_comodato ft25_comodato">www.medellin.gov.co</p>
                            <p className="p85_comodato ft25_comodato">Medellín - Colombia</p>
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
    );
};

export default ComodatoDoc;

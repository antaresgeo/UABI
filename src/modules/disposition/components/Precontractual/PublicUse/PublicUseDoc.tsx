import '../../../../../utils/assets/styles/public_use.css';
import { Card } from '../../../../../utils/ui';
import imgbs64 from '../../../../../utils/assets/img/header.png';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import months from './../../../../../utils/ui/months';
import writtenNumber from 'written-number'
interface IParams {
    values: any;
    realEstate: any;
    dispositionType: any;
}

const PublicUseDoc = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const { values, realEstate, dispositionType } = location.state;
    console.log(values, realEstate, dispositionType);
    let date = [];
    let today_date = new Date().getMonth() + 1;
    date = values?.prediation_date.split("-");
    return (
        <div className="h-100 d-flex flex-column">
            <div className="container-fluid">
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_1">
                        <div id="p1dimg1">
                            <img src={imgbs64} alt="" id="p1img1" />
                        </div>

                        <div className="dclr"></div>
                        <div id="id1_1">
                            <div id="id1_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span>
                                </p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id1_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id1_2">
                            <p className="p4 ft3">
                                <span className="ft3">1.</span><span className="ft4">Identificación del Ingreso: </span><span className="ft0">N/A.</span>
                            </p>
                            <p className="p5 ft3">
                                <span className="ft3">2.</span><span className="ft4">Estimación del valor del contrato:</span>
                            </p>
                            <p className="p9 ft6 my-3">
                                Para efectos del contrato de Administración del Espacio Público se
                                tendrá como valor el avalúo catastral <span className="ft3">{`${writtenNumber(values?.cadastral_value, { lang: 'es' })} ($${values?.cadastral_value}).`}</span>
                                {/* (Inserte valor en letras),
                                (Inserte valor en números). */}
                            </p>
                            <p className="p9 ft6">
                                <span className="ft3">3.</span><span className="ft4">Solicitante: {values?.names_applicant} </span>
                                {/* (Digite el nombre de la persona
                                jurídica que solicita el inmueble en Administración del Espacio
                                Público)  */}
                                NIT: <span className="ft3">{values?.number_doc_applicant_id}</span>
                                {/* (Digite el número de identificación tributaria de la
                                persona jurídica que solicita el inmueble en Administración del
                                Espacio Público.) */}
                            </p>
                            <p className="p9 ft6" style={{ marginTop: '15px' }}>
                                <span className="ft3">4.</span><span className="ft4">La descripción de la necesidad que el MUNICIPIO DE MEDELLÍN
                                    pretende satisfacer con la contratación.</span>
                            </p>
                            <p className="p9 ft6">
                                La Constitución Política de Colombia, elevó al rango constitucional al
                                Espacio Público; dicha protección es compatible con los principios que
                                la rigen y como garantía a unos derechos sociales y colectivos, como
                                la recreación y el aprovechamiento del tiempo libre, el goce de un
                                medio ambiente sano y el derecho a reunirse y manifestarse
                                públicamente.
                            </p>
                            <p className="p10 ft6">
                                El artículo 5 de la Ley 9 de 1989, determinó que el espacio público,
                                alude al conjunto de inmuebles públicos y los elementos
                                arquitectónicos y naturales de los inmuebles privados, destinados por
                                su naturaleza, por su uso o afectación, a la satisfacción de
                                necesidades urbanas colectivas que trascienden, por tanto, los límites
                                de los intereses individuales de los habitantes.
                            </p>
                            <p className="p10 ft7">
                                El espacio público de la ciudad está compuesto por las áreas
                                requeridas para la circulación, tanto peatonal como vehicular, las
                                áreas para la recreación pública, activa o pasiva, para la seguridad y
                                tranquilidad ciudadana, las franjas de retiro de las edificaciones
                                sobre las vías, fuentes de agua, parques, plazas, zonas verdes, entre
                                otras. Así mismo, en su Artículo 7º, los Municipios tienen el
                                deber de:<span className="ft9">“Crear, de acuerdo con su
                                    organización legal, entidades responsables de administrar,
                                    desarrollar, mantener y apoyar financieramente el espacio público, el
                                    patrimonio inmobiliario y las áreas de cesión obligatoria para vías,
                                    zonas verdes y servicios comunales”,</span> así, como para contratar
                                la administración, mantenimiento y aprovechamiento económico de los
                                bienes anteriores.
                            </p>
                            <p className="p12 ft10">
                                Estipula el artículo 25 de la Resolución SSS 201850043580, que la
                                administración, conservación y aprovechamiento económico del espacio
                                público del Municipio de Medellín, estará a cargo de la Secretaría de
                                Gobierno Municipal, a través de la Subsecretaría de Defensoría del
                                Espacio Público, será esta Secretaría la dependencia encargada de
                                velar por la protección, conservación y restitución del espacio
                                público de la ciudad, así como de llevar a cabo, todos los procesos
                                contractuales encaminados a lograr un adecuado aprovechamiento
                                económico del mismo, de conformidad con las normas vigentes sobre la
                                materia., exceptuando las zonas verdes, las vías y demás inmuebles
                                constitutivos del espacio público de la ciudad, cedidos al Municipio
                                de Medellín en cumplimiento de las obligaciones urbanísticas, cuya
                                administración y conservación correrá por cuenta de la Secretaría
                            </p>
                            <p className="p13 ft11">Página 1 de 8</p>
                            <p className="p14 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15 ft13">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17 ft14">www.medellin.gov.co</p>
                            <p className="p18 ft13">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>

                    <div id="page_2">
                        <div id="p2dimg1">
                            <img
                                src={imgbs64} alt="" id="p2img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id2_1">
                            <div id="id2_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id2_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id2_2">
                            <p className="p4 ft0">
                                de Hacienda, actualmente Secretaría de Suministros y Servicios según
                                el Decreto 883 de 2015.
                            </p>
                            <p className="p19 ft6">
                                De conformidad con las competencias legales y constitucionales del
                                Estado, y particularmente de los Municipios, correspondientes a velar
                                por la protección de la integridad del Espacio Público y su
                                destinación al uso común con prevalencia sobre el interés particular.
                                Así como para el cumplimiento de los fines previstos en la
                                Constitución y en la Ley dichos espacios públicos requieren de una
                                adecuada, eficiente y eficaz administración.
                            </p>
                            <p className="p20 ft5">
                                Se diseñaron en el Plan de Ordenamiento Territorial, acuerdo 048 de
                                2014, unos Instrumentos para la Gestión del Espacio Público, enfocados
                                en el manejo y administración del espacio público a través de la
                                celebración de Contratos de Administración del Espacio Público.
                            </p>
                            <p className="p20 ft5">
                                Que dicho instrumento se define como: El acto jurídico mediante el
                                cual, el Municipio entrega a personas jurídicas, uno o varios
                                elementos constitutivos del espacio público, para su administración,
                                con la posibilidad de realizar mejoras, de conformidad con los usos
                                del suelo, siempre y cuando, cuenten con la respectiva licencia de
                                intervención, para efectos de garantizar la conservación, protección y
                                mejoramiento de los mismos y su entorno.
                            </p>
                            <p className="p21 ft15">
                                Dicho contrato no implica el cerramiento de áreas públicas, las cuales
                                no podrán ser privatizadas, salvo por razones de seguridad previamente
                                acreditadas.
                            </p>
                            <p className="p22 ft3">1.2 Forma de satisfacer la necesidad.</p>
                            <p className="p23 ft0">
                                El Municipio de Medellín administra los bienes inmuebles de su
                                propiedad dando prelación al interés general, fundamentándose en los
                                principios de igualdad, moralidad, eficacia, economía, celeridad,
                                imparcialidad y publicidad, los cuales rigen la función administrativa
                                de conformidad con lo establecido por el artículo 209 de la
                                Constitución Política de Colombia. En ese sentido, se ha convenido
                                suscribir contratos de administración de bienes de uso público con la
                                finalidad de permitir que las personas naturales o jurídicas, públicas
                                o privadas, se aprovechen de los espacios de uso público dándoles su
                                debida administración, uso y mantenimiento.
                            </p>
                            <p className="p24 ft0">
                                Previsto lo anterior y para satisfacer la necesidad planteada, se
                                solicita celebrar un contrato de Administración de Bien Inmueble de
                                Uso Público, el cual permita entregar en calidad de administración un
                                bien inmueble propiedad del Municipio de Medellín a la <span className="ft3">{values?.names_applicant}</span>,
                                {/* (digite nombre de la persona jurídica)*/}
                                persona Jurídica, de naturaleza civil, sin
                                ánimo de lucro, identificado con número de identificación tributaria
                                No. <span className="ft3">{values?.number_doc_applicant_id}</span>
                                {/* (Digite el NIT) */}
                            </p>
                            <p className="p24 ft5">
                                El Departamento Administrativo de Planeación, mediante oficio No. 3286
                                del 3 de octubre de 2014 emitió concepto positivo para la celebración
                                del contrato de administración de bienes inmuebles de uso público,
                                requerido.
                            </p>
                            <p className="p22 ft3">5. Descripción del objeto a contratar.</p>
                            <p className="p25 ft11">Página 2 de 8</p>
                            <p className="p14 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15 ft13">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17 ft14">www.medellin.gov.co</p>
                            <p className="p18 ft13">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_3">
                        <div id="p3dimg1">
                            <img
                                src={imgbs64} alt="" id="p3img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id3_1">
                            <div id="id3_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id3_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id3_2">
                            <p className="p9 ft0">
                                Suscribir contrato de administración de espacio público del bien
                                inmueble de propiedad del Municipio de Medellín identificado con
                                matrícula <span className="ft3">{realEstate?.registry_number}</span>, CBML
                                {/* (digite el número de la matrícula inmobiliaria del bien a entregar en Administración del Espacio Público)  */}
                                <span className="ft3">{` ${realEstate?.address?.cbmls?.sap?.cb}${realEstate?.address?.cbmls?.sap?.ml}`}</span>, activo fijo
                                {/* (Digite el número del CMBL del bien inmueble) */}
                                <span className="ft3">{` ${realEstate?.sap_id}`}</span>, ubicado en la dirección
                                {/* (Digite el número del código del activo fijo correspondiente al bien a entregar en Administración del Espacio Público), */}
                                <span className="ft3">{` ${realEstate?.address?.address}`}</span>, cuyo tipo es
                                {/* (digite la dirección del bien teniendo en cuenta el manual de nomenclatura), */}
                                <span className="ft3">{` ${values?.tipology?.tipology}`}</span>, escritura N°
                                {/* (Digite el tipo de bien, si es casa, local, bodega,etc.) */}
                                <span className="ft3">
                                    {realEstate?.acquisitions?.length > 0 &&
                                        realEstate?.acquisitions?.map(ad => {
                                            let i = ad.acquisition_date.split("-")
                                            return ` ${ad.act_value} del ${i[2]} de ${months(i[1])} de ${i[0]}, `
                                        })}
                                </span>
                                {/* (digite el número de la escritura) del (digite el
                                día de la escritura) de (Digite el mes de la escritura) de (Digite el
                                número del año de la escritura),  */}
                                el espacio a entregar en Administración del Espacio Público consta de
                                <span className="ft3">{` ${realEstate?.total_area} `}</span>m<span className="ft16">2</span>,
                                {/* (Digite el número de metros cuadrados que comprende el bien a entregar)  */}

                                cuyas áreas y linderos se describen de la siguiente manera, según
                                informe de prediación con radicado: <span className="ft3">{values?.prediation_number}</span> del
                                {/* (Digite el número del radicado delinforme de prediación)  */}
                                <span className="ft3_comodato">{` ${date[2]} de ${months(date[1])} de ${date[0]}.`}</span>
                                {/* (digite el día del informe) de (Digite el mes del informe) de (Digite el número del año del informe). */}
                            </p>
                            <p className="p26 ft0">
                                <span className="ft3">3.</span><span className="ft4">Destinación</span>: debe
                                destinarse el inmueble para: <span className="ft3">{` ${values?.destination_realEstate}`}</span>
                                {/* (Describir la destinación del inmueble) */}
                            </p>
                            <p className="p5 ft3">
                                <span className="ft3">4.</span><span className="ft4">Especificaciones</span
                                ><span className="ft0">:</span>
                            </p>
                            <p className="p5 ft3" style={{ marginBottom: '15px' }}>4.1 Obligaciones del administrador.</p>
                            <p className="p9 ft0">
                                El <span className="ft17">ADMINISTRADOR</span>, se obliga: 1) A emplear el
                                mayor cuidado en la conservación de los bienes, objeto de este
                                contrato, siendo responsable de cualquier deterioro que no provenga de
                                la naturaleza o uso legítimo de la cosa. 2) A impedir que el inmueble
                                sea ocupado para asuntos diferentes a los mencionados en la cláusula
                                tercera. 3) A realizar las reparaciones locativas y a reparar los
                                deterioros que provengan de su actividad o de las de sus dependientes,
                                salvo el deterioro que provenga por el paso del tiempo y el uso normal
                                del inmueble. 4) A impedir que personas ajenas al presente contrato se
                                instalen en forma temporal o definitiva en el inmueble mencionado. 5)
                                A restituir el inmueble dentro de los treinta (30) días siguientes a
                                la solicitud de entrega formulada por la Administración Municipal. 6)
                                A no variar la destinación y uso propuesto para el bien, determinado
                                en la cláusula tercera de este contrato. 7) Responder por los daños
                                que los bienes entregados causen a terceros. 8) A permitir el ingreso
                                del personal adscrito al Municipio de Medellín, cuando EL
                                <span className="ft17">ADMINISTRADOR </span>lo considere necesario, para
                                inspecciones físicas de rutina del bien o efectos de la ejecución de
                                supervisión del presente contrato de Administración del Espacio
                                Público. 9) Deberá pagar y aportar los paz y salvos de Servicios
                                Públicos y cuotas de administración cuando aplique en el cual conste
                                el pago de todos los servicios públicos contratados y trabajos
                                realizados por cuenta del <span className="ft17">ADMINISTRADOR</span>, y
                                ante los requerimientos de quién tenga a su cargo la supervisión. 10)
                                Deberá proveer la respectiva vigilancia del inmueble. 11) Estar
                                registrado previamente en el SECOP II, con el fin de publicar los
                                documentos contractuales. 12) Presentar un informe trimestral al
                                supervisor del contrato sobre el uso, estado, destino, conservación
                                del bien y las cuentas de servicios canceladas, así como de la
                                facturas de pago de las cuotas de administración, cuando a ello
                                hubiere lugar. 13) Rea lizar adaptaciones y mejoras con la aprobación
                                por escrito de la Secretaria de Suministros y Servicios, las cuales
                                serán por su cuenta y riesgo. 14) Asumir los gastos generados por el
                                uso normal, el mantenimiento, la conservación y vigilancia del bien
                                inmueble, así como los correspondientes a la legalización del contrato
                                como garantías, impuestos y publicación cuando a ello haya lugar. 15)
                                Presentar un informe trimestral al supervisor del contrato, sobre el
                                uso, estado, destino, conservación del bien y las cuentas de servicios
                                canceladas y cuotas de administración
                            </p>
                            <p className="p28 ft11">Página 3 de 8</p>
                            <p className="p14 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p17 ft14">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p17 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17 ft14">www.medellin.gov.co</p>
                            <p className="p17 ft14">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_4">
                        <div id="p4dimg1">
                            <img
                                src={imgbs64} alt="" id="p4img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id4_1">
                            <div id="id4_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id4_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id4_2">
                            <p className="p9 ft0">
                                cuando hubiera lugar. 16) Restituir el inmueble dado den
                                Administración del Espacio Público dentro de los treinta (30) días
                                hábiles siguientes a la solicitud del mismo. 17) Participar en la
                                liquidación del contrato y suscribir las actas correspondientes.
                                {values?.obligations?.length > 0 &&
                                    <span className="ft3">
                                        {values?.obligations.map(o =>
                                            ` ${o.id}) ${o.obligation}. `
                                        )}

                                    </span>

                                }
                                {/* (18)Si requiere más obligaciones de las anteriores digítelas en este
                                espacio siguiendo la numeración, de lo contrario suprima todo este
                                texto y numeral) */}
                                Las demás obligaciones propias de los contratos de
                                Administración del Espacio Públicos, de acuerdo con las disposiciones
                                legales, en especial, de las contenidas en la normatividad vigente.
                            </p>
                            <p className="p29 ft3">4.2 Prohibiciones del administrador.</p>
                            <p className="p30 ft21">
                                <span className="ft19">1)</span
                                ><span className="ft20"
                                >Realizar en el inmueble objeto del contrato de administración de
                                    espacio público, cualquier actividad de la cual se genere
                                    aprovechamiento económico para este de manera privada y por fuera de
                                    la destinación del inmueble, y las demás prohibiciones contempladas
                                    en la normatividad vigente. El incumplimiento de esta cláusula, dará
                                    lugar a la terminación del contrato de administración de espacio
                                    público. 2) Queda expresamente prohibido en los inmuebles entregados
                                    en Administración del Espacio Público no deben almacenar, consumir o
                                    expender bebidas alcohólicas, sustancias psicoactivas o
                                    alucinógenas. 3) Utilización para eventos políticos, cultos
                                    religiosos, parqueaderos entre otros que no estén estipulados
                                    expresamente dentro del objeto y alcance del presente contrato de
                                    Administración del Espacio Público. 4) Cobrar cualquier suma de
                                    dinero o contraprestación a la comunidad por el ingreso o acceso al
                                    inmueble dado en Administración del Espacio Público, salvo en
                                    aquellos casos previamente autorizados por la Secretaría de
                                    Suministros y Servicios. 5) Arrendar o ceder el inmueble, o parte de
                                    él, para desarrollar cualquier tipo de actividad, sin obtener
                                    autorización previa y escrita de la Secretaría de Suministros y
                                    Servicios. 6) Ubicar casetas, tiendas o publicidad sin la debida
                                    autorización de la Subsecretaría, Defensoría del Espacio Público y
                                    de la Secretaría de Suministros y Servicios. 7) Destinar el inmueble
                                    entregado en Administración del Espacio Público a actividades
                                    diferentes para la que fue concedido. 8) Instalar negocios
                                    comunitarios. 9) Realizar bailes públicos entendidos como aquellos
                                    anunciados abiertamente, con cobro de ingreso, venta de licor y cuyo
                                    único objetivo es el recaudo de fondo para los organizadores. 10)
                                    Extender más allá del horario permitido por las autoridades
                                    competentes las reuniones sociales (primeras comuniones,
                                    matrimonios, cumpleaños) y actividades de integración, educación o
                                    financiación. 11) Desarrollar actividades que superen los índices
                                    permitidos de ruido, para zonas residenciales o comunitarias o que
                                    generen conflictos de convivencia con la vecindad, en acuerdo a lo
                                    preceptuado en el Código Nacional de Policía vigente, sin perjuicio
                                    de los manuales o normas de convivencia que regulen el tema nivel
                                    Municipal o Departamental.
                                    <span className="ft3">
                                        {values?.prohibitions?.length > 0 &&
                                            values?.prohibitions.map(p =>
                                                ` ${p.id}) ${p.prohibition}.`
                                            )
                                        }
                                    </span>
                                    {/* 12) Si requiere más prohibiciones de las
                                    anteriores digítelas en este espacio siguiendo la numeración, de lo
                                    contrario suprima todo este texto y numeral). */}
                                </span>
                            </p>
                            <p className="p31 ft0">
                                Todas aquellas que en ejecución del contrato resulten contrarias a los
                                fines del Administración del Espacio Público, la convivencia ciudadana
                                y los intereses del Municipio de Medellín.
                            </p>
                            <p className="p24 ft0">
                                <span className="ft3">Plazo del contrato: </span>El plazo del contrato de
                                Administración del Espacio Público a celebrar será de <span className="ft3">({values?.contract_period}) {writtenNumber(values?.contract_period, { lang: 'es' })}</span> meses,
                                {/* (Digite en letras y números la duración del contrato),  */}
                                contados a partir de la entrega del inmueble, mediante acta suscrita por las partes y previa
                                aprobación de la póliza de cumplimiento.
                            </p>
                            <p className="p24 ft0">
                                No obstante el plazo establecido y en caso de requerir la
                                Administración Municipal el inmueble, para desarrollar las funciones
                                que le son propias, podrá dar por terminado el contrato de
                                Administración del Espacio Público de forma unilateral.
                            </p>
                            <p className="p32 ft11">Página 4 de 8</p>
                            <p className="p14 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15 ft13">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17 ft14">www.medellin.gov.co</p>
                            <p className="p18 ft13">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_5">
                        <div id="p5dimg1">
                            <img
                                src={imgbs64} id="p5img1" alt=""
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id5_1">
                            <div id="id5_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id5_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id5_2">
                            <p className="p4 ft3">
                                5. Fundamentos jurídicos que soportan la modalidad de contratación.
                            </p>
                            <p className="p10 ft0">
                                La Ley 80 de 1993, 1150 de 2007 y sus decretos reglamentarios en
                                especial el Decreto 1082 de 2015.
                            </p>
                            <p className="p24 ft5">
                                También son fundamentos jurídicos del presente proceso contractual las
                                disposiciones contenidas en la Ley 9ª de 1989, Ley 388 de 1997, Código
                                Civil, Acuerdo Municipal 048 de 2014 (POT).
                            </p>
                            <p className="p26 ft3">
                                6. El análisis técnico y económico que soporta el valor estimado del
                                contrato.
                            </p>
                            <p className="p24 ft0">
                                Si bien el contrato de Administración del Espacio Público no afecta el
                                presupuesto Municipal, para efectos fiscales y de constitución de las
                                garantías a que haya lugar, se le asigna al mismo
                                <span className="ft3"> {writtenNumber(values?.contract_value, { lang: 'es' })} {`($${values?.contract_value})`}</span> pesos,
                                {/* (digite el valor del contrato en letras) (digite el valor del contrato en números)  */}
                                que corresponde a la debida administración y mantenimiento del inmueble
                                entregado a título de Administración de Bien Inmueble de Uso Público.
                                Dicha suma es el resultado del valor que deberá costear EL
                                ADMINISTRADOR, de conformidad con la cotización de mantenimiento anual
                                presentada por la misma.
                            </p>
                            <p className="p5 ft3">
                                7. La justificación de los factores de selección que permitan
                                identificar el mejor solicitante.
                            </p>
                            <p className="p24 ft5">
                                Los factores de selección del ADMINISTRADOR cuando exista más de un
                                solicitante se regirá por los definidos en la normativa vigente, para
                                lo cual se dejará un documento anexo de la evaluación de los
                                requisitos.
                            </p>
                            <p className="p33 ft3">
                                <span className="ft3">8.</span
                                ><span className="ft22"
                                >El soporte que permita la estimación, tipificación y asignación de
                                    los riesgos previsibles que puedan afectar el equilibrio económico
                                    del contrato:</span
                                >
                            </p>
                            <p className="p21 ft5">
                                De acuerdo al artículo 4 de la Ley 1150 de 2007 y el Decreto Nacional
                                1082 de 2015, dispone que las entidades públicas deben incluir en los
                                estudios previos la estimación, tipificación y asignación de riesgos.
                            </p>
                            <p className="p21 ft5">
                                De conformidad con lo anterior se procede a hacer el análisis del
                                riesgo que corresponde en los siguientes términos:
                            </p>
                            <p className="p29 ft0">8.1 Riesgo regulatorio:</p>
                            <p className="p9 ft5">
                                Comprende cambios de la carga impositiva tributaria de las reformas
                                legales futuras y la adopción de decisiones administrativas:
                            </p>
                            <p className="p34 ft5">
                                Financieras del ADMINISTRADOR Perdida de liquidez del ADMINISTRADOR
                            </p>
                            <p className="p26 ft0">8.2 Riesgos operativos:</p>
                            <p className="p11 ft5">
                                Son intrínsecos al contrato y comprende todas las formas de
                                incumplimiento de las obligaciones que pueden generarse producto del
                                acuerdo de voluntades:
                            </p>
                            <p className="p11 ft5">
                                Incumplimiento de las obligaciones surgidas del contrato.
                            </p>
                            <p className="p11 ft5">
                                Pago de salarios, prestaciones sociales e indemnizaciones.
                            </p>
                            <p className="p37 ft11">Página 5 de 8</p>
                            <p className="p14 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15 ft13">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17 ft14">www.medellin.gov.co</p>
                            <p className="p18 ft13">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_6">
                        <div id="p6dimg1">
                            <img
                                src={imgbs64} alt="" id="p6img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id6_1">
                            <div id="id6_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id6_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id6_2">
                            <p className="p0 ft3">9. Estimación del riesgo:</p>
                            <p className="p38 ft0">
                                La estimación del riesgo consiste en medir la probabilidad de
                                ocurrencia de un evento y su impacto en el caso que se materialice. La
                                medición efectiva y cuantitativa del riesgo se asocia con la
                                posibilidad de pérdida futura. Para el caso de la contratación estatal
                                no se establece una metodología para la cuantificación del riesgo, lo
                                cual da a la entidad cierto grado de discrecionalidad.
                            </p>
                            <p className="p39 ft0">
                                Frente a la necesidad que se pretende satisfacer, se establecerá el
                                grado de probabilidad de ocurrencia y de impacto en relación con el
                                equilibrio económico del contrato, utilizando una escala ordinal en la
                                que se hace referencia a criterios de medición como se presenta a
                                continuación: MUY ALTO, ALTO, MEDIO, BAJO, MUY BAJO
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t0">
                                <tr>
                                    <td className="tr0 td0">
                                        <p className="p40 ft0">Riesgo Previsible</p>
                                    </td>
                                    <td className="tr0 td1"><p className="p41 ft0">Grado de Ocurrencia</p></td>
                                    <td className="tr0 td2"><p className="p41 ft0">Grado de Impacto</p></td>
                                    <td className="tr0 td1"><p className="p41 ft0">Contratista</p></td>
                                    <td className="tr0 td3"><p className="p41 ft0">Municipio</p></td>
                                    <td className="tr0 td4">
                                        <p className="p41 ft0" style={{ whiteSpace: 'nowrap' }}>Mecanismo de Mitigación</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr0 td0">
                                        <p className="p40 ft0">REGULATORIO</p>
                                    </td>
                                    <td className="tr0 td1"><p className="p41 ft0">{values?.regulatory_degree_occurrence === "" ? "MEDIO" : values?.regulatory_degree_occurrence}</p></td>
                                    <td className="tr0 td2"><p className="p41 ft0">{values?.regulatory_impact_degree === "" ? "MEDIO" : values?.regulatory_impact_degree}</p></td>
                                    {values?.regulatory_responsable === "municipio" &&
                                        <>
                                            <td className="tr0 td1"><p className="p41 ft0 text-center"></p></td>
                                            <td className="tr0 td3"><p className="p41 ft0 text-center">X</p></td>
                                        </>
                                    }
                                    {(values?.regulatory_responsable === "Contratista" || values?.regulatory_responsable === "") &&
                                        <>
                                            <td className="tr0 td1"><p className="p41 ft0 text-center">X</p></td>
                                            <td className="tr0 td3"><p className="p41 ft0 text-center"></p></td>
                                        </>
                                    }
                                    <td className="tr0 td4">
                                        <p className="p41 ft0">
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
                                    <td className="tr0 td0">
                                        <p className="p40 ft0" style={{ width: '150px', height: 'auto' }}>
                                            OPERATIVOS: Incumplimiento del contratista de las obligaciones y prohibiciones contraídas en virtud del contrato.
                                        </p>
                                    </td>
                                    <td className="tr0 td1"><p className="p41 ft0">{values?.operative_degree_occurrence === "" ? "MEDIO" : values?.operative_degree_occurrence}</p></td>
                                    <td className="tr0 td2"><p className="p41 ft0">{values?.operative_impact_degree === "" ? "MEDIO" : values?.operative_impact_degree}</p></td>
                                    {values?.operative_responsable === "municipio" &&
                                        <>
                                            <td className="tr0 td1"><p className="p41 ft0 text-center"></p></td>
                                            <td className="tr0 td3"><p className="p41 ft0 text-center">X</p></td>
                                        </>
                                    }
                                    {(values?.operative_responsable === "Contratista" || values?.operative_responsable === "") &&
                                        <>
                                            <td className="tr0 td1"><p className="p41 ft0 text-center">X</p></td>
                                            <td className="tr0 td3"><p className="p41 ft0 text-center"></p></td>
                                        </>
                                    }
                                    <td className="tr0 td4">
                                        <p className="p41 ft0">
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
                            <p className="p48 ft3">
                                <span className="ft3">10.</span
                                ><span className="ft22"
                                >El análisis que sustenta la exigencia de los mecanismos de
                                    cobertura que garantizan las obligaciones surgidas con ocasión de la
                                    contratación directa y del contrato a celebrar.</span
                                >
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t1">
                                <tr>
                                    <td className="tr0 td42" style={{borderRight: "1px solid #000"}}>
                                        <p className="p40 ft0">Tipificación</p>
                                    </td>
                                    <td className="tr0 td44">
                                        <p className="p41 ft0">Estimación</p>
                                    </td>
                                    <td className="tr0 td46" style={{borderRight: '1px solid #000'}}>
                                        <p className="p42 ft0" style={{width: '135px', height: 'auto'}}>Mecanismo de Cobertura</p>
                                    </td>
                                    <td className="tr0 td48"><p className="p41 ft0">Asignación</p></td>
                                    <td className="tr0 td49"><p className="p41 ft0">Vigencia</p></td>
                                    <td className="tr0 td50"><p className="p41 ft0">Aplica</p></td>
                                </tr>
                                <tr style={{borderBottom: "1px solid #000"}}>
                                    <td className="tr0 td42" style={{borderRight: "1px solid #000"}}>
                                        <p className="p40 ft0" style={{width: '135px', height: 'auto'}}>
                                            Incumplimiento del contratista de las obligaciones y prohibiciones  contraídas en virtud del contrato
                                        </p>
                                    </td>
                                    <td className="tr0 td44">
                                        <p className="p41 ft0">
                                            {values?.lockable_base}% del valor del contrato
                                        </p>
                                    </td>
                                    <td className="tr0 td46" style={{borderRight: '1px solid #000'}}>
                                        <p className="p42 ft0" >
                                            Garantía de Cumplimiento: Ampara al Beneficiario el total y perfecto cumplimiento del contrato pactado de acuerdo a sus términos, condiciones y especificaciones contractuales
                                        </p>
                                    </td>
                                    <td className="tr0 td48"><p className="p41 ft0">Contratista</p></td>
                                    <td className="tr0 td49"><p className="p41 ft0">Plazo del contrato y 4 meses más</p></td>
                                    <td className="tr0 td50"><p className="p41 ft0 text-center">SI</p></td>
                                </tr>
                                <tr></tr>
                            </table>
                            <p className="p37 ft11">Página 6 de 8</p>
                            <p className="p52 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p53 ft13">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p54 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p55 ft14">www.medellin.gov.co</p>
                            <p className="p56 ft13">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_7">
                        <div id="p7dimg1">
                            <img
                                src={imgbs64} alt="" id="p7img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id7_1">
                            <div id="id7_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id7_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id7_2">
                            <p className="p7 ft0">
                                Así mismo, con el fin de minimizar el riesgo y garantizar el
                                cumplimiento del contrato, el Municipio de Medellín establecerá en el
                                texto del contrato cláusulas como la penal pecuniaria y de auditoria
                                interna así:
                            </p>
                            <p className="p24 ft0">
                                <span className="ft3">Cláusula Penal Pecuniaria</span>: Se estipula una
                                clausula penal equivalente al diez por ciento (10%) del valor total
                                del contrato, la cual se hará efectiva de manera unilateral sin
                                necesidad de declaratoria judicial, cuando a juicio del ordenador del
                                gasto, previo informe del supervisor, el contratista incurra en un
                                incumplimiento grave y severo del contrato. Sin la constitución y
                                aprobación de la garantía no podrá darse inicio al contrato, ni
                                hacerse entrega del bien inmueble, y si transcurrido el término de los
                                diez (10) días a partir de la firma del contrato, el ADMINISTRADOR no
                                aporta la garantía de cumplimiento exigida, se procederá a dejar
                                constancia por escrito y se iniciarán los procedimientos necesarios
                                requeridos para que se dé por terminado el contrato.
                            </p>
                            <p className="p26 ft3">11. Auditoria Interna<span className="ft0">:</span></p>
                            <p className="p10 ft0">
                                La Secretaría de Evaluación y Control, mediante comunicación suscrita
                                por el Secretario de Despacho o los Subsecretarios, podrá requerir del
                                CONTRATISTA toda la información relacionada con los aspectos técnicos,
                                administrativos, financieros y legales del contrato, pudiendo ser
                                necesario, inspeccionar los documentos, lugares o sedes donde se
                                ejecute la prestación, según las técnicas de auditorías aplicadas. Los
                                informes de auditoría interna son de uso reservado de la Secretaria de
                                Evaluación y Control, el ordenador del gasto y señor Alcalde. La
                                reticencia del contratista a atender los requerimientos de la
                                Auditoria interna serán sujetos de Multa por mora en la entrega de
                                información. Con fundamento en el Decreto Municipal 2505 del 17 de
                                Diciembre de 2013; y la Circular N° 002 del 10 de Enero de 2014,
                                emitida por el Comité Técnico de Orientación y Seguimiento de la
                                Contratación.
                            </p>
                            <p className="p29 ft3">12. Componente ambiental.</p>
                            <p className="p24 ft5">
                                Dentro del presente proceso contractual el contratista deberá cumplir
                                con los riesgos ambientales que le apliquen a la destinación del bien
                                inmueble entregado en Administración del Espacio Público
                                <span className="ft3">{` ${values?.environmental_risk}. `}</span>
                                {/* (Digitar los riesgos ambientales que apliquen para el contrato). */}
                            </p>
                            <p className="p22 ft3">
                                13. Supervisión del contrato e inspección del inmueble:
                            </p>
                            <p className="p24 ft0">
                                De conformidad con lo dispuesto por el artículo 83 de la Ley 1474 de
                                2011, y la normativa aplicable, y conforme a lo dispuesto en el
                                Decreto Municipal 0903 de 2013, artículo 3, y toda vez que no se
                                requiere de conocimientos especializados, la vigilancia técnica
                                administrativa, financiera, contable y jurídica sobre el presente
                                contrato será ejercida por un Servidor Público designado por la
                                Secretaría de Suministros y Servicios, mediante oficio, el cual deberá
                                velar por el cumplimiento de las obligaciones contractuales e informar
                                sobre su incumplimiento y de toda irregularidad que se presente sobre
                                hechos imputables al ADMINISTRADOR y que pueda causar perjuicios al
                                Municipio
                            </p>
                            <p className="p58 ft11">Página 7 de 8</p>
                            <p className="p14 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15 ft13">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17 ft14">www.medellin.gov.co</p>
                            <p className="p18 ft13">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto', marginTop: '10px' }}>
                    <div id="page_8">
                        <div id="p8dimg1">
                            <img
                                src="data:image/png;base64,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5RWt9fz584no29/+9snFlm9fdtll8+fPP6HOWusZM2bcdttt27ZtI6JNmzZ1dXXdfPPNBw8ePOEAy29L5duF9jQAAIwNZvZ9/4knnpg9e/aRI0def/11EXEch4hc181mszfccMOZZ565cuXKvr6+TCbzzW9+c968eRdffPHLL78cDofj8bjrusaYu+++e8GCBffcc08sFnNdd+fOnXV1dY2NjevXr1+yZMmCBQt++MMfFotFOt7qff7555cvX3755Zd3d3fH43Gt9UMPPXTeeeetWLFi06ZN5f5zy7IikUhTU9N7773X3d2dz+eD8o0xDzzwwAUXXHDllVfu3LlTKfXqq6+uWLHi6quvHhgYSCQSRLR27doLL7zwsssu27p1q1IqFouFQiFmdl3Xtu0dO3ZMmTIlHo9/73vfe+CBB6644orrrruuq6vrlL3fyGkAABgbzPz222+/99579957b2tr6+OPP17u/rUs66677vrNb36zbNmyxx577M4771y/fv3jjz9+1VVXdXd333rrrcViMYi9devW3XPPPa2trZ2dncPDw47jbN68+eGHH+7r6/vWt77V0tKyZMmSW2+9devWrUFHend399VXX717925m3rZtWzQa3bBhw/XXX3/GGWdorb/61a8eOXKkHNW2bS9atGjr1q07d+6MxWJtbW1KqXXr1t1yyy0dHR179uy59tpru7q6Vq5c+fbbb2cymS1btsRisRdeeOG6665rbm4eHBwMfg3Ytl0ed7dte+PGjffdd19vb+9PfvKT7373u5FI5He/+92aNWtOOYyNeWQAADAGgjx+8sknI5FIa2vrzJkzn3nmmWKxGGRkKpVav379Nddcc//991977bWpVKq1tfWGG25IpVKFQsFxHM/zglR7+umn29vbg+7us846S2vtum7Q2r755puPHDnS2dlJRJlMJojAd9555/Dhw88999zy5csvvfTSfD6/efPmaDQ6ZcoUY8yGDRveeuut5uZmOj66PG/evNdee+3FF1+cPn36rl27iOiZZ56pr69vb2/PZDK//e1v//jHP+7fv/+pp5666KKLli9f7nnehg0bXNedO3duQ0PDSy+99Oabb9q2TccHGYkoFApVVVUppVzXXbly5b333tvX17d371461UA12tMAADCqgoncSqlCofD0008PDAx86Utf2rBhw549e7Zv3+44TtAfLiLhcJiIIpFIdXX1H/7wh5/+9KdVVVVz584tLw9CRCISCoWC3YI+cyKybbunp+fHP/7xrl27Ojo6HMepmA1OSqlkMklEsVgsCGPHcSzLam9vv+uuu1paWoLdRMT3/ZkzZw4PD69bt27RokXlEizL6uvra21tvf3222tqapi5pqaGiOLxeFB513UHBweTyeQdd9zR0tLi+z59dN5ZUH65JiISZPnJkNMAADCqgshk5tdee23r1q2rV69+9NFHH3nkkVgs9utf/7pUKolIQ0PDOeec8+ijj953332LFi168MEHt27dGvRC79q1K5PJaK3T6XShULj44ou3bdu2Zs2aW265pb+/X0SKxWIulzt48GBnZ+eSJUtKxwWv3t7enkgk7rzzzgcffPD3v/99Pp+fP3/+8PBwXV2dMSbouA721Frn8/nm5mZjzPvvv3/mmWemUqlSqbRw4cKhoaGOjo5gdvrZZ5+dSCS+//3v/+pXv3ryySeLxeLixYuz2ezs2bMbGhp27NhRV1eXzWaLxaLW2vM8rXWxWMxmsyKSyWTy+TwRjYyM5HK5U75d6PcGAIAxICJDQ0NXXXXVjTfeGLQpd+/enUql4vH4l7/85fr6+tWrVxcKhYcffviiiy5atWpVV1dXd3f3qlWrvvCFL2SzWWPMihUrWlpaVqxYsXnz5rVr186ZMyd44uzZs4eGhubPn79y5cpf/vKXc+fOXbFiRXkx7alTp/7sZz9bvXr1unXrvva1rzU1Na1YseLOO++8//77Lcv6+te/HnSAK6Wqq6svuOCCYIf6+vpZs2add955bW1t11xzzfbt27/zne84jnPTTTd1dHT86Ec/WrVq1aFDh5YtWzZnzpxLLrnkG9/4xqpVq5RS1157bX19/eLFi2fMmBGPx5csWVJdXT1z5szzzz8/Go0uXbp02rRpRLRgwYLKd6byjcJ6ZJ91+PQBYDRVrkdW7osOVuOq7BYOvpeYuVQqlXuzK/cMorS8vVAoBJ3k8tE1Q/L5fCQSKT+3/Lpa68ozs4kol8vZtu26bnkUmY5fwyrY7YRXzGQy0WjUsqxge6FQYOagBz6oRiaTcRwnEolIxZU2ysuAVt4NOsBPqGH57UJOf9bh0weA0VSZ0x+3Ymj5e6kc3lrr8opjUrEmdjnhTlgrO1iJs3L/ykf5OKpYzqwcxuUcLY+CV+b0yfsHxZ6Q6CeXTx/N6cr8RU7DJ8GnDwCjiT/mOhzyMWtnlpOsMtRPOSGrnMeVj/41X3H88dfDOGUNg9b8KV/lhNr+zSpzGvPIAABg7H1COlY+esozjIPW88nl8CcuEl6ZzZVF/cUaln8WVDaaK4v6hEL+BshpAAD4/0ZlYJc3ntB+Pbk/+ZOLoop28F9ZgfJLlH8HVPben7LR/7dDnycAAMC4dfy8rF/8YkyrAQAAACe5/nr0ewMAAIxfyGkAAIDxCzkNAAAwfiGnAQAAxi/kNAAAwPiFnAYAABi/kNMAAADjF3IaAABg/EJOAwAAjF/IaQAAgPELOQ0AADB+IacBAADGL+Q0AADA+IWcBgAAGL+Q0wAAAOMXchoAAGAcE5GxrgIAAACcgoj8P+nbcQp6Pir6AAAAAElFTkSuQmCC"
                                alt="" id="p8img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id8_1">
                            <div id="id8_1_1">
                                <p className="p0 ft0">Cód. <span>FO-ADMI-194</span></p>
                                <p className="p1 ft0">Versión. 1</p>
                            </div>
                            <div id="id8_1_2">
                                <p className="p2 ft1">Formato</p>
                                <p className="p0 ft2">
                                    <span>FO-ADMI</span> Estudio Previo para Administración del
                                </p>
                                <p className="p3 ft2">Espacio Público de Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id8_2">
                            <p className="p4 ft0">
                                de Medellín como propietario del inmueble. La designación hará parte
                                integrante del contrato.
                            </p>
                            <p className="p59 ft0">
                                Igualmente la Unidad de Bienes inmuebles, dentro de sus funciones
                                podrá realizar inspecciones y seguimientos tanto al inmueble como a la
                                ejecución y supervisión del contrato.
                            </p>
                            <p className="p29 ft0">
                                <span className="ft3">14.</span
                                ><span className="ft4">Lugar de Ejecución: </span>Municipio de Medellín–Antioquia
                            </p>
                            <p className="p24 ft0">
                                <span className="ft3">15.</span
                                ><span className="ft4">Cláusula de Publicación. </span>De conformidad con
                                el Decreto 1082 de 2015, y con el artículo 223 del
                                Decreto-Ley 019 de 2012, el presente contrato una vez
                                perfeccionado, deberá ser publicado por parte del
                                <span className="ft3"> MUNICIPIO DE MEDELLÍN </span>en el Sistema
                                Electrónico para la contratación Público, SECOP y a través del Portal
                                único de Contratación <span className="ft32">www.colombiacompra.gov.co</span>
                            </p>
                            <p className="p60 ft0">
                                <span className="ft3">16.</span
                                ><span className="ft40">Línea del Plan de Desarrollo: </span>Dimensión: 1
                                Creemos en la confianza ciudadana; Reto: 1.3
                            </p>
                            <p className="p61 ft5">
                                Medellín bien administrado; Programa: 1.3.4 Gestión efectiva. Proyecto
                                1.3.4.5 Gestión y conservación de activos.
                            </p>
                            <p className="p62 ft0">
                                Medellín, Antioquia, {`${new Date().getDate()} de ${months(today_date.toString())} de ${new Date().getFullYear()}`}
                                {/* (Digite el día) de (Digite el mes) de (digite el año) */}
                            </p>
                            <p className="p63 ft0">{`${values?.name_Leader} ${values?.lastname_Leader}`}{/*(Digite Nombres y apellidos)*/}</p>
                            <p className="p64 ft0">{`${values?.post_leader}`} {/*(Digite cargo)*/}</p>
                            <p className="p64 ft5">{`${values?.dependence_leader}`}{/*(Digite dependencia)*/}</p>
                            <p className="p64 ft5">{`${values?.Secretary_leader}`}{/*(Digite secretaria)*/}</p>
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
                            <p className="p65 ft11">Página 8 de 8</p>
                            <p className="p14 ft12">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p15 ft13">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165
                            </p>
                            <p className="p16 ft14">
                                Línea Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p17 ft14">www.medellin.gov.co</p>
                            <p className="p18 ft13">Medellín - Colombia</p>
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
                        // console.log('@values uso Publico',values)
                        history.push({ pathname: "/disposition/create/", state: { dispositionType, realEstate, values } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    )
}

export default PublicUseDoc

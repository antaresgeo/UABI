import React from 'react'
import { Card } from '../../../../../utils/ui'
import imgbs64 from '../../../../../utils/assets/img/header.png';
import '../../../../../utils/assets/styles/contract_lease.css';
import { useLocation, useHistory } from 'react-router-dom';
import writtenNumber from 'written-number';
import moment from 'moment';

interface IParams {
    values_contract: any;
    realEstate: any;
    dispositionType: any;
}
const LeaseDocContract = () => {
    const location = useLocation<IParams>();
    const history = useHistory();
    const { values_contract, realEstate, dispositionType } = location.state;
    console.log(values_contract, realEstate, dispositionType);
    const arrendamiento = {
        //info general
        boundaries: "descripcion de linderos",
        business_type: "Tipo de negocio",
        contract_period: 12,
        destination_realEstate: "destinacion del bien inmueble",
        environmental_risk: "riesgos",
        lockable_base: 10,
        registration_date: "2021-12-15",
        //Arrendamiento
        IVA: 260300,
        administration_value: 150000,
        coverage: "cumplimiento",
        fines: "Multas",
        appraisal_date: "2021-12-01",
        appraisal_number: 6565556,
        prediation_date: "2021-12-22",
        prediation_number: "635465",
        public_service: "Aforo",
        subtotal: 1630300,
        total: 1793300,
        value_public_service: 13000,
        vigilance_value: 14000,
        //solicitante
        //si es persona natural se agrega:
        detailsApplicant: {
            id_type: '1',
            id_number: 10085632,
            names: { firstName: 'Bryan', lastName: 'Manuel' },
            surnames: { firstSurname: 'Cendales', lastSurname: 'Rodriguez' },
            email: 'Bryan@correo.com',
        },

        applicant: {
            type_society: 'Persona Juridica',
            id_type: '',
            id_number: 3658950,
            company_name: 'nombre de la razon social',
            email: 'empresa@correo.com',
        },
        location_applicant: { address: 'CL 5266 #58 - 45', id: '127' },
        //representante legal
        representative: { type_society: 'Persona Natural' },
        detailsRepresentative: {
            id_type: '1',
            id_number: 4582103699,
            names: { firstName: 'Juan', lastName: 'Pablo' },
            surnames: { firstSurname: 'Hernandez', lastSurname: 'Gil' },
            email: 'juanHer@gmail.com',
        },
        //lider acargo
        leader: {
            type_society: 'Persona Natural',
            post: 'Líder de Programa',
            dependence: 'Unidad Administración de Bienes Inmuebles',
            secretary: 'Subsecretaría de Gestión de Bienes'
        },
        detailsLeader: {
            id_type: '1',
            id_number: 10085632,
            names: { firstName: 'Bryan', lastName: 'Manuel' },
            surnames: { firstSurname: 'Cendales', lastSurname: 'Rodriguez' },
            email: 'Bryan@correo.com',
        },
        location_leader: { address: 'CR 1 #6 - 8', id: '129' },

        //analisis de riesgos
        operational_risk: {
            degree_occurrence: '',
            impact_degree: '',
            responsable: '',
            mitigation_mechanism: ''
        },
        regulatory_risk: {
            degree_occurrence: '',
            impact_degree: '',
            responsable: '',
            mitigation_mechanism: ''
        },

        //info tabla final
        approved: { name: 'aprobo nombre', post: 'aprobo cargo' },
        elaborated: { name: 'elaboro nombre', post: 'elaboro cargo' },
        revised: { name: 'reviso nombre', post: 'reviso cargo' },

        idRealEstate: 31
    }
    return (
        <div className="h-100 d-flex flex-column">
            <div className="comodato container-fluid">
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_1_contractLease">
                        <div id="p1dimg1">
                            <img
                                src={imgbs64} alt="" id="p1img1"
                            />
                        </div>

                        <div className="dclr_contractLease"></div>
                        <div id="id1_1">
                            <div id="id1_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id1_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id1_2">
                            <p className="p4_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No.</span>
                                {values_contract?.contract_number}
                            </p>
                            <p className="p5_contractLease ft7_contractLease">
                                CONTRATO DE ARRENDAMIENTO N°{values_contract?.contract_number}
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t0">
                                <tr>
                                    <td className="tr1_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">EL ARRENDADOR:</p></td>
                                    <td className="tr1_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            MUNICIPIO DE MEDELLÍN; Secretaría de Suministros y Servicios. NIT. 890.905.211-1
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">EL(LA)ARRENDATARIO(A):</p>
                                    </td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px' }}>
                                            {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                                `${arrendamiento.applicant.company_name}`
                                                :
                                                `${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname}`

                                            }
                                            {/* Digite el nombre de la institución, organización o persona natural */}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">IDENTIFICACIÓN DEL(LA) ARRENDATARIO(A):</p>
                                    </td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">
                                            {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                                `NIT : ${arrendamiento?.applicant.id_number}`
                                                :
                                                `C.C : ${arrendamiento?.detailsApplicant.id_number}`

                                            }
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">REPRESENTANTE LEGAL</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft10_contractLease" style={{ width: '365px' }}>
                                            {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                                `${arrendamiento?.detailsRepresentative.names.firstName} ${arrendamiento?.detailsRepresentative.names.lastName} ${arrendamiento?.detailsRepresentative.surnames.firstSurname} ${arrendamiento?.detailsRepresentative.surnames.lastSurname}`
                                                :
                                                `${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname}`
                                            }
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease" style={{ width: '200px' }}>C.C. REPRESENTANTE LEGAL:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px' }}>
                                            {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                                `${arrendamiento?.detailsRepresentative.id_number} `
                                                :
                                                `${arrendamiento?.detailsApplicant.id_number} `
                                            }
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">MATRÍCULA INMOBILIARIA:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">
                                            {realEstate?.registry_number}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">C B M L:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">
                                            {realEstate?.address?.cbmls?.uabi}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">ESCRITURA /FECHA/NOTARIA</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px' }}>
                                            Digite Nro. escritura/fecha escritura/notaría donde se hizo, sepárelos con /
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">AVALÚO DEL INMUEBLE:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {`($${arrendamiento.appraisal_number}) ${writtenNumber(arrendamiento.appraisal_number, { lang: 'es' })}`} Pesos M. L.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">ÁREA A ENTREGAR:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">
                                            Digite el área del inmueble que va a entregar en arrendamiento m<span className="ft11_contractLease">2</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr0_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">DIRECCIÓN DEL INMUEBLE:</p></td>
                                    <td className="tr0_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">
                                            {realEstate?.address?.address}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr6_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">TIPO DE INMUEBLE:</p></td>
                                    <td className="tr6_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease">
                                            {arrendamiento.business_type}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">OBJETO DEL CONTRATO:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {values_contract?.object_contract}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">DURACIÓN DEL CONTRATO:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft10_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {`(${arrendamiento.contract_period}) ${writtenNumber(arrendamiento.contract_period, { lang: 'es' })} meses`}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">CANON MENSUAL:</p></td>
                                    <td className="tr3_contractLease td1_contractLease"><p className="p6_contractLease ft9_contractLease">
                                        {`($${realEstate?.canyon_value}) ${writtenNumber(realEstate?.canyon_value, { lang: 'es' })}`}
                                    </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr2_contractLease td0_contractLease"><p className="p6_contractLease ft8_contractLease">&nbsp;</p></td>
                                    <td className="tr2_contractLease td1_contractLease"><p className="p8_contractLease ft6_contractLease">Página 1 de 18</p></td>
                                </tr>
                            </table>
                            <p className="p0_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p9_contractLease ft6_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                                <a href="http://www.medellin.gov.co"
                                ><span className="ft13_contractLease">www.medellin.gov.co</span></a
                                >
                                Medellín - Colombia
                            </p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_2_contractLease">
                        <div id="p2dimg1">
                            <img
                                src={imgbs64} alt="" id="p2img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id2_1">
                            <div id="id2_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id2_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id2_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <table cellPadding="0" cellSpacing="0" className="t1">
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">IVA 19%:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {`($${arrendamiento.IVA})  ${writtenNumber(arrendamiento?.IVA, { lang: 'es' })}`}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">AFORO O RECOBRO SERVICIOS PÚBLICOS:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {arrendamiento.value_public_service}
                                            {/* {arrendamiento?.public_service === "Recobro" && ` ($${arrendamiento?.recovery_value}) ${writtenNumber(arrendamiento?.recovery_value, { lang: 'es' })} este valor sera variable`}
                                            {arrendamiento?.public_service === "Aforo" && ` ($${arrendamiento?.value_aforo}) ${writtenNumber(arrendamiento?.value_aforo, { lang: 'es' })}`}
                                            {arrendamiento?.public_service === "Contador individualizado" && ` ($${arrendamiento?.counter_value}) ${writtenNumber(arrendamiento?.counter_value, { lang: 'es' })}`}
                                            {arrendamiento?.public_service === "Prepago" && "prepago"} */}
                                            {/* (Digite en letras y números el valor del aforo de
                                            servicios públicos mensual o la cifra que se determinará
                                            mensualmente con respecto al consumo y aclare que
                                            será variable cuando sea por recobro.) */}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease" style={{ width: '200px' }}>ADMINISTRACIÓN U OTROS:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {` ($${arrendamiento?.administration_value}) ${writtenNumber(arrendamiento?.administration_value, { lang: 'es' })}`}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease">VALOR TOTAL MENSUAL:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {` ($${arrendamiento?.subtotal}) ${writtenNumber(arrendamiento?.subtotal, { lang: 'es' })}`}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="tr3_contractLease td0_contractLease"><p className="p6_contractLease ft9_contractLease" style={{ width: '200px' }}>VALOR TOTAL DEL CONTRATO:</p></td>
                                    <td className="tr3_contractLease td1_contractLease">
                                        <p className="p6_contractLease ft9_contractLease" style={{ width: '365px', textAlign: 'justify' }}>
                                            {` ($${arrendamiento?.total}) ${writtenNumber(arrendamiento?.total, { lang: 'es' })}`}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <p className="p11_contractLease ft15_contractLease">
                                Entre los suscritos a saber,
                                <span className='ft3_comodato'>{` ${arrendamiento.detailsLeader.names.firstName} `}</span>
                                con cédula de ciudadanía No. <span className='ft3_comodato'>{`${arrendamiento.detailsLeader.id_number} `}</span>
                                Digite el número de documento, en su calidad de
                                Secretario(a) de Suministros y Servicios del Municipio de Medellín,
                                nombrado mediante el Decreto Municipal N° 001 del 1 de enero de 2016 y
                                acta de posesión N° 11 del 03/01/2020, en uso de sus facultades
                                legales y las otorgadas por los Decretos Municipales Nros. 883 de
                                2015, 1039 de 2016 y manual de contratación expedidos por el Señor
                                Alcalde de Medellín, obrando en nombre y representación del
                                <span className="ft14_contractLease"> MUNICIPIO DE MEDELLÍN</span>, facultado por la Ley
                                136 de 1994, la Ley 80 de 1993, sus decretos reglamentarios y de
                                acuerdo a las disposiciones pertinentes del Código Civil, quien en
                                adelante se denominará EL ARRENDADOR, de una parte y de la otra,
                                <span className="ft14_contractLease">
                                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                        ` ${arrendamiento?.detailsRepresentative.names.firstName} ${arrendamiento?.detailsRepresentative.names.lastName} ${arrendamiento?.detailsRepresentative.surnames.firstSurname} ${arrendamiento?.detailsRepresentative.surnames.lastSurname} `

                                        :
                                        ` ${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname} `

                                    }
                                </span>
                                identificado con la cédula de ciudadanía No
                                <span className="ft14_contractLease">
                                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                        ` ${arrendamiento?.detailsRepresentative.id_number} `
                                        :
                                        ` ${arrendamiento?.detailsApplicant.id_number} `
                                    }
                                </span>
                                quien actúa en
                                <span className="ft14_contractLease">
                                    {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                        ` nombre y representación  legal de ${arrendamiento.applicant.company_name} con NIT ${arrendamiento.applicant.id_number}, `
                                        :
                                        ` nombre propio, `
                                    }
                                </span>
                                quien en lo sucesivo se denominará
                                EL(LA) ARRENDATARIO(A), se ha decidido celebrar el presente CONTRATO
                                DE
                            </p>
                            <p className="p12_contractLease ft6_contractLease">Página 2 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_3_contractLease">
                        <div id="p3dimg1">
                            <img
                                src={imgbs64} alt="" id="p3img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id3_1">
                            <div id="id3_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id3_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id3_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p17_contractLease ft15_contractLease">
                                ARRENDAMIENTO, previo el agotamiento de los requisitos establecidos en
                                las normas vigentes, de carácter municipal y nacional, contrato que se
                                regirá por la ley aplicable y las cláusulas que a continuación se
                                enuncian: <span className="ft14_contractLease">PRIMERA: OBJETO. </span>EL ARRENDADOR
                                entrega a título de arrendamiento y EL (LA) ARRENDATARIO(A) recibe al
                                mismo título, un inmueble de propiedad del Municipio de Medellín
                                ubicado en {realEstate?.address?.address}. Bien Inmueble identificado con
                                Matrícula {realEstate?.registry_number}, CBML {realEstate?.address?.cbmls?.uabi},  Código de activo fijo
                                {` ${realEstate?.sap_id}`} y Título de adquisición.
                                {/*  TODO: falta agregar titulo de adquisicion */} <span className="ft14_contractLease">SEGUNDA: ÁREAS Y LINDEROS. </span>El
                                área a entregar en arrendamiento corresponde a digite el área m<span
                                    className="ft17_contractLease"
                                >2 </span
                                >y los linderos son los siguientes: {arrendamiento.boundaries} con radicado del informe de Prediación: {arrendamiento.prediation_number} y fecha {arrendamiento.prediation_date}. <span className="ft14_contractLease">TERCERA: DESTINACIÓN. </span>EL (LA)
                                ARRENDATARIO(A) podrá hacer uso del inmueble objeto del presente
                                contrato, única y exclusivamente para {arrendamiento?.destination_realEstate}
                                <span className="ft14_contractLease"> CUARTA: PLAZO</span>.
                                {` (${arrendamiento?.contract_period}) ${writtenNumber(arrendamiento?.contract_period, { lang: 'es' })} meses `}
                                a partir de la fecha de suscripción del acta de
                                inicio: {moment(values_contract.start_date).format('DD/MM/YYYY')}, previa aprobación de la póliza de arrendamiento o póliza de
                                cumplimiento por la Unidad Administración de Bienes Inmuebles de la
                                Secretaría de Suministros y Servicios (si aplica).
                                <span className="ft14_contractLease">PARÁGRAFO PRIMERO: </span>No obstante, el plazo de
                                vigencia o duración señalado anteriormente, las partes de mutuo
                                acuerdo y en cualquier momento, podrán dar por terminado este contrato
                                sin que haya lugar al pago de suma alguna por concepto de
                                indemnización. Dado el aviso de terminación y aceptado el mismo por la
                                otra parte, se indicará la fecha en que se entregará o recibirá real y
                                materialmente el inmueble, la cual no podrá ser superior a treinta
                                (30) días calendario. <span className="ft14_contractLease">QUINTA: </span
                                ><span className="ft18_contractLease">RENOVACIÓN DEL</span>
                            </p>
                            <p className="p18_contractLease ft19_contractLease">
                                <span className="ft18_contractLease">CONTRATO. </span>Antes del vencimiento del plazo,
                                el contrato podrá renovarse mediante comunicado en el formato
                                establecido para el efecto y con una antelación de noventa (90) días
                                calendario anteriores a su terminación previo acuerdo entre las
                                partes, para lo cual se surtirán todos los trámites pertinentes de una
                                nueva relación contractual, de acuerdo con el procedimiento y política
                                vigente aplicable previo cumplimiento de trámites y documentos que
                                indicará el supervisor del contrato.
                                <span className="ft18_contractLease">PARÁGRAFO: </span>En caso de que se acepte por las
                                partes la renovación del contrato, el canon aplicable será igual al
                                último pagado más el incremento del porcentaje que para el efecto haya
                                establecido la Subsecretaría de Catastro y se haya adoptado por la
                                Secretaría de Suministros y
                            </p>
                            <p className="p19_contractLease ft6_contractLease">Página 3 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_4_contractLease">
                        <div id="p4dimg1">
                            <img
                                src={imgbs64} alt="" id="p4img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id4_1">
                            <div id="id4_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id4_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id4_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p20_contractLease ft21_contractLease">
                                Servicios mediante circular para la vigencia que corresponda.
                                <span className="ft20_contractLease">PRÓRROGA DEL</span>
                            </p>
                            <p className="p21_contractLease ft23_contractLease">
                                <span className="ft22_contractLease">CONTRATO. </span>El presente contrato no podrá
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
                                <span className="ft22_contractLease">PARÁGRAFO</span>: Podrá pactarse un plazo superior,
                                siempre que el mismo sea justificado, previo análisis de conveniencia
                                y oportunidad sobre los criterios técnicos, administrativos,
                                financieros y jurídicos del
                            </p>
                            <p className="p22_contractLease ft25_contractLease">
                                contrato. <span className="ft14_contractLease">SEXTA</span
                                ><span className="ft18_contractLease">: PRÓRROGA DEL CONTRATO. </span
                                ><span className="ft19_contractLease"
                                >El presente contrato no podrá prorrogarse de manera automática. No
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
                                    suscribirlo y dará validez con su firma.</span
                                ><span className="ft24_contractLease"> :</span>
                            </p>
                            <p className="p23_contractLease ft26_contractLease">
                                <span className="ft24_contractLease">RENOVACIÓN DEL CONTRATO. </span>A la terminación
                                del contrato, sólo por vencimiento del plazo, el contrato podrá
                                renovarse previo acuerdo entre las partes, para lo cual se surtirán
                                todos los trámites pertinentes de una nueva relación contractual, de
                                acuerdo con el procedimiento y política vigente aplicable.
                                <span className="ft24_contractLease">PARÁGRAFO: </span>En caso de que se acepte por las
                                partes la renovación del contrato, el canon aplicable será igual al
                                último pagado más el incremento del porcentaje que para el efecto haya
                                establecido la Subsecretaría de Catastro y se haya adoptado por la
                                Secretaría de Suministros y Servicios mediante circular para la vigencia que corresponda.
                            </p>
                            <p className="p25_contractLease ft6_contractLease">Página 4 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_5_contractLease">
                        <div id="p5dimg1">
                            <img
                                src={imgbs64} alt="" id="p5img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id5_1">
                            <div id="id5_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id5_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id5_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p26_contractLease ft29_contractLease">
                                <span className="ft7_contractLease">SÉPTIMA: CANON. </span
                                >El canon de arrendamiento como valor de este contrato corresponderá a la suma de
                                {` ($${realEstate?.canyon_value}) ${writtenNumber(realEstate?.canyon_value, { lang: 'es' })}`} mensuales, más el IVA del 19% correspondiente a la suma de
                                {` ($${arrendamiento?.IVA}) ${writtenNumber(arrendamiento?.IVA, { lang: 'es' })} `}
                                mensuales, para un total mensual de {`($${realEstate?.canyon_value + arrendamiento?.IVA}) ${writtenNumber((realEstate?.canyon_value + arrendamiento?.IVA), { lang: 'es' })}. `}
                                <span className="ft27_contractLease">PARÁGRAFO PRIMERO: </span>Cuando el plazo del
                                contrato sea superior a un (01) año o cuando al vencimiento del plazo
                                se realice la renovación con el nuevo contrato, el canon establecido
                                en esta cláusula se aumentará anualmente en el porcentaje que para el
                                efecto indique la Subsecretaría de Catastro y sea adoptado por la
                                Secretaría de Suministros y Servicios mediante circular, lo anterior,
                                conforme lo señala la Circular No. 003 del 10 de agosto de 2016 que
                                establece las <span className="ft28_contractLease">“Políticas de Operación del</span>
                            </p>
                            <p className="p27_contractLease ft30_contractLease">
                                Ingreso no Tributario arrendamientos e intereses de mora rentas
                                contractuales”,
                            </p>
                            <p className="p28_contractLease ft15_contractLease">
                                emanada de la Subsecretaria de Ingresos de la Secretaría de Hacienda.
                                <span className="ft14_contractLease">PARÁGRAFO SEGUNDO</span>: Para los inmuebles
                                destinados a vivienda, se aplicará el incremento establecido por la
                                ley 820 de 2003 o la normatividad que la modifique o derogue. De no
                                aceptarse por parte de EL (LA) ARRENDATARIO(A) el incremento anual
                                establecido, se podrá dar por terminado el presente contrato sin que
                                ello genere indemnización alguna para EL ARRENDADOR ni para EL (LA)
                                ARRENDATARIO(A). En este caso y después del aviso de terminación, se
                                indicará la fecha en que se entregará o recibirá real y materialmente
                                el inmueble, la cual no podrá ser superior a treinta (30) días
                                calendario. <span className="ft14_contractLease">OCTAVA: FORMA DE PAGO. </span>EL (LA)
                                ARRENDATARIO(A) estará en la obligación de pagar el canon de
                                arrendamiento y demás valores (cuando apliquen), que deberán ser
                                cancelados por EL (LA) ARRENDATARIO(A) hasta completar el tiempo de
                                ejecución del contrato, previa elaboración de la factura por parte del
                                arrendador. <span className="ft14_contractLease">PARÁGRAFO PRIMERO: </span>EL (LA)
                                ARRENDATARIO(A), estará en la obligación de pagar el canon de
                                arrendamiento y demás valores cuando apliquen. El Municipio de
                                Medellín mediante la Circular No. 202160000060 de 2021 proferida por la Secretaria de
                                Hacienda, dio cumplimiento a lo requerido por la DIAN en la resolución
                                No. 000042 de 05 de mayo de 2020, modificada con la resolución 000094
                                del 30 de septiembre de 2020, en lo relacionado a la facturación electrónica, motivo por el cual
                                las facturas de cobro que le serán expedidas a EL (LA)
                                ARRENDATARIO(A) le serán remitidas al correo electrónico {`${arrendamiento?.detailsApplicant.email}, `}
                                para lo cual deberá realizar el pago mediante la presentación de la factura
                                ante la entidad bancaria respectiva o a través de los canales
                                virtuales destinados para tal fin.
                            </p>
                            <p className="p31_contractLease ft6_contractLease">Página 5 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_6_contractLease">
                        <div id="p6dimg1">
                            <img
                                src={imgbs64} alt="" id="p6img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id6_1">
                            <div id="id6_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id6_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id6_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p26_contractLease ft15_contractLease">
                                El pago se deberá realizar dentro
                                de las fechas señalas en la respectiva factura, fechas de vencimiento
                                que son inmodificables; de presentarse pluralidad de arrendatarios la
                                factura electrónica será expedida a nombre de
                                {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                    ` ${arrendamiento.detailsRepresentative.names.firstName} ${arrendamiento.detailsRepresentative.names.lastName} ${arrendamiento.detailsRepresentative.surnames.firstSurname} ${arrendamiento.detailsRepresentative.surnames.lastSurname} `
                                    :
                                    ` ${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname} `

                                }
                                sin perjuicio de que todos sean deudores solidarios.
                                <span className="ft14_contractLease">PARÁGRAFO SEGUNDO: </span>En todo caso, EL (LA)
                                ARRENDATARIO(A) pagará a EL ARRENDADOR cualquier fracción de mes que
                                quede a deber por terminación anticipada.
                                <span className="ft14_contractLease">NOVENA: MORA. </span>La mora en el pago del canon
                                de arrendamiento, dará lugar al cobro de intereses moratorios en la
                                forma y monto establecidos en la Ley y la gestión de la cartera podrá
                                iniciarse desde el mismo momento que se incurra en la mora.
                                <span className="ft14_contractLease">PARÁGRAFO PRIMERO: </span>Si la mora es en dos (2)
                                períodos consecutivos de pago (mensualidades), se constituirá en una
                                justa causa para solicitar la terminación del contrato por parte de EL
                                ARRENDADOR y a exigir de inmediato la restitución del bien entregado
                                en arrendamiento, así mismo, dará lugar a la activación de la cláusula
                                penal contenida en la cláusula décima séptima.
                                <span className="ft14_contractLease">DÉCIMA: RENUNCIAS. </span>EL (LA) ARRENDATARIO(A)
                                renuncia expresamente a los requerimientos para ser constituido en
                                mora, así como al derecho de retención que a cualquier título le
                                conceda la Ley sobre el inmueble objeto del presente
                            </p>
                            <p className="p32_contractLease ft7_contractLease">
                                <span className="ft9_contractLease">contrato. </span>DÉCIMA PRIMERA: RÉGIMEN JURÍDICO
                                APLICABLE AL CONTRATO. <span className="ft9_contractLease">Las</span>
                            </p>
                            <p className="p28_contractLease ft15_contractLease">
                                partes manifiestan que el régimen aplicable a este acto o contrato
                                corresponde al descrito en el Código Civil para los contratos de
                                arrendamiento, a lo dispuesto en la Ley 80 de 1993, ley 1150 del 2007
                                sus decretos reglamentarios, o la normatividad vigente y manifiestan
                                que este tipo de contratos no se consideran ni se pueden considerar
                                actos mercantiles o de comercio, razón por la cual no será aplicable
                                el régimen jurídico contenido en el Código de Comercio en parte
                                alguna. Para los bienes inmuebles destinados a vivienda se aplicará la
                                Ley 820 de 2003. <span className="ft14_contractLease">DÉCIMA SEGUNDA:</span>
                            </p>
                            <p className="p33_contractLease ft7_contractLease">
                                OBLIGACIONES. (I) De EL (LA) ARRENDATARIO(A):
                                <span className="ft9_contractLease">Se obliga a: 1) Pagar el canon de</span>
                            </p>
                            <p className="p34_contractLease ft15_contractLease">
                                arrendamiento pactado en la forma y términos convenidos y demás
                                valores generados (cuando apliquen). 2) Emplear el mayor cuidado en la
                                conservación del bien objeto de este contrato, siendo responsable de
                                cualquier deterioro que no provenga de la naturaleza o uso legítimo de
                                la cosa. 3) Adoptar todas las medidas de seguridad
                            </p>
                            <p className="p35_contractLease ft6_contractLease">Página 6 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_7_contractLease">
                        <div id="p7dimg1">
                            <img
                                src={imgbs64} alt="" id="p7img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id7_1">
                            <div id="id7_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id7_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id7_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p36_contractLease ft9_contractLease">
                                concernientes a la conservación, custodia y a la prevención del bien,
                                dimensionando los
                            </p>
                            <p className="p37_contractLease ft9_contractLease">
                                riesgos inherentes a su conservación y frente a las actividades
                                desarrolladas en el mismo.
                            </p>
                            <p className="p21_contractLease ft29_contractLease">
                                <span className="ft9_contractLease">4)</span
                                ><span className="ft33_contractLease"
                                >Vigilar el inmueble por su cuenta y riesgo. En consecuencia, EL
                                    ARRENDADOR no asume responsabilidad por daños, pérdidas, robos,
                                    etc., que allí se llegaren a presentar y por ende, no se genera
                                    ninguna clase de responsabilidad civil por daños causados a terceros
                                    o a sus bienes atribuible a EL ARRENDADOR. 5) Dar aviso a EL
                                    ARRENDADOR sobre los daños del inmueble que lo pongan en peligro o
                                    el normal funcionamiento de los </span
                                ><span className="ft34_contractLease">servicios. </span>6) Destinar el bien únicamente
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
                                contrato; 16) Informar oportunamente
                            </p>
                            <p className="p38_contractLease ft6_contractLease">Página 7 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_8_contractLease">
                        <div id="p8dimg1">
                            <img
                                src={imgbs64} alt="" id="p8img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id8_1">
                            <div id="id8_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id8_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id8_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p39_contractLease ft29_contractLease">
                                los cambios de los datos de contacto del arrendatario, tales como
                                dirección, correo electrónico, teléfono, celular que figuran en el
                                contrato; 17) Las demás que se establezcan
                            </p>
                            <p className="p40_contractLease ft15_contractLease">
                                en el presente contrato y en la Ley; 18) En caso de ser un restaurante
                                cafeterías y similares dejar la siguientes obligaciones: EL (LA)
                                ARRENDATARIO (A) deberá cumplir con el Decreto Municipal 0440 de 2009
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
                                <span className="ft14_contractLease">(II) DEL ARRENDADOR: </span>1) Entregar el bien
                                arrendado en condiciones de habitabilidad o de uso; 2) Realizar las
                                mejoras que sean necesarias para garantizar las condiciones de
                                habitabilidad o de uso en beneficio de EL (LA) ARRENDATARIO(A); 3)
                                Entregar factura física o digital para el pago del canon de
                                arrendamiento y demás conceptos.
                                <span className="ft14_contractLease">DÉCIMA TERCERA: PROHIBICIONES</span>
                            </p>
                            <p className="p27_contractLease ft7_contractLease">
                                ESPECIALES DE EL (LA) ARRENDATARIO(A).
                                <span className="ft9_contractLease">1) Queda expresamente prohibido a</span>
                            </p>
                            <p className="p41_contractLease ft15_contractLease">
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
                                <span className="ft14_contractLease">DÉCIMA CUARTA: RÉGIMEN DE MEJORAS. </span>Las
                                mejoras son aquellas obras civiles,
                            </p>
                            <p className="p42_contractLease ft6_contractLease">Página 8 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_9_contractLease">
                        <div id="p9dimg1">
                            <img
                                src={imgbs64} alt="" id="p9img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id9_1">
                            <div id="id9_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id9_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id9_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p17_contractLease ft15_contractLease">
                                arquitectónicas, eléctricas, hidráulicas, telefónicas que requiera un
                                inmueble para garantizar las condiciones de habitabilidad o de uso.
                                Las partes convienen que en este contrato podrán ser ejecutadas por EL
                                (LA) ARRENDATARIO(A) <span>–a</span> su cuenta y riesgo, quien deberá
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
                            </p>
                            <p className="p43_contractLease ft7_contractLease">
                                PARÁGRAFO PRIMERO: MEJORAS REMOVIBLES.
                                <span className="ft9_contractLease">Son aquellas que pueden ser</span>
                            </p>
                            <p className="p28_contractLease ft15_contractLease">
                                retiradas sin que se deterioren las condiciones normales del inmueble
                                objeto de arrendamiento. Para el efecto, EL (LA) ARRENDATARIO(A)
                                cuenta con diez (10) días contados a partir de la terminación del
                                presente contrato para proceder a su retiro; EL (LA) ARRENDATARIO (A)
                                deberá garantizar que el inmueble quede en perfecto estado al momento
                                de su entrega. Cumplido el término anterior sin que EL (LA)
                                ARRENDATARIO(A) retire las mencionadas mejoras, éstas pasarán a ser de
                                propiedad de EL ARRENDADOR sin que haya lugar a indemnización alguna.
                                <span className="ft14_contractLease">PARÁGRAFO</span>
                            </p>
                            <p className="p44_contractLease ft6_contractLease">Página 9 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_10_contractLease">
                        <div id="p10dimg1">
                            <img
                                src={imgbs64} alt="" id="p10img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id10_1">
                            <div id="id10_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id10_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id10_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p45_contractLease ft15_contractLease">
                                <span className="ft14_contractLease">SEGUNDO: MEJORAS FIJAS. </span>Son aquellas que no
                                pueden ser retiradas porque conllevan el deterioro en las condiciones
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
                                <span className="ft14_contractLease">PARÁGRAFO TERCERO: </span>EL (LA) ARRENDATARIO(A)
                                efectuará por su cuenta y riesgo las reparaciones locativas que ordena
                                la Ley de acuerdo a lo establecido en los artículos 2028, 2029 y 2030
                                del Código Civil. <span className="ft14_contractLease">PARÁGRAFO CUARTO: </span>Los
                                daños y perjuicios que EL (LA) ARRENDATARIO(A) cause con ocasión de
                                las reparaciones o mejoras por él realizadas, correrán a cargo
                                exclusivo de EL (LA) ARRENDATARIO(A).
                                <span className="ft14_contractLease"
                                >DÉCIMA QUINTA: SERVICIOS PÚBLICOS E IMPUESTOS. </span
                                >El pago de los servicios públicos, al igual que los impuestos de
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
                                inmueble. <span className="ft14_contractLease">PARÁGRAFO PRIMERO: </span>Si EL (LA)
                                ARRENDATARIO(A) no cancela en su oportunidad los servicios que le
                                corresponden y como consecuencia de ello, las Empresas Públicas los
                                suspendieren y/o retiraren los contadores o medidores, este hecho se
                                entenderá como incumplimiento del contrato pudiendo exigir EL
                                ARRENDADOR la restitución inmediata del inmueble.
                                <span className="ft14_contractLease">PARÁGRAFO SEGUNDO: </span>EL ARRENDADOR recibirá el
                                inmueble y podrá cobrar sumas generadas por el incumplimiento del
                                contrato hasta tanto EL (LA)
                            </p>
                            <p className="p46_contractLease ft6_contractLease">Página 10 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_11_contractLease">
                        <div id="p11dimg1">
                            <img
                                src={imgbs64} alt="" id="p11img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id11_1">
                            <div id="id11_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id11_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id11_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p26_contractLease ft36_contractLease">
                                ARRENDATARIO(A) presente Certificado de Paz y Salvo por concepto de
                                servicios públicos, pago de Impuesto de Industria y Comercio (si
                                aplica), cánones y demás.
                                <span className="ft35_contractLease">DÉCIMA SEXTA: RESTITUCIÓN. </span>Vencido el plazo
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
                                <span className="ft35_contractLease">PARÁGRAFO PRIMERO</span>: En el evento en que EL LA
                                ARRENDATARIO (A) requiera un término adicional para la entrega del
                                inmueble, que se encuentre debidamente justificado, este se deberá
                                pactar de mutuo acuerdo mediante acta suscrita entre EL LA
                                ARRENDATARIO (A) y el supervisor del contrato, documento en el cual se
                                establecerá lo correspondiente al cobro de fracciones por concepto de
                                ocupación, además de servicios públicos y administración en los
                                eventos aplicables. Dicha acta será el documento soporte para la
                                facturación de las fracciones adiciones a cobrar.
                                <span className="ft35_contractLease">PARÁGRAFO SEGUNDO: </span>El acuerdo previamente
                                señalado no generará novación del contrato de arrendamiento.
                                <span className="ft35_contractLease">DÉCIMA SÉPTIMA: ABANDONO DEL INMUEBLE. </span>Al
                                suscribirse el presente contrato, EL LA ARRENDATARIO (A), faculta
                                expresamente a EL ARRENDADOR para ingresar al inmueble y recuperar su
                                tenencia con el solo requisito de la presencia de dos testigos, en
                                procura de evitar el deterioro o el desmantelamiento de tal inmueble y
                                en aras de poder disponer del mismo y en cumplimiento de la debida
                                administración de los bienes inmuebles del Municipio, siempre que por
                                cualquier circunstancia el mismo permanezca abandonado o deshabitado
                                por parte EL LA ARRENDATARIO (A) y que la exposición al riesgo amenace
                                la integridad física del bien o de sus vecinos.
                                <span className="ft35_contractLease">DÉCIMA OCTAVA: GARANTÍAS. </span>EL (LA)
                                ARRENDATARIO(A) deberá otorgar garantía única de cumplimiento en favor
                                de Entidades Estatales, de conformidad con lo establecido por el
                                Decreto Nacional 1082 de 2015, la normativa vigente y demás normas que
                                lo modifiquen, adicionen o sustituyan, la
                            </p>
                            <p className="p47_contractLease ft6_contractLease">Página 11 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_12_contractLease">
                        <div id="p12dimg1">
                            <img
                                src={imgbs64} alt="" id="p12img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id12_1">
                            <div id="id12_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id12_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id12_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p26_contractLease ft15_contractLease">
                                cual debe ser aceptada por EL ARRENDADOR y deberá cubrir los
                                siguientes amparos: 1) Seguro de arrendamiento. Con el fin de
                                garantizar las obligaciones que en razón de este contrato asume EL
                                (LA) ARRENDATARIO(A), deberá otorgar una garantía correspondiente al
                                cien por ciento (100 %) del valor total del contrato, con una vigencia
                                igual al plazo pactado en el contrato y cuatro (4) meses más. En caso
                                de que sea Centros Comerciales Populares o Cerros Tutelares deberá
                                otorgar garantía única de cumplimiento en favor de Entidades
                                Estatales, la cual debe ser aceptada por EL ARRENDADOR y deberá cubrir
                                los siguientes amparos: 1) Cumplimiento. Con el fin de garantizar las
                                obligaciones que en razón de este contrato asume EL (LA)
                                ARRENDATARIO(A), deberá otorgar una garantía correspondiente al
                                treinta por ciento (30 %) del valor del contrato, con una vigencia
                                igual al plazo pactado y cuatro (4) meses más, para dar cumplimiento a
                                lo estipulado en la Ley 80 de 1993 y decretos reglamentarios. En caso
                                de que sea vivienda urbana, no se exigirán garantías al
                                ARRENDATARIO(A) para la ejecución del contrato de arrendamiento,
                                teniendo en cuenta las condiciones sociales y económicas de los
                                arrendatarios, a quienes les es muy difícil cumplir con los requisitos
                                exigidos por las empresas aseguradoras para la expedición de las
                                garantías. <span className="ft14_contractLease">PARÁGRAFO PRIMERO: </span>EL (LA)
                                ARRENDATARIO (A) ampliará las garantías cuando se presenten
                                modificaciones en el canon de arrendamiento y el plazo de ejecución
                                del contrato. <span className="ft14_contractLease">PARÁGRAFO SEGUNDO: </span>Las citadas
                                garantías las deberá entregar EL (LA) ARRENDATARIO(A) a EL ARRENDADOR,
                                dentro de los diez (10) días calendario siguientes a la suscripción
                                del presente contrato, de no ser así, se entenderá que desiste del
                                contrato y se iniciarán los procedimientos requeridos para darlo por
                                terminado. La aprobación de la póliza será requisito previo para la
                                firma del acta de inicio
                            </p>
                            <p className="p43_contractLease ft9_contractLease">
                                del presente contrato.
                                <span className="ft7_contractLease">DÉCIMA NOVENA: CLÁUSULA PENAL. </span>En el presente
                                contrato
                            </p>
                            <p className="p34_contractLease ft15_contractLease">
                                se pacta entre las partes cláusula penal, la cual se hará exigible de
                                manera unilateral sin necesidad de declaratoria judicial, cuando a
                                juicio del Secretario competente, previo informe de supervisión, el
                                contratista incurra en el incumplimiento del contrato. Esta cláusula
                                penal se considerará como tasación anticipada de los perjuicios
                                causados a EL ARRENDADOR, la que se estima en un veinte (20%) del
                                valor total del contrato.
                            </p>
                            <p className="p48_contractLease ft7_contractLease">
                                VIGÉSIMA: PROHIBICIÓN DE CESIÓN O SUBARRIENDO.
                                <span className="ft9_contractLease">EL (LA)</span>
                            </p>
                            <p className="p49_contractLease ft9_contractLease">
                                ARRENDATARIO(A) se obliga expresamente a no ceder o subarrendar el
                                inmueble
                            </p>
                            <p className="p50_contractLease ft6_contractLease">Página 12 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_13_contractLease">
                        <div id="p13dimg1">
                            <img
                                src={imgbs64} alt="" id="p13img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id13_1">
                            <div id="id13_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id13_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id13_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p26_contractLease ft15_contractLease">
                                objeto de este contrato ni transferir su tenencia ni permitir el uso
                                por parte de terceros a ningún título, a menos de que conste
                                autorización expresa de EL ARRENDADOR y por escrito. El incumplimiento
                                de lo aquí estipulado es causal de terminación del contrato por parte
                                de EL ARRENDADOR y procederá la restitución del inmueble objeto del
                                mismo por parte de EL (LA) ARRENDATARIO(A) de manera inmediata.
                                <span className="ft14_contractLease">PARÁGRAFO PRIMERO: </span>Cuando en el caso que el
                                inmueble esté ubicado dentro de un Centro Comercial Popular y
                                pertenezca al programa de reubicación de venteros ambulantes, éste
                                deberá ser atendido exclusivamente por EL (LA) ARRENDATARIO(A). El
                                incumplimiento dará lugar a la terminación del contrato y restitución
                                del bien. <span className="ft14_contractLease">VIGÉSIMA PRIMERA: CAUSALES</span>
                            </p>
                            <p className="p51_contractLease ft7_contractLease">
                                DE TERMINACIÓN Y/O ANTICIPADA DEL CONTRATO.
                                <span className="ft9_contractLease">Son causales para terminar</span>
                            </p>
                            <p className="p52_contractLease ft15_contractLease">
                                anticipadamente el presente contrato, dando lugar a la restitución
                                inmediata del inmueble, las siguientes: a) Cuando las exigencias del
                                servicio público lo requieran o la situación de orden público lo
                                imponga; b) El incumplimiento de cualquiera de las obligaciones de EL
                                (LA) ARRENDATARIO(A); c) Cuando se comprobare que la documentación
                                aportada para la adjudicación fuere fraudulenta; d) Por la renuencia
                                en la suscripción del acta de inicio se dará la terminación del
                                contrato o se entenderá como desistimiento del contrato
                            </p>
                            <p className="p28_contractLease ft15_contractLease">
                                <span className="ft9_contractLease">e)</span
                                ><span className="ft37_contractLease"
                                >Por disolución o liquidación de persona jurídica de EL (LA)
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
                                    que le son</span
                                >
                            </p>
                            <p className="p53_contractLease ft6_contractLease">Página 13 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_14_contractLease">
                        <div id="p14dimg1">
                            <img
                                src={imgbs64} alt="" id="p14img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id14_1">
                            <div id="id14_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id14_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id14_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p54_contractLease ft15_contractLease">
                                propias y p) Para los beneficiarios del programa de reubicación de
                                venteros ambulantes en los Centros Comerciales Populares, el concepto
                                desfavorable del estudio socioeconómico verificado en cualquier
                                momento de la ejecución del presente contrato.
                            </p>
                            <p className="p40_contractLease ft29_contractLease">
                                <span className="ft9_contractLease">q)</span
                                ><span className="ft38_contractLease"
                                >Digite un literal en caso de ser necesario, de lo contrario borrar </span
                                ><span className="ft27_contractLease">PARÁGRAFO PRIMERO: </span>EL (LA) ARRENDATARIO(A)
                                está facultado para solicitar la terminación anticipada del presente
                                contrato. Para el efecto, manifestará por escrito su interés de
                                restituir el inmueble otorgado en arrendamiento con una antelación no
                                inferior a tres (3) meses a la fecha de restitución proyectada. En
                                este caso no habrá lugar a indemnización alguna. No obstante, para que
                                proceda la solicitud de EL (LA) ARRENDATARIO(A), deberá encontrarse al
                                día en el pago de los cánones de arrendamiento y demás obligaciones
                                derivadas de este contrato.
                                <span className="ft27_contractLease"
                                >VIGÉSIMA SEGUNDA: RÉGIMEN LEGAL DE INHABILIDADES E
                                    INCOMPATIBILIDADES. </span
                                >Las partes dejan expresa constancia bajo la gravedad del juramento
                                que se entiende prestado con la firma de este contrato, que no se
                                encuentran incursas en ninguna de las causales de inhabilidad e
                                incompatibilidad de que tratan la Ley 80 de 1993 y las demás
                                disposiciones legales vigentes.
                                <span className="ft27_contractLease">VIGÉSIMA TERCERA: PRIMA Y/O COMPENSACIÓN. </span
                                >EL(LA) ARRENDATARIO(A) manifiesta que no tiene derecho a prima, ni
                                compensación alguna por la terminación del contrato, entrega del
                                inmueble al vencimiento del plazo o por la ocurrencia de una,
                                cualquiera de las causales de restitución del inmueble.
                                <span className="ft27_contractLease">VIGÉSIMA CUARTA: SUPERVISIÓN E INSPECCIÓN. </span
                                >La vigilancia técnica, administrativa, financiera, contable y
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
                                <span className="ft27_contractLease">VIGÉSIMA QUINTA: MÉRITO EJECUTIVO. </span>El
                                presente contrato de arrendamiento presta mérito ejecutivo de acuerdo
                                con la Ley y para efectos del cumplimiento de las obligaciones en él
                                contenidas. <span className="ft27_contractLease">VIGÉSIMA SEXTA:</span>
                            </p>
                            <p className="p55_contractLease ft6_contractLease">Página 14 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_15_contractLease">
                        <div id="p15dimg1">
                            <img
                                src={imgbs64} alt="" id="p15img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id15_1">
                            <div id="id15_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id15_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id15_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p56_contractLease ft15_contractLease">
                                <span className="ft14_contractLease">VÍNCULO LABORAL. </span>EL ARRENDADOR, sus
                                empleados, dependientes, subordinados, entre otros; no adquieren
                                ningún vínculo o relación de carácter laboral con EL (LA)
                                ARRENDATARIO(A) ni con el personal que él designe para el cumplimiento
                                de las obligaciones derivadas del presente contrato.
                                <span className="ft14_contractLease">VIGÉSIMA SÉTIMA: INDEMNIDAD. </span>EL (LA)
                                ARRENDATARIO(A) deberá mantener libre al MUNICIPIO DE MEDELLÍN de
                                cualquier daño o perjuicio originado en reclamaciones de terceros y
                                que se deriven de sus actuaciones o de las de sus subcontratistas o
                                dependientes.
                                <span className="ft14_contractLease">VIGÉSIMA OCTAVA: TRATAMIENTO DE DATOS. </span>El
                                Municipio de Medellín, en concordancia con lo establecido en la
                                Constitución Política de Colombia (arts. 15 y 20), la Ley 1581 de
                                <span className="ft39_contractLease">2012</span>
                            </p>
                            <p className="p57_contractLease ft41_contractLease">
                                "Por la cual se dictan disposiciones generales para la protección de
                                datos personales"
                                <span className="ft40_contractLease">y el Decreto 1377 de 2013 </span>"Por el cual se
                                reglamenta parcialmente la Ley 1581 de 2012"
                                <span className="ft40_contractLease">y</span>
                            </p>
                            <p className="p58_contractLease ft15_contractLease">
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
                            </p>
                            <p className="p59_contractLease ft6_contractLease">Página 15 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_16_contractLease">
                        <div id="p16dimg1">
                            <img
                                src={imgbs64} alt="" id="p16img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id16_1">
                            <div id="id16_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id16_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id16_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p36_contractLease ft9_contractLease">
                                deberes y obligaciones que para tal figura prevé la Ley 1581 de 2012 y
                                sus decretos
                            </p>
                            <p className="p49_contractLease ft7_contractLease">
                                <span className="ft9_contractLease">reglamentarios. </span>VIGÉSIMA NOVENA: AUTORIZACIÓN
                                DE TRATAMIENTO DE
                            </p>
                            <p className="p40_contractLease ft15_contractLease">
                                <span className="ft14_contractLease">DATOS. </span>EL LA ARRENDATARIO (A)<span
                                    className="ft14_contractLease"
                                >, </span
                                >manifiesta que ha sido informado por el Municipio de Medellín, de lo
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
                                lugar. <span className="ft14_contractLease">TRIGÉSIMA: DEUDORES SOLIDARIOS. </span>En
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
                                <span className="ft14_contractLease">TRIGÉSIMA PRIMERA: AUDITORÍA INTERNA. </span>En
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
                            </p>
                            <p className="p60_contractLease ft6_contractLease">Página 16 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_17_contractLease">
                        <div id="p17dimg1">
                            <img
                                src={imgbs64} alt="" id="p17img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id17_1">
                            <div id="id17_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id17_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id17_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p17_contractLease ft15_contractLease">
                                a atender los requerimientos de la auditoría interna será objeto de
                                multa por mora en la entrega de información, con fundamento en el
                                Decreto Municipal 2505 del 17 de Diciembre de 2013 y la Circular No.
                                002 del 10 de Enero de 2014 emitida por el Comité Técnico de
                                Orientación y Seguimiento de la Contratación.
                                <span className="ft14_contractLease">TRIGESIMA SEGUNDA: PUBLICACIÓN. </span>De
                                conformidad con el Decreto 1082 de 2015 y con el artículo 223 del
                                <span>Decreto-Ley</span> 019 de 2012, el presente contrato una vez
                                perfeccionado, deberá ser publicado por parte del MUNICIPIO DE
                                MEDELLÍN. <span className="ft14_contractLease">TRIGÉSIMA TERCERA: PERFECCIONAMIENTO DEL CONTRATO Y EJECUCIÓN.</span>
                                {` ${values_contract?.object_contract} `}
                                <span className="ft14_contractLease">TRIGÉSIMA CUARTA: NOTIFICACIONES. </span>Las
                                notificaciones que cualquiera de las partes deseare hacer a la otra,
                                deben formularse por escrito a las siguientes direcciones: (INSERTE
                                DESCRIPCIÓN DE LA DIRECCIÓN DE NOTIFICACIONES DE AMBAS PARTES,
                                DIRECCIÓN ARRENDADOR Oficina 701 Centro Administrativo Municipal – CAM
                                – Calle 44 No. 52 – 165).
                                <span className="ft14_contractLease">TRIGÉSIMA QUINTA: IMPUESTOS. </span>EL (LA)
                                ARRENDATARIO(A) procederá a cancelar el impuesto de timbre así como
                                cualquier otro impuesto y/o estampilla a que hubiere lugar con la
                                legalización del presente contrato.
                                <span className="ft14_contractLease">TRIGÉSIMA SEXTA: DOMICILIO. </span>Para todos los
                                efectos legales distintos de la competencia en materia judicial, se
                                fija como domicilio, el municipio de Medellín.
                            </p>
                            <p className="p61_contractLease ft9_contractLease">
                                Para constancia, se firma en la ciudad de Medellín, a los
                                ____________________
                            </p>
                            <p className="p62_contractLease ft42_contractLease">
                                {` ${arrendamiento.detailsLeader.names.firstName} ${arrendamiento.detailsLeader.names.lastName} ${arrendamiento.detailsLeader.surnames.firstSurname} ${arrendamiento.detailsLeader.surnames.lastSurname} `}
                            </p>
                            <p className="p37_contractLease ft15_contractLease"> Cédula N° (DIGITE NÚMERO DE IDENTIFICACIÓN)</p>
                            <p className="p37_contractLease ft9_contractLease">Secretario de Suministros y Servicios</p>
                            <p className="p37_contractLease ft9_contractLease">Municipio de Medellín</p>
                            <p className="p37_contractLease ft9_contractLease">Arrendador</p>
                            <p className="p50_contractLease ft6_contractLease">Página 17 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
                        </div>
                    </div>
                </Card>
                <Card style={{ width: '850px', margin: '0 auto' }}>
                    <div id="page_18_contractLease">
                        <div id="p18dimg1">
                            <img
                                src={imgbs64} alt="" id="p18img1"
                            />
                        </div>

                        <div className="dclr"></div>
                        <div id="id18_1">
                            <div id="id18_1_1">
                                <p className="p0_contractLease ft0_contractLease">Cód. <span>FO-ADMI-170</span></p>
                                <p className="p1_contractLease ft0_contractLease">
                                    Versión <span className="ft1_contractLease">8</span><span className="ft2_contractLease">7</span>
                                </p>
                            </div>
                            <div id="id18_1_2">
                                <p className="p2_contractLease ft3_contractLease">Formato</p>
                                <p className="p0_contractLease ft4_contractLease">
                                    <span>FO-ADMI</span> Minuta Contrato de Arrendamiento
                                </p>
                                <p className="p3_contractLease ft4_contractLease">Bien Inmueble</p>
                            </div>
                        </div>
                        <div id="id18_2">
                            <p className="p10_contractLease ft6_contractLease">
                                <span className="ft5_contractLease">Contrato de Arrendamiento No. </span>(DIGITE SÓLO
                                NÚMERO DE CONTRATO – SIN FECHA)
                            </p>
                            <p className="p63_contractLease ft35_contractLease">
                                {arrendamiento.applicant.type_society === "Persona Juridica" ?
                                    `${arrendamiento?.detailsRepresentative.names.firstName} ${arrendamiento?.detailsRepresentative.names.lastName} ${arrendamiento?.detailsRepresentative.surnames.firstSurname} ${arrendamiento?.detailsRepresentative.surnames.lastSurname}`
                                    :
                                    `${arrendamiento.detailsApplicant.names.firstName} ${arrendamiento.detailsApplicant.names.lastName} ${arrendamiento.detailsApplicant.surnames.firstSurname} ${arrendamiento.detailsApplicant.surnames.lastSurname}`
                                }
                            </p>
                            <p className="p64_contractLease ft36_contractLease">Cédula N° (DIGITE NÚMERO DE IDENTIFICACIÓN)</p>
                            <p className="p64_contractLease ft36_contractLease">

                                {arrendamiento.applicant.type_society === "Persona Juridica" &&
                                    <>
                                        Obra en representacion de
                                        <span className="ft42_contractLease"> {arrendamiento?.applicant.company_name}</span>
                                    </>
                                }

                            </p>
                            <p className="p64_contractLease ft7_contractLease">
                                <span className="ft9_contractLease">Dirección: </span> {arrendamiento?.location_applicant?.address}

                            </p>
                            <p className="p48_contractLease ft7_contractLease">
                                <span className="ft9_contractLease">Teléfono: </span> {arrendamiento.detailsApplicant.email}
                                {/* TODO: revisar numero */}
                            </p>
                            <p className="p65_contractLease ft42_contractLease">
                                <span className="ft15_contractLease">Correo electrónico: </span> {arrendamiento.detailsApplicant.email}
                            </p>
                            <p className='p65_contractLease ft42_contractLease'>
                                <span className="ft15_contractLease">NIT N° </span> {arrendamiento.detailsApplicant.id_number}
                            </p>
                            <p className="p65_contractLease ft9_contractLease">Arrendatario</p>

                            <table cellPadding="0" cellSpacing="0" className="t2_contractLease">
                                <tr>
                                    <td className="tr7_contractLease td2_contractLease"></td>
                                    <td className="tr7_contractLease td3_contractLease"><p className="p66_contractLease ft43_contractLease">Elaboró:</p></td>
                                    <td className="tr7_contractLease td4_contractLease"><p className="p67_contractLease ft43_contractLease">Revisó:</p></td>
                                    <td className="tr7_contractLease td4_contractLease"><p className="p68_contractLease ft43_contractLease">Aprobó:</p></td>
                                    <td className="tr7_contractLease td5_contractLease"><p className="p68_contractLease ft43_contractLease">Revisó y Aprobó:</p></td>
                                </tr>
                                <tr>
                                    <td className="tr8_contractLease td2_contractLease"></td>
                                    <td className="tr8_contractLease td6_contractLease"><p className="p66_contractLease ft43_contractLease">{arrendamiento.elaborated.name}</p></td>
                                    <td className="tr8_contractLease td7_contractLease"><p className="p67_contractLease ft43_contractLease">{arrendamiento.revised.name}</p></td>
                                    <td className="tr8_contractLease td7_contractLease"><p className="p68_contractLease ft43_contractLease">{arrendamiento.approved.name}</p></td>
                                    <td className="tr8_contractLease td8_contractLease"><p className="p68_contractLease ft43_contractLease">{`${arrendamiento.detailsLeader.names.firstName} ${arrendamiento.detailsLeader.names.lastName} ${arrendamiento.detailsLeader.surnames.firstSurname} ${arrendamiento.detailsLeader.surnames.lastSurname}`}</p></td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #000' }}>
                                    <td className="tr9_contractLease td2_contractLease"></td>
                                    <td className="tr9_contractLease td9_contractLease"><p className="p66_contractLease ft43_contractLease">Abogado Contratista Unidad Administración de Bienes Inmuebles</p></td>
                                    <td className="tr9_contractLease td10_contractLease"><p className="p67_contractLease ft43_contractLease">Coordinadora Jurídica Unidad Administración de Bienes Inmuebles</p></td>
                                    <td className="tr9_contractLease td10_contractLease"><p className="p68_contractLease ft43_contractLease">Líder de Programa Unidad Administración de Bienes Inmuebles</p></td>
                                    <td className="tr10_contractLease td11_contractLease"><p className="p68_contractLease ft43_contractLease">Subsecretario de Gestión de bienes</p></td>
                                </tr>
                            </table>
                            <p className="p69_contractLease ft6_contractLease">Página 18 de 18</p>
                            <p className="p13_contractLease ft12_contractLease">
                                _________________________________________________________________________________________________
                            </p>
                            <p className="p14_contractLease ft12_contractLease">
                                Centro Administrativo Municipal – CAM – Calle 44 No. 52 – 165 Línea
                                Única de Atención a la Ciudadanía 44 44 144
                            </p>
                            <p className="p15_contractLease ft16_contractLease">
                                <a href="http://www.medellin.gov.co">www.medellin.gov.co</a>
                            </p>
                            <p className="p16_contractLease ft6_contractLease">Medellín - Colombia</p>
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
                        history.push({ pathname: "/disposition/create/", state: { dispositionType, stage: "contractual", realEstate, values_contract } })
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => { }}
                >
                    guardar y descargar
                </button>
            </div>
        </div>
    )
}

export default LeaseDocContract

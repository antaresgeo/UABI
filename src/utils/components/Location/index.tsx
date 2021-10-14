import React, { useState } from "react";

const Location = () => {
    /*INICIO | STATES*/

    //	Crear el State de captura de datos
    const [locationName, setLocationName] = useState({
        pais: "",
        departamento: "",
        municipio: "",
        comuna: "",
        barrio: "",
        via: "",
        numero1: "",
        letra1: "",
        orientacion1: "",
        numero2: "",
        letra2: "",
        orientacion2: "",
        indicativo: "",
        indicaciones: "",
    });
    /*====================================================*/

    //	State de Errores
    const [error, setError] = useState(false);

    /*FIN | STATES*/

    /*================================================*/
    /*================================================*/

    /* INICIO FUNCIONES QUE MODIFICAN LOS STATE's */

    //	Función que detecta los cambios de cada select e input del formulario y actualiza el State
    const handleChange = (e: any) => {

        setLocationName({
            ...locationName,
            [e.target.name]: e.target.value,
        });
    };

    /*=======================================================*/
    /*=======================================================*/

    //	Extraigo los valores del objeto con "destructuring"
    const {
        pais,
        departamento,
        municipio,
        comuna,
        barrio,
        via,
        numero1,
        letra1,
        orientacion1,
        numero2,
        letra2,
        orientacion2,
        indicativo,
        indicaciones,
    } = locationName;

    //	Función cuando el usuario hace Submit
    type FormElement = React.FormEvent<HTMLFormElement>;

    const handleSubmit = (e: FormElement) => {
        e.preventDefault();

        //	VALIDAR CAMPOS
        if (
            pais.trim() === "" ||
            departamento.trim() === "" ||
            municipio.trim() === "" ||
            comuna.trim() === "" ||
            barrio.trim() === "" ||
            numero1.trim() === "" ||
            numero2.trim() === "" ||
            indicativo.trim() === ""
        ) {
            setError(true);
            return;
        }

        //	ELIMINAR EL MENSAJE PREVIO DE ERROR CUANDO NO HA PASADO LA VALIDACIÓN DE CAMPOS, CUANDO PASA, LO ELIMINAMOS
        setError(false);

        //	REINICIAR EL FORM PARA DEJARLO EN CAMPOS VACIOS
        setLocationName({
            pais: "",
            departamento: "",
            municipio: "",
            comuna: "",
            barrio: "",
            via: "",
            numero1: "",
            letra1: "",
            orientacion1: "",
            numero2: "",
            letra2: "",
            orientacion2: "",
            indicativo: "",
            indicaciones: "",
        });
    };

    /*=======================================================*/
    /*=======================================================*/

    return (
        <section className='mainContainerLocation'>
            <form
                className='containerLocation'
                method="POST"
                onSubmit={handleSubmit}
            >

                {error ? (
                    <p className="alert alert-danger text-center" role="alert">
                        Los Campos país, departamento, municipio, comuna, barrio, Tipo, número, indicativo, son obligatorios
                    </p>
                ) : null}

                <div className="innerContainerLocation">
                    <div className="pt-0">
                        <h5 className="text-uppercase">Ubicación</h5>
                        <hr />
                    </div>

                    <div className='d-md-flex justify-content-between'>
                        <div className='col-md-2'>
                            <label htmlFor='country' className="form-label">País <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                            <select
                                id='country'
                                className='w-100 form-select'
                                name="pais"
                                onChange={handleChange}
                                value={pais}
                            >
                                <option value='' selected disabled>
                                    --País--
                                </option>
                                <option key="co" value='Colombia'>
                                    Colombia
                                </option>
                                <option key="ve" value='Venezuela'>
                                    Venezuela
                                </option>
                                <option key="cr" value='Costa Rica'>
                                    Costa Rica
                                </option>
                                <option key="pa" value='Panamá'>
                                    Panamá
                                </option>
                                <option key="br" value='Brasíl'>
                                    Brasil
                                </option>
                                <option key="ec" value='Ecuador'>
                                    Ecuador
                                </option>
                            </select>
                        </div>

                        <div className='col-md-2 mt-4 mt-md-0'>
                            <label
                                htmlFor='state'
                                className="form-label"
                            >Departamento
                                <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                            <select
                                id='state'
                                className='w-100 form-select'
                                name="departamento"
                                onChange={handleChange}
                                value={departamento}
                            >
                                <option value='' selected disabled>
                                    --Departamento--
                                </option>
                                <option key="antioquia" value='Antioquia'>
                                    Antioquia
                                </option>
                                <option key="cundinamarca" value='Cundinamarca'>
                                    Cundinamarca
                                </option>
                                <option key="vallecauca" value='Valle del Cauca'>
                                    Valle del Cauca
                                </option>
                                <option key="atlantico" value='Atlántico'>
                                    Atlántico
                                </option>
                                <option key="magdalena" value='Magdalena'>
                                    Magdalena
                                </option>
                                <option key="bolivar" value='Bolívar'>
                                    Bolívar
                                </option>
                            </select>
                        </div>

                        <div className='col-md-2 mt-4 mt-md-0'>
                            <label
                                htmlFor='city'
                                className="form-label"
                            >Municipio
                                <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                            <select
                                id='city'
                                className='w-100 form-select'
                                name='municipio'
                                onChange={handleChange}
                                value={municipio}
                            >
                                <option value='' selected disabled>
                                    --Municipio--
                                </option>
                                <option key="medellin" value='Medellín'>
                                    Medellín
                                </option>
                                <option key="envigado" value='Envigado'>
                                    Envigado
                                </option>
                                <option key="sabaneta" value='Sabaneta'>
                                    Sabaneta
                                </option>
                                <option key="bogota" value='Bogotá'>
                                    Bogotá
                                </option>
                                <option key="cali" value='Cali'>
                                    Cali
                                </option>
                                <option key="barranquilla" value='Barranquila'>
                                    Barranquilla
                                </option>
                                <option key="santamarta" value='Santamarta'>
                                    Santa Marta
                                </option>
                                <option key="cartagena" value='Cartagena'>
                                    Cartagena
                                </option>
                            </select>
                        </div>

                        <div className='col-md-2 mt-4 mt-md-0'>
                            <label
                                htmlFor='comuna'
                                className="form-label"
                            >Comuna
                                <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                            <select
                                id='comuna'
                                className='w-100 form-select'
                                name='comuna'
                                onChange={handleChange}
                                value={comuna}
                            >
                                <option value='' selected disabled>
                                    --Comuna--
                                </option>
                                <option key="01" value='01'>
                                    01
                                </option>
                                <option key="02" value='02'>
                                    02
                                </option>
                                <option key="03" value='03'>
                                    03
                                </option>
                                <option key="04" value='04'>
                                    04
                                </option>
                                <option key="05" value='05'>
                                    05
                                </option>
                                <option key="06" value='06'>
                                    06
                                </option>
                                <option key="07" value='07'>
                                    07
                                </option>
                                <option key="08" value='08'>
                                    08
                                </option>
                                <option key="09" value='09'>
                                    09
                                </option>
                                <option key="10" value='10'>
                                    10
                                </option>
                                <option key="11" value='11'>
                                    11
                                </option>
                                <option key="12" value='12'>
                                    12
                                </option>
                                <option key="13" value='13'>
                                    13
                                </option>
                                <option key="14" value='14'>
                                    14
                                </option>
                                <option key="15" value='15'>
                                    15
                                </option>
                                <option key="16" value='16'>
                                    16
                                </option>
                            </select>
                        </div>

                        <div className='col-md-2 mt-4 mt-md-0'>
                            <label
                                htmlFor='barrio'
                                className="form-label"
                            >Barrio
                                <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                            <select
                                id='barrio'
                                className='w-100 form-select'
                                name='barrio'
                                onChange={handleChange}
                                value={barrio}
                            >
                                <option value='' selected disabled>
                                    --Barrio--
                                </option>
                                <option key="belenlamota" value='Belén La Mota'>
                                    Belén La Mota
                                </option>
                                <option key="salvador" value='Salvador'>
                                    Salvador
                                </option>
                                <option key="buenosaires" value='Buenos Aires'>
                                    Buenos Aires
                                </option>
                                <option key="manrique" value='Manríque'>
                                    Manrique
                                </option>
                                <option key="aranjuez" value='Aranjúez'>
                                    Aranjúez
                                </option>
                                <option key="laureles" value='Laureles'>
                                    Laureles
                                </option>
                                <option key="milagrosa" value='La Milagrosa'>
                                    Milagrosa
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* ====================================== */}
                    {/* ====================================== */}
                    {/* ====================================== */}

                    <div className='mt-5'>
                        <h5 className='text-center text-uppercase'>Dirección</h5>

                        <div className='d-md-flex justify-content-between mt-1'>
                            <div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
                                <label
                                    htmlFor='type1'
                                    className="form-label"
                                >Tipo
                                    <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                                <select
                                    id='type1'
                                    className='w-100 form-select'
                                    name='via'
                                    onChange={handleChange}
                                    value={via}
                                >
                                    <option value='' selected disabled>
                                        --Tipo--
                                    </option>
                                    <option key="calle" value='Calle'>
                                        Calle
                                    </option>
                                    <option key="carrera" value='Carrera'>
                                        Carrera
                                    </option>
                                    <option key="avenida" value='Avenida'>
                                        Avenida
                                    </option>
                                    <option key="circular" value='Circular'>
                                        Circular
                                    </option>
                                    <option key="transversal" value='Transversal'>
                                        Transversal
                                    </option>
                                    <option key="circunvalar" value='Circunvalar'>
                                        Circunvalar
                                    </option>
                                    <option key="diagonal" value='Diagonal'>
                                        Diagonal
                                    </option>
                                </select>
                            </div>

                            <div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
                                <label
                                    htmlFor='number1'
                                    className="form-label"
                                >Número
                                    <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                                <input
                                    type='number'
                                    name='numero1'
                                    id='number1'
                                    className="form-control"
                                    onChange={handleChange}
                                    value={numero1}
                                />
                            </div>

                            <div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
                                <label
                                    htmlFor='letter1'
                                    className="form-label"
                                >Letra</label>
                                <select
                                    id='letter1'
                                    className='w-100 form-select'
                                    name='letra1'
                                    onChange={handleChange}
                                    value={letra1}
                                >
                                    <option value='' selected disabled>
                                        --Letra--
                                    </option>
                                    <option key="A" value='A'>
                                        A
                                    </option>
                                    <option key="B" value='B'>
                                        B
                                    </option>
                                    <option key="C" value='B'>
                                        C
                                    </option>
                                    <option key="D" value='D'>
                                        D
                                    </option>
                                    <option key="E" value='E'>
                                        E
                                    </option>
                                    <option key="F" value='F'>
                                        F
                                    </option>
                                    <option key="G" value='G'>
                                        G
                                    </option>
                                    <option key="H" value='H'>
                                        H
                                    </option>
                                    <option key="I" value='I'>
                                        I
                                    </option>
                                    <option key="AA" value='AA'>
                                        AA
                                    </option>
                                    <option key="AB" value='AB'>
                                        AB
                                    </option>
                                    <option key="AC" value='AC'>
                                        AC
                                    </option>
                                    <option key="AD" value='AD'>
                                        AD
                                    </option>
                                    <option key="AE" value='AE'>
                                        AE
                                    </option>
                                    <option key="BB" value='BB'>
                                        BB
                                    </option>
                                    <option key="BC" value='BC'>
                                        BC
                                    </option>
                                    <option key="CC" value='CC'>
                                        CC
                                    </option>
                                    <option key="CD" value='CD'>
                                        CD
                                    </option>
                                    <option key="CE" value='CE'>
                                        CE
                                    </option>
                                    <option key="DD" value='DD'>
                                        DD
                                    </option>
                                    <option key="DE" value='DE'>
                                        DE
                                    </option>
                                </select>
                            </div>

                            <div className='col-md-2 mt-4 mt-md-0 pe-sm-0'>
                                <label
                                    htmlFor='orientation1'
                                    className="form-label"
                                >Orientación</label>
                                <select
                                    id='orientation1'
                                    className='w-100 form-select'
                                    name='orientacion1'
                                    onChange={handleChange}
                                    value={orientacion1}
                                >
                                    <option value='' selected disabled>
                                        --Orientación--
                                    </option>
                                    <option key="sur" value='Sur'>
                                        Sur
                                    </option>
                                    <option key="norte" value='Norte'>
                                        Norte
                                    </option>
                                    <option key="oeste" value='Oeste'>
                                        Oeste
                                    </option>
                                    <option key="este" value='Este'>
                                        Este
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* ====================================== */}

                        <div className='d-md-flex justify-content-between mt-5'>
                            <div className='col-md-0 d-none d-md-flex align-items-end justify-content-center'>
                                <p className="fs-4">#</p>
                            </div>

                            <div className='col-md-2 mt-4 mt-md-0'>
                                <label
                                    htmlFor='number2'
                                    className="form-label"
                                >Número
                                    <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                                <input
                                    type='number'
                                    name='numero2'
                                    id='number2'
                                    className="form-control"
                                    onChange={handleChange}
                                    value={numero2}
                                />
                            </div>

                            <div className='col-md-2 mt-4 mt-md-0'>
                                <label
                                    htmlFor='letter2'
                                    className="form-label"
                                >Letra</label>
                                <select
                                    id='letter2'
                                    className='w-100 form-select'
                                    name='letra2'
                                    onChange={handleChange}
                                    value={letra2}
                                >
                                    <option value='' selected disabled>
                                        --Letra--
                                    </option>
                                    <option key="A2" value='A'>
                                        A
                                    </option>
                                    <option key="B2" value='B'>
                                        B
                                    </option>
                                    <option key="C2" value='B'>
                                        C
                                    </option>
                                    <option key="D2" value='D'>
                                        D
                                    </option>
                                    <option key="E2" value='E'>
                                        E
                                    </option>
                                    <option key="F2" value='F'>
                                        F
                                    </option>
                                    <option key="G2" value='G'>
                                        G
                                    </option>
                                    <option key="H2" value='H'>
                                        H
                                    </option>
                                    <option key="I2" value='I'>
                                        I
                                    </option>
                                    <option key="AA2" value='AA'>
                                        AA
                                    </option>
                                    <option key="AB2" value='AB'>
                                        AB
                                    </option>
                                    <option key="AC2" value='AC'>
                                        AC
                                    </option>
                                    <option key="AD2" value='AD'>
                                        AD
                                    </option>
                                    <option key="AE2" value='AE'>
                                        AE
                                    </option>
                                    <option key="BB2" value='BB'>
                                        BB
                                    </option>
                                    <option key="BC2" value='BC'>
                                        BC
                                    </option>
                                    <option key="CC2" value='CC'>
                                        CC
                                    </option>
                                    <option key="CD2" value='CD'>
                                        CD
                                    </option>
                                    <option key="CE2" value='CE'>
                                        CE
                                    </option>
                                    <option key="DD2" value='DD'>
                                        DD
                                    </option>
                                    <option key="DE2" value='DE'>
                                        DE
                                    </option>
                                </select>
                            </div>

                            <div className='col-md-2 mt-4 mt-md-0'>
                                <label
                                    htmlFor='orientation2'
                                    className="form-label"
                                >Orientación</label>
                                <select
                                    id='orientation2'
                                    className='w-100 form-select'
                                    name='orientacion2'
                                    onChange={handleChange}
                                    value={orientacion2}
                                >
                                    <option value='' selected disabled>
                                        --Orientación--
                                    </option>
                                    <option key="sur2" value='Sur'>
                                        Sur
                                    </option>
                                    <option key="norte2" value='Norte'>
                                        Norte
                                    </option>
                                    <option key="oeste2" value='Oeste'>
                                        Oeste
                                    </option>
                                    <option key="este2" value='Este'>
                                        Este
                                    </option>
                                </select>
                            </div>

                            <div className='col-md-0 d-none d-md-flex align-items-end justify-content-center'>
                                <p className="fs-3">-</p>
                            </div>

                            <div className='col-md-2 mt-4 mt-md-0'>
                                <label
                                    htmlFor='indicativo'
                                    className="form-label"
                                >Indicativo
                                    <span style={{ color: 'red', fontWeight: 'bolder' }}>*</span></label>
                                <input
                                    type='number'
                                    name='indicativo'
                                    id='indicativo'
                                    className="form-control"
                                    onChange={handleChange}
                                    value={indicativo}
                                    key="indicativo"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='col mt-4 mt-md-5'>
                        <label
                            htmlFor='indications'
                            className="form-label"
                        >Indicaciones</label>
                        <input
                            type='text'
                            name='indicaciones'
                            id='indications'
                            className="w-100  form-control"
                            placeholder="Manzana, Urbanización, Núcleo, Bloque, apartamento"
                            onChange={handleChange}
                            value={indicaciones}
                            key="indicaciones"
                        />

                    </div>

                    <div className='d-flex justify-content-end mt-5'>
                        <button type='submit' className='btn btn-primary btn-lg'>
                            Consultar
                        </button>
                    </div>
                </div>
            </form>
        </section>

    );
};

export default Location;

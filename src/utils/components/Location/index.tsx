import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface LocationProps {
    modalClose?: (values, callback) => void;
}

const Location: FC<LocationProps> = ({ modalClose, ...props }) => {

    const initialValues = {
        pais: "",
        departamento: "",
        municipio: "",
        comuna: "",
        barrio: "",
        tipo: "",
        numero1: "",
        letra1: "",
        orientacion1: "",
        numero2: "",
        letra2: "",
        orientacion2: "",
        indicativo: "",
        indicaciones: "",
    };

    const schema = Yup.object().shape({
        pais: Yup.string().required("obligatorio"),
        departamento: Yup.string().required("obligatorio"),
        municipio: Yup.string().required("obligatorio"),
        comuna: Yup.string().required("obligatorio"),
        barrio: Yup.string().required("obligatorio"),
        tipo: Yup.string().required("obligatorio"),
        numero1: Yup.string().required("obligatorio"),
        numero2: Yup.string().required("obligatorio"),
        indicativo: Yup.string().required("obligatorio"),
    });

    return (

            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    modalClose && modalClose(values, () => {
                        setSubmitting(false);
                        resetForm()
                    });
                }}
            >
                {({ values, isValid, isSubmitting }) => {
                    // .form-group.col>(label.form-label(span.text-danger{*})+Field[name=""][as="select"].w-100.form-select+ErrorMessage[name=""][component="span"].text-danger.text-left.d-block.w-100.mt-1)
                    return (
                        <Form>
                            <div className="form-row row">
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        País <span className="text-danger">*</span>
                                    </label>
                                    <Field className="w-100 form-select" name="pais" as="select">
                                        <option value="" disabled>
                                            --País--
                                        </option>
                                        <option key="co" value="Colombia">
                                            Colombia
                                        </option>
                                        <option key="ve" value="Venezuela">
                                            Venezuela
                                        </option>
                                        <option key="cr" value="Costa Rica">
                                            Costa Rica
                                        </option>
                                        <option key="pa" value="Panamá">
                                            Panamá
                                        </option>
                                        <option key="br" value="Brasíl">
                                            Brasil
                                        </option>
                                        <option key="ec" value="Ecuador">
                                            Ecuador
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="pais" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Departamento <span className="text-danger">*</span>
                                    </label>
                                    <Field className="w-100 form-select" name="departamento" as="select">
                                        <option value="" selected disabled>
                                            --Departamento--
                                        </option>
                                        <option key="antioquia" value="Antioquia">
                                            Antioquia
                                        </option>
                                        <option key="cundinamarca" value="Cundinamarca">
                                            Cundinamarca
                                        </option>
                                        <option key="vallecauca" value="Valle del Cauca">
                                            Valle del Cauca
                                        </option>
                                        <option key="atlantico" value="Atlántico">
                                            Atlántico
                                        </option>
                                        <option key="magdalena" value="Magdalena">
                                            Magdalena
                                        </option>
                                        <option key="bolivar" value="Bolívar">
                                            Bolívar
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="departamento" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Municipio <span className="text-danger">*</span>
                                    </label>
                                    <Field className="w-100 form-select" name="municipio" as="select">
                                        <option value="" disabled>
                                            --Municipio--
                                        </option>
                                        <option key="medellin" value="Medellín">
                                            Medellín
                                        </option>
                                        <option key="envigado" value="Envigado">
                                            Envigado
                                        </option>
                                        <option key="sabaneta" value="Sabaneta">
                                            Sabaneta
                                        </option>
                                        <option key="bogota" value="Bogotá">
                                            Bogotá
                                        </option>
                                        <option key="cali" value="Cali">
                                            Cali
                                        </option>
                                        <option key="barranquilla" value="Barranquila">
                                            Barranquilla
                                        </option>
                                        <option key="santamarta" value="Santamarta">
                                            Santa Marta
                                        </option>
                                        <option key="cartagena" value="Cartagena">
                                            Cartagena
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="municipio" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Comuna <span className="text-danger">*</span>
                                    </label>
                                    <Field className="w-100 form-select" name="comuna" as="select">
                                        <option value="" disabled>
                                            --Comuna--
                                        </option>
                                        <option key="01" value="01">
                                            01
                                        </option>
                                        <option key="02" value="02">
                                            02
                                        </option>
                                        <option key="03" value="03">
                                            03
                                        </option>
                                        <option key="04" value="04">
                                            04
                                        </option>
                                        <option key="05" value="05">
                                            05
                                        </option>
                                        <option key="06" value="06">
                                            06
                                        </option>
                                        <option key="07" value="07">
                                            07
                                        </option>
                                        <option key="08" value="08">
                                            08
                                        </option>
                                        <option key="09" value="09">
                                            09
                                        </option>
                                        <option key="10" value="10">
                                            10
                                        </option>
                                        <option key="11" value="11">
                                            11
                                        </option>
                                        <option key="12" value="12">
                                            12
                                        </option>
                                        <option key="13" value="13">
                                            13
                                        </option>
                                        <option key="14" value="14">
                                            14
                                        </option>
                                        <option key="15" value="15">
                                            15
                                        </option>
                                        <option key="16" value="16">
                                            16
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="comuna" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Barrio <span className="text-danger">*</span>
                                    </label>
                                    <Field className="w-100 form-select" name="barrio" as="select">
                                        <option value="" selected disabled>
                                            --Barrio--
                                        </option>
                                        <option key="belenlamota" value="Belén La Mota">
                                            Belén La Mota
                                        </option>
                                        <option key="salvador" value="Salvador">
                                            Salvador
                                        </option>
                                        <option key="buenosaires" value="Buenos Aires">
                                            Buenos Aires
                                        </option>
                                        <option key="manrique" value="Manríque">
                                            Manrique
                                        </option>
                                        <option key="aranjuez" value="Aranjúez">
                                            Aranjúez
                                        </option>
                                        <option key="laureles" value="Laureles">
                                            Laureles
                                        </option>
                                        <option key="milagrosa" value="La Milagrosa">
                                            Milagrosa
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="barrio" />
                                    </span>
                                </div>
                            </div>
                            <h5 className="text-center text-uppercase">Dirección</h5>
                            <div className="from-row row">
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Tipo <span className="text-danger">*</span>
                                    </label>
                                    <Field name="tipo" as="select" className="w-100 form-select">
                                        <option value="" disabled>
                                            --Tipo--
                                        </option>
                                        <option key="calle" value="Calle">
                                            Calle
                                        </option>
                                        <option key="carrera" value="Carrera">
                                            Carrera
                                        </option>
                                        <option key="avenida" value="Avenida">
                                            Avenida
                                        </option>
                                        <option key="circular" value="Circular">
                                            Circular
                                        </option>
                                        <option key="transversal" value="Transversal">
                                            Transversal
                                        </option>
                                        <option key="circunvalar" value="Circunvalar">
                                            Circunvalar
                                        </option>
                                        <option key="diagonal" value="Diagonal">
                                            Diagonal
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="tipo" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Número <span className="text-danger">*</span>
                                    </label>
                                    <Field name="numero1" type="number" className="w-100 form-control" />
                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="numero1" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Letra
                                    </label>
                                    <Field name="letra1" as="select" className="w-100 form-select">
                                        <option value="" disabled>
                                            --Letra--
                                        </option>
                                        <option key="A" value="A">
                                            A
                                        </option>
                                        <option key="B" value="B">
                                            B
                                        </option>
                                        <option key="C" value="B">
                                            C
                                        </option>
                                        <option key="D" value="D">
                                            D
                                        </option>
                                        <option key="E" value="E">
                                            E
                                        </option>
                                        <option key="F" value="F">
                                            F
                                        </option>
                                        <option key="G" value="G">
                                            G
                                        </option>
                                        <option key="H" value="H">
                                            H
                                        </option>
                                        <option key="I" value="I">
                                            I
                                        </option>
                                        <option key="AA" value="AA">
                                            AA
                                        </option>
                                        <option key="AB" value="AB">
                                            AB
                                        </option>
                                        <option key="AC" value="AC">
                                            AC
                                        </option>
                                        <option key="AD" value="AD">
                                            AD
                                        </option>
                                        <option key="AE" value="AE">
                                            AE
                                        </option>
                                        <option key="BB" value="BB">
                                            BB
                                        </option>
                                        <option key="BC" value="BC">
                                            BC
                                        </option>
                                        <option key="CC" value="CC">
                                            CC
                                        </option>
                                        <option key="CD" value="CD">
                                            CD
                                        </option>
                                        <option key="CE" value="CE">
                                            CE
                                        </option>
                                        <option key="DD" value="DD">
                                            DD
                                        </option>
                                        <option key="DE" value="DE">
                                            DE
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="letra1" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Orientación
                                    </label>
                                    <Field name="orientacion1" as="select" className="w-100 form-select">
                                        <option value="" disabled>
                                            --Orientación--
                                        </option>
                                        <option key="sur" value="Sur">
                                            Sur
                                        </option>
                                        <option key="norte" value="Norte">
                                            Norte
                                        </option>
                                        <option key="oeste" value="Oeste">
                                            Oeste
                                        </option>
                                        <option key="este" value="Este">
                                            Este
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="orientacion1" />
                                    </span>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-1 fs-4 text-end">#</div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Número <span className="text-danger">*</span>
                                    </label>
                                    {/*<div className="fs-4 text-end d-inline-block">#</div>*/}
                                    <Field name="numero2" type="number" className="w-100 form-control" />
                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="numero2" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Letra
                                    </label>
                                    <Field name="letra2" as="select" className="w-100 form-select">
                                        <option value="" disabled>
                                            --Letra--
                                        </option>
                                        <option key="A" value="A">
                                            A
                                        </option>
                                        <option key="B" value="B">
                                            B
                                        </option>
                                        <option key="C" value="B">
                                            C
                                        </option>
                                        <option key="D" value="D">
                                            D
                                        </option>
                                        <option key="E" value="E">
                                            E
                                        </option>
                                        <option key="F" value="F">
                                            F
                                        </option>
                                        <option key="G" value="G">
                                            G
                                        </option>
                                        <option key="H" value="H">
                                            H
                                        </option>
                                        <option key="I" value="I">
                                            I
                                        </option>
                                        <option key="AA" value="AA">
                                            AA
                                        </option>
                                        <option key="AB" value="AB">
                                            AB
                                        </option>
                                        <option key="AC" value="AC">
                                            AC
                                        </option>
                                        <option key="AD" value="AD">
                                            AD
                                        </option>
                                        <option key="AE" value="AE">
                                            AE
                                        </option>
                                        <option key="BB" value="BB">
                                            BB
                                        </option>
                                        <option key="BC" value="BC">
                                            BC
                                        </option>
                                        <option key="CC" value="CC">
                                            CC
                                        </option>
                                        <option key="CD" value="CD">
                                            CD
                                        </option>
                                        <option key="CE" value="CE">
                                            CE
                                        </option>
                                        <option key="DD" value="DD">
                                            DD
                                        </option>
                                        <option key="DE" value="DE">
                                            DE
                                        </option>
                                    </Field>
                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="letra1" />
                                    </span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Orientación
                                    </label>
                                    <Field name="orientacion2" as="select" className="w-100 form-select">
                                        <option value="" disabled>
                                            --Orientación--
                                        </option>
                                        <option key="sur" value="Sur">
                                            Sur
                                        </option>
                                        <option key="norte" value="Norte">
                                            Norte
                                        </option>
                                        <option key="oeste" value="Oeste">
                                            Oeste
                                        </option>
                                        <option key="este" value="Este">
                                            Este
                                        </option>
                                    </Field>

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="orientacion1" />
                                    </span>
                                </div>
                                <div className="col-1 fs-4 text-center">-</div>
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Indicativo <span className="text-danger">*</span>
                                    </label>
                                    <Field name="indicativo" type="number" className="w-100 form-control" />
                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="indicativo" />
                                    </span>
                                </div>
                            </div>
                            <div className="from-row row">
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        indicaciones
                                    </label>
                                    <Field
                                        name="indicaciones"
                                        type="text"
                                        className="w-100 form-control"
                                        placeholder="Manzana, Urbanización, Núcleo, Bloque, apartamento"
                                    />

                                    <span className="text-danger text-left d-block w-100 mt-1" style={{height: "22px"}}>
                                        <ErrorMessage name="indicaciones" />
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mt-1">
                                <button type="submit" className="btn btn-primary btn-lg" disabled={isSubmitting || !isValid}>
                                    Consultar
                                </button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>

    );
};

export default Location;

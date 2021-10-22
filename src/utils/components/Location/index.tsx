import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getList } from './service';
import {
    ICityAddressAttributes,
    ICommuneAddressAttributes,
    ICountryAddressAttributes,
    INeighborhoodAddressAttributes,
    IStateAddressAttributes,
} from '../../interfaces';

interface LocationProps {
    modalClose?: (values, callback) => void;
    view?: string;
}

const Location: FC<LocationProps> = ({ modalClose, view, ...props }) => {
    const [countries, setCountries] = useState<ICountryAddressAttributes[]>([]);
    const [states, setStates] = useState([]);
    const [city, setCity] = useState([]);
    const [commune, setCommune] = useState([]);
    const [neighborhood, setNeighborhood] = useState([]);

    const initialValues = {
        country: '',
        state: '',
        city: '',
        commune: '',
        neighborhood: '',

        type: '',
        number_one: '',
        word_one: '',
        orientation_one: '',
        number_two: '',
        word_two: '',
        orientation_two: '',
        indicative: '',
        indicaciones: '',
    };

    const schema = Yup.object().shape({
        country: Yup.string().required('Obligatorio'),
        state: Yup.string().required('Obligatorio'),
        city: Yup.string().required('Obligatorio'),
        commune: Yup.string().required('Obligatorio'),
        neighborhood: Yup.string().required('Obligatorio'),
        type: Yup.string().required('Obligatorio'),
        number_one: Yup.string().required('Obligatorio'),
        number_two: Yup.string().required('Obligatorio'),
        indicative: Yup.string().required('Obligatorio'),
    });

    useEffect(() => {
        (async () => {
            let arrCountries: any = await getList('country');
            setCountries(arrCountries);
        })();
    }, []);

    const renderOptions = (id, name, options = []) => {
        return (
            options.length > 0 &&
            options.map((option, i) => (
                <option key={i} value={option[id]}>
                    {option[name]}
                </option>
            ))
        );
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={view === 'general' && schema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                modalClose &&
                    modalClose(values, () => {
                        setSubmitting(false);
                        resetForm();
                    });
            }}
        >
            {({ values, isValid, isSubmitting, setFieldValue, handleChange }) => {
                const has_country = values.country !== '';
                let has_states = values.state !== '';
                let has_city = values.city !== '';
                let has_commune = values.commune !== '';

                return (
                    <Form>
                        <div className="form-row row">
                            <div className="form-group col">
                                <label htmlFor="" className="form-label">
                                    País <span className="text-danger">*</span>
                                </label>
                                <Field
                                    className="w-100 form-select"
                                    name="country"
                                    as="select"
                                    onChange={async (e) => {
                                        handleChange(e);
                                        const list = await getList('state', { country: e.target.value });
                                        setStates(list);
                                    }}
                                >
                                    <option value="" disabled>
                                        --País--
                                    </option>
                                    {renderOptions('country_code', 'country', countries)}
                                </Field>

                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="country" />
                                </span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="" className="form-label">
                                    Departamento <span className="text-danger">*</span>
                                </label>
                                <Field
                                    className="w-100 form-select"
                                    name="state"
                                    as="select"
                                    disabled={!has_country}
                                    onChange={async (e) => {
                                        handleChange(e);
                                        const list = await getList('city', { state: e.target.value });
                                        setCity(list);
                                    }}
                                >
                                    <option value="" selected disabled>
                                        --state--
                                    </option>
                                    {renderOptions('state_code', 'state', states)}
                                </Field>

                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="state" />
                                </span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="" className="form-label">
                                    Ciudad <span className="text-danger">*</span>
                                </label>
                                <Field
                                    className="w-100 form-select"
                                    name="city"
                                    as="select"
                                    disabled={!has_states}
                                    onChange={async (e) => {
                                        handleChange(e);
                                        const list = await getList('commune', { city: e.target.value });
                                        setCommune(list);
                                    }}
                                >
                                    <option value="" disabled>
                                        --city--
                                    </option>
                                    {renderOptions('city_code', 'city', city)}
                                </Field>

                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="city" />
                                </span>
                            </div>
                            {view === 'general' && (
                                <div className="form-group col">
                                    <label htmlFor="" className="form-label">
                                        Comuna <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="w-100 form-select"
                                        name="commune"
                                        as="select"
                                        disabled={!has_city}
                                        onChange={async (e) => {
                                            handleChange(e);
                                            const list = await getList('neighborhood', { commune: e.target.value });
                                            setNeighborhood(list);
                                        }}
                                    >
                                        <option value="" disabled>
                                            --commune--
                                        </option>
                                        {renderOptions('commune_code', 'commune', commune)}
                                    </Field>

                                    <span
                                        className="text-danger text-left d-block w-100 mt-1"
                                        style={{ height: '22px' }}
                                    >
                                        <ErrorMessage name="commune" />
                                    </span>
                                </div>
                            )}
                        </div>
                        {view === 'general' && (
                            <div className="form-row row">
                                <div className="form-group col-3">
                                    <label htmlFor="" className="form-label">
                                        Barrio <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                        className="w-100 form-select"
                                        name="neighborhood"
                                        as="select"
                                        disabled={!has_commune}
                                        onChange={async (e) => {
                                            handleChange(e);
                                        }}
                                    >
                                        <option value="" selected disabled>
                                            --neighborhood--
                                        </option>
                                        {renderOptions('neighborhood_code', 'neighborhood', neighborhood)}
                                    </Field>

                                    <span
                                        className="text-danger text-left d-block w-100 mt-1"
                                        style={{ height: '22px' }}
                                    >
                                        <ErrorMessage name="neighborhood" />
                                    </span>
                                </div>

                                {view === 'general' && (
                                    <>
                                        <div className="form-group col">
                                            <label htmlFor="" className="form-label">
                                                Manzana <span className="text-danger">*</span>
                                            </label>
                                            <Field className="w-100 form-select" type="text" name="block"></Field>

                                            <span
                                                className="text-danger text-left d-block w-100 mt-1"
                                                style={{ height: '22px' }}
                                            >
                                                <ErrorMessage name="block" />
                                            </span>
                                        </div>

                                        <div className="form-group col">
                                            <label htmlFor="" className="form-label">
                                                Lote <span className="text-danger">*</span>
                                            </label>
                                            <Field className="w-100 form-select" type="text" name="lot"></Field>

                                            <span
                                                className="text-danger text-left d-block w-100 mt-1"
                                                style={{ height: '22px' }}
                                            >
                                                <ErrorMessage name="lot" />
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                        {view === 'general' && (
                            <>
                                <h5>Dirección</h5>
                                <hr />
                                <div className="from-row row">
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Tipo <span className="text-danger">*</span>
                                        </label>
                                        <Field name="type" as="select" className="w-100 form-select">
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

                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="tipo" />
                                        </span>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Número <span className="text-danger">*</span>
                                        </label>
                                        <Field name="number_one" type="number" className="w-100 form-control" />
                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="number_one" />
                                        </span>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Letra
                                        </label>
                                        <Field name="word_one" as="select" className="w-100 form-select">
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

                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="word_one" />
                                        </span>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Orientación
                                        </label>
                                        <Field name="orientation_one" as="select" className="w-100 form-select">
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

                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="orientation_one" />
                                        </span>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Número <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                style={{ background: 'white', borderRight: 'none' }}
                                                id="basic-addon1"
                                            >
                                                #
                                            </span>
                                            <Field
                                                name="number_two"
                                                type="number"
                                                className="form-control"
                                                style={{ borderLeft: 'none' }}
                                            />
                                        </div>

                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="number_two" />
                                        </span>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Letra
                                        </label>
                                        <Field name="word_two" as="select" className="w-100 form-select">
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
                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="word_one" />
                                        </span>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Orientación
                                        </label>
                                        <Field name="orientation_two" as="select" className="w-100 form-select">
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

                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="orientation_one" />
                                        </span>
                                    </div>{' '}
                                    -
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            indicative <span className="text-danger">*</span>
                                        </label>
                                        <Field name="indicative" type="number" className="w-100 form-control" />
                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="indicative" />
                                        </span>
                                    </div>
                                </div>
                                <div className="from-row row">
                                    <div className="form-group col-9">
                                        <label htmlFor="" className="form-label">
                                            indicaciones
                                        </label>
                                        <Field
                                            name="indicaciones"
                                            type="text"
                                            className="w-100 form-control"
                                            placeholder="Manzana, Urbanización, Núcleo, Bloque, apartamento"
                                        />

                                        <span
                                            className="text-danger text-left d-block w-100 mt-1"
                                            style={{ height: '22px' }}
                                        >
                                            <ErrorMessage name="indicaciones" />
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                        <hr style={{ margin: 0 }} />
                        <div className="d-flex justify-content-end mt-2">
                            {view === 'general' ? (
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting || !isValid}>
                                    Consultar
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-primary">
                                    Consultar
                                </button>
                            )}
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default Location;

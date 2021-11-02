import { FC, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getList } from './service';
import { ICountryAddressAttributes } from '../../interfaces';
import Tooltip from 'antd/lib/tooltip';
import ErrorMessage from '../../../utils/ui/error_messge';

interface LocationProps {
    modalClose?: (values, callback) => void;
    view?: string;
    zone?: string;
    innerRef?: any;
}

const Location: FC<LocationProps> = ({ modalClose, view, zone, innerRef, ...props }) => {
    const [countries, setCountries] = useState<ICountryAddressAttributes[]>([]);
    const [states, setStates] = useState([]);
    const [city, setCity] = useState([]);
    const [commune, setCommune] = useState([]);
    const [neighborhood, setNeighborhood] = useState([]);

    const initialValues = {
        country: '57',
        state: '05',
        city: '05001',
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
        country: Yup.string().required('Campo obligatorio'),
        state: Yup.string().required('Campo obligatorio'),
        city: Yup.string().required('Campo obligatorio'),
        commune: Yup.string().required('Campo obligatorio'),
        neighborhood: Yup.string().required('Campo obligatorio'),
        type: Yup.string().required('Campo obligatorio'),
        number_one: Yup.string().required('Campo obligatorio'),
        number_two: Yup.string().required('Campo obligatorio'),
        indicative: Yup.string().required('Campo obligatorio'),
    });

    useEffect(() => {
        (async () => {
            let arrCountries: any = await getList('country');
            setCountries(arrCountries);
            const arrStates = await getList('state', { country: initialValues.country });
            setStates(arrStates);
            const arrCity = await getList('city', { state: initialValues.state });
            setCity(arrCity);
            const arrCommune = await getList('commune', { city: initialValues.city });
            setCommune(arrCommune);
        })();
    }, []);

    const renderOptions = (id, name, options = [], show_id = false) => {
        let res =
            options.length > 0 &&
            options.map((option, i) => {
                const code = option[id];
                const _name = option[name];
                if (_name) {
                    return (
                        <option key={`${name}${i}`} value={code}>
                            {show_id && code ? `${code} - ${_name}` : _name}
                        </option>
                    );
                }
                return null;
            });
        if (Array.isArray(res)) {
            res = res.filter((r) => r !== null);
        }
        return res;
    };

    return (
        <Formik
            enableReinitialize
            innerRef={innerRef}
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
                let has_neighborhood = values.neighborhood !== '';
                const cb = `${has_commune ? values.commune : ''}${
                    has_commune && has_neighborhood ? values.neighborhood : ''
                }`;
                return (
                    <Form>
                        <div className="form-row row">
                            <div className="form-group col-4">
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
                                        setFieldValue('state', '');
                                        setFieldValue('city', '');
                                        setFieldValue('commune', '');
                                        setFieldValue('neighborhood', '');
                                    }}
                                >
                                    <option value="" disabled>
                                        --país--
                                    </option>
                                    {renderOptions('country_code', 'country', countries)}
                                </Field>

                                <ErrorMessage name="country" />
                            </div>
                            <div className="form-group col-4">
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
                                        setFieldValue('city', '');
                                        setFieldValue('commune', '');
                                        setFieldValue('neighborhood', '');
                                    }}
                                >
                                    <option value="" selected disabled>
                                        --departamento--
                                    </option>
                                    {renderOptions('state_code', 'state', states)}
                                </Field>

                                <ErrorMessage name="state" />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="" className="form-label">
                                    {zone && zone === 'Rural' ? 'Municipio ' : 'Ciudad '}
                                    <span className="text-danger">*</span>
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
                                        setFieldValue('commune', '');
                                        setFieldValue('neighborhood', '');
                                    }}
                                >
                                    <option value="" disabled>
                                        --{zone && zone === 'Rural' ? 'municipio' : 'ciudad'}--
                                    </option>
                                    {renderOptions('city_code', 'city', city)}
                                </Field>

                                <ErrorMessage name="city" />
                            </div>
                        </div>
                        {(view === 'general' || view === 'user') && (
                            <div className="form-row row">
                                <div className="form-group col-6">
                                    <label htmlFor="" className="form-label">
                                        {zone && zone === 'Rural' ? 'Corregimiento ' : 'Comuna '}
                                        <span className="text-danger">*</span>
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
                                            setFieldValue('neighborhood', '');
                                        }}
                                    >
                                        <option value="" disabled>
                                            --{zone && zone === 'Rural' ? 'corregimiento' : 'comuna'}--
                                        </option>
                                        {renderOptions('commune_code', 'commune', commune, true)}
                                    </Field>

                                    <ErrorMessage name="commune" />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="" className="form-label">
                                        {zone && zone === 'Rural' ? 'Vereda ' : 'Barrio '}
                                        <span className="text-danger">*</span>
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
                                            --{zone && zone === 'Rural' ? 'vereda' : 'barrio'}--
                                        </option>
                                        {renderOptions('neighborhood_code', 'neighborhood', neighborhood, true)}
                                    </Field>

                                    <ErrorMessage name="neighborhood" />
                                </div>
                                {view !== 'user' && (
                                    <>
                                        <div className="form-group col-2">
                                            <label htmlFor="" className="form-label">
                                                CB
                                            </label>
                                            <input className="w-100 form-control" type="text" value={cb} disabled />
                                            <ErrorMessage />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="" className="form-label">
                                                Manzana
                                                <Tooltip title="Lorem impsu texto descriptivo">
                                                    <i
                                                        className="fa fa-info-circle text-muted ms-2 me-2"
                                                        style={{ fontSize: 14 }}
                                                    />
                                                </Tooltip>
                                                <span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                className="w-100 form-control"
                                                type="number"
                                                name="block"
                                                autoComplete="off"
                                            />

                                            <ErrorMessage name="block" />
                                        </div>

                                        <div className="form-group col">
                                            <label htmlFor="" className="form-label">
                                                Lote
                                                <Tooltip title="Lorem impsu texto descriptivo">
                                                    <i
                                                        className="fa fa-info-circle text-muted ms-2 me-2"
                                                        style={{ fontSize: 14 }}
                                                    />
                                                </Tooltip>
                                                <span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                className="w-100 form-control"
                                                type="number"
                                                name="lot"
                                                autoComplete="off"
                                            />

                                            <ErrorMessage name="lot" />
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                        {(view === 'general' || view === 'user') && (
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

                                        <ErrorMessage name="tipo" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Número <span className="text-danger">*</span>
                                        </label>
                                        <Field name="number_one" type="number" className="w-100 form-control" />

                                        <ErrorMessage name="number_one" />
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

                                        <ErrorMessage name="word_one" />
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
                                                Occidente
                                            </option>
                                            <option key="este" value="Este">
                                                Oriente
                                            </option>
                                        </Field>

                                        <ErrorMessage name="orientation_one" />
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

                                        <ErrorMessage name="number_two" />
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

                                        <ErrorMessage name="word_one" />
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
                                                Occidente
                                            </option>
                                            <option key="este" value="Este">
                                                Oriente
                                            </option>
                                        </Field>

                                        <ErrorMessage name="orientation_one" />
                                    </div>{' '}
                                    -
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Indicativo <span className="text-danger">*</span>
                                        </label>
                                        <Field name="indicative" type="number" className="w-100 form-control" />

                                        <ErrorMessage name="indicative" />
                                    </div>
                                </div>
                                <div className="from-row row">
                                    <div className="form-group col-9">
                                        <label htmlFor="" className="form-label">
                                            Indicaciones
                                            <Tooltip title="Lorem impsu texto descriptivo">
                                                <i
                                                    className="fa fa-info-circle text-muted ms-2 me-2"
                                                    style={{ fontSize: 14 }}
                                                />
                                            </Tooltip>
                                        </label>
                                        <Field
                                            name="indicaciones"
                                            type="text"
                                            className="w-100 form-control"
                                            placeholder="Manzana, Urbanización, Núcleo, Bloque, apartamento"
                                        />
                                        <ErrorMessage name="indicaciones" />
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

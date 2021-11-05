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
    const [cities, setCities] = useState([]);
    const [commune, setCommune] = useState([]);
    const [neighborhood, setNeighborhood] = useState([]);

    const initialValues: any = {
        country: 57,
        country_name: '',
        state: 5,
        state_name: '',
        city: 5001,
        city_name: '',
        commune: '',
        commune_name: '',
        neighborhood: '',
        neighborhood_name: '',
        block: '',
        lot: '',
        type: '',
        first_number: '',
        first_appendix: '',
        first_orientation: '',
        second_number: '',
        second_appendix: '',
        second_orientation: '',
        identifier: '',
        indicaciones: '',
    };

    const schema = Yup.object().shape({
        country: Yup.string().required('Campo obligatorio'),
        state: Yup.string().required('Campo obligatorio'),
        city: Yup.string().required('Campo obligatorio'),
        commune: Yup.string().required('Campo obligatorio'),
        neighborhood: Yup.string().required('Campo obligatorio'),
        type: Yup.string().required('Campo obligatorio'),
        first_number: Yup.string().required('Campo obligatorio'),
        second_number: Yup.string().required('Campo obligatorio'),
        identifier: Yup.string().required('Campo obligatorio'),
    });

    useEffect(() => {
        (async () => {
            let arrCountries: any = await getList('country');
            setCountries(arrCountries);
            const arrStates = await getList('state', { country: initialValues.country });
            setStates(arrStates);
            const arrCity = await getList('city', { state: initialValues.state });
            setCities(arrCity);
            const arrCommune = await getList('commune', { city: initialValues.city });
            setCommune(arrCommune);
        })();
    }, []);

    const renderOptions = (id, name, options = [], show_id = false) => {
        let res =
            options.length > 0 &&
            options.map((option, i) => {
                const code = option[id] ? option[id] + '' : '';
                const _name = option[name];
                if (_name) {
                    return (
                        <option key={`${name}${i}`} value={code?.padStart(2, '0')}>
                            {show_id && code ? `${code.padStart(2, '0')} - ${_name}` : _name}
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
    const letters = generate_two_letters_combination();
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

                if (values.country === 57 && values.country_name === '' && countries.length > 0) {
                    const country = countries.find((c) => c.country_code === 57)?.country || '';
                    setFieldValue('country_name', country, false);
                }
                if (values.state === 5 && values.state_name === '' && states.length > 0) {
                    const state = states.find((c) => c.state_code === 5)?.state || '';
                    setFieldValue('state_name', state, false);
                }
                if (values.city === 5001 && values.city_name === '' && cities.length > 0) {
                    const city = cities.find((c) => c.city_code === 5001)?.city || '';
                    setFieldValue('city_name', city, false);
                }
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
                                        const country_r =
                                            countries.find((c) => c.country_code === parseInt(e.target.value))?.country || '';
                                        setFieldValue('country_name', country_r, false);
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
                                        setCities(list);
                                        setFieldValue('city', '');
                                        setFieldValue('commune', '');
                                        setFieldValue('neighborhood', '');
                                        const state_r =
                                            states.find((c) => c.state_code === parseInt(e.target.value))?.state || '';
                                        setFieldValue('state_name', state_r, false);
                                    }}
                                >
                                    <option value="" disabled>
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
                                        const city_r = cities.find((c) => c.city_code === parseInt(e.target.value))?.city || '';
                                        setFieldValue('city_name', city_r, false);
                                    }}
                                >
                                    <option value="" disabled>
                                        --{zone && zone === 'Rural' ? 'municipio' : 'ciudad'}--
                                    </option>
                                    {renderOptions('city_code', 'city', cities)}
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
                                            const list = await getList('neighborhood', {
                                                commune: e.target.value,
                                            });
                                            setNeighborhood(list);
                                            setFieldValue('neighborhood', '');
                                            const commune_r =
                                                commune.find((c) => c.commune_code === parseInt(e.target.value))?.commune || '';
                                            setFieldValue('commune_name', commune_r, false);
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
                                            const neighborhood_r =
                                                neighborhood.find((c) => c.neighborhood_code === e.target.value)
                                                    ?.neighborhood || '';
                                            setFieldValue('neighborhood_name', neighborhood_r, false);
                                        }}
                                    >
                                        <option value="" disabled>
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
                                                min={0}
                                                max={999}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    const regex = /^[+]?\d{0,3}$/;
                                                    if (regex.test(value.toString())) {
                                                        handleChange(e);
                                                    }
                                                }}
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
                                                min={0}
                                                max={999}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    const regex = /^[+]?\d{0,3}$/;
                                                    if (regex.test(value.toString())) {
                                                        handleChange(e);
                                                    }
                                                }}
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
                                        <Field
                                            name="type"
                                            as="select"
                                            className="w-100 form-select"
                                            onChange={(e) => {
                                                handleChange(e);
                                                console.log(e.target.value);
                                                if (e.target.value === 'CL') {
                                                    setFieldValue('first_orientation', 'Sur', false);
                                                    setFieldValue('second_orientation', 'Sur', false);
                                                }
                                                if (e.target.value === 'CR') {
                                                    setFieldValue('first_orientation', 'Este', false);
                                                    setFieldValue('second_orientation', 'Este', false);
                                                }
                                            }}
                                        >
                                            <option value="" disabled>
                                                --Tipo--
                                            </option>
                                            <option key="CL" value="CL">
                                                Calle
                                            </option>
                                            <option key="CR" value="CR">
                                                Carrera
                                            </option>
                                            <option key="CQ" value="CQ">
                                                Circular
                                            </option>
                                            <option key="DG" value="DG">
                                                Diagonal
                                            </option>
                                            <option key="TV" value="TV">
                                                Transversal
                                            </option>
                                        </Field>

                                        <ErrorMessage name="tipo" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Número <span className="text-danger">*</span>
                                        </label>
                                        <Field
                                            name="first_number"
                                            type="number"
                                            className="w-100 form-control"
                                            min={0}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                const { value } = e.target;
                                                const regex = /^[+]?\d*$/;
                                                if (regex.test(value.toString())) {
                                                    handleChange(e);
                                                }
                                            }}
                                        />

                                        <ErrorMessage name="first_number" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Letra
                                        </label>
                                        <Field name="first_appendix" as="select" className="w-100 form-select">
                                            <option value="" disabled>
                                                --Letra--
                                            </option>
                                            {letters.map((letter, i) => {
                                                return (
                                                    <option key={`${letter}${i}`} value={letter}>
                                                        {letter}
                                                    </option>
                                                );
                                            })}
                                        </Field>

                                        <ErrorMessage name="first_appendix" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Orientación
                                        </label>
                                        <Field
                                            name="first_orientation"
                                            type="text"
                                            className="w-100 form-control"
                                            disabled
                                        />

                                        <ErrorMessage name="first_orientation" />
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
                                                name="second_number"
                                                type="number"
                                                className="form-control"
                                                style={{ borderLeft: 'none' }}
                                                min={0}
                                                onChange={(e) => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    const regex = /^[+]?\d*$/;
                                                    if (regex.test(value.toString())) {
                                                        handleChange(e);
                                                    }
                                                }}
                                            />
                                        </div>

                                        <ErrorMessage name="second_number" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Letra
                                        </label>
                                        <Field name="second_appendix" as="select" className="w-100 form-select">
                                            <option value="" disabled>
                                                --Letra--
                                            </option>
                                            {letters.map((letter, i) => {
                                                return (
                                                    <option key={`${letter}${i}`} value={letter}>
                                                        {letter}
                                                    </option>
                                                );
                                            })}
                                        </Field>

                                        <ErrorMessage name="first_appendix" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Orientación
                                        </label>
                                        <Field
                                            name="second_orientation"
                                            type="text"
                                            className="w-100 form-control"
                                            disabled
                                        />

                                        <ErrorMessage name="first_orientation" />
                                    </div>{' '}
                                    -
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Indicativo <span className="text-danger">*</span>
                                        </label>
                                        <Field name="identifier" type="number" className="w-100 form-control" min={0} />

                                        <ErrorMessage name="identifier" />
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
                                            type="number"
                                            className="w-100 form-control"
                                            min={0}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                const { value } = e.target;
                                                const regex = /^[+]?\d*$/;
                                                if (regex.test(value.toString())) {
                                                    handleChange(e);
                                                }
                                            }}
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

const a = {
    acquisition_type: 'Compraventa',
    active_type: 'Lote',
    title_type: 'Escritura',
    act_number: 10000,
    act_value: 100,
    plot_area: 100,
    acquired_percentage: 100,
    origin: '2',
    entity_type: '',
    entity_number: 1111,
    city: '05001',
    real_estate_id: 6,
};

const generate_two_letters_combination = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arr = letters.split('');
    for (let i = 0; i < letters.length; i++) {
        const first_letter = letters[i];
        for (let j = 0; j < letters.length; j++) {
            const new_letter = first_letter + letters[j];
            arr.push(new_letter);
            if (new_letter === 'HH') {
                break;
            }
        }
        if (first_letter === 'H') {
            break;
        }
    }
    return arr;
};

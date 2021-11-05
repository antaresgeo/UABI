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
            setCity(arrCity);
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
                                            const list = await getList('neighborhood', {
                                                commune: e.target.value,
                                            });
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
                                                min={0}
                                                max={999}
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
                                            <option key="CL" value="CL">Calle</option>
                                            <option key="CR" value="CR">Carrera</option>
                                            <option key="CQ" value="CQ">Circular</option>
                                            <option key="DG" value="DG">Diagonal</option>
                                            <option key="TV" value="TV">Transversal</option>
                                        </Field>

                                        <ErrorMessage name="tipo" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Número <span className="text-danger">*</span>
                                        </label>
                                        <Field name="first_number" type="number" className="w-100 form-control" />

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
                                        <Field name="first_orientation" as="select" className="w-100 form-select">
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
                                        <Field name="second_orientation" as="select" className="w-100 form-select">
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

                                        <ErrorMessage name="first_orientation" />
                                    </div>{' '}
                                    -
                                    <div className="form-group col">
                                        <label htmlFor="" className="form-label">
                                            Indicativo <span className="text-danger">*</span>
                                        </label>
                                        <Field name="identifier" type="number" className="w-100 form-control" />

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

                                        <Field name="indicaciones" type="number" className="w-100 form-control" />

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

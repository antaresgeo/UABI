import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import DocumentModal from '../../../../utils/components/DocumentsModal/index';
import ErrorMessage from '../../../../utils/ui/error_messge';
import Select from './../../../../utils/ui/select';

export const FormContract = () => {
    const initialValues = {
        type_use: "",
        active_type: "",
        disposition_type: ""
    };

    const dispositions = [
        "Dependencias",
        "Comodato",
        "arrendamiento",
        "ventas",
        "AEP",
        "MTEP",
        "APRED",
        "servidumbre",
        "autorizaciones"
    ]

    const submit = (values, actions) => {
        console.log(values);
    };

    const schema = Yup.object().shape({
    });
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="type_use_id" className="form-label">
                        Numero de contrato
                    </label>
                    <Field
                        type="text"
                        id="type_use_id"
                        name="type_use"
                        className="form-control"
                        disabled={false}

                    />
                    <ErrorMessage name="vigency_start" />
                </div>
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        Tipo de contrato
                    </label>
                    <Field
                        component={Select}
                        name="disposition_type"
                        id="disposition_type_id"
                        className="w-100"
                        options={dispositions.map(realestate => ({ id: realestate, name: realestate }))}
                    />
                </div>
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        Canon Mensual
                    </label>
                    <Field
                        type="text"
                        id="active_type_id"
                        name="active_type"
                        className="form-control"
                        disabled={false}

                    />
                    <ErrorMessage name="vigency_start" />
                </div>
                <div className="col-3">
                    <label htmlFor="active_type_id" className="form-label">
                        Fecha de suscripción
                    </label>
                    <Field
                        type="date"
                        id="active_type_id"
                        name="active_type"
                        className="form-control"
                        disabled={false}

                    />
                    <ErrorMessage name="vigency_start" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        Fecha de Inicio
                    </label>
                    <Field
                        type="date"
                        id="active_type_id"
                        name="active_type"
                        className="form-control"
                        disabled={false}

                    />
                    <ErrorMessage name="vigency_start" />
                </div>
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        Fecha de Terminación
                    </label>
                    <Field
                        type="date"
                        id="active_type_id"
                        name="active_type"
                        className="form-control"
                        disabled={false}

                    />
                    <ErrorMessage name="vigency_start" />
                </div>
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        Valor de administración
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            name="reconstruction_value"
                            type="number"
                            id="reconstruction_value_id"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="vigency_start" />
                </div>
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        Valor vigilancia
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            name="reconstruction_value"
                            type="number"
                            id="reconstruction_value_id"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        Valor servicio público
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            name="reconstruction_value"
                            type="number"
                            id="reconstruction_value_id"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="vigency_start" />
                </div>
                <div className="col-3">
                    <label htmlFor="disposition_type_id" className="form-label">
                        área a disponer
                    </label>
                    <Field
                        type="number"
                        id="active_type_id"
                        name="active_type"
                        className="form-control"
                        disabled={false}

                    />
                    <ErrorMessage name="vigency_start" />
                </div>
                <div className="col-3">
                    <label htmlFor="form-select" className="form-label">
                        Contrato digital
                    </label>
                    <Field
                        name=""
                        component={DocumentModal}
                        btn_label="Adjuntar"

                    />
                    <ErrorMessage name="supports_documents" />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="zone_id" className="form-label">
                        ¿UABI es la encargada del contrato?
                    </label>
                    <div className="form-check-inline ">
                        <label style={{ fontWeight: 400 }}>
                            <Field

                                name="type_assurance"
                                id="type_assurance_id"
                                type="radio"
                                className="form-check-input"
                                value="Normal"
                            />{' '}
                            si
                        </label>
                    </div>
                    <div className="form-check-inline ">
                        <label style={{ fontWeight: 400 }}>
                            <Field
                                name="type_assurance"
                                id="type_assurance_id"
                                type="radio"
                                className="form-check-input"
                                value="Coaseguramiento"
                            />{' '}
                            no
                        </label>
                    </div>
                    <ErrorMessage name="type_assurance"></ErrorMessage>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-12">
                    <label htmlFor="description_id" className="form-label">
                        Objeto del contrato
                    </label>
                    <Field
                        disabled={false}
                        name="description"
                        id="description_id"
                        as="textarea"
                        className="form-control"
                        maxLength={1000}
                    />
                    <ErrorMessage name="description" withCount max={1000} />
                </div>
            </div>
        </>
    )
}

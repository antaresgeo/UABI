import React, { FC, useState, useRef } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Field, Formik, Form, FieldProps } from 'formik';
import ErrorMessage from './error_messge';
import * as Yup from 'yup';

interface PersonaModalProps {
    type: 'create' | 'edit';
    modal_name?: string;
    disabled?: boolean;
    btn_label?: any;
    onChange: (data, i) => Promise<any>;
    persona?: any;
}

const PersonaModal: FC<PersonaModalProps> = ({ modal_name, disabled, btn_label, onChange, persona, type }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const form_ref = useRef<any>();
    const title = modal_name ? modal_name : 'Agregar Adquisición';
    const close = () => {
        set_is_visible(false);
    };

    const open = () => {
        !disabled && set_is_visible(true);
    };

    const initial_values = {
        id_type: '',
        id_number: '',
        names: { firstName: '', lastName: '' },
        surnames: { firstSurname: '', lastSurname: '' },
        email: '',
        phone_number: '',
        gender: '',
        ...persona,
    };
    const schema = Yup.object().shape({
        id_type: Yup.number().required('obligatorio'),
        id_number: Yup.number().required('obligatorio'),
        names: Yup.object({
            firstName: Yup.string().required('obligatorio')
        }),
        surnames: Yup.object({
            firstSurname: Yup.string().required('obligatorio')
        }),
        email: Yup.string().email().required('obligatorio'),
        phone_number: Yup.number().required('obligatorio'),
        gender: Yup.string().required('obligatorio'),


    });

    return (
        <>
            <div className={['input-group'].join(' ')}>
                <input
                    disabled
                    type="text"
                    className="form-control"
                    value={
                        persona
                            ? `${(persona && Object.values(persona?.names).join(' ')) || ''} ${(persona && Object.values(persona?.surnames).join(' ')) || ''
                            }`
                            : ''
                    }
                />
                <span className="input-group-text" onClick={open}>
                    <i className="fa fa-user"></i>
                </span>
            </div>
            <Modal
                title={title}
                centered
                visible={is_visible}
                width={800}
                onCancel={close}
                footer={[
                    <button
                        key={1}
                        className="btn btn-outline-primary"
                        type="button"
                        onClick={close}
                        disabled={disabled}
                    >
                        Cancelar
                    </button>,
                    <button
                        key={2}
                        className="btn btn-primary ms-2"
                        type="button"
                        disabled={disabled}
                        onClick={() => {
                            form_ref.current.submitForm();
                        }}
                    >
                        Guardar
                    </button>,
                ]}
            >
                <Formik
                    validationSchema={schema}
                    enableReinitialize
                    innerRef={form_ref}
                    onSubmit={(values, form) => {
                        onChange(values, form).then(() => {
                            form.setSubmitting(false);
                            close();
                        });
                    }}
                    initialValues={initial_values}
                >
                    {({ values, isValid, isSubmitting, setFieldValue, handleChange }) => {
                        const length_valid = (length) => (e) => {
                            e.preventDefault();
                            const { value } = e.target;
                            const regex = new RegExp(/^[+]?\d{0,${length}}$/, 'gi');
                            if (regex.test(value.toString())) {
                                handleChange(e);
                            }
                        };
                        return (
                            <Form>
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="first_name_id" className="form-label">
                                            Primer Nombre
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="first_name_id"
                                            name="names.firstName"
                                            placeholder="Primer nombre"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={20}
                                        />
                                        <ErrorMessage name="names.firstName" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="second_name_id" className="form-label">
                                            Segundo Nombre
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="second_name_id"
                                            name="names.lastName"
                                            placeholder="Segundo nombre"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={20}
                                        />
                                        <ErrorMessage name="names.lastName" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="surname_id" className="form-label">
                                            Primer apellido
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="surname_id"
                                            name="surnames.firstSurname"
                                            placeholder="Primer apellido"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={20}
                                        />
                                        <ErrorMessage name="surnames.firstSurname" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="second_surname_id" className="form-label">
                                            Segundo apellido
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="second_surname_id"
                                            name="surnames.lastSurname"
                                            placeholder="Segundo apellido"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={20}
                                        />
                                        <ErrorMessage name="surnames.lastSurname" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="id" className="form-label">
                                            Tipo de Documento
                                        </label>
                                        <Field
                                            as="select"
                                            className="form-select"
                                            id="id_type"
                                            name="id_type"
                                            autoComplete="off"
                                            disabled={disabled}
                                        >
                                            <option value="" hidden>
                                                --Tipo de Documento--
                                            </option>
                                            <option value={1}>Cédula de Ciudadanía</option>
                                            <option value={2}>Tarjeta de identidad</option>
                                            <option value={3}>Cédula de Extranjería</option>
                                            <option value={4}>NIT</option>
                                        </Field>
                                        <ErrorMessage name="id_type" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="username" className="form-label">
                                            Número de documento
                                        </label>
                                        <Field
                                            type="number"
                                            className="form-control"
                                            id="id_number"
                                            placeholder="Número de documento"
                                            name="id_number"
                                            autoComplete="off"
                                            disabled={disabled}
                                        />
                                        <ErrorMessage name="id_number" />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-3">
                                        <label htmlFor="username" className="form-label">
                                            Genero
                                        </label>
                                        <Field
                                            as="select"
                                            className="form-select"
                                            id="gender"
                                            name="gender"
                                            autoComplete="off"
                                            disabled={disabled}
                                        >
                                            <option value="" hidden>
                                                --Genero--
                                            </option>
                                            <option value="f">Femenino</option>
                                            <option value="m">Masculino</option>
                                            <option value="o">Intersexual</option>
                                            <option value="o">No Deseo Responder</option>
                                        </Field>
                                        <ErrorMessage name="gender" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="username" className="form-label">
                                            Teléfono
                                        </label>
                                        <Field
                                            type="number"
                                            className="form-control"
                                            id="phone_number"
                                            name="phone_number"
                                            placeholder="Teléfono"
                                            autoComplete="off"
                                            disabled={disabled}
                                        />
                                        <ErrorMessage name="phone_number" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="username" className="form-label">
                                            Correo Electrónico
                                        </label>
                                        <Field
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Correo"
                                            name="email"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={20}
                                        />
                                        <ErrorMessage name="email" />
                                    </div>

                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </Modal>
        </>
    );
};

interface PersonaMProps extends FieldProps {
    type: 'create' | 'edit';
}

const PersonaM: FC<PersonaMProps> = ({ field, form, type, ...props }) => {
    const on_change = async (value) => {
        form.setFieldValue(field.name, value, false);
    };
    return (
        <PersonaModal
            {...props}
            type={type}
            persona={field.value}
            modal_name={field.value?.label}
            onChange={on_change}
        />
    );
};
export default PersonaM;

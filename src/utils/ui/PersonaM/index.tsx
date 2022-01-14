import React, { FC, useState, useRef } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Field, Formik, Form, FieldProps } from 'formik';
import ErrorMessage from '../error_messge';
import * as Yup from 'yup';
import {getPersonalInformation, newPersonalInformation, updatePersonalInformation} from './service';

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
    const title = modal_name ? modal_name : 'Datos basicos de la Persona ';
    const close = () => {
        set_is_visible(false);
    };

    const open = () => {
        !disabled && set_is_visible(true);
    };
    const initial_values = {
        id: '',
        documentType: '',
        documentNumber: '',
        names: { firstName: '', lastName: '' },
        surnames: { firstSurname: '', lastSurname: '' },
        email: '',
        phoneNumber: '',
        phoneNumber_ext: '',
        gender: '',
        ...persona,
    };
    const schema = Yup.object().shape({
        documentType: Yup.string().required('obligatorio'),
        documentNumber: Yup.number().required('obligatorio'),
        names: Yup.object({
            firstName: Yup.string().required('obligatorio'),
        }),
        surnames: Yup.object({
            firstSurname: Yup.string().required('obligatorio'),
        }),
        email: Yup.string().email().required('obligatorio'),
        phoneNumber: Yup.number().required('obligatorio'),
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
                            ? `${(persona && Object.values(persona?.names ?? {}).join(' ')) || ''} ${
                                  (persona && Object.values(persona?.surnames ?? {}).join(' ')) || ''
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
                width={1000}
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
                    {({ values, handleChange, setFieldValue }) => {
                        const getPersona = (type, documentNumber) => {
                            getPersonalInformation(type, documentNumber).then((res: any) => {
                                setFieldValue('names.firstName', res.first_name ?? '', false);
                                setFieldValue('names.lastName', res.last_name ?? '', false);
                                setFieldValue('surnames.firstSurname', res.first_surname ?? '', false);
                                setFieldValue('surnames.lastSurname', res.last_surname ?? '', false);
                                setFieldValue('email', res.email ?? '', false);
                                setFieldValue('phoneNumber', res.phone_number ?? '', false);
                                setFieldValue('phoneNumber_ext', res.phone_number_ext ?? '', false);
                                setFieldValue('gender', res.gender ?? '', false);
                                setFieldValue('id', res.id ?? '', false);
                            });
                        };
                        return (
                            <Form>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="id" className="form-label">
                                            Tipo de Documento
                                        </label>
                                        <Field
                                            as="select"
                                            className="form-select"
                                            id="documentType"
                                            name="documentType"
                                            autoComplete="off"
                                            disabled={disabled}
                                            onChange={(ev) => {
                                                ev.preventDefault();
                                                handleChange(ev);
                                                const id_t = ev.target.value;
                                                const id_n = values.documentNumber;
                                                if (id_n && id_t) {
                                                    getPersona(id_t, id_n);
                                                }
                                            }}
                                        >
                                            <option value="" hidden>
                                                --Tipo de Documento--
                                            </option>
                                            <option value="CC">Cédula de Ciudadanía</option>
                                            <option value="TI">Tarjeta de identidad</option>
                                            <option value="CE">Cédula de Extranjería</option>
                                            <option value="NIT">NIT</option>
                                        </Field>
                                        <ErrorMessage name="documentType" />
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor="username" className="form-label">
                                            Número de documento
                                        </label>
                                        <Field
                                            type="number"
                                            className="form-control"
                                            id="documentNumber"
                                            placeholder="Número de documento"
                                            name="documentNumber"
                                            autoComplete="off"
                                            disabled={disabled}
                                            onBlur={(ev) => {
                                                const id_n = ev.target.value;
                                                const id_t = values.documentType;
                                                if (id_n && id_t) {
                                                    getPersona(id_t, id_n);
                                                }
                                            }}
                                        />
                                        <ErrorMessage name="documentNumber" />
                                    </div>
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
                                            <option value="F">Femenino</option>
                                            <option value="M">Masculino</option>
                                            <option value="O">Intersexual</option>
                                            <option value="O">No Deseo Responder</option>
                                        </Field>
                                        <ErrorMessage name="gender" />
                                    </div>
                                </div>
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
                                        <div className="row">
                                            <label htmlFor="username" className="form-label">
                                                Teléfono
                                            </label>
                                            <div className="col-8">
                                                <Field
                                                    type="number"
                                                    className="form-control"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    placeholder="Teléfono"
                                                    autoComplete="off"
                                                    disabled={disabled}
                                                />
                                                <ErrorMessage name="phoneNumber" />
                                            </div>
                                            <div className="col-4">
                                                <Field
                                                    type="number"
                                                    className="form-control"
                                                    id="phoneNumber_ext"
                                                    name="phoneNumber_ext"
                                                    placeholder="Ext"
                                                    autoComplete="off"
                                                    disabled={disabled}
                                                />
                                                <ErrorMessage name="phoneNumber_ext" />
                                            </div>
                                        </div>
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
        if(value.hasOwnProperty("id") && value.id){
            updatePersonalInformation(value).then(res => {
                form.setFieldValue(field.name, res, false);
            })
        }else {
            newPersonalInformation(value).then(res => {
                form.setFieldValue(field.name, res, false);
            })
        }

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

import React, { FC, useEffect, useRef, useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Field, Form, Formik } from 'formik';
import Select from '../../../utils/ui/select';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import actions from './../../users/redux/actions';
import { create_notification } from '../../notificacions/redux/service';

interface ModalProps {
    onSave?: (values) => Promise<any>;
    disabled?: boolean;
    action?: string;
}

export const ModalNotificar: FC<ModalProps> = ({ /*onSave,*/ disabled, action }) => {
    const [is_visible, set_is_visible] = useState<boolean>(false);
    const open = () => !disabled && set_is_visible(true);
    const close = () => set_is_visible(false);
    const dispatch = useDispatch();
    const innerRef = useRef<any>();


    const roles: any[] = useSelector((store: any) => store.users.roles.value);

    useEffect(() => {
        dispatch(actions.getRolesList({}));
    }, [dispatch])




    const submit = async (values, form) => {
        if (values.toRole.length > 0) {
            await Promise.all(values.toRole.map(rol => create_notification({
                ...values,
                toRole: `${rol}`
            })))
        }

    };

    const initial_values = {
        subject: "",
        description: "",
        action: action || "",
        priority: 2,
        front: 1,
        toRole: ""
    };

    const schema = Yup.object().shape({
        subject: Yup.string().required('Campo obligatorio'),
        description: Yup.string().required('Campo obligatorio'),
        toRole: Yup.array().required('Campo obligatorio'),
    });

    return (
        <>
            <button type="button" className="btn btn-outline-primary" onClick={open}>
                Notificar
            </button>
            {/* <i className="fa fa-pencil" aria-hidden="true" onClick={open} style={{color: "#1FAEEF", border: '1px solid #000'}}/> */}
            <Modal
                footer={[
                    <div className="row tex-center">
                        <div className="col">
                            <button
                                type="submit"
                                className="btn btn-outline-primary "
                                key="1"
                                onClick={() => {
                                    innerRef.current.submitForm();
                                    // close();
                                }}
                            >
                                Notificar
                            </button>
                        </div>

                        <div className="col">
                            <button
                                type="submit"
                                className="btn btn-outline-primary"
                                key="2"
                                style={{ marginRight: 225 }}
                                onClick={() => {
                                    close();
                                }}
                            >
                                cancelar
                            </button>
                            ,
                        </div>
                    </div>,
                ]}
                title="Mensaje Nuevo"
                centered
                visible={is_visible}
                width={700}
                onCancel={close}
            >
                <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema} innerRef={innerRef} >
                    {({ values, isSubmitting, setFieldValue }) => {
                        return (
                            <Form>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="toRole_id" className="form-label">
                                            Roles a Notificar
                                        </label>
                                        <Field
                                            component={Select}
                                            id="toRole_id"
                                            name="toRole"
                                            placeholder="roles a notificar"
                                            disabled={disabled}
                                            mode="multiple"
                                            options={roles?.map((rol) => {
                                                return {
                                                    id: rol.id,
                                                    name: `${rol.role_name}`
                                                }
                                            })}
                                            showSearch // habilitar para buscarx

                                            filterOption={(input, option) => {
                                                return option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                            }}
                                        />
                                        <ErrorMessage name="toRole" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="subject_id" className="form-label">
                                            Asunto
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="subject_id"
                                            aria-describedby="asunto"
                                            name="subject"
                                            autoComplete="off"
                                            disabled={disabled}
                                            maxLength={50}
                                        />
                                        <ErrorMessage name="subject" withCount max={50} />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="description_id" className="form-label">
                                            Describe la información a modificar
                                        </label>
                                        <Field
                                            as="textarea"
                                            className="form-control"
                                            aria-describedby="emailHelp"
                                            disabled={disabled}
                                            autoComplete="off"
                                            id="description_id"
                                            name="description"
                                            placeholder="escriba su mensaje"
                                            maxLength={250}
                                            style={{ height: '80px' }}
                                        />
                                        <ErrorMessage name="description" withCount max={250} />
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

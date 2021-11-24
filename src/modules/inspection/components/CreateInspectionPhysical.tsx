import React from 'react';
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import InspectionPhysicalForm from './InspectionPhysicalForm';
import TableInspectionPhysycal from './TableInspectionPhysycal';
import ErrorMessage from '../../../utils/ui/error_messge';
import { Field, Form, Formik } from 'formik';

const CreateInspectionPhysical = () => {
    const history = useHistory();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <TableInspectionPhysycal />

                    <Card title="Servicios Publicos">
                        <Formik
                            enableReinitialize
                            onSubmit={() => {}}
                            initialValues={{
                                energy: {
                                    name: 'Energia',
                                    suscriptor: '',
                                    contador: '',
                                    status: '',
                                },
                                gas: {
                                    name: 'Gas',
                                    suscriptor: '',
                                    contador: '',
                                    status: '',
                                },
                                agua: {
                                    name: 'Agua',
                                    suscriptor: '',
                                    contador: '',
                                    status: '',
                                },
                                telefono: {
                                    name: 'Telefono',
                                    suscriptor: '',
                                    contador: '',
                                    status: '',
                                },
                            }}
                        >
                            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                                return (
                                    <Form>
                                        <div className="row">
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    Servicio
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    disabled={true}
                                                    name="energy.name"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="energy.name" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Suscriptor
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="energy.suscriptor"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="energy.suscriptor" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Contador
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="energy.contador"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="energy.contador" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_id" className="form-label">
                                                    Estado
                                                </label>
                                                <Field
                                                    name="energy.status"
                                                    id="enclosure_id"
                                                    as="select"
                                                    className="form-select"
                                                >
                                                    <option value="" hidden>
                                                        -- Seleccione estado --
                                                    </option>
                                                    <option value="Activo">Activo</option>
                                                    <option value="Inactivo">Inactivo</option>
                                                </Field>
                                                <ErrorMessage name="energy.status" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    Servicio
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    disabled={true}
                                                    name="gas.name"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="gas.name" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Suscriptor
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="gas.suscriptor"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="gas.suscriptor" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Contador
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="gas.contador"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="gas.contador" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_id" className="form-label">
                                                    Estado
                                                </label>
                                                <Field
                                                    name="gas.status"
                                                    id="enclosure_id"
                                                    as="select"
                                                    className="form-select"
                                                >
                                                    <option value="" hidden>
                                                        -- Seleccione estado --
                                                    </option>
                                                    <option value="Activo">Activo</option>
                                                    <option value="Inactivo">Inactivo</option>
                                                </Field>
                                                <ErrorMessage name="gas.status" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    Servicio
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    disabled={true}
                                                    name="agua.name"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="agua.name" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Suscriptor
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="agua.suscriptor"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="agua.suscriptor" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Contador
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="agua.contador"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="agua.contador" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_id" className="form-label">
                                                    Estado
                                                </label>
                                                <Field
                                                    name="agua.status"
                                                    id="enclosure_id"
                                                    as="select"
                                                    className="form-select"
                                                >
                                                    <option value="" hidden>
                                                        -- Seleccione estado --
                                                    </option>
                                                    <option value="Activo">Activo</option>
                                                    <option value="Inactivo">Inactivo</option>
                                                </Field>
                                                <ErrorMessage name="agua.status" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    Servicio
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    disabled={true}
                                                    name="telefono.name"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="telefono.name" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Suscriptor
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="telefono.suscriptor"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="telefono.suscriptor" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_prev_id" className="form-label">
                                                    N° de Contador
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="enclosure_prev_id"
                                                    className="form-control"
                                                    name="telefono.contador"
                                                    autoComplete="off"
                                                />
                                                <ErrorMessage name="telefono.contador" />
                                            </div>
                                            <div className="form-group col-3">
                                                <label htmlFor="enclosure_id" className="form-label">
                                                    Estado
                                                </label>
                                                <Field
                                                    name="telefono.status"
                                                    id="enclosure_id"
                                                    as="select"
                                                    className="form-select"
                                                >
                                                    <option value="" hidden>
                                                        -- Seleccione estado --
                                                    </option>
                                                    <option value="Activo">Activo</option>
                                                    <option value="Inactivo">Inactivo</option>
                                                </Field>
                                                <ErrorMessage name="telefono.status" />
                                            </div>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Card>

                    <Card
                        title={
                            <>
                                <div className="row">
                                    <b className="col-3">Estado anterior</b>
                                    <b className="col-4">Estado actual del bien inmueble</b>
                                </div>
                            </>
                        }
                    >
                        <InspectionPhysicalForm />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateInspectionPhysical;

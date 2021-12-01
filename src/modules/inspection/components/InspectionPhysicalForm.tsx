import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import ErrorMessage from '../../../utils/ui/error_messge';
import { Properties } from '../custom_types';
interface InspectionPhysicalFormProps {
    properties: Properties[];
    obs: string;
}
const InspectionPhysicalForm: FC<InspectionPhysicalFormProps> = ({ properties, obs }) => {
    const initialValues = {
        properties: properties || [
            {
                name: 'Pintura exterior',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Cubierta o techo',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Pisos',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Enchapes de baño y/o cocina',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Pintura interior',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Ventanas',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Puerta principal',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Cerraduras puerta principal',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Puertas interiores',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Cerraduras puertas interiores',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Rejas de seguridad',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Paredes',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Escaleras',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Aparatos sanitarios',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Orinales',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Griferías y abastos',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Lavamanos',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Rejillas desagüe',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Sistema eléctronico',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Acometidas eléctricas',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Cerramiento',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
            {
                name: 'Fachada',
                status_property: '',
                observation: '',
                accountant: '',
                status: '',
            },
        ],
        observations: obs || '',
    };

    const submit = (values, actions) => {
        // onSubmit(values, actions).then(() => {
        //     actions.setSubmitting(false);
        //     actions.resetForm();
        // });
    };

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues}>
            {({ values }) => {
                return (
                    <Form>
                        {values.properties.map((property, i) => (
                            <div className="row" key={i}>
                                <div className="form-group col-3">
                                    <label htmlFor="enclosure_prev_id" className="form-label">
                                        {property.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="enclosure_prev_id"
                                        className="form-control"
                                        disabled
                                        value={values.properties[i].status_property}
                                        autoComplete="off"
                                    />
                                    <ErrorMessage name={`properties[${i}].status_property`} />
                                </div>
                                <div className="form-group col-3">
                                    <label htmlFor="enclosure_id" className="form-label">
                                        {property.name}
                                    </label>
                                    <Field
                                        name={`properties[${i}].status_property`}
                                        id="enclosure_id"
                                        as="select"
                                        className="form-select"
                                    >
                                        <option value="" hidden>
                                            -- Seleccione estado --
                                        </option>
                                        <option value="Bueno">Bueno</option>
                                        <option value="Regular">Regular</option>
                                        <option value="Malo">Malo</option>
                                        <option value="No aplica">No aplica</option>
                                    </Field>
                                    <ErrorMessage name={`properties[${i}].status_property`} />
                                </div>
                                <div className="col">
                                    <label htmlFor="enclosure_obligations_id" className="form-label">
                                        Obligaciones {property.name}
                                    </label>
                                    <Field
                                        as="textarea"
                                        className="form-control"
                                        id="enclosure_obligations_id"
                                        name={`properties[${i}].observation`}
                                        autoComplete="off"
                                        maxLength={250}
                                        style={{ height: '20px' }}
                                    />
                                    <ErrorMessage name="enclosure_obligations" withCount max={250} />
                                </div>
                            </div>
                        ))}

                        <div className="row">
                            <div className="col">
                                <label htmlFor="observations_id" className="form-label">
                                    Observeciones
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="observations_id"
                                    name="observations"
                                    placeholder="Agrega observaciones sobre este bien inmueble"
                                    autoComplete="off"
                                    maxLength={240}
                                />
                                <ErrorMessage name="observations" withCount max={240} />
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default InspectionPhysicalForm;

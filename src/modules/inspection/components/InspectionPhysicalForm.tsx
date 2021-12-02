import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import ErrorMessage from '../../../utils/ui/error_messge';
import { Properties } from '../custom_types';
import { log } from 'util';
interface InspectionPhysicalFormProps {
    properties: Properties[];
    obs: string;
    formik: any;
}
const InspectionPhysicalForm: FC<InspectionPhysicalFormProps> = ({ properties, obs, formik }) => {
    return (
        <>
            {formik.values.properties.map((property, i) => (
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
                            value={formik.values.properties[i].status_property}
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
        </>
    );
};

export default InspectionPhysicalForm;

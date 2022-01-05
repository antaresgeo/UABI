import { Field } from 'formik';
import React, { FC } from 'react';
import ErrorMessage from '../../../utils/ui/error_messge';
import { Properties } from '../custom_types';
import DocumentModal from '../../../utils/components/DocumentsModal';
interface InspectionPhysicalFormProps {
    properties: Properties[];
    obs: string;
    formik: any;
}
const InspectionPhysicalForm: FC<InspectionPhysicalFormProps> = ({ properties, obs, formik }) => {
    return (
        <>
            {formik.values.properties.map((property, i) => {
                const p = formik.values.properties[i];
                const show_upload = p.status_property === 'Malo' || p.status_property === 'Regular';
                const old_p = properties.find((op) => op.name === p.name);
                console.log(old_p);
                return (
                    <div className="row" key={i}>
                        <div className={`form-group col${show_upload ? '-3' : '-6'}`}>
                            <label htmlFor="enclosure_prev_id" className="form-label">
                                {property.name}
                            </label>
                            <input
                                type="text"
                                id="enclosure_prev_id"
                                className="form-control"
                                disabled
                                value={old_p?.status_property}
                                autoComplete="off"
                            />
                            <ErrorMessage name={`properties[${i}].status_property`} />
                        </div>
                        <div className={`form-group col${show_upload ? '-3' : '-6'}`}>
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

                        {show_upload && (
                            <div className="col-6">
                                <label htmlFor="form-select" className="form-label">
                                    Imagen
                                </label>
                                <Field name={`properties[${i}].image`} component={DocumentModal} btn_label="Adjuntar" />
                                <ErrorMessage name={`properties[${i}].image`} />
                            </div>
                        )}

                        <div className="col-6">
                            <label htmlFor="enclosure_obligations_id" className="form-label">
                                Observaciones anteriores de {property.name}
                            </label>
                            <Field
                                as="textarea"
                                className="form-control"
                                id="enclosure_obligations_id"
                                value={old_p.observation}
                                autoComplete="off"
                                maxLength={250}
                                style={{ height: '20px' }}
                                disabled
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="enclosure_obligations_id" className="form-label">
                                Observaciones {property.name}
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
                );
            })}

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

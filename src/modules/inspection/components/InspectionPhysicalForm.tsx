import { Field, Form, Formik } from 'formik';
import React from 'react'
import ErrorMessage from '../../../utils/ui/error_messge';

const InspectionPhysicalForm = () => {
    const initialValues = {
        enclosure_prev: "",
        enclosure: "",
        enclosure_obligations: "",
        facade_prev: "",
        facade: "",
        facade_obligations: "",
        exterior_painting_prev: "",
        exterior_painting: "",
        exterior_paint_obligations: "",
        ceiling_prev: "",
        ceiling: "",
        ceiling_obligations: "",
        floors_prev: "",
        floors: "",
        obligations_flats: "",
        veneers_prev: "",
        veneers: "",
        veneer_obligations: "",
        interior_painting_prev: "",
        interior_painting: "",
        interior_painting_obligations: "",
        Windows_prev: "",
        Windows: "",
        windows_obligations: "",
        front_door_prev: "",
        front_door: "",
        front_door_obligations: "",
        main_locks_prev: "",
        main_locks: "",
        main_locks_obligations: "",
        interior_doors_prev: "",
        interior_doors: "",
        interior_doors_obligations: "",
        interior_locks_prev: "",
        interior_locks: "",
        interior_locks_obligations: "",
        security_bars_prev: "",
        security_bars: "",
        obligations_security_bars: "",
        walls_prev: "",
        walls: "",
        obligations_walls: "",
        ladders_prev: "",
        ladders: "",
        stairs_obligations: "",
        Sanitary_equipments_prev: "",
        Sanitary_equipments: "",
        Sanitary_equipments_obligations: "",
        urinals_prev: "",
        urinals: "",
        urinals_obligations: "",
        taps_prev: "",
        taps: "",
        Taps_obligations: "",
        washbasin_prev: "",
        washbasin: "",
        washbasin_obligations: "",
        drain_grates_prev: "",
        drain_grates: "",
        drain_grates_obligations: "",
        electronic_system_prev: "",
        electronic_system: "",
        electronic_system_obligations: "",
        electrical_connections_prev: "",
        electrical_connections: "",
        electrical_connection_obligations: "",
        observations: ""
    };
    const submit = (values, actions) => {
        // onSubmit(values, actions).then(() => {
        //     actions.setSubmitting(false);
        //     actions.resetForm();
        // });

    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues}>
            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="enclosure_prev_id" className="form-label">
                                    Cerramiento
                                </label>
                                <Field
                                    type="text"
                                    id="enclosure_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="enclosure_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="enclosure_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="enclosure_id" className="form-label">
                                    Cerramiento
                                </label>
                                <Field name="enclosure" id="enclosure_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="enclosure" />
                            </div>
                            <div className="col">
                                <label htmlFor="enclosure_obligations_id" className="form-label">
                                    Obligaciones cerramiento
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="enclosure_obligations_id"
                                    name="enclosure_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="enclosure_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="facade_prev_id" className="form-label">
                                    Fachada
                                </label>
                                <Field
                                    type="text"
                                    name="facade_prev"
                                    id="facade_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    autoComplete="off"
                                >
                                </Field>
                                <ErrorMessage name="facade_prev_id" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="facade_id" className="form-label">
                                    Fachada
                                </label>
                                <Field name="facade" id="facade_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>

                                </Field>
                                <ErrorMessage name="facade" />
                            </div>
                            <div className="col">
                                <label htmlFor="facade_obligations_id" className="form-label">
                                    Obligaciones fachada
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="facade_obligations_id"
                                    name="facade_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="facade_obligations_id" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="exterior_painting_prev_id" className="form-label">
                                    Pintura exterior
                                </label>
                                <Field
                                    type="text"
                                    id="exterior_painting_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="exterior_painting_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="exterior_painting_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="exterior_painting_id" className="form-label">
                                    Pintura exterior
                                </label>
                                <Field name="exterior_painting" id="exterior_painting_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="exterior_painting" />
                            </div>
                            <div className="col">
                                <label htmlFor="exterior_paint_obligations_id" className="form-label">
                                    Obligaciones pintura exterior
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="exterior_paint_obligations_id"
                                    name="exterior_paint_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="exterior_paint_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="ceiling_prev_id" className="form-label">
                                    Cubierta o techo
                                </label>
                                <Field
                                    type="text"
                                    id="ceiling_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="ceiling_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="ceiling_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="ceiling_id" className="form-label">
                                    Cubierta o techo
                                </label>
                                <Field name="ceiling" id="ceiling_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="ceiling" />
                            </div>
                            <div className="col">
                                <label htmlFor="ceiling_obligations_id" className="form-label">
                                    Obligaciones cubierta o techo
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="ceiling_obligations_id"
                                    name="ceiling_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="ceiling_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="floors_prev_id" className="form-label">
                                    Pisos
                                </label>
                                <Field
                                    type="text"
                                    id="floors_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="floors_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="floors_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="floors_id" className="form-label">
                                    Pisos
                                </label>
                                <Field name="floors" id="floors_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="floors" />
                            </div>
                            <div className="col">
                                <label htmlFor="obligations_flats_id" className="form-label">
                                    Obligaciones pisos
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="obligations_flats_id"
                                    name="obligations_flats"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="obligations_flats" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="veneers_prev_id" className="form-label">
                                    Enchapes de baño y/o cocina
                                </label>
                                <Field
                                    type="text"
                                    id="veneers_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="veneers_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="veneers_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="veneers_id" className="form-label">
                                    Enchapes de baño y/o cocina
                                </label>
                                <Field name="veneers" id="veneers_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="veneers" />
                            </div>
                            <div className="col">
                                <label htmlFor="veneer_obligations_id" className="form-label">
                                    Obligaciones enchapes de baño y/o cocina
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="veneer_obligations_id"
                                    name="veneer_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="veneer_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="interior_painting_prev_id" className="form-label">
                                    Pintura interior
                                </label>
                                <Field
                                    type="text"
                                    id="interior_painting_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="interior_painting_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="interior_painting_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="interior_painting_id" className="form-label">
                                    Pintura interior
                                </label>
                                <Field name="interior_painting" id="interior_painting_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="interior_painting" />
                            </div>
                            <div className="col">
                                <label htmlFor="interior_painting_obligations_id" className="form-label">
                                    Obligaciones pintura interior
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="interior_painting_obligations_id"
                                    name="interior_painting_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="interior_painting_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="Windows_prev_id" className="form-label">
                                    Ventanas
                                </label>
                                <Field
                                    type="text"
                                    id="Windows_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="Windows_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="Windows_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="Windows_id" className="form-label">
                                    Ventanas
                                </label>
                                <Field name="Windows" id="Windows_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="Windows" />
                            </div>
                            <div className="col">
                                <label htmlFor="windows_obligations_id" className="form-label">
                                    obligaciones ventanas
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="windows_obligations_id"
                                    name="windows_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="windows_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="front_door__prev_id" className="form-label">
                                    Puerta principal
                                </label>
                                <Field
                                    type="text"
                                    id="front_door__prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="front_door__prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="front_door__prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="front_door_id" className="form-label">
                                    Puerta principal
                                </label>
                                <Field name="front_door" id="front_door_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="front_door" />
                            </div>
                            <div className="col">
                                <label htmlFor="front_door_obligations_id" className="form-label">
                                    Obligaciones puerta principal
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="front_door_obligations_id"
                                    name="front_door_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="front_door_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="main_locks_prev_id" className="form-label">
                                    Cerraduras puerta principal
                                </label>
                                <Field
                                    type="text"
                                    id="main_locks_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="main_locks_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="main_locks_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="main_locks_id" className="form-label">
                                    Cerraduras puerta principal
                                </label>
                                <Field name="main_locks" id="main_locks_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="main_locks" />
                            </div>
                            <div className="col">
                                <label htmlFor="main_locks_obligations_id" className="form-label">
                                    obligaciones cerraduras puerta principal
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="main_locks_obligations_id"
                                    name="main_locks_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="main_locks_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="interior_doors_prev_id" className="form-label">
                                    Puertas interiores
                                </label>
                                <Field
                                    type="text"
                                    id="interior_doors_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="interior_doors_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="interior_doors_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="interior_doors_id" className="form-label">
                                    Puertas interiores
                                </label>
                                <Field name="interior_doors" id="interior_doors_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="interior_doors" />
                            </div>
                            <div className="col">
                                <label htmlFor="interior_doors_obligations_id" className="form-label">
                                    Obligaciones puertas interiores
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="interior_doors_obligations_id"
                                    name="interior_doors_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="interior_doors_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="interior_locks_prev_id" className="form-label">
                                    Cerraduras puertas interiores
                                </label>
                                <Field
                                    type="text"
                                    id="interior_locks_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="interior_locks_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="interior_locks_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="interior_locks_id" className="form-label">
                                    Cerraduras puertas interiores
                                </label>
                                <Field name="interior_locks" id="interior_locks_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="interior_locks" />
                            </div>
                            <div className="col">
                                <label htmlFor="interior_locks_obligations_id" className="form-label">
                                    Obligaciones cerraduras puertas interiores
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="interior_locks_obligations_id"
                                    name="interior_locks_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="interior_locks_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="security_bars_prev_id" className="form-label">
                                    Rejas de seguridad
                                </label>
                                <Field
                                    type="text"
                                    id="security_bars_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="security_bars_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="security_bars_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="security_bars_id" className="form-label">
                                    Rejas de seguridad
                                </label>
                                <Field name="security_bars" id="security_bars_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="security_bars" />
                            </div>
                            <div className="col">
                                <label htmlFor="obligations_security_bars_id" className="form-label">
                                    Obligaciones rejas de seguridad
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="obligations_security_bars_id"
                                    name="obligations_security_bars"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="obligations_security_bars" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="walls_prev_id" className="form-label">
                                    Paredes
                                </label>
                                <Field
                                    type="text"
                                    id="walls_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="walls_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="walls_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="walls_id" className="form-label">
                                    Paredes
                                </label>
                                <Field name="walls" id="walls_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="walls" />
                            </div>
                            <div className="col">
                                <label htmlFor="obligations_walls_id" className="form-label">
                                    Obligaciones paredes
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="obligations_walls_id"
                                    name="obligations_walls"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="obligations_walls" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="ladders_prev_id" className="form-label">
                                    Escaleras
                                </label>
                                <Field
                                    type="text"
                                    id="ladders_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="ladders_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="ladders_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="ladders_id" className="form-label">
                                    Escaleras
                                </label>
                                <Field name="ladders" id="ladders_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="ladders" />
                            </div>
                            <div className="col">
                                <label htmlFor="stairs_obligations_id" className="form-label">
                                    Obligaciones escaleras
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="stairs_obligations_id"
                                    name="stairs_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="stairs_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="Sanitary_equipments_prev_id" className="form-label">
                                    Aparatos sanitarios
                                </label>
                                <Field
                                    type="text"
                                    id="Sanitary_equipments_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="Sanitary_equipments_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="Sanitary_equipments_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="Sanitary_equipments_id" className="form-label">
                                    Aparatos sanitarios
                                </label>
                                <Field name="Sanitary_equipments" id="Sanitary_equipments_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="Sanitary_equipments" />
                            </div>
                            <div className="col">
                                <label htmlFor="Sanitary_equipments_obligations_id" className="form-label">
                                    Obligaciones aparatos sanitarios
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="Sanitary_equipments_obligations_id"
                                    name="Sanitary_equipments_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="Sanitary_equipments_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="urinals_prev_id" className="form-label">
                                    Orinales
                                </label>
                                <Field
                                    type="text"
                                    id="urinals_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="urinals_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="urinals_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="urinals_id" className="form-label">
                                    Orinales
                                </label>
                                <Field name="urinals" id="urinals_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="urinals" />
                            </div>
                            <div className="col">
                                <label htmlFor="urinals_obligations_id" className="form-label">
                                    Obligaciones orinales
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="urinals_obligations_id"
                                    name="urinals_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="urinals_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="taps_prev_id" className="form-label">
                                    Griferías y abastos
                                </label>
                                <Field
                                    type="text"
                                    id="taps_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="taps_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="taps_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="taps_id" className="form-label">
                                    Griferías y abastos
                                </label>
                                <Field name="taps" id="taps_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="taps" />
                            </div>
                            <div className="col">
                                <label htmlFor="Taps_obligations_id" className="form-label">
                                    Obligaciones griferías y abastos
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="Taps_obligations_id"
                                    name="Taps_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="Taps_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="washbasin_prev_id" className="form-label">
                                    Lavamanos
                                </label>
                                <Field
                                    type="text"
                                    id="washbasin_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="washbasin_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="washbasin_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="washbasin_id" className="form-label">
                                    Lavamanos
                                </label>
                                <Field name="washbasin" id="washbasin_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="washbasin" />
                            </div>
                            <div className="col">
                                <label htmlFor="washbasin_obligations_id" className="form-label">
                                    Obligaciones Lavamanos
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="washbasin_obligations_id"
                                    name="washbasin_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="washbasin_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="drain_grates_prev_id" className="form-label">
                                    Rejillas desagüe
                                </label>
                                <Field
                                    type="text"
                                    id="drain_grates_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="drain_grates_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="drain_grates_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="drain_grates_id" className="form-label">
                                    Rejillas desagüe
                                </label>
                                <Field name="drain_grates" id="drain_grates_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="drain_grates" />
                            </div>
                            <div className="col">
                                <label htmlFor="drain_grates_obligations_id" className="form-label">
                                    Obligaciones rejillas desagüe
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="drain_grates_obligations_id"
                                    name="drain_grates_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="drain_grates_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="electronic_system_prev_id" className="form-label">
                                    Sistema eléctronico
                                </label>
                                <Field
                                    type="text"
                                    id="electronic_system_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="electronic_system_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="electronic_system_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="electronic_system_id" className="form-label">
                                    Sistema eléctronico
                                </label>
                                <Field name="electronic_system" id="electronic_system_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="electronic_system" />
                            </div>
                            <div className="col">
                                <label htmlFor="electronic_system_obligations_id" className="form-label">
                                    Obligaciones sistema eléctronico
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="electronic_system_obligations_id"
                                    name="electronic_system_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="electronic_system_obligations" withCount max={250} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-3">
                                <label htmlFor="electrical_connections_prev_id" className="form-label">
                                    Sistema eléctronico
                                </label>
                                <Field
                                    type="text"
                                    id="electrical_connections_prev_id"
                                    className="form-control"
                                    disabled={true}
                                    name="electrical_connections_prev"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="electrical_connections_prev" />
                            </div>
                            <div className="form-group col-3">
                                <label htmlFor="electrical_connections_id" className="form-label">
                                    Acometidas eléctricas
                                </label>
                                <Field name="electrical_connections" id="electrical_connections_id" as="select" className="form-select">
                                    <option value="" hidden>
                                        -- Seleccione estado --
                                    </option>
                                    <option value="Bueno">Bueno</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Malo">Malo</option>
                                    <option value="No aplica">No aplica</option>
                                </Field>
                                <ErrorMessage name="electrical_connections" />
                            </div>
                            <div className="col">
                                <label htmlFor="electrical_connection_obligations_id" className="form-label">
                                    Obligaciones acometidas eléctricas
                                </label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    id="electrical_connection_obligations_id"
                                    name="electrical_connection_obligations"
                                    //disabled={disabled}
                                    autoComplete="off"
                                    maxLength={250}
                                    style={{ height: '20px' }}
                                />
                                <ErrorMessage name="electrical_connection_obligations" withCount max={250} />
                            </div>
                        </div>
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
                                    //disabled={disabled}
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
    )
}

export default InspectionPhysicalForm

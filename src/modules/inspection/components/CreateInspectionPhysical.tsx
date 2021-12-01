import React, { FC } from 'react';
import { Card } from '../../../utils/ui';
import { useHistory } from 'react-router-dom';
import InspectionPhysicalForm from './InspectionPhysicalForm';
import TableInspectionPhysycal from './TableInspectionPhysycal';
import ErrorMessage from '../../../utils/ui/error_messge';
import { Field, Form, Formik } from 'formik';
import { PhysicalInspection } from '../custom_types';
interface CreateInspectionPhysicalProps {
    physical_inspection: PhysicalInspection;
}
const CreateInspectionPhysical: FC<CreateInspectionPhysicalProps> = ({ physical_inspection }) => {
    const history = useHistory();

    const inicial_values = {
        public_services: physical_inspection?.public_services || [
            { name: 'Energia', subscriber: '', accountant: '', status: '' },
            { name: 'Gas', subscriber: '', accountant: '', status: '' },
            { name: 'Agua', subscriber: '', accountant: '', status: '' },
            { name: 'Telefono', subscriber: '', accountant: '', status: '' },
        ],
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <TableInspectionPhysycal />

                    <Card title="Servicios Publicos">
                        <Formik enableReinitialize onSubmit={() => {}} initialValues={inicial_values}>
                            {({ isSubmitting, setFieldValue, values, handleChange }) => {
                                return (
                                    <Form>
                                        {values.public_services.map((service, i) => (
                                            <div className="row" key={i}>
                                                <div className="form-group col-3">
                                                    <label htmlFor="enclosure_prev_id" className="form-label">
                                                        Servicio
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="enclosure_prev_id"
                                                        className="form-control"
                                                        disabled={true}
                                                        name={`public_services[${i}].name`}
                                                        autoComplete="off"
                                                    />
                                                    <ErrorMessage name={`public_services[${i}].name`} />
                                                </div>
                                                <div className="form-group col-3">
                                                    <label htmlFor="enclosure_prev_id" className="form-label">
                                                        N° de Suscriptor
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="enclosure_prev_id"
                                                        className="form-control"
                                                        name={`public_services[${i}].subscriber`}
                                                        autoComplete="off"
                                                    />
                                                    <ErrorMessage name={`public_services[${i}].subscriber`} />
                                                </div>
                                                <div className="form-group col-3">
                                                    <label htmlFor="enclosure_prev_id" className="form-label">
                                                        N° de Contador
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        id="enclosure_prev_id"
                                                        className="form-control"
                                                        name={`public_services[${i}].accountant`}
                                                        autoComplete="off"
                                                    />
                                                    <ErrorMessage name={`public_services[${i}].accountant`} />
                                                </div>
                                                <div className="form-group col-3">
                                                    <label htmlFor="enclosure_id" className="form-label">
                                                        Estado
                                                    </label>
                                                    <Field
                                                        name={`public_services[${i}].status`}
                                                        id="enclosure_id"
                                                        as="select"
                                                        className="form-select"
                                                    >
                                                        <option value="" hidden>
                                                            -- Seleccione estado --
                                                        </option>
                                                        <option value={1}>Activo</option>
                                                        <option value={2}>Inactivo</option>
                                                    </Field>
                                                    <ErrorMessage name={`public_services[${i}].status`} />
                                                </div>
                                            </div>
                                        ))}
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
                        <InspectionPhysicalForm properties={physical_inspection?.properties} obs={physical_inspection?.observations.observation} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateInspectionPhysical;

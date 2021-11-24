import { Field, Form, Formik } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';

interface DispositionFormPros {
    dispositionType: string;
}

export const FormDisposition: FC<DispositionFormPros> = ({ dispositionType }) => {
    const initialValues = {
    };

    const submit = (values, actions) => {
    };

    const schema = Yup.object().shape({
    });
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} validationSchema={schema} >
            <Form>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="type_use_id" className="form-label">
                            nombre Bien Inmueble
                        </label>
                        <Field
                            type="text"
                            id="type_use_id"
                            name="type_use"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="active_type_id" className="form-label">
                            comnuna / Barrio
                        </label>
                        <Field
                            type="text"
                            id="active_type_id"
                            name="active_type"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="active_type_id" className="form-label">
                            CBML
                        </label>
                        <Field
                            type="text"
                            id="active_type_id"
                            name="active_type"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="active_type_id" className="form-label">
                            Código Activo Sap
                        </label>
                        <Field
                            type="text"
                            id="active_type_id"
                            name="active_type"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="active_type_id" className="form-label">
                            dirección
                        </label>
                        <Field
                            type="text"
                            id="active_type_id"
                            name="active_type"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="active_type_id" className="form-label">
                            área
                        </label>
                        <Field
                            type="text"
                            id="active_type_id"
                            name="active_type"
                            className="form-control"
                        />
                    </div>
                    {(dispositionType !== "autorizaciones") &&
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                avaluo
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                    }
                    {(dispositionType !== "ventas" && dispositionType !== "autorizaciones" ) &&
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                tipología
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                    }
                </div>
                <div className="row">
                    {(dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                Inspección
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                    }
                    {(dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                Número contrato
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                    }
                    {(dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                Fecha terminación contrato
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                    }
                    {(dispositionType !== "Comodato" && dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas" && dispositionType !== "autorizaciones") &&
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                Ultimo canon de arrendamiento
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                    }
                </div>
                {(dispositionType !== "Comodato" && dispositionType !== "AEP" && dispositionType !== "MTEP" && dispositionType !== "Dependencias" && dispositionType !== "ventas") &&
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                Valor de aprovechamiento
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                        <div className="col-3">
                            <label htmlFor="active_type_id" className="form-label">
                                Valor autorización
                            </label>
                            <Field
                                type="text"
                                id="active_type_id"
                                name="active_type"
                                className="form-control"
                            />
                        </div>
                    </div>
                }

            </Form>
        </Formik>
    )
}

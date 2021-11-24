import { Field } from 'formik';
import ErrorMessage from '../../../../../utils/ui/error_messge'
import Tooltip from 'antd/lib/tooltip';
import { FC } from 'react';

interface FormProps {
    formik: any;

}

export const FormRiskAnalysis: FC<FormProps> = ({ formik }) => {
    return (
        <>
            <h5 className="div">Riesgo regulatorio</h5>
            <hr />
            <div className="row">
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        Grado de Ocurrencia
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}

                    >
                        <option key="public_service" value="" disabled>
                            --Seleccione grado de ocurrencia--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        Grado de Impacto
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}

                    >
                        <option key="public_service" value="" disabled>
                            --Seleccione grado de Impacto--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        Responsable
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}

                    >
                        <option key="public_service" value="" disabled>
                            --Seleccione el resposable--
                        </option>
                        <option key="Contratista" value="Contratista">Contratista</option>
                        <option key="municipio" value="municipio">municipio</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="description_id" className="form-label">
                        Descripción
                    </label>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="description_id"
                        aria-describedby="emailHelp"
                        placeholder="Descripción riesgo regulatorio"
                        name="description"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="description" withCount max={200} />
                </div>
            </div>
            <h5 className="div">Riesgos Operativos</h5>
            <hr />
            <div className="row">
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        Grado de Ocurrencia
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}

                    >
                        <option key="public_service" value="" disabled>
                            --Seleccione grado de ocurrencia--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        Grado de Impacto
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}

                    >
                        <option key="public_service" value="" disabled>
                            --Seleccione grado de Impacto--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
                <div className="col-4">
                    <label htmlFor="public_service_id" className="form-label">
                        Responsable
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="public_service_id"
                        name="public_service"
                        disabled={false}

                    >
                        <option key="public_service" value="" disabled>
                            --Seleccione el resposable--
                        </option>
                        <option key="Contratista" value="Contratista">Contratista</option>
                        <option key="municipio" value="municipio">municipio</option>

                    </Field>
                    <ErrorMessage name="public_service" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="description_id" className="form-label">
                        Descripción
                    </label>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="description_id"
                        aria-describedby="emailHelp"
                        placeholder="Descripción riesgos operativos"
                        name="description"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="description" withCount max={200} />
                </div>
            </div>
        </>
    )
}

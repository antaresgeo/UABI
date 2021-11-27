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
            <div className="row">
                <div className="col-2 text-center" style={{marginTop: 30, fontSize: '14px', fontWeight: 'bold'}}>Riesgo regulatorio</div>
                <div className="col-3">
                    <label htmlFor="regulatory_degree_occurrence_id" className="form-label">
                        Grado de Ocurrencia
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="regulatory_degree_occurrence_id"
                        name="regulatory_degree_occurrence"
                        disabled={false}

                    >
                        <option key="regulatory" value="" disabled>
                            --Seleccione grado de ocurrencia--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="regulatory_degree_occurrence" />
                </div>
                <div className="col-3">
                    <label htmlFor="regulatory_impact_degree_id" className="form-label">
                        Grado de Impacto
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="regulatory_impact_degree_id"
                        name="regulatory_impact_degree"
                        disabled={false}

                    >
                        <option key="regulatory_impact" value="" disabled>
                            --Seleccione grado de Impacto--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="regulatory_impact_degree" />
                </div>
                <div className="col-4">
                    <label htmlFor="regulatory_responsable_id" className="form-label">
                        Responsable
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="regulatory_responsable_id"
                        name="regulatory_responsable"
                        disabled={false}

                    >
                        <option key="regulatory_responsable_id" value="" disabled>
                            --Seleccione el resposable--
                        </option>
                        <option key="Contratista" value="Contratista">Contratista</option>
                        <option key="municipio" value="municipio">municipio</option>

                    </Field>
                    <ErrorMessage name="regulatory_responsable" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="regulatory_description_id" className="form-label">
                        Descripción
                    </label>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="regulatory_description_id"
                        name="regulatory_description"
                        aria-describedby="emailHelp"
                        placeholder="Descripción riesgo regulatorio"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="regulatory_description" withCount max={200} />
                </div>
            </div>
            <h5 className="div">Riesgos Operativos</h5>
            <hr />
            <div className="row">
                <div className="col-4">
                    <label htmlFor="operative_degree_occurrence_id" className="form-label">
                        Grado de Ocurrencia
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="operative_degree_occurrence_id"
                        name="operative_degree_occurrence"
                        disabled={false}

                    >
                        <option key="operative_degree_occurrence" value="" disabled>
                            --Seleccione grado de ocurrencia--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="operative_degree_occurrence" />
                </div>
                <div className="col-4">
                    <label htmlFor="operative_impact_degree_id" className="form-label">
                        Grado de Impacto
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="operative_impact_degree_id"
                        name="operative_impact_degree"
                        disabled={false}

                    >
                        <option key="operative_impact_degree" value="" disabled>
                            --Seleccione grado de Impacto--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="operative_impact_degree" />
                </div>
                <div className="col-4">
                    <label htmlFor="operative_responsable_id" className="form-label">
                        Responsable
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="operative_responsable_id"
                        name="operative_responsable"
                        disabled={false}

                    >
                        <option key="operative_responsable" value="" disabled>
                            --Seleccione el resposable--
                        </option>
                        <option key="Contratista" value="Contratista">Contratista</option>
                        <option key="municipio" value="municipio">municipio</option>

                    </Field>
                    <ErrorMessage name="operative_responsable" />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="operative_description_id" className="form-label">
                        Descripción
                    </label>
                    <Field
                        as="textarea"
                        className="form-control"
                        id="operative_description_id"
                        name="operative_description"
                        aria-describedby="emailHelp"
                        placeholder="Descripción riesgos operativos"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="operative_description" withCount max={200} />
                </div>
            </div>
        </>
    )
}

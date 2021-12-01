import { Field } from 'formik'
import React, { FC } from 'react'
import ErrorMessage from './../../../../utils/ui/error_messge';

interface FormProps {
    formik: any;

}

export const FormRiskAnalysis: FC<FormProps> = ({ formik })=> {
    return (
        <>
            <div className="div"style={{fontWeight: 'bold', fontSize: '14px'}}>Análisis riesgos regulatorio</div>
            <hr />
            <div className="row">
                {/* <div className="col-2 text-center" style={{marginTop: 30, fontSize: '14px', fontWeight: 'bold'}}>Riesgo regulatorio</div> */}
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
                            -- Seleccionar --
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
                            -- Seleccionar --
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="regulatory_impact_degree" />
                </div>
                <div className="col-6">
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
                            -- Seleccionar --
                        </option>
                        <option key="Contratista" value="Contratista">Contratista</option>
                        <option key="municipio" value="municipio">municipio</option>

                    </Field>
                    <ErrorMessage name="regulatory_responsable" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="regulatory_description_id" className="form-label">
                        Descripción
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="regulatory_description_id"
                        name="regulatory_description"
                        placeholder=""
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="regulatory_description" withCount max={200} />
                </div>
                <div className="col-6">
                    <label htmlFor="regulatory_description_id" className="form-label">
                        Mecanismo de mitigación
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="regulatory_description_id"
                        name="regulatory_description"
                        placeholder=""
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="regulatory_description" withCount max={200} />
                </div>
            </div>
            <div className="div" style={{fontWeight: 'bold', marginTop: '10px', fontSize: '14px'}}>Análisis riesgos operativos</div>
            <hr />
            <div className="row">
                <div className="col-3">
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
                            --Seleccionar--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="operative_degree_occurrence" />
                </div>
                <div className="col-3">
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
                            --Seleccionar--
                        </option>
                        <option key="muy bajo" value="muy ">muy bajo</option>
                        <option key="bajo" value="bajo">bajo</option>
                        <option key="medio" value="medio">medio</option>
                        <option key="alto" value="alto">alto</option>
                        <option key="muy alto" value="muy ">muy alto</option>

                    </Field>
                    <ErrorMessage name="operative_impact_degree" />
                </div>
                <div className="col-6">
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
                            --Seleccionar--
                        </option>
                        <option key="Contratista" value="Contratista">Contratista</option>
                        <option key="municipio" value="municipio">municipio</option>

                    </Field>
                    <ErrorMessage name="operative_responsable" />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <label htmlFor="operative_description_id" className="form-label">
                        Descripción
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="operative_description_id"
                        name="operative_description"
                        aria-describedby="emailHelp"
                        placeholder=""
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="operative_description" withCount max={200} />
                </div>
                <div className="col-6">
                    <label htmlFor="regulatory_description_id" className="form-label">
                        Mecanismo de mitigación
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="regulatory_description_id"
                        name="regulatory_description"
                        placeholder=""
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="regulatory_description" withCount max={200} />
                </div>
            </div>
        </>
    )
}





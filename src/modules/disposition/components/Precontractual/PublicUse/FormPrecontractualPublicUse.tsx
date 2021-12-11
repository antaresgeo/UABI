import { Field } from 'formik';
import ErrorMessage from '../../../../../utils/ui/error_messge';
import Tooltip from 'antd/lib/tooltip';
import { FC, useState } from 'react';
import { LinkButton } from '../../../../../utils/ui/link';

interface FormProps {
    formik: any;
}

export const FormPrecontractualPublicUse: FC<FormProps> = ({ formik }) => {
    const [idDisposition, setidDisposition] = useState(18);
    const [idProhibition, setIdProhibition] = useState(12);
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="registration_date_id" className="form-label mt-3 mt-lg-0">
                        Fecha de Registro
                    </label>
                    <Field
                        type="date"
                        id="registration_date_id"
                        name="registration_date"
                        placeholder="Fecha Final"
                        className="form-control"
                    // disabled
                    />
                    <ErrorMessage name="registration_date" />
                </div>
                <div className="col-3">
                    <label htmlFor="prediation_number_id" className="form-label">
                        Número de prediación
                    </label>
                    <div className="input-group">
                        <Field
                            disabled={false}
                            id="prediation_number_id"
                            name="prediation_number"
                            type="number"
                            className="form-control "
                        />
                    </div>
                    <ErrorMessage name="prediation_number" />
                </div>
                <div className="col-3">
                    <label htmlFor="prediation_date_id" className="form-label mt-3 mt-lg-0">
                        Fecha de Prediación
                    </label>
                    <Field
                        type="date"
                        id="prediation_date_id"
                        name="prediation_date"
                        placeholder=""
                        className="form-control"
                    // disabled={true}
                    />
                    <ErrorMessage name="prediation_date" />
                </div>
                <div className="col-3">
                    <label htmlFor="contract_period_id" className="form-label">
                        Duración del contrato
                        <Tooltip title="Número de meses">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <Field
                        type="number"
                        id="contract_period_id"
                        name="contract_period"
                        className="form-control"
                        disabled={false}
                        min={1}
                        max={12}
                    />
                    <ErrorMessage name="contract_period" />
                </div>
                <div className="col-3 form-inline">
                    <label htmlFor="lockable_base_id" className="form-label">
                        Base asegurable
                        <Tooltip title="no inferior del 10%">
                            <i className="fa fa-info-circle text-muted ms-2" style={{ fontSize: 14 }} />
                        </Tooltip>
                    </label>
                    <div className="input-group">
                        <Field

                            id="lockable_base_id"
                            name="lockable_base"
                            className="form-control border-end-0"
                            min={10}
                            max={100}
                            type="number"
                        />
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-start-0">%</span>
                        </div>
                    </div>

                    <ErrorMessage name="lockable_base" />
                </div>
                <div className="col-3">
                    <label htmlFor="cadastral_value_id" className="form-label">
                        Valor avalúo catastral
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={false}
                            id="cadastral_value_id"
                            name="cadastral_value"
                            type="number"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="cadastral_value" />
                </div>
                <div className="col-3">
                    <label htmlFor="contract_value_id" className="form-label">
                        Valor del contrato
                    </label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white border-end-0">$</span>
                        </div>
                        <Field
                            disabled={false}
                            id="contract_value_id"
                            name="contract_value"
                            type="number"
                            className="form-control border-start-0 text-end"
                            min={0}
                            max={9999999999}
                        />
                    </div>
                    <ErrorMessage name="contract_value" />
                </div>
                <div className="col-6">
                    <label htmlFor="environmental_risk_id" className="form-label">
                        Riesgos Ambientales
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="environmental_risk_id"
                        name="environmental_risk"
                        aria-describedby="emailHelp"
                        placeholder="Riesgos ambientales"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="environmental_risk" withCount max={200} />
                </div>
                <div className="col-6">
                    <label htmlFor="destination_realEstate_id" className="form-label">
                        Destinación de bien Inmueble
                    </label>
                    <Field
                        type="text"
                        className="form-control"
                        id="destination_realEstate_id"
                        name="destination_realEstate"
                        aria-describedby="emailHelp"
                        placeholder="Actividades"
                        autoComplete="off"
                        maxLength={200}
                    />
                    <ErrorMessage name="destination_realEstate" withCount max={200} />
                </div>
                <div className="bg-white d-flex flex-row justify-content-between">
                    <div className="flex-fill" />

                    <LinkButton
                        onClick={() => {
                            setidDisposition(idDisposition + 1)
                            const obligations_list = [
                                ...formik.values.obligations,
                                {
                                    id: idDisposition,
                                    obligation: '',
                                },
                            ];
                            formik.setFieldValue(
                                'obligations',
                                obligations_list,
                                false
                            );
                            //console.log(obligations_list)
                        }}
                        name="Agregar Obligación"
                        icon={<i className="fa fa-plus-circle" aria-hidden="true" />}
                    />
                </div>
                {Array.isArray(formik.values.obligations) && formik.values.obligations?.map((item, i) => {
                    return (
                        <div className="row" key={i}>
                            <div className="col-11">
                                <label htmlFor={`percentage_insured_${i}`} className="form-label">
                                    Obligación
                                </label>
                                <Field
                                    // disabled={disabled}
                                    type="text"
                                    className="form-control"
                                    id={`obligation_${i}`}
                                    name={`obligations[${i}].obligation`}
                                    maxLength={100}
                                />
                                <ErrorMessage name={`obligations[${i}].obligation`} withCount max={100} />
                            </div>

                            <div className="col-1 " style={{ display: 'flex', alignItems: 'center' }}>
                                <LinkButton
                                    name=""
                                    icon={<i className="fa fa-times" aria-hidden="true" />}
                                    onClick={() => {
                                        setidDisposition(idDisposition - 1)
                                        const obligations_list =
                                            formik.values.obligations.filter((v, j) => j !== i);
                                        formik.setFieldValue(
                                            'obligations',
                                            obligations_list,
                                            false
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}

                <div className="bg-white d-flex flex-row justify-content-between">
                    <div className="flex-fill" />

                    <LinkButton
                        onClick={() => {
                            setIdProhibition(idProhibition + 1)
                            const prohibitions_list = [
                                ...formik.values.prohibitions,
                                {
                                    id: idProhibition,
                                    prohibition: '',
                                },
                            ];
                            formik.setFieldValue(
                                'prohibitions',
                                prohibitions_list,
                                false
                            );
                            //console.log(obligations_list)
                        }}
                        name="Agregar Prohibición"
                        icon={<i className="fa fa-plus-circle" aria-hidden="true" />}
                    />
                </div>
                {Array.isArray(formik.values.prohibitions) && formik.values.prohibitions?.map((item, i) => {
                    return (
                        <div className="row" key={i}>
                            <div className="col-11">
                                <label htmlFor={`prohibition_${i}`} className="form-label">
                                    Prohibición
                                </label>
                                <Field
                                    // disabled={disabled}
                                    type="text"
                                    className="form-control"
                                    id={`prohibition_${i}`}
                                    name={`prohibitions[${i}].prohibition`}
                                    maxLength={100}
                                />
                                <ErrorMessage name={`prohibitions[${i}].prohibition`} withCount max={100} />
                            </div>

                            <div className="col-1 " style={{ display: 'flex', alignItems: 'center' }}>
                                <LinkButton
                                    name=""
                                    icon={<i className="fa fa-times" aria-hidden="true" />}
                                    onClick={() => {
                                        setIdProhibition(idProhibition - 1)
                                        const prohibitions_list =
                                            formik.values.prohibitions.filter((v, j) => j !== i);
                                        formik.setFieldValue(
                                            'prohibitions',
                                            prohibitions_list,
                                            false
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}


            </div>
        </>
    );
};

import { Field } from 'formik';
import { FC } from 'react';
import DocumentModal from '../../../../utils/components/DocumentsModal/index';
import ErrorMessage from '../../../../utils/ui/error_messge';
import Select from './../../../../utils/ui/select';

interface FormProps {
    formik: any;
}

export const FormContract: FC<FormProps> = ({ formik }) => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <label htmlFor="decree_number_id" className="form-label">
                        Número Decreto Municipal
                    </label>
                    <Field
                        type="number"
                        id="decree_number_id"
                        name="decree_number"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="decree_number" />
                </div>
                <div className="col">
                    <label htmlFor="decree_date_id" className="form-label">
                        Fecha Decreto Municipal
                    </label>
                    <Field
                        type="date"
                        id="decree_date_id"
                        name="decree_date"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="decree_date" />
                </div>
                <div className="col">
                    <label htmlFor="act_number_id" className="form-label">
                        Número de Acta de posesión
                    </label>
                    <Field
                        type="number"
                        id="act_number_id"
                        name="act_number"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="act_number" />
                </div>
                <div className="col">
                    <label htmlFor="minutes_date_id" className="form-label">
                        Fecha de Acta de posesión
                    </label>
                    <Field
                        type="date"
                        id="minutes_date_id"
                        name="minutes_date"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="minutes_date" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label htmlFor="contract_decree_id" className="form-label">
                        Decreto municipal del contrato
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="contract_decree_id"
                        name="contract_decree"
                        disabled={false}
                    >
                        <option key="contract_decree" value="" hidden>
                            --Seleccione--
                        </option>
                        <option key="883 de 2015" value="883 de 2015">883 de 2015</option>
                        <option key="1039 de 2016" value="1039 de 2016">1039 de 2016</option>
                        <option key="0455 de 2019" value="0455 de 2019">0455 de 2019</option>

                    </Field>
                    <ErrorMessage name="contract_decree" />
                </div>
                <div className="col-3">
                    <label htmlFor="manager_sabi_id" className="form-label">
                        ¿UABI es la encargada del contrato?
                    </label>
                    <Field
                        as="select"
                        className="w-100 form-select form-control"
                        id="manager_sabi_id"
                        name="manager_sabi"
                        disabled={false}
                    >
                        <option key="manager_sabi" value="" hidden>
                            --Seleccione--
                        </option>
                        <option key="si" value="si">Si</option>
                        <option key="no" value="no">No</option>

                    </Field>
                    <ErrorMessage name="manager_sabi" />
                </div>
                <div className="col-6">
                    <label htmlFor="dispose_area_id" className="form-label">
                        área a disponer
                    </label>
                    <Field
                        type="number"
                        id="dispose_area_id"
                        name="dispose_area"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="dispose_area" />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="subscription_date_id" className="form-label">
                        Fecha de suscripción del contrato
                    </label>
                    <Field
                        type="date"
                        id="subscription_date_id"
                        name="subscription_date"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="subscription_date" />
                </div>
                <div className="col-6">
                    <label htmlFor="finish_date_id" className="form-label">
                        Fecha de Terminación del contrato
                    </label>
                    <Field
                        type="date"
                        id="finish_date_id"
                        name="finish_date"
                        className="form-control"
                        disabled={false}
                    />
                    <ErrorMessage name="finish_date" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-6">
                    <label htmlFor="object_contract_id" className="form-label">
                        Objeto del contrato
                    </label>
                    <Field
                        as="textarea"
                        disabled={false}
                        name="object_contract"
                        id="object_contract_id"
                        className="form-control"
                        maxLength={250}
                    />
                    <ErrorMessage name="object_contract" withCount max={250} />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="guarantee_id" className="form-label">
                        Garantias
                    </label>
                    <Field
                        as="textarea"
                        disabled={false}
                        name="guarantee"
                        id="guarantee_id"
                        className="form-control"
                        maxLength={200}
                    />
                    <ErrorMessage name="guarantee" withCount max={200} />
                </div>
            </div>
        </>
    );
};

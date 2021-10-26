// import React from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
// import { actions } from "./../redux";
import { FC } from 'react';
import { IPolicyAttributes } from './../../../utils/interfaces/insurability';
import { IRealEstateAttributes } from './../../../utils/interfaces/realEstates';


interface InsurabilityFormPros {
    policy?: IPolicyAttributes;
    realEstates?: IRealEstateAttributes[];
    disabled? : boolean;
    onSubmit: (values, actions?) => Promise<any>;
}

const PolizaForm: FC<InsurabilityFormPros> = ({ policy,realEstates,disabled, onSubmit }) => {
    const initialValues =  {
        registry_number: '',
        vigency_start: '',
        vigency_end: '',
        insurance_broker: '',
        insurance_company: '',
        insurance_value: '',
        insurance_document_id: '',
        real_estate_id: 0,
        ...policy
    };

    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
        });
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submit}
            enableReinitialize
        >
            <Form>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="registry_number" className="form-label">Matrícula</label>
                        <Field type="number" id="registry_number" name="registry_number" placeholder="Número Matrícula" className="form-control" disabled={disabled} />
                    </div>

                    <div className="col-4">
                        <label htmlFor="vigency_start" className="form-label mt-3 mt-lg-0">Fecha Inicial de la Póliza</label>
                        <Field type="date" id="vigency_start" name="vigency_start" placeholder="Fecha Inicial" className="form-control" disabled={disabled} />
                    </div>

                    <div className="col-4">
                        <label htmlFor="vigency_end" className="form-label mt-3 mt-lg-0">Fecha Final de la Póliza</label>
                        <Field type="date" id="vigency_end" name="vigency_end" placeholder="Fecha Final" className="form-control" disabled={disabled} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <label htmlFor="insurance_broker" className="form-label">Corredor de Seguros</label>
                        <Field as="select" id="insurance_broker" name="insurance_broker" className="w-100 form-select form-control" disabled={disabled}>
                            <option value="" selected disabled>
                                --Corredor--
                            </option>
                            <option value="vera1">
                                Vera 1
                            </option>
                            <option value="vera2">
                                Vera 2
                            </option>
                            <option value="vera3">
                                Vera 3
                            </option>
                        </Field>
                    </div>

                    <div className="col-4">
                        <label htmlFor="insurance_company" className="form-label" >Compañía de Seguros</label>
                        <Field as="select" id="insurance_company" name="insurance_company" className='w-100 form-select'disabled={disabled}>
                            <option value="" selected disabled>
                                --Compañía--
                            </option>
                            <option value="sura1">
                                Sura 1
                            </option>
                            <option value="sura2">
                                Sura 2
                            </option>
                            <option value="sura3">
                                Sura 3
                            </option>
                        </Field>
                    </div>

                    <div className="col-4">
                        <label htmlFor="insurance_value" className="form-label">
                            Valor Asegurado
                        </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white border-end-0">$</span>
                            </div>
                            <Field
                                name="insurance_value"
                                id="insurance_value"
                                type="number"
                                className="form-control text-end"
                                style={{ borderLeft: 'none' }}
                                maxLength={200}
                                disabled={disabled}
                            />
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-4">
                        <label htmlFor="insurance_document_id" className="form-label">Agregue Póliza</label>
                        <Field type="text" id="insurance_document_id" name="insurance_document_id" placeholder="Agregue Póliza" className="form-control" disabled={disabled} />
                    </div>
                    <div className="col-4">
                        <label htmlFor="real_estate_id" className="form-label">Bien inmueble</label>
                        <Field

                            name="real_estate_id"
                            as="select"
                            className="form-select"
                            id="real_estate_id"
                            disabled={disabled}

                        >
                        <option value="" hidden>
                            -- Seleccione Bien Inmueble --
                        </option>
                        {realEstates?.map((realEstates, i) => {
                            const { name, id } = realEstates;
                            console.log(name, id)
                            return (
                                <option key={`project_${i}`} value={id}>
                                    {name.toUpperCase()}
                                </option>
                            );
                        })}
                    </Field>
                        {/* <<Field type="number" id="real_estate_id" name="real_estate_id" placeholder="" className="form-control"  /> */}
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className="col-10">
                    </div>
                    <div className="col-2">
                        <button type='submit' className='btn btn-success'>
                            Guardar
                        </button>
                    </div>

                </div>
            </Form>
        </Formik>

    );
}

export default PolizaForm

// import React from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';
// import { actions } from "./../redux";
import { FC } from 'react';
import { IPolicyAttributes } from '../../../utils/interfaces/components.interfaces';


interface InsurabilityFormPros {
    policy?: IPolicyAttributes;
    onSubmit: (values, actions?) => Promise<any>;
}

const PolizaForm: FC<InsurabilityFormPros> = ({ policy, onSubmit }) => {
    const initialValues: IPolicyAttributes = policy || {
        matricula: 0,
        initialDate: '',
        finalDate: '',
        ensuranceAgent: '',
        ensuranceCompany: '',
        ensuranceValue: 0,
        ensuranceFile: '',
    };

    const submit = (values, actions) => {
        console.log(values);
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
        });
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submit}
        >
            <Form>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="matricula" className="form-label">Matrícula</label>
                        <Field type="text" id="matricula" name="matricula" placeholder="Número Matrícula" className="form-control" />
                    </div>

                    <div className="col-4">
                        <label htmlFor="initialDate" className="form-label mt-3 mt-lg-0">Fecha Inicial de la Póliza</label>
                        <Field type="date" id="initialDate" name="initialDate" placeholder="Fecha Inicial" className="form-control" />
                    </div>

                    <div className="col-4">
                        <label htmlFor="finalDate" className="form-label mt-3 mt-lg-0">Fecha Final de la Póliza</label>
                        <Field type="date" id="finalDate" name="finalDate" placeholder="Fecha Final" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <label htmlFor="ensuranceAgent" className="form-label">Corredor de Seguros</label>
                        <Field as="select" id="ensuranceAgent" name="ensuranceAgent" className="w-100 form-select form-control">
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
                        <label htmlFor="ensuranceCompany" className="form-label">Compañía de Seguros</label>
                        <Field as="select" id="ensuranceCompany" name="ensuranceCompany" className='w-100 form-select'>
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
                        <label htmlFor="ensuranceValue" className="form-label">Valor Asegurado</label>
                        <Field type="number" id="ensuranceValue" name="ensuranceValue" placeholder="Valor Asegurado" className="form-control" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="ensuranceFile" className="form-label">Agregue Póliza</label>
                        <Field type="file" id="ensuranceFile" name="ensuranceFile" placeholder="Agregue Póliza" className="form-control" />
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

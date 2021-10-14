// import React from 'react';
import {
    Formik,
    Form,
    Field,
} from 'formik';

interface MyFormValues {
    matricula: number;
    initialDate: string;
    finalDate: string;
    ensuranceAgent: string;
    ensuranceCompany: string;
    ensuranceValue: number;
    ensuranceFile: string;
}

const FormPoliza = () => {
    const initialValues: MyFormValues = { matricula: 0, initialDate: '', finalDate: '', ensuranceAgent: '', ensuranceCompany: '', ensuranceValue: 0, ensuranceFile: '' };

    return (
        <div className="p-3 bg-white border-0" style={{ boxShadow: '0px 3px 10px #00000029', borderRadius: '15px' }}>
            <div className="">
                <h5 className="text-uppercase">Datos de la Póliza del Inmueble</h5>
                <hr />

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
                >
                    <Form>
                        <div className="d-block d-lg-flex justify-content-around mt-lg-5">
                            <div className="d-flex flex-column">
                                <label htmlFor="matricula" className="form-label">Matrícula</label>
                                <Field type="text" id="matricula" name="matricula" placeholder="Número Matrícula" className="form-control" />
                            </div>

                            <div className="d-flex flex-column">
                                <label htmlFor="initialDate" className="form-label mt-3 mt-lg-0">Fecha Inicial de la Póliza</label>
                                <Field type="date" id="initialDate" name="initialDate" placeholder="Fecha Inicial" className="form-control" />
                            </div>

                            <div className="d-flex flex-column">
                                <label htmlFor="finalDate" className="form-label mt-3 mt-lg-0">Fecha Final de la Póliza</label>
                                <Field type="date" id="finalDate" name="finalDate" placeholder="Fecha Final" className="form-control" />
                            </div>
                        </div>

                        <div className="d-lg-flex justify-content-between mt-3 mt-lg-5 flex-wrap">
                            <div className="d-flex flex-column">
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

                            <div className="d-flex flex-column mt-3 mt-lg-0">
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

                            <div className="d-flex flex-column mt-3 mt-lg-0">
                                <label htmlFor="ensuranceValue" className="form-label">Valor Asegurado</label>
                                <Field type="number" id="ensuranceValue" name="ensuranceValue" placeholder="Valor Asegurado" className="form-control" />
                            </div>


                            <div className="d-flex flex-column mt-3 mt-lg-0">
                                <label htmlFor="ensuranceFile" className="form-label">Agregue Póliza</label>
                                <Field type="file" id="ensuranceFile" name="ensuranceFile" placeholder="Agregue Póliza" className="form-control" />
                            </div>
                        </div>

                        <div className='d-flex justify-content-end mt-5'>
                            <button type='submit' className='btn btn-success btn-lg text-uppercase'>
                                guardar
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default FormPoliza

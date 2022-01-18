import React, { FC, MutableRefObject } from 'react';
import { Formik, Form, Field } from 'formik';
import { FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../../../utils/ui/error_messge';
import { Dependency } from '../redux/service/dependency';
import { Card } from '../../../utils/ui';
import { LinkButton } from '../../../utils/ui/link';
import { Empty } from 'antd';

interface DependencyFormPros {
    dependency?: Dependency;
    onSubmit?: (values: Dependency, form?) => Promise<any>;
    disabled?: boolean;
    innerRef?: MutableRefObject<FormikProps<FormikValues>>;
}

const DependencyForm: FC<DependencyFormPros> = ({ dependency, onSubmit, disabled, innerRef, }) => {

    const empty_subdependency = {
        subdependency: '',
        cost_center: '',
    };
    const initial_values = {
        dependency: '',
        management_center: '',
        subdependencies: [],
        ...dependency,
    };

    console.log(initial_values)

    const schema = Yup.object().shape({
        dependency: Yup.string().required('Campo obligatorio'),
        management_center: Yup.number().required('Campo obligatorio'),
    });

    const submit = (values, form) => {
        onSubmit(values, form)
            .then(() => {
                form.setSubmitting(false);
            })
            .catch(() => form.setSubmitting(false));
    };
    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initial_values} validationSchema={schema} innerRef={innerRef}>
            {({ values, setFieldValue }) => {
                return (
                    <Form>
                        <Card title="Información de La dependencia">
                            <div className="row">
                                {dependency && (
                                    <div className="col-4">
                                        <label htmlFor="id_id" className="form-label">
                                            Código
                                        </label>
                                        <Field
                                            type="text"
                                            id="id_id"
                                            className="form-control"
                                            aria-describedby="codigo del projecto"
                                            disabled={true}
                                            name="id"
                                            autoComplete="off"
                                        />
                                        <ErrorMessage name="id" />
                                    </div>
                                )}
                                <div className={`col-${dependency ? 4 : 6}`}>
                                    <label htmlFor="dependency_id" className="form-label">
                                        Dependencia
                                    </label>
                                    <Field
                                        type="text"
                                        className="form-control"
                                        id="dependency_id"
                                        name="dependency"
                                        autoComplete="off"
                                        disabled={disabled}
                                        maxLength={100}
                                    />
                                    <ErrorMessage name="dependency" withCount max={100} />
                                </div>
                                <div className={`col-${dependency ? 4 : 6}`}>
                                    <label htmlFor="accounting_account_id" className="form-label">
                                        Centro Gestor
                                    </label>
                                    <Field
                                        className="form-control"
                                        type="number"
                                        name="management_center"
                                        id="management_center_id"
                                        autoComplete="off"
                                        disabled={disabled}
                                    />
                                    <ErrorMessage name="management_center" />
                                </div>
                            </div>
                        </Card>
                        <Card
                            title="Subdependencias"
                            extra={
                                <LinkButton
                                    name={'Agregar Subdependencia'}
                                    iconText="+"
                                    avatar
                                    onClick={() => {
                                        setFieldValue(
                                            'subdependencies',
                                            [
                                                ...values.subdependencies,
                                                {
                                                    ...empty_subdependency,
                                                },
                                            ],
                                            false
                                        );
                                    }}
                                />
                            }
                        >
                            {values.subdependencies.length > 0 &&
                                values.subdependencies.map((subdependecy, i) => (
                                    <div className="row" key={i}>
                                        <div className="col-6">
                                            <label htmlFor="contract_number_id" className="form-label">
                                                Subdependencia
                                            </label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                id="subdependency_id"
                                                aria-describedby="nombre de la subdependencia"
                                                name={`subdependencies[${i}].subdependency`}
                                                autoComplete="off"
                                                disabled={disabled}
                                                maxLength={100}
                                            />
                                            <ErrorMessage name={`subdependencies[${i}].subdependency`} />
                                        </div>
                                        <div className="col-5">
                                            <label htmlFor="cost_center_id" className="form-label">
                                                Centro de Costos
                                            </label>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                id="cost_center_id"
                                                aria-describedby="No."
                                                name={`subdependencies[${i}].cost_center`}
                                                autoComplete="off"
                                                disabled={disabled}
                                            />
                                            <ErrorMessage name={`subdependencies[${i}].cost_center`} />
                                        </div>
                                        <div
                                            className="col-1 "
                                            style={{ display: 'flex', alignItems: 'center', marginTop: '-5px' }}
                                        >
                                            <LinkButton
                                                name=""
                                                icon={<i className="fa fa-times" aria-hidden="true" />}
                                                onClick={() => {
                                                    const subdependencies_list = values.subdependencies.filter((v, j) => j !== i);
                                                    setFieldValue('subdependencies', subdependencies_list, false);
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}

                            {values.subdependencies.length === 0 && (
                                <div className="row">
                                    <div className="col-12">
                                        <Empty
                                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                                            imageStyle={{
                                                height: 60,
                                            }}
                                            description={
                                                <span className="text-primary">
                                                    No hay subdependencias para mostrar.
                                                    <br />
                                                    Por favor agregue un subdependencia.
                                                </span>
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                        </Card>
                    </Form>
                );
            }}
        </Formik>
    )
}

export default DependencyForm

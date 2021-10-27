import { FC } from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { IUserAttributes } from './../../../utils/interfaces/users';
import React, { useState } from 'react';
import { Transfer } from 'antd';
interface IUserFormPros {
    user?: IUserAttributes;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    onSubmit: (values, actions?) => Promise<any>;
}

const UserForm: FC<IUserFormPros> = ({ disabled, user, type, onSubmit }) => {
    const initialValues = {
        society_type: '',
        entity_type: '',
        id_type: '',
        id_number: '',
        names: '',
        surnames: '',
        email: '',
        location: '',
        cellphone_number: '',
        phone_number: '',
        gender: '',
        id_rol: 0,
        ...user
    };
    const submit = (values, actions) => {
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
        });
    }

    const mockData = [];
    for (let i = 0; i < 20; i++) {
        mockData.push({
            key: i.toString(),
            title: `content${i + 1}`,
            description: `description of content${i + 1}`,
        });
    }

    const initialTargetKeys = mockData.filter(item => +item.key > 10).map(item => item.key);

    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const onChange = (nextTargetKeys, direction, moveKeys) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const onScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };


    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} >
            {({ values, isValid, isSubmitting }) => {
                return (
                    <Form>
                        <div className="row">
                        <div className="col-6">
                                <label htmlFor="id_rol" className="form-label">
                                    Rol
                                </label>
                                <Field
                                    as="select"
                                    className="form-select"
                                    id="id_rol"
                                    name="id_rol"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                    <option value="" hidden>
                                        Selecciona un rol
                                    </option>
                                    <option value="2">Supervisor</option>
                                    <option value="3">Adquisiciones</option>
                                    <option value="4">UABI</option>
                                    <option value="5">Asegurabilidad</option>
                                    <option value="6">Inspección</option>
                                    <option value="7">Disposición</option>
                                    <option value="8">Supervición</option>
                                    <option value="9">Mantenimiento</option>
                                    <option value="10">Facturación</option>
                                </Field>
                                <span className="text-danger text-left d-block w-100 mt-1" style={{ height: '22px' }}>
                                    <ErrorMessage name="name" />
                                </span>
                            </div>
                            <div className="col-6">
                                <label htmlFor="location" className="form-label">
                                    Permisos
                                </label>
                                <Transfer
                                    dataSource={mockData}
                                    titles={['Source', 'Target']}
                                    targetKeys={targetKeys}
                                    selectedKeys={[]}
                                    onChange={onChange}
                                    onSelectChange={onSelectChange}
                                    onScroll={onScroll}
                                    render={item => item.title}
                                    disabled

                                />
                            </div>

                        </div>

                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button
                                        className="btn btn-primary my-3"
                                        disabled={isSubmitting || disabled}
                                    >
                                        Guardar
                                    </button>
                                )}
                            </div>
                        </div>

                    </Form>
                );
            }}
        </Formik>
    )
}



export default UserForm

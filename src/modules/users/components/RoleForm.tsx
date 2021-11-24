import { FC, useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';
import {  IUserAttributes } from '../../../utils/interfaces/users';
import  { useState } from 'react';
import { Transfer } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../redux';
import { IPermitAttributes } from '../../../utils/interfaces/permits';
import { IRolAttributes } from '../../../utils/interfaces/roles';
interface IUserFormPros {
    role?: IRolAttributes;
    user?: IUserAttributes;
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit';
    onSubmit?: (values, actions?) => Promise<any>;
}

const RoleForm: FC<IUserFormPros> = ({ disabled, user, type,role,onSubmit }) => {
    const permitsAll: IPermitAttributes[] = useSelector((store: any) => store.users.permits.value);
    const dispatch = useDispatch();
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [mockData, setMockData] = useState([])
    const [userTarget, setUserTarget] = useState([])

    useEffect(() => {
        dispatch(actions.getPermits())
    }, [])

    useEffect(() => {
        setTargetKeys(userTarget)
    }, [userTarget])


    useEffect(() => {
        const allPermits = permitsAll?.map(per => per.name)
        const permitUser = role?.permits?.map(p => p.name) || [];

        const mockData = [];
        for (let i = 0; i < allPermits.length; i++) {
            mockData.push({
                key: i.toString(),
                title: `${allPermits[i]}`,
            });
        }

        setMockData(mockData)

        const mockuser = [];
        for (let i = 0; i < permitUser.length; i++) {
            mockuser.push({
                key: i.toString(),
                title: `${permitUser[i]}`,
            });
        }
        const initialTargetKeys = mockuser.map(item => item.key);
        setUserTarget(initialTargetKeys)

    }, [permitsAll, role?.permits])

    const initialValues = {
        name: '',
        permits: [],
        ...role,
    };

    //console.log(initialValues)
    const onChange = (nextTargetKeys, direction, moveKeys) => {
        setTargetKeys(nextTargetKeys);
        console.log(targetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const submit = (values, actions) => {
        console.log(targetKeys)
        const permitUser = [];
        targetKeys.map(key => permitUser.push(Number(key)))
        values = {
            ...values,
            permits: permitUser
        }
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obligatorio'),
    });

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues} >
            {({ values, isValid, isSubmitting }) => {
                return (
                    <Form>
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="name" className="form-label">
                                    Rol
                                </label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Nuevo Rol"
                                    name="name"
                                    autoComplete="off"
                                    disabled={disabled}
                                >
                                </Field>
                                {/* <Field
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
                                    <option value="3">Adquisiciónes</option>
                                    <option value="4">SABI</option>
                                    <option value="5">Asegurabilidad</option>
                                    <option value="6">Inspección</option>
                                    <option value="7">Disposición</option>
                                    <option value="8">Supervición</option>
                                    <option value="9">Mantenimiento</option>
                                    <option value="10">Facturación</option>
                                </Field> */}

                                <ErrorMessage name="name" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="permits" className="form-label">
                                    Permisos
                                </label>
                                <Transfer
                                    disabled={disabled}
                                    dataSource={mockData}
                                    titles={['no permitidos', 'permitidos']}
                                    targetKeys={targetKeys}
                                    selectedKeys={selectedKeys}
                                    onChange={onChange}
                                    onSelectChange={onSelectChange}
                                    render={item => item.title}
                                    listStyle={{
                                        width: 250,
                                        height: 300,
                                    }}
                                />
                            </div>
                        </div>

                        <div className="row justify-content-end">
                            <div className="col text-end">
                                {type !== 'view' && (
                                    <button className="btn btn-primary my-3" disabled={isSubmitting || disabled}>
                                        Guardar
                                    </button>
                                )}
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default RoleForm;

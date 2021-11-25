import { FC, useEffect } from 'react';
import { Field, Formik, Form } from 'formik';
import ErrorMessage from '../../../utils/ui/error_messge';
import * as Yup from 'yup';
import { IUserAttributes } from '../../../utils/interfaces/users';
import { useState } from 'react';
import { Transfer } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from '../redux';
import { IPermitAttributes } from '../../../utils/interfaces/permits';
import { IRolAttributes } from '../../../utils/interfaces/roles';
import Select from '../../../utils/ui/select';
import dependencias from '../../acquisitions/dependencias';
interface IUserFormPros {
    user_roles?: any[];
    user_permits?: any[];
    disabled?: boolean;
    type?: 'view' | 'create' | 'edit' | 'assign';
    onSubmit?: (values, actions?) => Promise<any>;
}

const RoleForm: FC<IUserFormPros> = ({ disabled, type, user_roles, user_permits, onSubmit }) => {
    const permitsAll: IPermitAttributes[] = useSelector((store: any) => store.users.permits.value);
    const roles: any[] = useSelector((store: any) => store.users.roles.value);
    const dispatch = useDispatch();
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    // const [userTarget, setUserTarget] = useState([]);
    const [mockData, setMockData] = useState([]);

    useEffect(() => {
        dispatch(actions.getPermits());
        if (type === 'assign') {
            dispatch(actions.getRolesList({}));
        }
    }, []);

    // useEffect(() => {
    //     setTargetKeys(userTarget);
    // }, [userTarget]);

    useEffect(() => {
        console.log('useEffect', user_permits);
        const allPermits =
            permitsAll?.map((per: any) => ({
                key: per.id,
                title: per.permit_name,
                disabled: true,
            })) || [];
        const permitUser =
            user_permits?.map((per: any) => ({
                key: per.id,
                title: per.permit_name,
            })) || [];
        const initialTargetKeys = permitUser.map((item) => item.key);
        setMockData(allPermits);
        setTargetKeys(initialTargetKeys);
    }, [permitsAll, user_permits]);

    //console.log(initialValues)

    const initialValues = {
        name: '',
        permits: [],
        roles_to_assign: user_roles.map((rol) => rol.id),
    };
    const onChange = (nextTargetKeys, direction, moveKeys) => {
        setTargetKeys(nextTargetKeys);
        console.log(targetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const submit = (values, actions) => {
        console.log(targetKeys);
        const permitUser = [];
        targetKeys.map((key) => permitUser.push(Number(key)));
        values = {
            ...values,
            permits: permitUser,
        };
        onSubmit(values, actions).then(() => {
            actions.setSubmitting(false);
            actions.resetForm();
        });
    };

    const schema = Yup.object().shape({
        name: Yup.string().required('Campo obligatorio'),
    });

    return (
        <Formik enableReinitialize onSubmit={submit} initialValues={initialValues}>
            {({ values, isValid, isSubmitting }) => {
                console.log(values);
                return (
                    <Form>
                        <div className="row">
                            {type !== 'assign' && (
                                <div className="col-6">
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
                                    />
                                    <ErrorMessage name="name" />
                                </div>
                            )}
                            {type === 'assign' && (
                                <div className="col-6">
                                    <label htmlFor="assign_id" className="form-label">
                                        Rol
                                    </label>
                                    <Field
                                        component={Select}
                                        name="roles_to_assign"
                                        id="assign_id"
                                        disabled={disabled}
                                        placeholder="Selecciona una Dependencia"
                                        options={roles.map((rol) => ({ id: rol.id, name: rol.role_name }))}
                                        showSearch
                                        mode="multiple"
                                        filterOption={(input, option) => {
                                            return option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                        }}
                                    />
                                    <ErrorMessage name="name" />
                                </div>
                            )}
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
                                    render={(item) => item.title}
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

import React from 'react';
import { Card } from '../../../../utils/ui';
import { useHistory } from 'react-router-dom';
import RoleForm from './../../components/RoleForm';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux';

export const CreateRoles = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const createUser = async (values) => {
        console.log(values);
        await dispatch(actions.createRole(values));
    };
    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-fill overflow-auto">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <Card title="Crear Rol">
                                <RoleForm
                                    type="create"
                                    onSubmit={(values) => {
                                        return createUser(values);
                                    }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white d-flex flex-row justify-content-between"
                style={{ padding: 16, borderTop: '1px solid #ccc' }}
            >
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    Atras
                </button>
                <div className="flex-fill" />
            </div>
        </div>
    );
};

import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux';
import {formatDate, swal, swal_warning} from '../../../utils';
import { Link, Table } from '../../../utils/ui';
import { IUserAttributes } from '../../../utils/interfaces/users';
import { guards } from '../routes';

interface UserListProps {
    users: IUserAttributes[];
    change_page?: (page: number, pageSize?: number) => void;
    total?: number;
    loading?: boolean;
    user: any;
}
const UserList: FC<UserListProps> = ({ users, change_page, total, user, loading }) => {
    const dispatch = useDispatch();
    const deleteUser = (id) => async () => {
        const result = await swal_warning.fire({
            icon: 'warning',
            title: '¿Está seguro?',
            text: '¿Está seguro que quiere inactivar este Usuario?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Continuar',
            denyButtonText: `Cancelar`,
        });

        if (result.isConfirmed) {
            await dispatch(actions.delete_user(id));
            await dispatch(actions.get_all_users({}));
        } else if (result.isDenied) {
            swal.close();
        }
    };

    const ver = {
        title: 'Ver',
        dataIndex: 'user_id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <Link
                    to={`/users/${id}/`}
                    name=""
                    avatar={false}
                    icon={<i className="fa fa-eye" aria-hidden="true" />}
                />
            );
        },
    };

    const editar = {
        title: 'Editar',
        dataIndex: 'user_id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <Link
                    to={`/users/edit/${id}/`}
                    name=""
                    avatar={false}
                    icon={<i className="fa fa-pencil" aria-hidden="true" />}
                />
            );
        },
    };

    const eliminar = {
        title: 'Desactivar',
        dataIndex: 'user_id',
        align: 'center' as 'center',
        render: (id) => {
            return (
                <div className="text-danger" onClick={deleteUser(id)}>
                    <i className="fa fa-times-circle" aria-hidden="true" />
                </div>
            );
        },
    };

    const table_columns = [
        {
            title: 'ID',
            dataIndex: 'user_id',
            align: 'center' as 'center',
        },
        {
            title: 'Nombre',
            dataIndex: 'names',
            align: 'left' as 'left',
            render: (_, user) => {
                return `${(user && Object.values(user?.names).join(' ')) || ''} ${
                    (user && Object.values(user?.surnames).join(' ')) || ''
                }`;
            },
        },
        // {
        //     title: 'rol',
        //     dataIndex: 'id_rol',
        //     align: 'center' as 'center',
        // },
        {
            title: 'Fecha Creación',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (_) => formatDate(_?.created_on),
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (_) => _?.created_by,
        },
        {
            title: 'Acciones',
            fixed: true,
            children: [],
        },
    ];

    if (guards.detail({ user })) {
        table_columns[4].children[0] = ver;
    }
    if (guards.edit({ user })) {
        table_columns[4].children[1] = editar;
    }
    if (guards.delete({ user })) {
        table_columns[4].children[2] = eliminar;
    }

    return <Table columns={table_columns} items={users} with_pagination count={total} change_page={change_page} loading={loading} />;
};

export default UserList;

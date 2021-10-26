import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux';
import { formatDate, swal } from '../../../utils';
import { Link, Table } from '../../../utils/ui';
import { IUserAttributes } from '../../../utils/interfaces/users';

interface UserListProps {
    users: IUserAttributes[];
    change_page?: (page: number, pageSize?: number) => void;
    total?: number;
}
const UserList: FC<UserListProps> = ({ users, change_page, total }) => {
    const dispatch = useDispatch();
    const deleteUser = (id) => async () => {
        const result = await swal.fire({
            icon: 'warning',
            title: '¿Está seguro?',
            text: '¿Está seguro que quiere inactivar este Usuario?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Continuar',
            denyButtonText: `Cancelar`,
        });

        if (result.isConfirmed) {
            await dispatch(actions.deleteUser(id));
            await dispatch(actions.getUsers({}));
        } else if (result.isDenied) {
            swal.close();
        }
    };

    const table_columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            align: 'center' as 'center',
        },
        {
            title: 'Nombre',
            dataIndex: 'username',
            align: 'center' as 'center',
        },
        {
            title: 'rol',
            dataIndex: 'id_rol',
            align: 'center' as 'center',
        },
        {
            title: 'Fecha Creación',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (dates) => formatDate(dates?.created_on),
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail.created_by',
            align: 'center' as 'center',
        },
        {
            title: 'Acciones',
            fixed: true,
            children: [
                {
                    title: 'Ver',
                    dataIndex: 'id',
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
                },
                {
                    title: 'Editar',
                    dataIndex: 'id',
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
                },
                {
                    title: 'Eliminar',
                    dataIndex: 'id',
                    align: 'center' as 'center',
                    render: (id) => {
                        return (
                            <div className="text-danger" onClick={deleteUser(id)}>
                                <i className="fa fa-trash" aria-hidden="true" />
                            </div>
                        );
                    },
                },
            ],
        },
    ];

    return (
        <Table columns={table_columns} items={users} with_pagination count={total} change_page={change_page} />
    );
};


export default UserList

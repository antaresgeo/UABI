import { FC, useEffect } from 'react';
import { formatDate } from '../../../utils';
import { Link, Table } from '../../../utils/ui';
import { useSelector, useDispatch } from 'react-redux';
import { swal } from '../../../utils';
import { IRealEstateAttributes } from '../../../utils/interfaces';
import { actions } from '../redux';


interface RealEstateListProps {
    withProject?: boolean;
    filters?: any;
    project_id?: number;
    init?: boolean;
    register?: boolean;
}

const RealEstateList: FC<RealEstateListProps> = ({ withProject, filters, project_id, init, register }) => {
    const dispatch = useDispatch();

    const realEstates: IRealEstateAttributes[] = useSelector((store: any) => store.acquisitions.realEstates.value);
    const loading: boolean = useSelector((store: any) => store.acquisitions.realEstates.loading);
    const { total_results } = useSelector((store: any) => store.acquisitions.realEstates.pagination);

    const deleteRealEstate = (id) => async () => {
        const result = await swal.fire({
            icon: 'warning',
            title: '¿Está seguro?',
            text: '¿Está seguro que quiere inactivar el Bien Inmueble?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Continuar',
            denyButtonText: `Cancelar`,
        });

        if (result.isConfirmed) {
            await dispatch(actions.deleteRealEstate(id));
            await dispatch(actions.getRealEstates({}));
            // const _res: any = await dispatch(actions.deleteProject(id));


            // swal.fire({
            //     title: "Proyecto Inactivado",
            //     text: message,
            //     icon: "success",
            //     showConfirmButton: false,
            //     timer: 1500,
            // });
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
            title: 'Matrícula',
            dataIndex: 'registry_number',
            align: 'center' as 'center',
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            align: 'center' as 'center',
        },
        ...(withProject
            ? [
                  {
                      title: 'Proyecto Asociado',
                      dataIndex: 'project_id',
                      align: 'center' as 'center',
                  },
              ]
            : []),
        {
            title: 'Fecha Creación',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (dates) => formatDate(dates?.created_on),
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail',
            align: 'center' as 'center',
            render: (data) => data.created_by,
        },
        ...(register
            ? [
                  {
                      title: 'Estado',
                      dataIndex: 'status_name',
                      align: 'center' as 'center',
                  },
              ]
            : []),
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
                                to={`/acquisitions/real-estates/${id}/`}
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
                                to={`/acquisitions/real-estates/edit/${id}/`}
                                name=""
                                avatar={false}
                                icon={<i className="fa fa-pencil" aria-hidden="true" />}
                            />
                        );
                    },
                },
                {
                    title: 'Inactivar',
                    dataIndex: 'id',
                    align: 'center' as 'center',
                    render: (id) => {
                        return (
                            <div className="text-danger" onClick={deleteRealEstate(id)}>
                               <i className="fa fa-times-circle" aria-hidden="true"></i>
                            </div>
                        );
                    },
                },
            ],
        },
    ];

    const change_page = (page, pageSize) => {
        dispatch(actions.getRealEstates({ page, pageSize, ...filters }));
    };

    useEffect(() => {
        if (project_id) {
            dispatch(actions.getRealEstatesByProject(project_id));
        } else if (init) {
            dispatch(actions.getRealEstates({}));
        }
    }, [project_id]);

    return (
        <Table
            columns={table_columns}
            items={realEstates}
            with_pagination
            count={total_results}
            change_page={change_page}
            loading={loading}
        />
    );
};

RealEstateList.defaultProps = {
    withProject: false,
    init: true,
};

export default RealEstateList;

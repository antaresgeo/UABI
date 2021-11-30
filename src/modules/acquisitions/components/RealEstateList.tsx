import { FC, useEffect } from 'react';
import { formatDate } from '../../../utils';
import { Link, Table } from '../../../utils/ui';
import { useSelector, useDispatch } from 'react-redux';
import { swal } from '../../../utils';
import { IRealEstateAttributes } from '../../../utils/interfaces';
import { actions } from '../redux';
import Tag from 'antd/lib/tag';

interface RealEstateListProps {
    withProject?: boolean;
    filters?: any;
    project_id?: number;
    init?: boolean;
    register?: boolean;
    realEstateFilter?: any;
    change_page?: (page: number, pageSize?: number) => void;
}

const RealEstateList: FC<RealEstateListProps> = ({
    withProject,
    filters,
    project_id,
    init,
    register,
    realEstateFilter,
    // change_page
}) => {

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
            await dispatch(actions.getRealEstates({ pagination: 'pagination' }));
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
            title: 'Nombre',
            dataIndex: 'name',
            align: 'left' as 'left',
        },
        {
            title: 'Matrícula',
            dataIndex: 'registry_number',
            align: 'left' as 'left',
        },

        ...(withProject
            ? [
                  {
                      title: 'Proyecto Asociado',
                      dataIndex: 'project',
                      align: 'left' as 'left',
                      render: (p) => p?.name || '',
                  },
              ]
            : []),
        {
            title: 'Fecha Creación',
            dataIndex: 'audit_trail',
            align: 'left' as 'left',
            render: (dates) => formatDate(dates?.created_on),
        },
        {
            title: 'Creado por',
            dataIndex: 'audit_trail',
            align: 'left' as 'left',
            render: (data) => data.created_by,
        },
        ...(register
            ? [
                  {
                      title: 'Estado',
                      dataIndex: 'status',
                      align: 'center' as 'center',
                      render: (s) => {
                          if (s === 'Activo') return <Tag color="success">{s}</Tag>;
                          return <Tag color="default">{s}</Tag>;
                      },
                  },
                  {
                      title: 'Ver',
                      dataIndex: 'id',
                      align: 'center' as 'center',
                      render: (id) => {
                          return (
                              <Link
                                  to={
                                      register
                                          ? `/inventoryrecord/real-estates/${id}/`
                                          : `/acquisitions/real-estates/${id}/`
                                  }
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
                                  to={`/inventoryrecord/real-estates/edit/${id}/`}
                                  name=""
                                  avatar={false}
                                  icon={<i className="fa fa-pencil" aria-hidden="true" />}
                              />
                          );
                      },
                  },
              ]
            : [
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
                                          to={
                                              register
                                                  ? `/inventoryrecord/real-estates/${id}/`
                                                  : `/acquisitions/real-estates/${id}/`
                                          }
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
                              title: 'Desactivar',
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
              ]),
    ];

    const change_page = (page, pageSize) => {
        dispatch(actions.getRealEstates({ page, pageSize, pagination: 'pagination', ...filters }));
    };



    useEffect(() => {
        if (project_id) {
            dispatch(actions.getRealEstatesByProject(project_id));
        } else if (init) {
            dispatch(actions.getRealEstates({ pagination: 'pagination' })); //TODO: mirar filtro de poliza
        }
    }, [project_id]);

    return (
        <Table
            columns={table_columns}
            items={Array.isArray(realEstateFilter) ? realEstateFilter : realEstates}
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

import { FC } from "react";
import { formatDate } from "../../../utils";
import { Link, Table } from "../../../utils/ui";
import { useSelector, useDispatch } from "react-redux";
import { swal } from "../../../utils";

import { IRealEstateAttributes } from "../../../utils/interfaces/components.interfaces";
import { actions } from "../redux";

interface RealEstateListProps {
    realEstates: IRealEstateAttributes[];
    withProject?: boolean;
    change_page?: (page: number, pageSize?: number) => void;
}
const RealEstateList: FC<RealEstateListProps> = ({ realEstates, withProject, change_page }) => {
    const dispatch = useDispatch();

    const deleteRealEstate = (id) => async () => {
        const result = await swal.fire({
            icon: "warning",
            title: "¿Está seguro?",
            text: "¿Está seguro que quiere inactivar el Bien Inmueble?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Continuar",
            denyButtonText: `Cancelar`,
        });

        if (result.isConfirmed) {
            await dispatch(actions.deleteRealEstate(id));
            await dispatch(actions.getRealEstates({}));
            // const _res: any = await dispatch(actions.deleteProject(id));
            // console.log(_res);

            // console.log(_res.message);

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
            title: "ID",
            dataIndex: "id",
            align: "center" as "center",
        },
        {
            title: "Matricula",
            dataIndex: "registry_number",
            align: "center" as "center",
        },
        {
            title: "Nombre",
            dataIndex: "name",
            align: "center" as "center",
        },
        ...(withProject
            ? [
                  {
                      title: "Proyecto Asociado",
                      dataIndex: "project_id",
                      align: "center" as "center",
                  },
              ]
            : []),
        {
            title: "Fecha Creación",
            dataIndex: "audit_trail",
            align: "center" as "center",
            render: (dates) => formatDate(dates?.created_on),
        },
        {
            title: "Creado por",
            dataIndex: "audit_trail.created_by",
            align: "center" as "center",
        },
        {
            title: "Acciones",
            fixed: true,
            children: [
                {
                    title: "Ver",
                    dataIndex: "id",
                    align: "center" as "center",
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
                    title: "Editar",
                    dataIndex: "id",
                    align: "center" as "center",
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
                    title: "Eliminar",
                    dataIndex: "id",
                    align: "center" as "center",
                    render: (id) => {
                        return (
                            <div className="text-danger" onClick={deleteRealEstate(id)}>
                                <i className="fa fa-trash" aria-hidden="true" />
                            </div>
                        );
                    },
                },
            ],
        },
    ];
    return <Table columns={table_columns} items={realEstates} with_pagination count={10} change_page={change_page} />;
};

RealEstateList.defaultProps = {
    withProject: false,
    change_page: () => {},
};

export default RealEstateList;

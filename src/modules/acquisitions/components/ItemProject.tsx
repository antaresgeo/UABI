import { Link } from "react-router-dom";
import { CSSProperties, useEffect } from "react";
import { IItemProject } from "../../../utils/interfaces/components.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux";
import { swal } from "./../../../utils";

const ItemProject = ({ id, name, dependency, creationDate, createdBy }: IItemProject) => {
    const dispatch = useDispatch();

    const realEstates = useSelector((states: any) => states.acquisitions.realEstates.value);

    const LinkStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        cursor: "pointer",
    };

    const deleteProject = async () => {
        let res: any;
        if (id !== "" && id !== undefined) {
            res = await dispatch(actions.getRealEstatesByProject(id));
        }
        if (res.length !== 0) {
            const result = await swal.fire({
                icon: "warning",
                title: "¡Precaución!",
                text: `El proyecto contiene ${res.length} bienes inmuebles asociados.\n\nSi desea continuar los proyectos quedarán sin proyecto y se les debe asignar uno nuevo.`,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Continuar",
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                swal.fire({
                    icon: "info",
                    title: "¡Última oportunidad!",
                    text: "¿Está seguro que quiere inactivar el proyecto?",
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Continuar",
                    denyButtonText: `Cancelar`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(actions.deleteProject(id));

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
                });
            } else if (result.isDenied) {
                swal.close();
            }
        } else {
            const result = await swal.fire({
                icon: "warning",
                title: "¿Está seguro?",
                text: "¿Está seguro que quiere inactivar el proyecto?",
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Continuar",
                denyButtonText: `Cancelar`,
            });

            if (result.isConfirmed) {
                dispatch(actions.deleteProject(id));
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
        }
    };

    return (
        <tr>
            <th scope="row" key={id}>
                {id}
            </th>
            <td>{name}</td>
            <td>{dependency}</td>

            <td>{creationDate}</td>
            <td>{createdBy}</td>
            <td>
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                    }}
                >
                    <Link to={`/acquisitions/projects/${id}`} style={LinkStyle}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </Link>
                    <Link to={`/acquisitions/projects/edit/${id}`} style={LinkStyle}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <div style={LinkStyle} onClick={deleteProject}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ItemProject;

import { Link /*, useHistory, useRouteMatch*/ } from "react-router-dom";
import { CSSProperties } from "react";
import { IItemRealEstate } from "../../../utils/interfaces/components.interfaces";
import { swal } from "./../../../utils";
import { actions } from "../redux";
import { useDispatch } from "react-redux";

const ItemRealEstate = ({ id, matricula, name, project, creationDate, createdBy }: IItemRealEstate) => {
    // let { path, url } = useRouteMatch();
    // const history = useHistory();
    const dispatch = useDispatch();

    const LinkStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    };

    const deleteRealEstate = async () => {
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
            // dispatch(actions.deleteRealEstate(id));
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

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{matricula}</td>
            <td>{name}</td>
            {project && <td>{project}</td>}

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
                    <Link to={`/acquisitions/real-estates/${id}`} style={LinkStyle}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </Link>
                    <Link to={`/acquisitions/real-estates/edit/${id}`} style={LinkStyle}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <Link to={`/acquisitions/real-estates/delete?id=${id}`} style={LinkStyle}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default ItemRealEstate;

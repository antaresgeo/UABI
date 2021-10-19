import { Link } from "react-router-dom";
import { ICardProps } from "../../../utils/interfaces/components.interfaces";

const Card = ({ name, path, view }: ICardProps) => {
    return (
        <div className="col-auto">
            <div className="as-card">
                <Link to={path} style={{ textDecoration: "none", color: "#632264" }}>
                    <div className="card-header">
                        <span>
                            ACCESOS RÁPIDOS <h5>{name}</h5>
                        </span>
                    </div>
                </Link>
                <div className="card-body d-flex flex-column d-sm-flex flex-sm-column">
                    {view === "acquisitions" ? (
                        <>
                            <Link to="/acquisitions/projects/" style={{ color: "black", textDecoration: "none" }}>
                                Proyectos
                            </Link>
                            <Link to="/acquisitions/real-estates/" style={{ color: "black", textDecoration: "none" }}>
                                Bienes Inmuebles
                            </Link>
                        </>
                    ) : (
                        <p>Haz clic para acceder a esta sección.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;

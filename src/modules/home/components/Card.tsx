import { Link } from 'react-router-dom';
import { ICardProps } from '../../../utils/interfaces/';

const Card = ({ name, path, view }: ICardProps) => {
    return (
        <div className="col-auto">
            <div className="as-card">
                <Link to={path} style={{ textDecoration: 'none', color: '#632264',}}>
                    <div className="card-header" >
                        <span style={{color: '#FF8403',  fontSize: '12px', marginLeft:38}}>
                            ACCESOS RÁPIDOS <h5 style={{color: '#FF8403', fontWeight: 'bold', fontSize: '14px', marginLeft:38, marginBottom:5}}>{name}</h5>
                        </span>
                    </div>
                </Link>
                <div className="card-body d-flex flex-column d-sm-flex flex-sm-column">
                    {view === 'acquisitions' ? (
                        <>
                            <Link to="/acquisitions/projects/" style={{ color: 'black', textDecoration: 'none',  marginLeft:38  }}>
                                Proyectos
                            </Link>
                            <Link to="/acquisitions/real-estates/" style={{ color: 'black', textDecoration: 'none',  marginLeft:38  }}>
                                Bienes Inmuebles
                            </Link>
                        </>
                    ) : (
                        <p style={{marginLeft:38}}>Haz clic para acceder a esta sección.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;

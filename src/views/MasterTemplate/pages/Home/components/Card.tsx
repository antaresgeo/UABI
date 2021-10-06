import { Link } from 'react-router-dom';
import { ICardProps } from '../../../../../utils/interfaces/components.interfaces';

const Card = ({ name, path }: ICardProps) => {
	return (
		<div className='col-auto'>
			<div className='card'>
				<Link to={path} className='button-card'></Link>
				<div className='card-header'>
					<span>
						Accede a <h5>{name}</h5>
					</span>
				</div>
				<div className='card-body'>
					<p>Haz clic para acceder a esta sección.</p>
					{/* <p></p>
					<p>Proyectos</p>
					<p>Bienes Inmuebles</p> */}
				</div>
			</div>
		</div>
	);
};

export default Card;

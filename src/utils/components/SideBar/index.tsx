import tmpImg from './../../assets/img/medellin.png';
import { Link } from 'react-router-dom';
import SBItem from './components/SBItem';

const SideBar = () => {
	return (
		<div id='sidebar' className='d-none d-md-block d-lg-block'>
			<div className='p-2' style={{ backgroundColor: '#6DA3FC' }}>
				<img src={tmpImg} className='img-fluid' alt='' />
			</div>

			<ul className='list-unstyled ps-0'>
				<SBItem
					id=''
					name='Inicio'
					collapse={false}
					sublinks={[{ to: '', name: 'Inicio' }]}
				/>
				<SBItem
					id='projects'
					name='Proyectos'
					sublinks={[
						{ to: '/', name: 'Lista' },
						{ to: '/create', name: 'Nuevo' },
						{ to: '/edit', name: 'Editar' },
					]}
				/>
				<SBItem id='bienesInmuebles' name='Bienes Inmuebles' />
				<SBItem id='bienesInmuebles/areas' name='Áreas de Bien Inmueble' />
				<SBItem id='adquisisiones' name='Adquisisiones' />
			</ul>
		</div>
	);
};

export default SideBar;

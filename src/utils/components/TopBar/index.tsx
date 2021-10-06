import { Link, useHistory } from 'react-router-dom';

const TopBar = () => {
	const history = useHistory();

	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container-xl'>
				<div className='collapse navbar-collapse justify-content-end'>
					<ul className='navbar-nav mr-auto justify-items-end'>
						<li>
							Hola, <span>Andrea Canasteros Marulanda</span>
						</li>
						<div
							onClick={() => {
								history.replace('/auth/signin');
								window.location.reload();
							}}
						>
							Salir
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TopBar;

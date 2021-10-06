import Card from './components/Card';

const Home = () => {
	return (
		<>
			<section className='pt-5' id='texto-superior'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<h4>Bienvenido al sistema de información para administración de bienes inmuebles</h4>
							<p>
								Encuentra aquí los accesos rápidos a las funciones más
								utilizadas.
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className='content-cards'>
				<section id='cards'>
					<div className='container'>
						<div className='row justify-content-center'>
							<Card name='Adquisición' path='/adquisitions' />
							<Card name='UABI' path='/projects' />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;

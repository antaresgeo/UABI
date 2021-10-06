const Home = () => {
	return (
		<>
			<section className='pt-5' id='texto-superior'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<h4>Bienvenido a sistema de información UABI</h4>
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
							<div className='col-auto'>
								<div className='card'>
									<a href='#' className='button-card'></a>
									<div className='card-header'>
										<span>
											Accede a <h5>UABI</h5>
										</span>
									</div>
									<div className='card-body'>
										<p>Haz clic para acceder a esta sección.</p>
									</div>
								</div>
							</div>
							<div className='col-auto'>
								<div className='card'>
									<a href='#' className='button-card'></a>
									<div className='card-header'>
										<span>
											Accede a <h5>Adquisición</h5>
										</span>
									</div>
									<div className='card-body'>
										<p>Haz clic para acceder a esta sección.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;

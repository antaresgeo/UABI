const TopBar = () => {
	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container-xl'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarsExample07XL'
					aria-controls='navbarsExample07XL'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse justify-content-end'>
					<ul className='navbar-nav mr-auto justify-items-end'>
						<li>
							Hola, <span>Andrea Canasteros Marulanda</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TopBar;

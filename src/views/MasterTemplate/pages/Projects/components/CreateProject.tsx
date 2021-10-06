import { useState } from 'react';
import { createProject } from './../../../../../apis/uabi';

interface IProps {
	name: string;
}

const CreateRealEstate = ({ name }: IProps) => {
	const [projectName, setProjectName] = useState('');
	const [projectDescription, setProjectDescription] = useState('');
	const [dependency, setDependency] = useState('');

	const _createProject = async () => {
		const response: any = await createProject(
			projectName,
			projectDescription,
			dependency
		);
		await alert(response.message);
		console.log(response);
	};

	return (
		<section className='pt-5' id='texto-superior'>
			<div className='container-fluid'>
				<div className='row justify-content-center'>
					<div className='col-md-12'>
						<div
							style={{
								backgroundColor: 'white',
								borderRadius: 15,
								padding: '10px 20px',
							}}
						>
							<h5>{name}</h5>
							<hr />
							<div className='container'>
								<form>
									<div className='row'>
										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Nombre Proyecto
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
												placeholder='Ej.: Puente de la Madre Laura'
												value={projectName}
												onChange={(e) => setProjectName(e.target.value)}
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>
										<div className='col-6'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Descripción Proyecto
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
												placeholder='Descripción del Proyecto'
												value={projectDescription}
												onChange={(e) => setProjectDescription(e.target.value)}
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>

										<div className='col'>
											<label htmlFor='form-select' className='form-label'>
												Dependecia
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
												onChange={(e: any) => {
													setDependency(e.target.value);
												}}
											>
												<option value='' selected disabled hidden>
													Selecciona una Destinación
												</option>
												<option value='PÚBLICO'>Público</option>
												<option value='FISCAL'>Fiscal</option>
												<option value='MIXTO'>Mixto</option>
											</select>
										</div>
									</div>
								</form>
							</div>
							<div className='col text-center'>
								<div className='btn btn-success my-3' onClick={_createProject}>
									Guardar
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CreateRealEstate;

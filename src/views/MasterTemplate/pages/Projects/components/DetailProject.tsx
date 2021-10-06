import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProject } from '../../../../../apis/uabi';
import {
	IProjectAttributes,
	IProjectResponse,
	IProjectsResponse,
} from './../../../../../utils/interfaces/components.interfaces';

interface IProps {
	id: string;
}

const DetailProject = () => {
	const { id } = useParams<IProps>();
	const [project, setProject] = useState<IProjectAttributes>({
		id: '',
		name: '',
		description: '',
		dependency: '',
		audit_trail: {
			created_by: '',
			created_on: '',
			updated_by: null,
			updated_on: null,
			updated_values: null,
		},
		status: -1,
	});

	const _getProject = async () => {
		let projectResponse: IProjectResponse | string = await getProject(id);

		if (typeof projectResponse !== 'string') {
			let tmpData = projectResponse.data;

			setProject(tmpData);
		}
	};

	useEffect(() => {
		_getProject();
	}, []);

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
							<h5>
								<b>Proyecto:</b> {project.name}
							</h5>
							<hr />
							<div className='container'>
								<form>
									<div className='row'>
										<div className='col-3'>
											<fieldset disabled>
												<label
													htmlFor='disabledTextInput'
													className='form-label'
												>
													Código Proyecto
												</label>
												<input
													type='text'
													id='disabledTextInput'
													className='form-control'
													placeholder='1ABC3'
													value={project.id}
													disabled
												/>
											</fieldset>
										</div>
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
												value={project.name}
												disabled
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
												value={project.description}
												disabled
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>

										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Destinación
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
												value={project.dependency}
												disabled
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailProject;

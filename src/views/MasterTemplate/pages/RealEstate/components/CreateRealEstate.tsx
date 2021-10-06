import { useEffect, useState } from 'react';
import { createRealEstate, getProjects } from '../../../../../apis/uabi';
import {
	IProjectAttributes,
	IProjectsResponse,
} from '../../../../../utils/interfaces/components.interfaces';

interface IProps {
	name: string;
}

const RealEstate = ({ name }: IProps) => {
	const [projects, setProjects] = useState<IProjectAttributes[]>([
		{
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
		},
	]);

	const [realEstate, setRealEstate] = useState({
		dependency: '',
		destination_type: '',
		accounting_account: '',
		cost_center: '',
		registry_number: '',
		name: '',
		description: '',
		address: '',
		cbml: '',
		total_area: -1,
		total_percentage: -1,
		estate_type: '',
		tipology: '',
		project_id: -1,
	});

	const _getProjects = async () => {
		let projectsResponse: IProjectsResponse | string = await getProjects();

		if (typeof projectsResponse !== 'string') {
			let tmpData = projectsResponse.data;

			setProjects(tmpData);
		}
	};

	useEffect(() => {
		_getProjects();
		console.log(projects);
	}, []);

	useEffect(() => {
		printProjects();
	}, [projects]);

	const _createRealEstate = async () => {
		const response: any = await createRealEstate(realEstate);

		await alert(response.message);
		console.log(response);
	};

	const handleChange = (e: any) => {
		console.log(e.target.name);
		console.log(e.target.value);

		setRealEstate({
			...realEstate,
			[e.target.name]: e.target.value,
		});
	};

	// Prints
	const printProjects = () => {
		projects.map((project) => {
			return (
				<option value={project.id} selected>
					{project.name}
				</option>
			);
		});
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
							<h5>{name} Bien Inmueble</h5>
							<hr />
							<div className='container'>
								<form>
									<div className='row'>
										<div className='col-3 d-flex'>
											{/*	<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='flexRadioDefault'
													id='flexRadioDefault4'
													checked
												/>
												<label
													className='form-check-label'
													htmlFor='flexRadioDefault4'
												>
													Proyecto Existente
												</label>
											</div> */}
											{/* <div className='form-check'>
													<input
														className='form-check-input'
														type='radio'
														name='flexRadioDefault'
														id='flexRadioDefault5'
													/>
													<label
														className='form-check-label'
														htmlFor='flexRadioDefault5'
													>
														Proyecto Nuevo
													</label>
												</div> */}
										</div>
										<div className='col-6'>
											<select
												className='form-select'
												aria-label='Default select example'
												name='project_id'
												onChange={handleChange}
											>
												<option value='' selected disabled>
													-- Seleccione Proyecto --
												</option>
												{projects.map((project) => {
													return (
														<option value={project.id}>{project.name}</option>
													);
												})}
											</select>
										</div>
									</div>
									<div className='row my-5 py-3'>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Dependencia a cargo
											</label>
											<select
												className='form-select'
												aria-label='dependency'
												name='dependency'
												onChange={handleChange}
											>
												<option value='' selected disabled hidden>
													-- Seleccione Dependencia --
												</option>
												<option value='Secretaría Suministros'>
													Secretaría Suministros
												</option>
												<option value='Secretaría Salud'>
													Secretaría Salud
												</option>
												<option value='Secretaría Cultura'>
													Secretaría Cultura
												</option>
												<option value='POR DEFINIR'>POR DEFINIR</option>
											</select>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Tipo Destinación
											</label>
											<select
												className='form-select'
												aria-label='destination_type'
												name='destination_type'
												onChange={handleChange}
											>
												<option value='' selected disabled hidden>
													-- Seleccione Destinación --
												</option>
												<option value='Público'>Público</option>
												<option value='Fiscal'>Fiscal</option>
												<option value='Mixto'>Mixto</option>
												<option value='POR DEFINIR'>POR DEFINIR</option>
											</select>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Cuenta Contable
											</label>
											<select
												className='form-select'
												aria-label='accounting_account'
												name='accounting_account'
												onChange={handleChange}
											>
												<option value='' selected disabled hidden>
													-- Seleccione Cuenta Contable --
												</option>
												<option value='Público'>Público</option>
												<option value='2'>Fiscal</option>
												<option value='3'>Mixto</option>
												<option value='POR DEFINIR'>POR DEFINIR</option>
											</select>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Centro de Costos
											</label>
											<select
												className='form-select'
												aria-label='cost_center'
												name='cost_center'
												onChange={handleChange}
											>
												<option value='' selected disabled hidden>
													-- Seleccione Centro de Costos --
												</option>
												<option value='Público'>Público</option>
												<option value='2'>Fiscal</option>
												<option value='3'>Mixto</option>
												<option value='POR DEFINIR'>POR DEFINIR</option>
											</select>
										</div>

										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Número Matricula
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
												name='registry_number'
												onChange={handleChange}
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>
										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Nombre Inmueble
											</label>
											<input
												type=''
												className='form-control'
												id='name'
												name='name'
												onChange={handleChange}
											/>
										</div>
										<div className='col-6'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Descripción Inmueble
											</label>
											<input
												type=''
												className='form-control'
												id='description'
												aria-describedby='description'
												name='description'
												onChange={handleChange}
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>

										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Dirección
											</label>
											<input
												type=''
												className='form-control'
												id='address'
												name='address'
												onChange={handleChange}
												placeholder='Integración con Localización (Pop Up)'
											/>
										</div>
										<div className='col-2'>
											<label className='form-label'>Area Total (m2)</label>
											<input
												type='number'
												className='form-control'
												id='total_area'
												name='total_area'
												onChange={handleChange}
											/>
										</div>
										<div className='col-2'>
											<label className='form-label'>Porcentaje Total (%)</label>
											<input
												type='number'
												className='form-control'
												id='total_percentage'
												name='total_percentage'
												onChange={handleChange}
											/>
										</div>

										{/* <div className='col-3'>
											<label
												className='form-label'
											>
												Avalúo
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
											/>
										</div> */}
										<div className='col-2'>
											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													id='flexRadioDefault2'
													name='estate_type'
													onChange={handleChange}
													checked
												/>
												<label
													className='form-check-label'
													htmlFor='flexRadioDefault2'
												>
													Urbano
												</label>
											</div>

											<div className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													id='flexRadioDefault1'
													name='estate_type'
													onChange={handleChange}
												/>
												<label
													className='form-check-label'
													htmlFor='flexRadioDefault1'
												>
													Rural
												</label>
											</div>
										</div>
										<div className='col-3'>
											<label className='form-label'>Tipología</label>
											<select
												className='form-select'
												name='tipology'
												id='tipology'
												onChange={handleChange}
											>
												<option value='' selected disabled hidden>
													-- Seleccione Tipología --
												</option>
												<option value='2'>Secretaría Salud</option>
												<option value='3'>Secretaría Cultura</option>
												<option value='POR DEFINIR'>POR DEFINIR</option>
											</select>
										</div>
									</div>

									{/* Adquisitions */}
									<div
										className='row py-3 my-3'
										style={{
											backgroundColor: '#f7f7f7',
											borderRadius: 15,
											border: '1px solid',
										}}
									>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Tipo de Adquisición
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
												name='acquisition_type'
												onChange={handleChange}
											>
												<option value='1' selected>
													Compraventa
												</option>
												<option value='2'>Donación</option>
												<option value='3'>Expropiación</option>
												<option value='4'>Permuta</option>
												<option value='5'>Cesión a título gratuito</option>
												<option value='6'>Dación en pago</option>
												<option value='7'>Obigaciones Urbanísticas</option>
											</select>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Tipo de activo
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
											>
												<option value='1' selected>
													Lote
												</option>
												<option value='2'>Construccion</option>
												<option value='3'>Mejora</option>
												<option value='4'>Construcción para demoler</option>
											</select>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Tipo de Título
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
											>
												<option value='1' selected>
													--
												</option>
												<option value='2'>Construccion</option>
												<option value='3'>Mejora</option>
												<option value='4'>Construcción para demoler</option>
											</select>
										</div>
										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												No Acto administrativo
											</label>
											<input
												type=''
												className='form-control'
												id='act_number'
												aria-describedby='act_number'
												name='act_number'
												onChange={handleChange}
											/>
										</div>
										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Valor Patrimonial
											</label>
											<input
												type=''
												className='form-control'
												id='patrimonial_value'
												aria-describedby='patrimonial_value'
												name='patrimonial_value'
												onChange={handleChange}
											/>
										</div>
										<div className='col-2'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Area Total (m2)
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
											/>
										</div>
										<div className='col-2'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												Porcentaje Adquirido
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Vendedor
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
											>
												<option value='1' selected>
													Alexander
												</option>
												<option value='2'>Sergio</option>
												<option value='3'>Ximena</option>
											</select>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Comprador
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
											>
												<option value='1' selected>
													Alexander
												</option>
												<option value='2'>Sergio</option>
												<option value='3'>Ximena</option>
											</select>
										</div>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Tipo de Entidad
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
											>
												<option value='1' selected>
													Notaría
												</option>
												<option value='2'>Sergio</option>
												<option value='3'>Ximena</option>
											</select>
										</div>
										<div className='col-3'>
											<label
												htmlFor='exampleInputEmail1'
												className='form-label'
											>
												No. Entidad
											</label>
											<input
												type=''
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
											/>
											<div id='emailHelp' className='form-text'></div>
										</div>
										{/* <Location /> */}
										Localización
										<div className='col-3'>
											<button type='submit' className='btn btn-primary mr-3'>
												Agregar Adquisición
											</button>
										</div>
									</div>
									{/* END Adquisitions */}

									<div
										className='row py-3 my-3'
										style={{
											backgroundColor: '#f7f7f7',
											borderRadius: 15,
											border: '1px solid',
										}}
									>
										<div className='col-3'>
											<label htmlFor='form-select' className='form-label'>
												Tipo Documento
											</label>
											<select
												className='form-select'
												aria-label='Default select example'
											>
												<option value='1' selected>
													Escritura
												</option>
												<option value='2'>Matricula</option>
												<option value='3'>Contrato</option>
											</select>
										</div>
										<div className='col-3'>
											<div className='mb-3'>
												<label htmlFor='formFile' className='form-label'>
													Default file input example
												</label>
												<input
													className='form-control'
													type='file'
													id='formFile'
												/>
												<div id='emailHelp' className='form-text'>
													Escritura.pdf
												</div>
											</div>
										</div>
										<div className='col-1'>
											<label htmlFor=''></label>
											<button type='submit' className='btn btn-primary mr-3'>
												Subir
											</button>
										</div>
									</div>
									<div className='d-flex my-3'>
										<button type='submit' className='btn btn-success mr-3'>
											Guardar
										</button>
										<div
											className='btn btn-primary mx-3'
											onClick={_createRealEstate}
										>
											Agregar
										</div>
									</div>
								</form>
							</div>
							<table
								className='table table-hover text-center table-bordered'
								style={{ borderRadius: 15 }}
							>
								<thead>
									<tr>
										<th scope='col' className='align-top'>
											Número Matricula
										</th>
										<th scope='col' className='align-top'>
											Nombre Inmueble
										</th>
										<th scope='col' className='align-top'>
											Valor Patrimonial
										</th>
										<th scope='col' className='align-top'>
											% Adquirido
										</th>
										<th scope='col' className='align-top'>
											Acciones
											<div className='d-flex justify-content-center'>
												<p>ver</p>
												<p>editar</p>
												<p>eliminar</p>
											</div>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope='row'>1-2345678</th>
										<td>Inmueble 1</td>
										<td>10000000</td>
										<td>10</td>
										<td>
											<div
												className='btn-group'
												role='group'
												aria-label='Basic mixed styles example'
											>
												<a href=''>
													<i className='fa fa-eye' aria-hidden='true'></i>
												</a>
												<a href=''>
													<i className='fa fa-pencil' aria-hidden='true'></i>
												</a>
												<a href=''>
													<i className='fa fa-trash' aria-hidden='true'></i>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<th scope='row'>1-2345679</th>
										<td>Inmueble 2</td>
										<td>10000000</td>
										<td>100</td>
										<td>
											<div
												className='btn-group'
												role='group'
												aria-label='Basic mixed styles example'
											>
												<a href=''>
													<i className='fa fa-eye' aria-hidden='true'></i>
												</a>
												<a href=''>
													<i className='fa fa-pencil' aria-hidden='true'></i>
												</a>
												<a href=''>
													<i className='fa fa-trash' aria-hidden='true'></i>
												</a>
											</div>
										</td>
									</tr>
									<tr>
										<th scope='row'>1-2345670</th>
										<td>Inmueble 3</td>
										<td>10000000</td>
										<td>50</td>
										<td>
											<div
												className='btn-group'
												role='group'
												aria-label='Basic mixed styles example'
											>
												<a href=''>
													<i className='fa fa-eye' aria-hidden='true'></i>
												</a>
												<a href=''>
													<i className='fa fa-pencil' aria-hidden='true'></i>
												</a>
												<a href=''>
													<i className='fa fa-trash' aria-hidden='true'></i>
												</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
							<div className='col text-center'>
								<button type='submit' className='btn btn-success my-3'>
									Guardar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RealEstate;

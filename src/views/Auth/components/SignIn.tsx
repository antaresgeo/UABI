import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import * as actions from './../../store/actions/userAction';
import axios, { AxiosResponse } from 'axios';
import {
	Form,
	Image,
	Header,
	Input,
	Checkbox,
	Button,
	Grid,
} from 'semantic-ui-react';

import loginimage from './../../../utils/assets/img/login.jpeg';
import logo from './../../../utils/assets/img/escudoAlcaldia.png';
import { signIn } from './../../../apis/authentification';

export default function SignIn() {
	const history = useHistory();
	const [idusuario, setIdusuario] = useState('');
	const [contraseña, setContraseña] = useState('');
	const [contenidopassword, setContenidopassword] = useState('VER');
	const [tipopassword, setTipoPassword] = useState('password');

	async function ingresarUsuario() {
		try {
			let token: AxiosResponse<any> | string = await signIn(
				idusuario,
				contraseña
			);
			if (typeof token === 'string') {
				alert('Any error');
				return;
			}
			console.log(token);

			localStorage.setItem('token', token.data);
			history.push('/');
			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	}
	function mostrarContraseña() {
		if (contraseña.trim() === '') return;
		if (contenidopassword.trim() === 'VER') {
			setTipoPassword('input');
			setContenidopassword('OCULTAR');
		} else {
			setTipoPassword('password');
			setContenidopassword('VER');
		}
	}

	return (
		<div>
			<Grid columns={2} style={{ height: '100vh' }} className='no-margin'>
				<Grid.Row className='no-padding-bottom no-padding-top'>
					<Grid.Column className='no-padding-right no-padding-left'>
						<Image className='image-container-login' src={loginimage} />
					</Grid.Column>
					<Grid.Column className='no-padding-right no-padding-left container-form-creacion-cuentas'>
						<Form className='container-form-login'>
							<Form.Field className='container-center'>
								<Image className='image-logo-container-login' src={logo} />
							</Form.Field>
							<Form.Field>
								<Header as='h2' className='sub-header-login'>
									Sistema para la Administración de Bienes Inmuebles
									{/* <Header.Subheader className='sub-header-login'>
										Inicie sesión para acceder al sistema
									</Header.Subheader> */}
								</Header>
							</Form.Field>
							<Form.Field className='container-inputs-login usuario-item-login'>
								<label>Usuario</label>
								<Input
									onChange={(e) => setIdusuario(e.target.value)}
									value={idusuario}
								/>
							</Form.Field>
							<Form.Field className='container-inputs-login'>
								<label>Contraseña</label>
								<Input
									onChange={(e) => setContraseña(e.target.value)}
									value={contraseña}
									type={tipopassword}
									action={
										<Button
											basic
											color='blue'
											content={contenidopassword}
											onClick={mostrarContraseña}
										/>
									}
								/>
							</Form.Field>

							<Form.Field className='container-flex-end'>
								<Header
									size='small'
									color='blue'
									className='login-olvido-contraseña'
								>
									Validar código de verificación
								</Header>
							</Form.Field>
							<Form.Field className='container-space-between'>
								{/* <Button
									color='black'
									className='boton-ingresar-login'
									onClick={() =>
										(window.location.href = 'http://localhost:3000/auth/signup')
									}
								>
									Registrarme
								</Button> */}
								<Button
									color='blue'
									className='boton-ingresar-login'
									onClick={ingresarUsuario}
								>
									Ingresar
								</Button>
							</Form.Field>
						</Form>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}

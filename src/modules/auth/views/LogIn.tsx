import { useEffect, useState } from 'react';
import { Form, Image, Header, Input, Button, Grid, Icon, SemanticICONS } from 'semantic-ui-react';

import loginimage from './../../../utils/assets/img/login.jpeg';
import logo from './../../../utils/assets/img/escudoAlcaldia.png';
import { authenticationUme } from '../../../utils';

export default function SignIn() {
    const [idusuario, setIdusuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [contenidopassword, setContenidopassword] = useState('VER');
    const [tipopassword, setTipoPassword] = useState('password');
    const [passwordVisibled, setPasswordVisibled] = useState(false);
    const [iconVisibility, setIconVisibility] = useState<SemanticICONS>('eye');

    async function ingresarUsuario() {
        // try {
        //     let res: AxiosResponse<any> | any = await signIn(idusuario, contraseña);
        //     console.log(res);

        //     if (res.status === 200) {
        //         localStorage.setItem("token", res.data);

        //         history.push("/");
        //         window.location.reload();
        //     } else {
        //         console.error(res[0]);
        //         await alert(res[0].response.data.mensaje);
        //     }
        // } catch (error) {
        //     console.error(error);
        // }
        const auth = authenticationUme();
        console.log(auth);
    }

    const handleAltVisibility = () => {
        setPasswordVisibled(!passwordVisibled);
    };

    const altVisibilityPassword = () => {
        if (contraseña.trim() === '') return;

        setTipoPassword(passwordVisibled ? 'input' : 'password');
        setContenidopassword(passwordVisibled ? 'Ocultar' : 'Mostrar');
        setIconVisibility(passwordVisibled ? 'eye slash' : 'eye');
    };

    useEffect(() => {
        altVisibilityPassword();
    }, [passwordVisibled]);

    return (
        <div>
            <Grid columns={2} style={{ height: '100vh' }} className="no-margin">
                <Grid.Row className="no-padding-bottom no-padding-top">
                    <Grid.Column className="no-padding-right no-padding-left">
                        <Image className="image-container-login" src={loginimage} />
                    </Grid.Column>
                    <Grid.Column className="no-padding-right no-padding-left container-form-creacion-cuentas">
                        <Form className="container-form-login">
                            <Form.Field className="container-center">
                                <Image className="image-logo-container-login" src={logo} />
                            </Form.Field>
                            <Form.Field>
                                <Header as="h2" className="sub-header-login">
                                    Sistema para la Administración de Bienes Inmuebles
                                </Header>
                            </Form.Field>
                            <Form.Field className="container-inputs-login usuario-item-login">
                                <label>Usuario</label>
                                <Input
                                    onChange={(e) => setIdusuario(e.target.value)}
                                    onKeyPress={(e: any) => {
                                        if (e.charCode === 13) {
                                            ingresarUsuario();
                                        }
                                    }}
                                    placeholder="Ej.: maria.paulina"
                                    value={idusuario}
                                />
                            </Form.Field>
                            <Form.Field className="container-inputs-login">
                                <label>Contraseña</label>
                                <Input
                                    onChange={(e) => setContraseña(e.target.value)}
                                    onKeyPress={(e: any) => {
                                        if (e.charCode === 13) {
                                            ingresarUsuario();
                                        }
                                    }}
                                    value={contraseña}
                                    type={tipopassword}
                                    placeholder="Ej.: Y7ai-*892mndUH"
                                    action={
                                        <Button animated="vertical" basic color="blue" onClick={handleAltVisibility}>
                                            <Button.Content hidden>{contenidopassword}</Button.Content>
                                            <Button.Content visible>
                                                <Icon name={iconVisibility} />
                                            </Button.Content>
                                        </Button>
                                    }
                                />
                            </Form.Field>

                            <Form.Field className="container-flex-end">
                                {/* <Button
									color='black'
									className='boton-ingresar-login'
									onClick={() =>
										(window.location.href = 'http://localhost:3000/auth/signup')
									}
								>
									Registrarme
								</Button> */}
                                <Button color="blue" className="boton-ingresar-login" onClick={ingresarUsuario}>
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

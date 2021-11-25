import { useEffect, useState } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import loginimage from './../../../utils/assets/img/login.jpeg';
import logo from './../../../utils/assets/img/escudoAlcaldia.png';
import { Redirect, useHistory } from 'react-router-dom';
import LoginForm from './../components/LoginForm';
import actions from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function SignIn() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(parseInt(localStorage.getItem('attemp')) >= 9);

    const onLogin = (values) => {
        dispatch(actions.login(values.user, values.password));
    };

    const token: string = localStorage.getItem('_tk_');

    return (
        <div>
            {token && <Redirect to="/" />}
            <Grid columns={2} style={{ height: '100vh' }} className="no-margin">
                <Grid.Row className="no-padding-bottom no-padding-top">
                    <Grid.Column className="no-padding-right no-padding-left">
                        <Image className="image-container-login" src={loginimage} />
                    </Grid.Column>
                    <Grid.Column className="no-padding-right no-padding-left container-form-creacion-cuentas">
                        <div className="container-form-login">
                            <div className="container-center">
                                <Image className="image-logo-container-login" src={logo} />
                            </div>
                            <div>
                                <h5 className="sub-header-login text-center">
                                    Sistema para la Administración de Bienes Inmuebles
                                </h5>
                                <p
                                    style={{
                                        fontWeight: 'bold',
                                        paddingTop: '15px',
                                        fontSize: '14px',
                                        borderTop: '0.5px solid #D1D0D0',
                                    }}
                                >
                                    Ingrese sus datos para Iniciar sesión
                                </p>
                            </div>
                            <LoginForm onSubmit={onLogin} disabled={disabled} />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

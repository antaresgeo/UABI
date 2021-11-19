import { useEffect, useState } from 'react';
import { Form, Image, Header, Input, Button, Grid, Icon, SemanticICONS } from 'semantic-ui-react';

import loginimage from './../../../utils/assets/img/login.jpeg';
import logo from './../../../utils/assets/img/escudoAlcaldia.png';
import { authenticationUme } from '../../../utils';
import { Permit, Role } from '../../../index';
import { Redirect, useHistory } from 'react-router-dom';
import LoginForm from './../components/LoginForm';

export default function SignIn() {
    const history = useHistory();

    const onLogin = (values) => {
        const pass_is_valid = values.password === '@sabi2021';
        const user_is_valid = values.user === '1020729179';
        if (pass_is_valid && user_is_valid) {
            const user = {
                role: Role.ADMINISTRATOR,
                permits: [...Object.values(Permit)],
            };
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/');
        }
    }

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            {user && <Redirect to="/" />}
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
                                <p style={{fontWeight: 'bold', marginTop: '15px', fontSize: '14px'}}>Ingrese sus datos para Iniciar sesión</p>
                            </div>
                            <LoginForm
                                onSubmit={onLogin}
                            />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

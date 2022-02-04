import useRoutes from './config/routes';
import Router from './utils/components/app_router';
import Template from './utils/components/template';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import actions from './modules/auth/redux/actions';
import PasswordChangeModal from './modules/auth/views/pass_change_modal';
import { TemplateContext } from './utils/components/template/template_context';
import PercentageModal from './modules/acquisitions/components/percentage_Modal';
import axios from "axios";

function App() {
    const user = useSelector((store: any) => store.auth.user);
    const context = useContext(TemplateContext);
    const dispatch = useDispatch();
    const routes = useRoutes();
    const aux_user = {
        ...user,
        permits: user?.permits?.map((a) => a.name) || [],
        roles: user?.roles?.map((a) => a.name) || [],
    };

    // const query_test = async () => {
    //     return await axios.post('https://www.medellin.gov.co/test/servicio-usuarios/auth', {
    //         info: { action: 'registrarInfoPersona' },
    //         persona: {
    //             tipo_sociedad: 'N-Persona Natural',
    //             tipo_entidad: 'NINGUNO',
    //             tipo_identificacion: '1-Cédula de Ciudadanía',
    //             documento: '1000416139',
    //             nombres: 'Ficticio Prueba',
    //             apellidos: 'Listo ejemplo',
    //             correo: 'santiago.suarez@dation.co',
    //             direccion: 'calle falsa 123',
    //             barrio: 'Candelaria',
    //             telefono: '5814766',
    //             celular: '300102000',
    //             pais: 'CO',
    //             departamento: '05-ANTIOQUIA',
    //             municipio: '05001-MEDELLÍN',
    //             politica: 'true',
    //             notificacion: 'false',
    //             genero: 'f',
    //         },
    //         autenticacion: {
    //             fecha: '2021-12-23T18:44:33Z',
    //             usuario: 'VVNSX1VBQklfVU1F',
    //             llave: 'ODk3NTZEQ0QyMDJDMzVERDExQjU1ODkyODhCMDUwRTU0REJFOEJEQ0Y2MzIzMzJBOTIwRURFMUYyQTg2RTA0OA==',
    //             cadena: 'CE4cPWUOXJZVVLCjTFmx85n0TKEpFoSrJ6X6c4r5',
    //         },
    //     });
    // };
    // query_test().then((res) => console.log(res))

    return (
        <>
            <Router routes={routes} template={Template} user={aux_user} />
            <PasswordChangeModal
                update_password={async (password) => {
                    await dispatch(actions.update_password(password));
                }}
                open={context.pass_modal}
                toggle={context.toggle_pass_modal}
            />
            <PercentageModal open={context.percentege} toggle={context.toggle_percentage_modal} />
        </>
    );
}

export default App;

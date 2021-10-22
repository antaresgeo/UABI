import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import moment from 'moment';
import crypto from 'crypto';

export const swal = withReactContent(Swal);

/**
 * Function to create generic actions from a request
 * @param { default: string; success: string; fail: string } type  type of generic action
 * @param {Promise<any>} request  service to get data of the generic action
 * @param {[success: function, fail: function]} creators  array successful and fails for the callback of the generic action, these functions should return the action to dispatch according to the case
 * @param {function} effect  In the event that the generic action is successful and you want to trigger more actions depending on the generic action, you must pass this function
 */
type EffectFn = (payload: any) => void;
export const request_dispatch =
    (
        type: { default: string; success: string; fail: string },
        request: Promise<any>,
        creators: [Function?, Function?] = [],
        effect?: EffectFn
    ) =>
    (dispatch: any): Promise<any> => {
        const [success, fail] = creators || [];
        dispatch({ type: type.default });
        return request
            .then((payload) => {
                success
                    ? dispatch(success(payload))
                    : dispatch({ type: type.success, payload });
                if (effect) effect(payload);
                return Promise.resolve(payload);
            })
            .catch((error) => {
                fail
                    ? dispatch(fail(error))
                    : dispatch({ type: type.fail, error });
                return Promise.reject(error);
            });
    };

export const qsToArray = (qs: string) => {
    let qsAsArray = [];

    let search = qs.split('?').pop().split('&');
    search.map(async (_search) => {
        let tmp = _search.split('=');

        await qsAsArray.push({
            key: tmp[0],
            value: tmp[1],
        });
    });
    return qsAsArray;
};
export const setTitle = (title: string) => (document.title = title);

export const formatDate = (date) => {
    const tmpDate = new Date(parseInt(date));

    const newDate = moment(tmpDate).format('MM/DD/YYYY hh:mm');

    return date && newDate;
};

export const extractMonth = (date) => {
    const tmpDate = new Date(parseInt(date));

    const newDate = moment(tmpDate).format('MMMM');

    return date && newDate;
};

export const authenticationUme = () => {
    // cadena

    let hexdec = '10681D4015638022C919FCB3A8A996B75997C66B'

        .toString()

        .toUpperCase();

    let dateNow = moment(new Date(), "YYYY-MM-DD'T'HH:mm:ssZ")
        // .add(-5, "hours")

        .toString();

    // contraseña

    // let password = ConfigEnv.UME_PASSWORD;
    let password = '6tC8dvgfr@C';

    let passwordbas = base64encode(password).toString();

    //usuario

    // let user = ConfigEnv.UME_USER;
    let user = 'USR_UABI_UME';

    let userBase64 = base64encode(user).toString();

    // llave

    let key = `${hexdec}${dateNow}${passwordbas}`;

    let encryption = sha256(key).toUpperCase();

    let keybas = base64encode(encryption).toString();

    const Authorization = {
        fecha: dateNow,
        usuario: userBase64,
        llave: keybas,
        cadena: hexdec,
    };

    return Authorization;
};

const base64encode = (string: string) => {
    // create a buffer
    const buff = Buffer.from(string, 'utf-8');

    // decode buffer as Base64
    return buff.toString('base64');
};

function sha256(str: string) {
    // secret or salt to be hashed with
    const secret = '4xc3lS0fTw4r3.*';

    // create a sha-256 hasher
    const sha256Hasher = crypto.createHmac('sha256', secret);

    // hash the string
    // and set the output format
    return sha256Hasher.update(str).digest('hex');
}

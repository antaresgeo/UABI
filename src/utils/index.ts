import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import moment from 'moment';
import crypto from 'crypto';

export const swal = withReactContent(
    Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-outline-primary',
            denyButton: 'btn btn-outline-primary',
        },
        backdrop: 'rgba(205, 218, 229, 0.75)',
    })
);

export const swal_warning = withReactContent(
    Swal.mixin({
        icon: 'warning',
        customClass: {
            popup: 'warning',
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-outline-primary',
            denyButton: 'btn btn-outline-primary',
        },
        backdrop: 'rgba(149, 118, 70, 0.75)',
    })
);

export const swal_success = withReactContent(
    Swal.mixin({
        icon: 'success',
        customClass: {
            popup: 'success',
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-outline-primary',
            denyButton: 'btn btn-outline-primary',
        },
        backdrop: 'rgba(75 ,100 ,59,0.75)',
    })
);

/**
 * Function to create generic actions from a request
 * @param { default: string; success: string; fail: string } type  type of generic action
 * @param {Promise<any>} request  service to get data of the generic action
 * @param {[success: function, fail: function]} creators  array successful and fails for the callback of the generic action, these functions should return the action to dispatch according to the case
 * @param {function} effect  In the event that the generic action is successful, and you want to trigger more actions depending on the generic action, you must pass this function
 */
type EffectFn = (payload: any) => void;
export const request_dispatch = (
    type: { default: string; success: string; fail: string },
    request: Promise<any>,
    creators: [Function?, Function?] = [],
    effect?: EffectFn
) => {
    return (dispatch: any): Promise<any> => {
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
};

export const qsToArray = (qs: string) => {
    let qsAsArray = [];

    let search = qs.split('?').pop().split('&');
    search.map(async (_search) => {
        let tmp = _search.split('=');

        qsAsArray.push({
            key: tmp[0],
            value: tmp[1],
        });
    });
    return qsAsArray;
};
export const setTitle = (title: string) => (document.title = title);

export const formatDate = (date) => {
    if (date) {
        const tmpDate = new Date(date);
        const newDate = moment(tmpDate).format('MM/DD/YYYY - h:mm A');
        return date && newDate;
    }
    return '';
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
    let user = 'USR_SABI_UME';

    let userBase64 = base64encode(user).toString();

    // llave

    let key = `${hexdec}${dateNow}${passwordbas}`;

    let encryption = sha256(key).toUpperCase();

    let keybas = base64encode(encryption).toString();

    return {
        fecha: dateNow,
        usuario: userBase64,
        llave: keybas,
        cadena: hexdec,
    };
};

const base64encode = (string: string) => {
    // create a buffer
    const buff = Buffer.from(string, 'utf-8');

    // decode buffer as Base64
    return btoa(string);
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

export const clearObjectNulls = (obj: Object): Object => {
    return Object.keys({ ...obj }).reduce((newObj, key: string) => {
        if (has(obj, key)) {
            let value = obj[key];
            if (
                typeof value === 'object' &&
                value.constructor &&
                value.constructor.name === 'Object'
            ) {
                value = clearObjectNulls(value);
                if (Object.keys(value).length > 0) {
                    newObj[key] = value;
                }
            } else {
                newObj[key] = value;
            }
        }
        return newObj;
    }, {});
};

const has = (obj, property: string): boolean => {
    const value = obj[property];
    let res =
        obj.hasOwnProperty(property) &&
        value !== undefined &&
        value !== null &&
        value !== '';
    if (res && Array.isArray(value)) {
        res = !(value?.length === 0);
    } else if (res && typeof value === 'object') {
        res = !(Object.entries(value).length === 0);
    }
    return res;
};

export const is_empty = (obj) =>
    obj && // 👈 null and undefined check
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype;

export const decodeJWT = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );

    return JSON.parse(jsonPayload);
};

export const base64Encode = async (string: string) => {
    let tmp: any;
    try {
        const buff = await Buffer.from(string, 'utf-8');
        tmp = buff.toString('base64');
    } catch (error) {
        console.log({ ...error });
        tmp = Promise.reject('Error');
    }
    return tmp;
};

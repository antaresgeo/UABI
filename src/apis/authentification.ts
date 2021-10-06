import axios from 'axios';

export const signIn = async (idusuario: string, contraseña: string) => {
	try {
		return await axios.post(
			`${process.env.REACT_APP_PAGE_HOST}api/autenticacion`,
			{
				idusuario,
				contraseña,
			}
		);
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

import axios, { AxiosResponse } from 'axios';
import {
	IProjectResponse,
	IProjectsResponse,
	IRealEstateResponse,
	IRealEstatesResponse,
} from '../utils/interfaces/components.interfaces';

const URI_SERVICE_UABI = 'http://127.0.0.1:3001/';

export const getProjects = async (): Promise<IProjectsResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}projects/lists`;
		let res: AxiosResponse<IProjectsResponse> = await axios.get(URI);
		console.log(res);

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const getProject = async (
	id: string
): Promise<IProjectResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}projects`;
		let res: AxiosResponse<IProjectResponse> = await axios.get(URI, {
			params: { id },
		});

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const createProject = async (
	name: string,
	description: string,
	dependency: string
): Promise<IProjectResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}projects`;
		let res: AxiosResponse<IProjectResponse> = await axios.post(URI, {
			name,
			description,
			dependency,
		});

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const updateProject = async (data: any, id: number) => {
	try {
		let URI = `${URI_SERVICE_UABI}projects`;
		let res: AxiosResponse<IProjectResponse> = await axios.put(URI, data, {
			params: { id },
		});

		return res;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const createRealEstate = async (
	data: any
): Promise<IProjectResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}real-estates`;
		let res: AxiosResponse<IProjectResponse> = await axios.post(URI, data);

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const getRealEstates = async (): Promise<
	IRealEstatesResponse | string
> => {
	try {
		let URI = `${URI_SERVICE_UABI}real-estates/lists`;
		let res: AxiosResponse<IRealEstatesResponse> = await axios.get(URI);
		console.log(res);

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

export const getRealEstate = async (
	id: string
): Promise<IRealEstateResponse | string> => {
	try {
		let URI = `${URI_SERVICE_UABI}real-estates`;
		let res: AxiosResponse<IRealEstateResponse> = await axios.get(URI, {
			params: { id },
		});

		return res.data;
	} catch (error) {
		console.error(error);
		return 'Error';
	}
};

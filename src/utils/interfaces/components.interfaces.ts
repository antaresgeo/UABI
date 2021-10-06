export interface ICardProps {
	name: string;
	path: string;
}

export interface IItemProject {
	id: string;
	name: string;
	dependency?: string;
	creationDate: string;
	createdBy?: string;
}

export interface IUpdatedValues {
	oldest?: IUpdatedValues | object;
	lastest?: IUpdatedValues | object;
	new: IUpdatedValues | object;
}

export interface IAuditTrail {
	created_by: string;
	created_on: string;
	updated_by: string | null;
	updated_on: string | null;
	updated_values: IUpdatedValues | null;
}

export interface IProjectAttributes {
	id: string;
	name: string;
	description: string;
	dependency: string;
	audit_trail: IAuditTrail;
	status: number;
}

export interface IProjectsResponse {
	data: IProjectAttributes[];
	message: string;
}
export interface IProjectResponse {
	data: IProjectAttributes;
	message: string;
}

export interface IRealEstateAttributes {
	id?: number;
	dependency: string;
	destination_type: string;
	accounting_account: string;
	cost_center: string;

	registry_number: string;
	name: string;
	description: string;
	address?: string;
	cbml?: string;

	total_area: number;
	total_percentage: number;
	estate_type: string;
	tipology: string;

	project_id: number;

	status?: number;
	audit_trail?: IAuditTrail;
}

export interface IRealEstatesResponse {
	data: IRealEstateAttributes[];
	message: string;
}

export interface IRealEstateResponse {
	data: IRealEstateAttributes;
	message: string;
}

export interface IItemRealEstate {
	id: string;
	matricula: string | number;
	name: string;
	dependency?: string;
	creationDate: string;
	createdBy?: string;
}

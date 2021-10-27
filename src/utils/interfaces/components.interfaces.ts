export interface ICardProps {
    name: string;
    path: string;
    view?: string;
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
    id?: string | number;
    name: string;
    description: string;
    dependency: string;
    audit_trail?: IAuditTrail;
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
    sap_id?: string;

    dependency: string;
    destination_type: string;
    accounting_account: string;
    cost_center: string;

    registry_number: string;
    registry_number_document_id?: string;
    name: string;
    description: string;
    patrimonial_value: number;
    address?: string;
    cbml?: string;

    total_area: number;
    total_percentage: number;
    zone: string;
    tipology: string;
    materials?: string;

    supports_documents?: object;

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
    project?: number | string;
    creationDate: string;
    createdBy?: string;
}

export interface IPolicyAttributes {
    id?: number;
    matricula: number;
    initialDate: string;
    finalDate: string;
    ensuranceAgent: string;
    ensuranceCompany: string;
    ensuranceValue: number;
    ensuranceFile: string;
}

export interface IPoliciesResponse {
    data: IPolicyAttributes[];
    message: string;
}

export interface IPolicyResponse {
    data: IPolicyAttributes;
    message: string;
}

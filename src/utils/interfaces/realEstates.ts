import { AdquisitionsItf, IAuditTrail } from '.';

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
    location?: string;
    cbml?: string;

    total_area: number;
    total_percentage: number;
    zone: string;
    tipology: string;
    materials?: string;

    supports_documents?: object;

    project_id: number | string;

    status?: number;
    audit_trail?: IAuditTrail;
    acquisitions?: AdquisitionsItf[];
}

export interface IRealEstatesResponse {
    results: IRealEstateAttributes[];
    message: string;
}

export interface IRealEstateResponse {
    results: IRealEstateAttributes;
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

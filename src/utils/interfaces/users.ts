import { IAuditTrail } from ".";

export interface IUserAttributes {
    id?: string | number;
    society_type?: string;
    entity_type?: string;
    id_type: string;
    id_number: string;
    names: string;
    surnames: string;
    email: string;
    location: string;
    cellphone_number?: string;
    phone_number: string;
    gender: string;
    id_rol?: number;
    audit_trail?: IAuditTrail;
    status?: number;
}

export interface IUsersResponse {
    results: IUserAttributes[];
    message: string;
}

export interface IUserResponse {
    results: IUserAttributes;
    message: string;
}

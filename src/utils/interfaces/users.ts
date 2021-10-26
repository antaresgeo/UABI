import { IAuditTrail } from ".";

export interface IUserAttributes {
    id?: string | number;
    username: string;
    id_rol: number;
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

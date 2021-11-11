import { IAuditTrail } from '.';
export interface IRolAttributes {
    id?: string | number;
    role?: {id: number, name: string}
    permits?: [{ id: string, name: number }];
    audit_trail?: IAuditTrail;
    status?: number;
}

export interface IRolesResponse {
    results: IRolAttributes[];
    message: string;
}

export interface IRolResponse {
    results: IRolAttributes;
    message: string;
}

export interface IRoleSelectAttributes{
    id: number,
    name: string;
    status?: number;
    audit_trail?: IAuditTrail;
}

export interface IRolesSelectResponse {
    results: IRoleSelectAttributes[];
    message: string;
}

export interface IRolSelectResponse {
    results: IRoleSelectAttributes;
    message: string;
}

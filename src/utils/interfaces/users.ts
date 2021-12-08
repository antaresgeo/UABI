import { IAuditTrail } from '.';

export interface IUserAttributes {
    id?: string | number;
    society_type?: string;
    entity_type?: string;
    id_type: string;
    id_number: string;
    first_name: string;
    second_name: string;
    surname: string;
    second_surname: string;
    email: string;
    location: string;
    cellphone_number?: string;
    phone_number: string;
    gender: string;
    id_rol?: number;
    permits?: [{ id_permit: string; name_permit: number }];
    dependency: string;
    subdependency: string;
    audit_trail?: IAuditTrail;
    status?: number;
}

export interface IUsersResponse {
    results: IUserAttributes[];
    message: string;
}

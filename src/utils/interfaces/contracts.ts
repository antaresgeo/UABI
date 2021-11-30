import { IAuditTrail } from '.';

export interface IContractAttributes {
    id?: string | number;
    name: string;
    description: string;
    dependency: string;
    audit_trail?: IAuditTrail;
    status?: number;
}

export interface IContractsResponse {
    results: IContractAttributes[];
    message: string;
}
export interface IProjectResponse {
    results?: IContractAttributes;
    message: string;
}

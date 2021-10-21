import { IAuditTrail } from ".";

export interface IProjectAttributes {
    id?: string | number;
    name: string;
    description: string;
    dependency: string;
    audit_trail?: IAuditTrail;
    status: number;
}

export interface IProjectsResponse {
    results: IProjectAttributes[];
    message: string;
}
export interface IProjectResponse {
    results?: IProjectAttributes;
    message: string;
}

export interface IItemProject {
    id: string;
    name: string;
    dependency?: string;
    creationDate: string;
    createdBy?: string;
}

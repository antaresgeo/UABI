import { IAuditTrail } from '.';

interface ICompanies {
    insurance_company: string;
    total_percentage: number;
}

export interface IPolicyAttributes {
    id?: number | string;
    registry_number: string;
    policy_type: string;
    vigency_start:  number | string;
    vigency_end:  number | string;
    insurance_broker: string;
    insurance_companies: ICompanies;
    type_assurance: string;
    insurance_value: string;
    insurance_document_id: number;
    real_estate_id: number;
    name_real_estate?: string;
    audit_trail?: IAuditTrail;
    status?: number;
}

export interface IPoliciesResponse {
    results: IPolicyAttributes[];
    message: string;
}

export interface IPolicyResponse {
    results: IPolicyAttributes;
    message: string;
}


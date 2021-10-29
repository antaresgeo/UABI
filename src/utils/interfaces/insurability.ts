import { IAuditTrail } from '.';
export interface IPolicyAttributes {

    id?: number | string;
    registry_number: string;
    vigency_start: string;
    vigency_end: string;
    insurance_broker: string;
    insurance_company: string;
    insurance_value: string;
    insurance_document_id: string;
    real_estate_name: number;
    status_name?: number;
    audit_trail?: IAuditTrail;
}

export interface IPoliciesResponse {
    results: IPolicyAttributes[];
    message: string;
}

export interface IPolicyResponse {
    results: IPolicyAttributes;
    message: string;
}

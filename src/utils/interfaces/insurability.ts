import { IAuditTrail } from '.';
export interface IPolicyAttributes {
    id?: number | string;
    registry_number: string;
    Policy_type: string;
    vigency_start: string;
    vigency_end: string;
    insurance_broker: string;
    rebuild_value: string;
    type_assurance: string;
    insurance_company: string;
    //insurance_document_id: string;
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

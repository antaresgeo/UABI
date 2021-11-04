import { IAuditTrail } from '.';

interface ICoinsurance {
    insurance_company: string;
    total_percentage: number;
}

export interface IPolicyAttributes {
    id?: number | string;
    registry_number: string;
    policy_type: string;
    vigency_start: string;
    vigency_end: string;
    insurance_broker: string;
    insurance_value: string;
    type_assurance: string;
    insurance_companies: ICoinsurance;
    insurance_document_id: number;
    real_estate_id: number;
    status?: number;
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

// export interface IPolicyRealEstate {
//     registry_number?: number | string;
//     real_estate_name: string;
//     status_name_real_estate: string;
//     vigency_start: string;
//     vigency_end: string;
//     status?: number;
//     audit_trail?: IAuditTrail;
// }

// export interface IRealEsatesPoliciesResponse {
//     results: IPolicyRealEstate[];
//     message: string;
// }

// export interface IRealEsatesPolicyResponse {
//     results: IPolicyRealEstate;
//     message: string;
// }

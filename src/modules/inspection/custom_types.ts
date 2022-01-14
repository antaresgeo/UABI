export interface Ocupation {
    id: number;
    tenure: string;
    use: string;
    ownership: string;
    contractual: string;
    real_estate_id: number;
    status?: number;
    audit_trail?: any;
}

export interface Observations {
    observation: string;
    user_id: number;
}

export interface PublicServices {
    id: number;
    name: string;
    subscriber: string;
    accountant: string;
    physical_inspection_id: number;
    status?: number;
    audit_trail?: any;
}

export interface Properties {
    id: number;
    name: string;
    status_property: string;
    observation?: any;
    accountant: string;
    physical_inspection_id: number;
    status?: number;
    audit_trail?: any;
}

export interface PhysicalInspection {
    id: number;
    observations: Observations;
    photographic_record: string;
    real_estate_id: number;
    inspection_date: string;
    public_services: PublicServices[];
    properties: Properties[];
    status?: number;
    audit_trail?: any;
}

export interface Owner {
    id: number;
    names_surnames: string;
    document_type: string;
    document_number: number;
    phone_number: number;
    email: string;
    real_estate_id: number;
    status?: number;
    audit_trail?: any;
}

export interface Inspection {
    ocupation: Ocupation;
    physical_inspection: PhysicalInspection;
    owner: Owner;
}

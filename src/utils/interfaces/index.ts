export * from './address';
export * from './realEstates';
export * from './projects';
export * from './insurability';
export * from './documents';

export interface ICardProps {
    name: string;
    path: string;
    view?: string;
}

export interface IUpdatedValues {
    oldest?: IUpdatedValues | object;
    lastest?: IUpdatedValues | object;
    new: IUpdatedValues | object;
}

export interface IAuditTrail {
    created_by: string;
    created_on: string;
    updated_by: string | null;
    updated_on: string | null;
    updated_values: IUpdatedValues | null;
}

export interface AdquisitionsItf {
    id?: number;

    acquisition_type: string;
    active_type: string[];
    title_type: string;
    title_type_document_id?: string;
    act_number: string;
    act_value: number;

    plot_area: number;
    construction_area?: number;
    acquired_percentage: number;
    seller: string;

    entity_type: string;
    entity_number: string;
    address?: string;
    //--------
    real_estate_id: number;
    status?: number;
    audit_trail?: IAuditTrail;
}
export interface IPaginable<T> {
    message: string;
    results: T[];
    page: number;
    count: number;
    next_page?: number | null;
    previous_page?: number | null;
    total_results: number;
}

import { IAuditTrail } from '.';

export interface IAddress {
    id?: number;

    type: string;
    number_one: number;
    word_one?: string;
    orientation_one?: string;

    number_two: number;
    word_two?: string;
    orientation_two?: string;
    indicative: number;

    block?: string;
    lot?: string;
    indications?: string;
    user_id: string;
    location_id: number;

    status?: number;
    audit_trail?: IAuditTrail;
}

export interface ILocationAttributes {
    id?: number;
    country_code: string;
    country: string;
    state_code: string;
    state: string;
    city_code: string;
    city: string;
    commune_code: string;
    commune: string;
    neighborhood: string;
    zone: string;
}

export interface ICountryAddressAttributes {
    country_code: string;
    country: string;
}

export interface IStateAddressAttributes {
    state_code: string;
    state: string;
}

export interface ICityAddressAttributes {
    city_code: string;
    city: string;
}

export interface ICommuneAddressAttributes {
    commune_code: string;
    commune: string;
}

export interface INeighborhoodAddressAttributes {
    commune: string;
    neighborhood: string;
}

export interface IAddressResponse {
    message: string;
    error?: any;
    results?: // | IAddressAttributes
    | ICountryAddressAttributes[]
        | IStateAddressAttributes[]
        | ICityAddressAttributes[]
        | ICommuneAddressAttributes[]
        | INeighborhoodAddressAttributes[];
}

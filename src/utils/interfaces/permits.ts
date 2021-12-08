// export interface IPermitAttributes {
//     permits?: [{ id: number, name: string }];
// }

export interface IPermitAttributes {
    id: number;
    permit_name: string;
}

export interface IPermitsResponse {
    results: IPermitAttributes[];
    message: string;
}

export interface IPermitResponse {
    results: IPermitAttributes;
    message: string;
}

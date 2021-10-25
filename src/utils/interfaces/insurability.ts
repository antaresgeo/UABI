export interface IPolicyAttributes {
    id?: number;
    matricula: number;
    initialDate: string;
    finalDate: string;
    ensuranceAgent: string;
    ensuranceCompany: string;
    ensuranceValue: number;
    ensuranceFile: string;

}

export interface IPoliciesResponse {
    data: IPolicyAttributes[];
    message: string;
}

export interface IPolicyResponse {
    data: IPolicyAttributes;
    message: string;
}
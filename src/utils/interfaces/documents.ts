export interface IDocument {
    id?: string | number;
}

export interface IDocumentResponse<T> {
    message: string;
    results: T;
    pagination?: any;
}

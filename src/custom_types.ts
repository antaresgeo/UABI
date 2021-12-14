export interface Pagination {
    page: number;
    count: number;
    next_page: number | string | null;
    previous_page: number | string | null;
    total_results: number;
}

export interface Pageable<P> extends Loadable<P[]> {
    pagination: Pagination;
}

export interface Loadable<L> {
    value: L;
    loading: boolean;
    loaded: boolean;
    message?: any;
}

export interface Action {
    type: string,
    payload?: any
}

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
    hello: () => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    name: string;
    age: number;
}

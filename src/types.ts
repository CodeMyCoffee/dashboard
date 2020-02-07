export interface GraphData {
    time: number,
    valueP2P: number,
    valueCDN: number
}

export interface DefaultData {
    cdn: number[][],
    p2p: number[][]
}

export interface GraphReq {
    session_token: number,
    from: number,
    to: number,
    aggregate?: 'sum' | 'average' | 'max' | 'min'
}

export interface Credentials {
    identifiant: String,
    password: String
}
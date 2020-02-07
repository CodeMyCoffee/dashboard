import { postData, endpoint } from "./common";

interface GraphReq {
    session_token: number,
    from: number,
    to: number,
    aggregate?: 'sum' | 'average' | 'max' | 'min'
}

function getBandwidth(request: GraphReq){
    return postData(endpoint+'/bandwidth', request)
}

function getAudience(request: GraphReq){
    return postData(endpoint+'/audience', request)
}


export {
    getBandwidth,
    getAudience
}
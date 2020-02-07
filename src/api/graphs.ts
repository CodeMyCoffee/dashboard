import { postData, endpoint } from "./common";
import { GraphReq } from "../types";

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
import { postData,endpoint } from "./common";
import { Credentials } from "../types";


function logIn(credentials: Credentials) {
    return postData(endpoint+'/auth', credentials)
}

function logOut(token: number){
    return postData(endpoint+'/logout', token)
}


export { 
    logIn,
    logOut
}
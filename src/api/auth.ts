import { postData,endpoint } from "./common";

interface Credentials {
    identifiant: String,
    password: String
}

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
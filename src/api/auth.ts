import { postData,endpoint } from "./common";

interface Credentials {
    identifiant: String,
    password: String
}

function logIn(credentials: Credentials) {
    return postData(endpoint+'/auth', credentials)
}

function logOut(){

}


export { 
    logIn,
    logOut
}
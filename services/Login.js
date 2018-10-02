import { AsyncStorage } from "react-native";

// services
import { cnn } from "./conectionServices";
import { addToken } from "./storage";

//Sing - In
export const singIn = (user, password) => {
    const url    = "login"
    const method = "POST"
    const header = {
            Accept        : "application/json",
	   "Content-Type" : "application/json",
    }
    const body = JSON.stringify({
                    username: user,
                    password: password
                })

    const login = cnn(url,method,header,body)
    
    return login.then( (login) => {
        if (!login.code) {
            const userData = validateProfile(login.token)
            return userData
        }else if(login.code >= 400 && response.code <= 499){
            console.log('Error al iniciar sesion')
            return false
        }
    })
};

// validate profile
const validateProfile = (token) =>{

    const url    = "_URL_"
    const method = "GET"
    const header = {
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization : token
    }
    let userData = {}

    const validate = cnn(url,method,header)
	return validate.then(response => {
        userData = {
            id       : response.id,
            username : response.username,
            email    : response.email,
            token    : token,
        }
	if (response.profile_id) {
		userData.rute = '_URL_'
	    }else {
		userData.rute = '_URL_'
        }

        addToken(JSON.stringify(userData))

        return JSON.stringify(userData)
	 })
 }
 
// sing out
export const singOut = async () => {
    try {
        await AsyncStorage.removeItem('database_user') 
        return 'Login'
    } catch (error) {
        console.log(`error log ${error}`)
    }
};

import { AsyncStorage } from "react-native";

// services
import { cnn } from "./conectionServices";
import { addToken } from "./storage";

//Sing - In
export const singIn = (user, password) => {
    const url    = "auth/login"
    const method = "POST"
    const header = {
        header : {
            Accept        : "application/json",
			"Content-Type": "application/json",
        }
    }
    const body = JSON.stringify({
                    username: user,
                    password: password
                })

    let login = cnn(url,method,header,body)
    // console.log(login)
    return login.then( (login) => {

        if (!login.code) {
            let userData = validateProfile(login.token)
            return userData
        }else if(login.code >= 400 && response.code <= 499){
            console.log('Error al iniciar sesion')
            return false
        }
    })
};

// validate profile
const validateProfile = (token) =>{

    const url    = "me"
    const method = "GET"
    const header = {
        header : {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization : token
        }
    }
    let userData = {}

    let validate = cnn(url,method,header)
	return validate.then(response => {
        userData = {
            id       : response.id,
            username : response.username,
            email    : response.email,
            token    : token,
        }
		if (response.profile_id) {
		  	userData.rute = 'PerfileUser'
	    }else {
			userData.rute = 'RegistroFinal'
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
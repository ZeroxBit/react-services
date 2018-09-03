import { cnn } from './conectionServices';

export const validateUserAjax = async (user) =>{
    const url = `users/search/${user}`;
    const method = "GET";
    const header = {}

    let getUser = await cnn(url,method,header)
    if (getUser) {
        return getUser;
    }else {
        return false
    }
}

// Obtiene todos los usuarios
export const getAllUser = async (token) => {
    const url    = "users"
    const method = "GET"
    const header = {
        header : {
            Accept        : "application/json",
			"Content-Type": "application/json",
			Authorization : token
        }
    }

    let users = await cnn(url,method,header)
    if (users) {
        return users
    }else{
        return false
    }
}


import { AsyncStorage } from "react-native";
// Add token to storage
export const addToken = async userData => {
    try {
        let userToken = await AsyncStorage.getItem("user");
        if (userToken !== null) {
            if (userToken !== userData) {
                AsyncStorage.setItem("user", userData);

                return
            }
            // si la data es igual, no se hace nada
        } else {
            AsyncStorage.setItem("user", userData);

            return
        // return userToken;
        }

    } catch (error) {
        console.log(`error log ${error}`)
    }
};

export const getDataStorage = async () =>{
    let dataUser = await AsyncStorage.getItem('database_user')
    if (dataUser) {
        return dataUser
    }
    console.log("no hay datos en el storage")
    return 
}
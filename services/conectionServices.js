/* -------------------------------
1)url     = es el link de la peticion                               -- (type : string)
2)method  = es el metodo de la peticion ej(POST,PUT,GET,PATCH)      -- (type : string)
3)headers = son los headers de la petecion se manda en              -- (type : objeto)
4)body    = los datos de la peticion, no es obligatorio (el cuerpo) -- (type : objeto) 
Importante : La funcion retorna una PROMESA <--
--------------------------------
Ejemplo de uso:
--------------------------------
let header = {
    header : {
        Accept: "application/json",
        "Content-Type": "application/json"
        Authorization : token
    }
}

let body = JSON.stringify({
        username: "root",
        password: "root"
})
cnn("http://192.168.1.180:8000/auth/login","post",header,body)
----------------------------------
*/
export const cnn = (url, method, headers, body = false) =>{
    
    const link = "http://192.168.1.180:8000/"

    if (body) {
        return fetch(`${link}${url}`, {
                    method : method,
                    headers: headers.header,
                    body   : body
                })
                .then(response => response.json())
                .then(response => {
                    if (!response) {
                        console.log("Error en la coneccion!!")
                    }
                    // console.log(response)
                    return response
                })
                .catch(err => {
                    console.warn(err);
                });
    }else{
        return fetch(`${link}${url}`, {
                    method : method,
                    headers: headers.header
                })
                .then(response => response.json())
                .then(response => {
                    if (!response) {
                        console.log("Error en la coneccion!!")
                    }
                    
                    return response
                })
                .catch(err => {
                    console.warn(err);
                });
    }
}
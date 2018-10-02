/* -------------------------------
1)url     = es el link de la peticion                               -- (type : string)
2)method  = es el metodo de la peticion ej(POST,PUT,GET,PATCH)      -- (type : string)
3)headers = son los headers de la petecion se manda en              -- (type : objeto)
4)body    = los datos de la peticion, no es obligatorio (el cuerpo) -- (type : objeto) 
Importante : La funcion retorna una PROMESA <--
--------------------------------
Ejemplo de uso:
--------------------------------
const header = {
        Accept: "application/json",
        "Content-Type": "application/json"
        Authorization : token
}

const body = JSON.stringify({
        username: "root",
        password: "root"
})
cnn("http://you_page_url/login","post",header,body)
----------------------------------
*/
export const cnn = (url, method, headers, body = false) =>{
    
    const link = "http://you_page_url/"

    if (body) {
        return fetch(`${link}${url}`, {
                    method : method,
                    headers: headers,
                    body   : body
                })
                .then(response => response.json())
                .then(response => {
                    if (!response) {
                        console.log("Error en la coneccion!!")
                        return;
                    }
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
                        return;
                    }
                    
                    return response
                })
                .catch(err => {
                    console.warn(err);
                });
    }
}

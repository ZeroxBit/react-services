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
export const cnn = async (url, method, headers, body) =>{
    
    const link = "http://you_page_url/";

    try {
        const resp = await fetch(`${link}${url}`, {
            method,
            headers,
            body
        });
        
        const json = await resp.json();
        return json;

    } catch (error) {
        console.error("error", error);
    }
}

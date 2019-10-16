import axios from "axios";

import config from "../../config/config.json";

/**
 * Esta funcion realiza la coneccion al api me puntos !!
 * @param {El path de la url al que se apunta} path [string]
 * @param {El metodo que se usara para el llamado} method [string]
 * @param {Los headers que se mandaran al api} headers [object]
 * @param {Payload que se manda al api} body [object]
 * @param {Si falla la peticion se llama nuevamente a la funcion} calls [number]
 */
export const cnn = async (path, method, headers = null, data = null, calls = 0) => {
	headers = setHeaders(headers);

	const options = setOptions(
		`${config.apipuntos}${path}`,
		method,
		headers,
		data
	);

	try {
		return await axios(options);
	} catch (error) {
		if (calls => 3) {
			return [];
		}
		cnn(path, method, headers, data, calls + 1);
	}
};

// agrega los nuevo headers a la peticion !!
const setHeaders = headers => {
	return !!headers ? { ...config.headers, ...headers } : config.headers;
};

const setOptions = (url, method, headers, data) => {
	if (!!data) {
		data = JSON.stringify(data);
		return { url, method, headers, data };
	}
	return { url, method, headers };
};

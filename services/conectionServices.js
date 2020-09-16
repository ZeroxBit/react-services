import axios from "axios";
import { getToken } from "./sessionStorage";

// this url can be in a separate file
const base_url = "www.example.com"; // you url base

const instanceAxios = axios.create({
	baseURL: base_url
});

// here more data is transformed or added before sending the request !!
instanceAxios.interceptors.request.use(request => {
	// Example: add token in header before send request
	if (getToken()) {
		request.headers.Authorization = getToken();
	}
	return request;
});

// after send request, is request error, catch requets and conver and continue !!
instanceAxios.interceptors.response.use(response => {
	return response;
},
	(error) => {
		if (!error.response) {
			return { data: { data: null }, status: 500 }
		}
		return error.response;
	}
);

// define type request !!
export default {

	get: async (path, params) => {
		return await instanceAxios.get(`${base_url}/${path}`, { params });
	},

	post: async (path, data, headers = haderDefault) => {
		return await instanceAxios.post(`${base_url}/${path}`, data, { headers });
	},

	put: async (path, data, headers = haderDefault) => {
		return await instanceAxios.put(`${base_url}/${path}`, data, { headers });
	},

	patch: async (path, data, headers = haderDefault) => {
		return await instanceAxios.patch(`${base_url}/${path}`, data, { headers });
	},

	delete: (path) => {
		return instanceAxios.delete(path)
	}

}


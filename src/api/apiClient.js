import axios from 'axios';
import { valueFromUserData } from '../utils';
// import { BASE_URL as API_BASE, valueFromUserData } from '../utils';
const API_BASE = process.env.REACT_APP_BASE_URL;
// Axios Interceptor //
// Request
axios.interceptors.request.use(
	function (config) {
		const token = valueFromUserData('token');
        if(config && config.headers) {
            config.headers['Content-Type'] = 'application/json';
            config.headers.Authorization = `${token}`;
        }
		return config;
	},
	function (err) {
		return Promise.reject(err);
	}
);

// Response Handler Function
// export const responseHandler = (response) => {
//     return { data: response.data, message: response.message, error: response.error || response.message || "Something went wrong, please try again", status: response.status };
// }
export const responseHandler = (response) => {
    return { data: response.data.data, message: response.data.message, error: response.data.error || response.data.message || "Something went wrong, please try again", status: response.data.status };
}

// -------------------------------------------------------------------------//
// GET REQUEST
export const getData = async (END_POINT, id = null) => {
	let response;

	if (id) {
		response = await axios.get(API_BASE + END_POINT, {
			params: { id }
		});
	} else {
		response = await axios.get(API_BASE + END_POINT);
	}
	return responseHandler(response);
};


// -------------------------------------------------------------------------//
// get request with support of query
export const getDataWithQuery = async (END_POINT, queries = {}) => {
	let response;
	if (queries) {
		response = await axios.get(API_BASE + END_POINT, {
			params: queries
		});
	} else {
		response = await axios.get(API_BASE + END_POINT);
	}
	return responseHandler(response);
};


// -------------------------------------------------------------------------//
// POST REQUEST
export const postData = async (END_POINT, body, config = {}) => {
	const response = await axios.post(API_BASE + END_POINT, body, config);
	return responseHandler(response);
};


// -------------------------------------------------------------------------//
// PUT REQUEST
export const updateData = async (END_POINT, body, config = {}) => {
	const response = await axios.put(API_BASE + END_POINT, body, config);
	return responseHandler(response);
};


// -------------------------------------------------------------------------//
// DELETE REQUEST
export const deleteData = async (END_POINT, id) => {
	const response = await axios.delete(`${API_BASE}${END_POINT}`, {
		params: { id }
	});
	return responseHandler(response);
};

// -------------------------------------------------------------------------//
export const deleteDataWithBody = async (END_POINT, body) => {
	const response = await axios.delete(`${API_BASE}${END_POINT}`, {
		data: body
	});
	return responseHandler(response);
};


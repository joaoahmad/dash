import axios from 'axios';
import _ from 'lodash';
// import LoginStore from '../stores/LoginStore.js';

const api = {

    get(url, data) {
        return this.handle(axios({
            url: url,
            method: 'get',
            params: data || {},
            responseType: 'json',
            //withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'AuthToken': LoginStore.jwt,
            },
        }));
    },

    post(url, data, cfg = {}) {
        var config = Object.assign({}, {
            url: url,
            method: 'post',
            data: data,
            responseType: 'json',
            //withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'AuthToken': LoginStore.jwt,
            },
        }, cfg);
        console.log(config);
        return this.handle(axios(config));
    },

    put(url, data) {
        return this.handle(axios({
            url: url,
            method: 'put',
            data: data,
            responseType: 'json',
            //withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'AuthToken': LoginStore.jwt,
            },
        }));
    },

    delete(url, data) {
        return this.handle(axios({
            url: url,
            method: 'delete',
            data: data,
            responseType: 'json',
            //withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'AuthToken': LoginStore.jwt,
            },
        }));
    },

    handle(promise) {
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            console.log(error);
            return Promise.reject(error);
        });
        return promise.then( response => response.data);
    }

}

export default api;

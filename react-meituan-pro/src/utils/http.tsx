import axios from 'axios';

const $http = axios.create({
    baseURL: 'http://localhost:3056/',
    timeout: 5000
});
// 请求拦截器
$http.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(err);
});
// 响应拦截器
$http.interceptors.response.use(res => {
    return res.data;
}, err => {
    return Promise.reject(err);
});
export default $http;
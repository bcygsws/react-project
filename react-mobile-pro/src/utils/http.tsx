import axios from 'axios';

const $http = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0/',
    timeout: 5000
});
$http.interceptors.request.use(config => {
    // console.log(config);
    return config;
}, err => {
    return Promise.reject(err);
});

// 响应拦截器
$http.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
}, err => {
    return Promise.reject(err);
});
export default $http;
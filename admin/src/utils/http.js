import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


const Api = "/api"; //本地做了代理

const Axios = axios.create({
  baseURL: Api, 
  timeout: 5000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token;
    }
    NProgress.start();
    return config;
  },
  error => {
    message.error(error, 3);
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    NProgress.done();
    console.log(res)
  }
);

export default Axios;
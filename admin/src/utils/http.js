import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import NProgress from 'nprogress'; // 进度条
import '../../node_modules/nprogress/nprogress.css'


/**
 * 检查状态
 */
function checkStatus (response) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
  }
  // 异常状态下，把错误信息返回去
  let error = new Error(response.statusText);
  error.response = response;
  throw error;

}

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
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    NProgress.done();
    return Promise.resolve(res.data);
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  /**
   * http网络请求post
   * @param {*} url 
   * @param {*} params 
   */
  post (url,params) {
    let data = {};
    if(params){
      data = params;
    }
    return Axios(url, Object.assign({},{
        data: data,
        method: 'post'
      })
    );
  },
  /**
   * http网络请求get
   * @param {*} url 
   * @param {*} params 
   */
  get (url, params) {
    let data = {};
    if(params){
      data = params;
    }
    return Axios(url, Object.assign({}, {
        data: data,
        method: 'get'
      })
    );
  }
};
import axios from "axios";

/**
 * Установка базового роутера
 */
axios.defaults.baseURL = 'https://dev.w2me.ru/api/v1'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

/**
 * Установка базовых запросов
 * @type {{login: string, register: string}}
 */
const api = {
    'register' : '/register',
    'login': '/login',
    'checkUser': '/user',
    'index': '',
    'ads': '/ads'
}

// eslint-disable-next-line no-unused-vars
function postRequest(url, params) {
    return axios.postForm(url, params,{
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
        }
    })
}

function getRequest(url){
    return axios.get(url)
}

export default {api, postRequest, getRequest}
import apiRequest from "@/router/api";

class User
{
    constructor(user) {
        this.user = user;
        this.token = null
        this.storageTokenName = 'token'
    }

    /**
     * Отображение данных пользователя
     * @returns {boolean|*}
     */

    getUser() {
        if(this.user)
            return this.user
        return false
    }

    /**
     * Получение ключа авторищзации
     * @returns {null|boolean}
     */

    getToken() {
        if(this.checkToken())
        {
            return this.token
        }
        return false
    }


    /**
     * Получить токен из хранилища данных
     * @returns {string|boolean}
     */
    getTokenStorage(){
        let token = localStorage.getItem(this.storageTokenName)

        if(token) {
            return token
        }
        return false
    }

    /**
     * Установить токен
     * @param value
     */
    setTokenStorage(value){
        localStorage.setItem(this.storageTokenName, value)
    }

    /**
     * Проверка токена с помощью сервера
     * @returns {boolean}
     */

    checkToken() {
        apiRequest.getRequest(apiRequest.api.checkUser, [

        ]).
        then(function (value){
            return value.data
        })
        return false
    }
}

export default User
import apiRouter from "@/router/api";
import User from "@/js/user";

class Authorization {

    constructor() {
        //Создание экземпляра пользователя
        this.user = new User()

        this.messages = null
    }

    /***
     * Авторизация пользователя
     * @param fields
     */
    login(fields) {
        apiRouter.postRequest(apiRouter.api.register, fields)
            .then(function (response) {
                let data = response.data
                let token = data.token

                if(token)
                {
                    this.user.setTokenStorage(token)
                    console.log(`Пользователь авторизирован`)
                }
            })
            .catch(function (error) {
                let errors = error.response.data

                if(errors?.message && error.response.status === 401)
                {
                    //vm.messages.password = errors?.message
                }

                if(errors?.errors)
                {
                    if(errors.errors?.username)
                    {
                        //vm.messages.username = errors.errors?.username[0]
                    }
                    if(errors.errors?.email)
                    {
                        //vm.messages.email = errors.errors?.email[0]
                    }
                    if(errors.errors?.password)
                    {
                        //vm.messages.password = errors.errors?.password[0]
                    }
                }
            })
    }
}

export default Authorization
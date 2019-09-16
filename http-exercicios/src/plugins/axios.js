import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL='https://curso-vue-cdc72.firebaseio.com/'

Vue.use({
    install(Vue){
        //dou o nome que eu quiser
        Vue.prototype.$http=axios.create({
            baseURL: 'https://curso-vue-cdc72.firebaseio.com/',
            headers: {
                //pode deixar fora do get para que ele funcione para todos os métodos http
                get:{
                    "Authorization": "abc123"
                }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            //para converter o metodo http em tempo de execução
            // if(config.method=='post')
            //     config.method='put'
            return config
        }, error => Promise.reject(error)) 

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data){
            //     array.push({id: chave, ...res.data[chave]})
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})
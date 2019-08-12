import Vue from 'vue'
export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('mudouIdade', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('mudouIdade', callback)
        }

    }

})
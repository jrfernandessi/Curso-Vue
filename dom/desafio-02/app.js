new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("exibit alerta")
        },
        atribuirValor(event){
            this.valor = event.target.value
        },
        exibirValor(event){
            this.valor = event.target.value
        }
    },
})
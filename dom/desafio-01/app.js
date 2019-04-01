new Vue({
    el:'#desafio',
    data:{
        idade: 31,
        nome: 'Junior',
        imagem: 'https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png'
    }, 
    methods: {
        random(){
            return Math.random()
        },
        triploIdade(){
            return this.idade*3
        }   
    }
})
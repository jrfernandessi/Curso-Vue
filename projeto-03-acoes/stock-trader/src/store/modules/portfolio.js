export default{
    state:{
        funds: 10000,
        stocks: []
    },
    mutations:{
        buyStock(state, {stockId, quantity, stockPrice}){
            const record =state.stocks.find(element => element.id==stockId)
            if(record){
                record.quantity += quantity
            }else{
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice*quantity
        }
    }
}
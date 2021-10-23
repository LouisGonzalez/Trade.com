//sequelize
const { sequelize } = require("../Initialization/Post");
const BuyAndSell = require('../Initialization/BuyAndSell');
const Invoice = require('../Initialization/Invoice');

async function buy(req,res){
    const result = await sequelize.transaction(async (t) =>{
        req.session.cart.forEach(cart => {
            const user = await BuyAndSell.create({
                
            })
        });
    })
}
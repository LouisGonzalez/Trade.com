//sequelize
const { sequelize } = require("../Initialization/Post");
const BuyAndSell = require('../Initialization/BuyAndSell');
const Invoice = require('../Initialization/Invoice');

async function buy(req,res,total){
    const user = []
    const result = await sequelize.transaction(async (t) =>{

        const factura = await Invoice.create({
            cuenta_efectiva: req.user,
            fecha: Date.now(),
            divisa: 'USD',
            total: total
        },{transaction : t})

        req.session.cart.forEach(async cart => {
            user.push(await BuyAndSell.create({
                    id_post: cart.id,
                    cantidad: cart.cantidad,
                    divisa: cart.divisa,
                    no_factura: factura.no_factura            
            },{
                where:{
                    cantidad
                }
            },{transaction:t}));
        });
    })
}

module.exports = {
    buy
}
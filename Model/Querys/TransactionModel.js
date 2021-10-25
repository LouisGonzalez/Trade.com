//sequelize
const { sequelize } = require("../Initialization/Post");
const BuyAndSell = require('../Initialization/BuyAndSell');
const Invoice = require('../Initialization/Invoice');
const Article = require('../Initialization/Article');
const { Op } = require("sequelize");

async function buy(req,res,total){
    const user = []

        const result = await sequelize.transaction(async (t) =>{
            
            try{
                const factura = await Invoice.create({
                    cuenta_efectiva: req.user,
                    fecha: Date.now(),
                    divisa: 'USD',
                    total: total
                },{transaction : t});
                        
                req.session.cart.forEach(async cart => {
                    console.log(factura.no_factura);
                    await BuyAndSell.create({
                            id_post: cart.id,
                            cantidad: cart.cantidad,
                            divisa: cart.divisa,
                            precio: cart.precio,
                            no_factura: factura.no_factura
                    },{transaction : t});

                    await Article.update({
                        stock: stock - cart.cantidad
                    },{
                        where:{
                            id_post: cart.id,
                            [Op.gte]:[
                                {stock: cart.cantidad}
                            ]
                        }                    
                    },{transaction : t});

                });
                await t.commit();
                res.send("Fun");
            }catch(e){
                await t.rollback()
                res.send("Fuck")
            }
        })
    
}

async function numFac(){
    return await Invoice.count();
}

module.exports = {
    buy
}
//sequelize
const { sequelize } = require("../Initialization/Post");
const BuyAndSell = require('../Initialization/BuyAndSell');
const Invoice = require('../Initialization/Invoice');
const Article = require('../Initialization/Article');
const { Op } = require('sequelize');

async function buy(req, res, total) {

    const result = await sequelize.transaction(async (t) => {
        try {
            await Invoice.create({
                cuenta_efectiva: req.user,
                fecha: Date.now(),
                divisa: 'USD',
                total: total
            }, { transaction: t }).then(factura => {
                
                req.session.cart.forEach(async cart => {
                    await BuyAndSell.create({
                        id_post: cart.id,
                        cantidad: cart.cantidad,
                        divisa: cart.divisa,
                        precio: cart.precio,
                        no_factura: factura.no_factura
                    }, { transaction: t })//.then(

                    await Article.increment({
                        'stock': -cart.cantidad
                    }, {
                        where: {
                            id_post: cart.id,
                            stock: {
                                [Op.gte]: cart.cantidad
                            }
                        }
                    }, { transaction: t })//.then(await t.commit()));
                })
            }).then(await t.commit())            
            res.send("Fun");
        } catch (e) {
            await t.rollback()
            res.send("Fuck")
        }

    })
}

module.exports = {
    buy
}
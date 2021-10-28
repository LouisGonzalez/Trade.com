//sequelize
const { sequelize } = require("../Initialization/Post");
const BuyAndSell = require('../Initialization/BuyAndSell');
const Invoice = require('../Initialization/Invoice');
const Article = require('../Initialization/Article');
const PostModel = require('./PostModel');
const TransactionController = require('../../Controller/TransactionCotroller');
const { Op } = require('sequelize');

async function buy(req, res, total) {
    await Invoice.create({
        cuenta_efectiva: req.user,
        fecha: Date.now(),
        divisa: 'USD',
        total: total
    }).then(factura => {
        req.session.cart.forEach(async cart => {

            const post = await PostModel.onePostArticle(cart.id); 

            await BuyAndSell.create({
                id_post: cart.id,
                cantidad: cart.cantidad,
                divisa: cart.divisa,
                precio: cart.precio,
                no_factura: factura.no_factura
            })

            await Article.increment({
                'stock': -cart.cantidad
            }, {
                where: {
                    id_post: cart.id,
                    stock: {
                        [Op.gte]: cart.cantidad
                    }
                }
            })

            await TransactionController.shop(req.user, post.cuenta, cart.divisa, cart.total);
        })
    })
    res.send("Fun");
}

module.exports = {
    buy
}
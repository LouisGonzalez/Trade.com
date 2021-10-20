//
const {Op} = require('sequelize');
//Modelo db
const Wallet = require('../Initialization/Wallet');

async function createWallet(req,res){
    return await Wallet.create({
        cuenta: req.body.user,
        divisa: req.body.divisa,
        monto: req.body.monto
    })
}

async function addCredit(req,res){
    return await Wallet.update({
        monto: req.body.monto
    },{
        where:{
            cuenta: req.body.user,
            divisa: req.body.divisa
        }
    })
}

async function withdrawalsCredit(req,res){
    return await Wallet.update({
        monto: req.body.monto
    },{
        where:{
            cuenta: req.body.user,
            divisa: req.body.divisa,
            monto:{
                [Op.lte]: req.body.monto
            }           
        }
    })
}


module.exports = {
    createWallet, addCredit, withdrawalsCredit
}

const Transaction = require('../Initialization/Transaction');

async function createTransaction(req,res){
    return await Transaction.create({
        cuenta_emisora: req.user,
        cuenta_receptora: req.body.cuenta_receptora,
        monto: req.body.monto,
        valisa: req.body.divisa,
        fecha: Date.now(),  
    })
}

module.exports = {
    createTransaction
}
const { verifyCash, verifyStocks } = require('../Controller/Operations');

verifyCash_test1('Se envia una cantidad menor a 0', () => {
    expect(verifyCash(-1)).toBe(false);
})

verifyCash_test2('Se envia una cantidad mayor a 0', () => {
    expect(verifyCash(2)).toBe(true);
})

verifyStocks_test1('Cantidad a comprar es mayor a cantidad en stock', () => {
    expect(verifyStocks(12,3)).toBe(false);
})

verifyStocks_test2('Cantidad a comprar es menor a cantidad en stock', () => {
    expect(verifyStocks(3,12)).toBe(true);
})


const { verifyCash, verifyStocks } = require('../Controller/Operations');

test('Se envia una cantidad menor a 0', () => {
    expect(verifyCash(-1)).toBe(false);
})

test('Se envia una cantidad mayor a 0', () => {
    expect(verifyCash(2)).toBe(true);
})

test('Cantidad a comprar es mayor a cantidad en stock', () => {
    expect(verifyStocks(12,3)).toBe(false);
})

test('Cantidad a comprar es menor a cantidad en stock', () => {
    expect(verifyStocks(3,12)).toBe(true);
})


const { randomBank } = require('../Controller/Operations');

test('Se envia un numero aleatorio', () => {
    expect(randomBank(10)).toBe(true);
})

test('Se envia un numero impar', () => {
    expect(randomBank(17)).toBe(false);
})


const { randomBank } = require('../Controller/Operations');

randomBank_test1('Se envia un numero aleatorio', () => {
    expect(randomBank(10)).toBe(true);
})

randomBank_test2('Se envia un numero impar', () => {
    expect(randomBank(17)).toBe(false);
})


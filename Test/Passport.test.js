const { verifyLocalUser } = require('../Lib/Passport');

test('si la cuenta esta activa y la contresena coincide perimitir entrar', () => {
    expect(verifyLocalUser(true,true)).toBe(true);
})
test('si la cuenta esta activa pero la contrasena no coincide no permitir el acceso', () => {
    expect(verifyLocalUser(true, false)).toBe(false);
})

test('si la cuenta esta desactivada negar el acceso', () => {
    expect(verifyLocalUser(false, false)).toBe(false);
})
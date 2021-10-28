const { verifyMember } = require('../Model/Querys/MemberModel');

test('se verifica que un usuario no exista en la db', () => {
    expect(verifyMember(false)).toBe(false);
})

test('se verifica que un usuario exista en la db', () => {
    expect(verifyMember(true)).toBe(true);
})


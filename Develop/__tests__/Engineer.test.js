const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('John');
});

test('set github account with constructor', () => {
    const testValue = 'GitHub';
    const e = new Engineer('Foo', 1, 'sample@gmail.com', testValue);
    expect(e.github).toBe(testValue);
})

test('get github account with getGithub() method', () => {
    const testValue = 'GitHub';
    const e = new Engineer('Foo', 1, 'sample@gmail.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});

test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'sample@gmail.com', 'GitHub');
    expect(e.getRole()).toBe(testValue);
});
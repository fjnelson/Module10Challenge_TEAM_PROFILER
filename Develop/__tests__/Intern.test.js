const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('Minnie');
});

test('set school with constructor', () => {
    const testValue = 'Harvard';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'Harvard';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'Harvard');
    expect(e.getRole()).toBe(testValue);
});
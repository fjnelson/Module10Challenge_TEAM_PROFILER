const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

test('creates a manager object', () => {
    const manager = new Manager('John');
});

test('set office number with constructor', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'sample@gmail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'sample@gmail.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'sample@gmail.com', 100);
    expect(e.getRole()).toBe(testValue);
});
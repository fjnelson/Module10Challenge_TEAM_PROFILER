const Employee = require('../lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('John');
});

test('set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('set email with constructor', () => {
    const testValue = 'sample@gmail.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('getRole() return Employee', () => {
    const testValue = 'employee';
    const e = new Employee('John', 1, 'sample@gmail.com');
    expect(e.getRole()).toBe(testValue);
});
const Employee = require('../Develop/lib/employee');

test('creates an employee object', () => {
    const employee = new Employee('Jason');
});

test('set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('set email with constructor', () => {
    const testValue = 'employee@email.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Jason', 1, 'employee@email.com');
    expect(e.getRole()).toBe(testValue);
});
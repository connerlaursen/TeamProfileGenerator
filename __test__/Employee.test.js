const Employee = require("../lib/Employee")

test("Can instantiate an employee", () => {
    const e = new Employee()
    expect(typeof(e)).toBe("object")
});

test("Can set the name via the constructor", () => {
    const name = "Theodore"
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test("Can set the id via the constructor", () => {
    const id = 1
    const e = new Employee("string", id)
    expect(e.id).toBe(id)
});

test("Can set the email via the constructor", () => {
    const email = "hi@test.com"
    const e = new Employee("string", 1, email)
    expect(e.email).toBe(email)
});

test("Can get name via getName function", () => {
    const name = "Theodore"
    const e = new Employee(name)
    expect(e.getName()).toBe(name)
});

test("Can get id via getId function", () => {
    const id = 1
    const e = new Employee("string", id)
    expect(e.getId()).toBe(id)
});

test("Can get email via getEmail function", () => {
    const email = "hi@test.com"
    const e = new Employee("string", 1, email)
    expect(e.getEmail()).toBe(email)
});

test("getRole should return the Employee in a string", () => {
    const role = "Employee"
    const e = new Employee("string", 1, "string")
    expect(e.getRole()).toBe(role)
});
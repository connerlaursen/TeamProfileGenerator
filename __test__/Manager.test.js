const Manager = require("../lib/Manager")

test("Can set the office number via the constructor", () => {
    const office = "007"
    const e = new Manager("string", 1, "stringEmail", office)
    expect(e.office).toBe(office)
});

test("getRole should return the manager in a string", () => {
    const role = "Manager"
    const e = new Manager("string", 1, "string", "007")
    expect(e.getRole()).toBe(role)
});

test("getRole should return the Managers office number in a string from the getOffice function", () => {
    const office = "007"
    const e = new Manager("string", 1, "string", office)
    expect(e.getOffice()).toBe(office)
});

// manager test functions
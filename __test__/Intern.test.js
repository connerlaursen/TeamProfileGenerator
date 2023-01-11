const Intern = require("../lib/Intern")

test("Can set the school via the constructor", () => {
    const school = "UW"
    const e = new Intern("string", 1, "stringEmail", school)
    expect(e.school).toBe(school)
});

test("getRole should return the Intern in a string", () => {
    const role = "Intern"
    const e = new Intern("string", 1, "string", "UW")
    expect(e.getRole()).toBe(role)
});

test("getRole should return the Intern's school in a string from the getSchool function", () => {
    const school = "UW"
    const e = new Intern("string", 1, "string", school)
    expect(e.getSchool()).toBe(school)
});

// intern test functions
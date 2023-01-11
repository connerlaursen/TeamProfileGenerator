const Engineer = require("../lib/Engineer")

test("Can set the github via the constructor", () => {
    const github = "TheodoresGithub"
    const e = new Engineer("string", 1, "stringEmail", github)
    expect(e.github).toBe(github)
});

test("getRole should return the Engineer in a string", () => {
    const role = "Engineer"
    const e = new Engineer("string", 1, "string", "TheodoresGithub")
    expect(e.getRole()).toBe(role)
});

test("getRole should return the Engineer's github username in a string from the getGithub function", () => {
    const github = "theodoresGithub"
    const e = new Engineer("string", 1, "string", github)
    expect(e.getGithub()).toBe(github)
});

// engineer test functions

const { genRandASCII } = require("../index");

test("generates a random string between 8 and 32 chars with a mostly random charset using char codes in the range of 40-126", () => {
    const rand = genRandASCII();

    // first check for null
    expect(rand).not.toBeNull();

    // validate each char code to ensure that they are between 40 and 126 
    for (let i = 0; i < rand.length; i++) {
        const code = rand.charCodeAt(i);
        expect(code).toBeGreaterThan(39);
        expect(code).not.toBeGreaterThan(126);
    }

    // check for valid data type
    expect(typeof rand).toBe("string");

    // check for a valid length between 8 and 32
    expect(rand.length).toBeGreaterThan(7);
    expect(rand.length).not.toBeGreaterThan(33);
})
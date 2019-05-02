const { genRandString, charsets } = require("../index");

test('generates a random string between 8 and 32 chars with an alphanumeric charset', () => {
    const rand = genRandString();

    // first check for null
    expect(rand).not.toBeNull();

    // check for valid charset
    expect(rand).toMatch(/[0-9a-z]/gi);
    
    // check for valid data type
    expect(typeof rand).toBe("string");

    // check for a valid length between 8 and 32
    expect(rand.length).toBeGreaterThan(7);
    expect(rand.length).not.toBeGreaterThan(33);
});

test('generates a random string between 8 and 32 chars with an alphabetic charset', () => {
    const rand = genRandString(charsets.alphabetic);

    // first check for null
    expect(rand).not.toBeNull();

    // check for valid charset
    expect(rand).toMatch(/[a-z]/gi);
    
    // check for valid data type
    expect(typeof rand).toBe("string");

    // check for a valid length between 8 and 32
    expect(rand.length).toBeGreaterThan(7);
    expect(rand.length).not.toBeGreaterThan(33);
});

test('generates a random string between 8 and 32 chars with a numeric charset', () => {
    const rand = genRandString(charsets.numeric);

    // first check for null
    expect(rand).not.toBeNull();

    // check for valid charset
    expect(rand).toMatch(/[0-9]/gi);
    
    // check for valid data type
    expect(typeof rand).toBe("string");

    // check for a valid length between 8 and 32
    expect(rand.length).toBeGreaterThan(7);
    expect(rand.length).not.toBeGreaterThan(33);
});
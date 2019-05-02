/*
                            Node.js Barcode Challenge for ParkHub

    Parking ticket sellers often print passes with a barcode that we scan with our handheld devices.  
    The barcode resolves on scan to a string value that we validate against our database store of 
    passes for an event.  We’d like you to write a Node.js script that provides between 3 and 5 
    distinct ways of generating a string which should be: mostly random, alphanumeric or purely 
    numeric, and of a length between 8 and 32 characters. The following criteria will be used to 
    evaluate the product in rough order of priority:

        1. Was the script written in such a way as to be concise and efficient without sacrificing  readability?
        2. Are the methods that you use to generate the string thoughtful and meet the outlined  criteria?  
        3. Does it have testing so that we can verify it works as intended?  
        4. Has it been commented so that another developer can clearly understand how it  functions and why you made the decisions you made? 
        5. Would the script be reusable in different platforms or contexts?   
        6. Does the script run? 
*/

const randomstring = require("randomstring");
const crypto = require("crypto-random-string");

/**
 * The charsets object contains a few predefined charsets used in generating random strings.
 * 
 * The different charsets available are:
 *  1. alphanumeric
 *  2. alphabetic
 *  3. numeric
 */
const charsets = {
    alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    alphabetic: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    numeric: "0123456789"
};

/**
 * Generates a random integer between two inclusive numbers. By default,
 * the range is between 8 and 32.
 * 
 * The random value is left shifted by 0 and is converted to two's-complement
 * to gain efficiency over flooring the value. 
 * 
 * @param {number} min - The minimum number which can be generated.
 * 
 * @param {number} max - The maximum number which can be generated.
 * 
 * @returns a random integer between the given range
 */
const rand = (min=8, max=32) => (Math.random() * (max + 1 - min) + min) << 0;

/**
 * Generates a random string using the [randomstring](https://www.npmjs.com/package/randomstring) package.
 * This function contains 2 optional paramaters: charset and length. These paramaters have default values,
 * though they may be assigned for additional functionality.
 * 
 * @param {string} charset - The charset used to generate the random string.
 *                         The charset options are:
 *                          * alphanumeric (default)
 *                          * alphabetic
 *                          * numeric
 *                          * hex
 *                          * custom - any given characters
 * 
 * @param {number} length - The length of the generated string. By default, this is set to a random
 *                      number between 8 and 32.
 * 
 * @returns the randomly generated string based upon the given presets
 */
const genRandomString = (charset="alphanumeric", length=rand()) => randomstring.generate({ length, charset });

/**
 * Generates a random string using the [crypto-random-string](https://www.npmjs.com/package/crypto-random-string) package.
 * 
 * @param {number} length - The length of the generated string. By default, this is set to a random
 *                      number between 8 and 32
 * 
 * @returns the randomnly generated hex string with the given length
 */
const genCrypto = (length=rand()) => crypto(length);

/**
 * Generates a random string between 8 and 32 charecters long based upon a given charset.
 * The default charset is set to alphanumeric
 * 
 * @param {string} charset - The charset used to generate the random string. Charsets can be chosen from
 *                      the ***charsets*** object, or be a custom charset.
 * 
 * @param {number} length - The length of the generated string. By default, this is set to a random
 *                  number between 8 and 32.
 * 
 * @returns the randomnly generated string based upon the given presets.
 */
const genRandString = (charset=charsets.alphanumeric, length=rand()) => {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += charset.charAt((Math.random() * charset.length) << 0);
    }
    return str;
}

/**
 * Generates a random string based upon random [ASCII](http://www.asciitable.com/) char codes.
 * The range of valid char codes is 40-126.
 * 
 * @param {number} length - The length of the generated string. By default, this is set to a random
 *                      number between 8 and 32.
 * 
 * @returns the randomly generated string based upon the given presets.
 */
const genRandASCII = (length=rand()) => {
    const chars = [... new Array(length)].map(() => rand(40, 126));
    return String.fromCharCode.apply(null, chars);
}

// exports for unit testing
module.exports = {
    genRandomString,
    genCrypto,
    genRandString,
    charsets,
    genRandASCII
}
//import * as ecies from "./src/index.js";
const ecies = require('./src/index')

const crypto = require('crypto')
const elliptic = require('elliptic')
var chai = require('chai')
expect = chai.expect

const EC = elliptic.ec;
const ec = new EC("secp256k1");

const msg = "Hello, Eigen, Privacy Computing!";


const options = {
    hashName: "sha512",
    hashLength: 64,
    macName: "sha256",
    macLength: 32,
    curveName: "secp256k1",
    symmetricCypherName: "aes-256-gcm",
    keyFormat: "uncompressed",
    s1: null, // optional shared information1
    s2: null, // optional shared information2
};

// const keyPair = ec.genKeyPair();
// const publicKey = keyPair.getPublic();
// console.log("public key:", keyPair.getPublic("hex"));
// console.log("private key:", keyPair.getPrivate("hex"));
// const encryptedText = ecies.encrypt(publicKey, msg, options);
// console.log(encryptedText.length)
// const decryptedText = ecies.decrypt(keyPair, encryptedText, options);
// console.log(decryptedText);
// expect(msg).to.equal(decryptedText);


// const pub =
// "0461781ee062463d00753a2cacc44eafaaddf2c22209c0903adc0ca98a836e3aed2933fe50923c1b3afa819df73aed843c4abe37528efa28ba4175d496b786cf88";
// const keyPair = ec.keyFromPublic(pub, "hex");
// const publicKey = keyPair.getPublic();
// console.log("public: ", keyPair.getPublic("hex"));
// const encryptedText = ecies.encrypt(publicKey, msg, options);
// console.log("cipher", encryptedText.toString("hex"));

const priv =
"d26e62d7726062e735d6d130b3c624e97921eecc3bde9263b404121f6f0dccc4";
const keyPair2 = ec.keyFromPrivate(priv, "hex");
publicKey = keyPair2.getPublic();
console.log("public:", keyPair2.getPublic("hex"));
const encryptedText = ecies.encrypt(publicKey, msg, options);
console.log("encryptedText", encryptedText);
const decryptedText = ecies.decrypt(keyPair2, encryptedText, options);
console.log("decryptedText", decryptedText);
expect(msg).to.equal(decryptedText);
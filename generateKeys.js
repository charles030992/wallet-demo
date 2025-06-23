const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");
const crypto = require("crypto");

// Genera una clave privada aleatoria
const privateKey = crypto.randomBytes(32);
console.log("Private key:", toHex(privateKey));

// Genera la clave pública correspondiente
const publicKey = secp256k1.getPublicKey(privateKey);
console.log("Public key:", toHex(publicKey));

// Calcula la dirección Ethereum
const address = toHex(keccak256(publicKey.slice(1)).slice(-20));
console.log("Ethereum address:", "0x" + address);
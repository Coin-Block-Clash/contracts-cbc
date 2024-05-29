// import { keccak256, toUtf8Bytes, defaultAbiCoder, arrayify, hexlify } from "ethers";
// import hre from "hardhat";
// const ethers = require("hre")

// export function encodeData(dataTypes: any, dataValues: any) {
//   const bytes = defaultAbiCoder.encode(dataTypes, dataValues);
//   return hexlify(bytes);
// }

// export function hashData(dataTypes: any, dataValues: any) {
//   const bytes = defaultAbiCoder.encode(dataTypes, dataValues);
//   const hash = keccak256(arrayify(bytes));
//   return hash;
// }

// export function hashString(string: string) {
//   return hashData(["string"], [string]);
// }

// export function keccakString(string: string) {
//   return keccak256(toUtf8Bytes(string));
// }

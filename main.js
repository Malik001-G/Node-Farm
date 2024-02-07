const http = require("http");
const fs = require("fs");

const read = fs.readFileSync('./txt/input.txt', "utf-8");
//console.log(read);

const textOut = `This is what we know about farms and stuffs: ${read} |n Created on ${Date.now()}`

fs.writeFileSync("./txt/output.txt", textOut)
console.log("File is written");

const crypyo = require("crypto");


module.exports = function generateUniqueId() {
    return crypyo.randomBytes(4).toString("HEX");

}
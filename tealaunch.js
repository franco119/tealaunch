const { default: chalk } = require("chalk");

function hello() {
    console.log(chalk("HELLO MATE"))
}

module.exports = hello
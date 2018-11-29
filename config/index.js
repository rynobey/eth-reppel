const fs = require('fs')
const path = require('path')
const configPath = process.env.CONFIG_PATH || './config/config.json'
const configFile = fs.readFileSync(path.resolve(configPath), 'utf8')
const config = JSON.parse(configFile)

module.exports = {
  blockchainNodeAddress: process.env.BLOCKCHAIN_NODE_ADDRESS || config.blockchainNodeAddress,
}

console.log("\nDEFAULTS LOADED:", path.resolve(configPath))
console.log()
console.log("RUNNING WITH CONFIGURATION:\n")
console.log(module.exports)
console.log()


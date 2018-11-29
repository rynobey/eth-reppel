const repl = require('repl')
const Web3 = require('web3')
const Web3Admin = require('web3admin')
const config = require('./config')

let web3 = new Web3(new Web3.providers.HttpProvider(config.blockchainNodeAddress));
Web3Admin.extend(web3)

const r = repl.start('> ')

Object.defineProperty(r.context, 'web3', {
  configurable: false,
  enumerable: true,
  value: web3
})

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum - what we want)

const names = require('./4-1stModule(names)')
const sayHi = require('./5-2ndModule(utills)')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data);

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
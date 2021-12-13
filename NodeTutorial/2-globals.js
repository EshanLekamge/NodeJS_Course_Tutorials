const directory = __dirname

console.log(directory)

// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__filename)
console.log(require)
console.log(module)
console.log(process)

setInterval(() =>{

    console.log('Hello World!')

},1000)
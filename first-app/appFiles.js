const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

//returns array of files, folders in the directory of the js file.

fs.readdir('./',function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
 //2nd paparameter is a function, node calls the function when asynchronus operation completes.

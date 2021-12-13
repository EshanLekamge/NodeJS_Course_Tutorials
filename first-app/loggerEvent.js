const EventEmitter = require('events'); //class

const emitter = new EventEmitter(); //object, instance of EventEmitter

var url = 'http://mylogger.io/log';

function log(message){

    // Send http request
    console.log(message);

    //Raise and event
    emitter.emit('messageLogged', {id :1, url : 'http://'});

}

module.exports.log = log;
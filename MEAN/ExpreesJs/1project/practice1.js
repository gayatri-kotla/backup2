
var events = require('events');
const { CLIENT_RENEG_LIMIT } = require('tls');


var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
    console.log('Event Handling');
}

eventEmitter.on('click',myEventHandler);

eventEmitter.emit('click')
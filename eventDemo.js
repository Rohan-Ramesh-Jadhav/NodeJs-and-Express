const eventEmitter = require('events');
const emitter = new eventEmitter();

//this is to listen the emitted message
emitter.on('message',(res)=>{
    console.log(res);
})

//this is to emit the message
emitter.emit(
    'message',
    {
        id: 1,
        url: 'https://google.com'
    }
);
const EventEmitter = require("events");

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on("event", () => console.log("Event Fired!"));

//init event
myEmitter.emit("events");
myEmitter.emit("events");
myEmitter.emit("events");
myEmitter.emit("events");

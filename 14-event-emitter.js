const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// Order matters, we should first listen to the events, then emit the event and once the event is emitted,
// callback will be effective.
customEmitter.on("response", (name, id) => {
  console.log(`data received`);
});

// You can access the the second and third arguments just like in a function
customEmitter.on("response", (name, id) => {
  console.log(`data received  ${name} with ${id}`);
});

customEmitter.emit("response", "john", 50);

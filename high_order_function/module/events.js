const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("doorOpen", () => {
  console.log("ring, ring, ring");
});

eventEmitter.emit("doorOpen");

eventEmitter.on("ringBell", (message) => {
  console.log(message);
});

eventEmitter.emit("ringBell", "Welcome");

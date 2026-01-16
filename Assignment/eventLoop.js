console.log("A");

setTimeout(() => console.log("B"), 0);

setImmediate(() => console.log("C"));

process.nextTick(() => console.log("D"));

Promise.resolve().then(() => console.log("E"));

console.log("F");

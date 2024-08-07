setImmediate(() => {
  console.log("immediate");
});

process.nextTick(() => {
  console.log("nexttick");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => console.log("promise"));

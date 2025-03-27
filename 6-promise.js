console.log('First');

process.nextTick(() => {
  console.log('Second');
});

Promise.resolve().then(() => {
  console.log('Third');
});

setImmediate(() => {
  console.log('Fourth');
});

console.log('Fifth');

console.log('First');

process.nextTick(() => {
  console.log('Second');
});

setImmediate(() => {
  console.log('Third');
});

console.log('Fourth');


console.log('X');

setTimeout(() => {
  console.log('Y');
}, 0);

setImmediate(() => {
  console.log('Z');
});

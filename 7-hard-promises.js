console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
  process.nextTick(() => {
    console.log('4');
  });
});

process.nextTick(() => {
  console.log('5');
});

setImmediate(() => {
  console.log('6');
});

console.log('7');

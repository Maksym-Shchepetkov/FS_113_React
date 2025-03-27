function delayedPromise(message, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

console.log('Starting the process...');

const intervalId = setInterval(() => {
  console.log('Interval task executed');
}, 2000);

delayedPromise('Promise resolved after 3 seconds', 3000).then(message => {
  console.log(message);

  clearInterval(intervalId);
  console.log('Interval stopped');
});

setTimeout(() => {
  console.log('Timeout executed after 5 seconds');
}, 5000);

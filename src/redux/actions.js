import { createAction } from '@reduxjs/toolkit';

// actionCreator
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const changeStep = createAction('changeStep');

console.log(increment());
console.log(increment(123));
console.log(changeStep({ user: 'OLENA', value: 123 }));
console.log(changeStep('test'));

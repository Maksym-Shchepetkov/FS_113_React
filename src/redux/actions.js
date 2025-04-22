export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
export const reset = () => ({ type: 'RESET' });
export const changeStep = newStep => ({ type: 'CHANGE_STEP', payload: newStep });

// actionCreator

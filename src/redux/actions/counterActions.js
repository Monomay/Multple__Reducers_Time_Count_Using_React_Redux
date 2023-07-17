// define counter action constants here
export const DEACREASE_COUNT = "decrease count";
export const INCREASE_COUNT = "increase count";
export const RESET_COUNT = "reset count";
// define counter action creators here
export const decreaseCount = (index) => ({index, type: DEACREASE_COUNT});
export const increaseCount = (index) => ({index, type: INCREASE_COUNT});
export const resetCount = (index) => ({index, type: RESET_COUNT});

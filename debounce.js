// Create a FUNCTION
// Pass cbFunction, delay parameters
  // Define inDebounce
  // Return a FUNCTION  
    // clearTimeout(inDebounce)
    // Assign inDebounce with value as timeout event with provided delay
    // After timeout
      // Call  cbFunction 
const debounce = (cbFun, delay) => {
  let inDebounce;
  return function() {
    clearTimeout(inDebounce);
    let args = arguments;
    inDebounce = setTimeout(() => {
      cbFun.call(this, args);
    }, delay);
  }
};

const clickMeCb = (value) => {
  console.log('EXECUTED AFTER 2000ms', value);
}
export const clickMe = debounce(clickMeCb, 2000);


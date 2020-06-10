const cb = function () {
  console.log('Executed');
}

export const scheduler = (callback = cb, n = 2000) => {
  let timer = null;
return function(){
  timer = setTimeout(() => {
    if (timer) {
      callback();
      clearTimeout(timer);
      console.log(timer)
    }
  }, n)
}}


scheduler(cb, 2000);
scheduler(cb, 2000);
scheduler(cb, 2000);
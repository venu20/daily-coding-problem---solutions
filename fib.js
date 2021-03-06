const fib = (n) => {
  const t0 = performance.now();
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i-1];
    const b = result[i-2];
    result[i] = a + b;
  }
  const t1 = performance.now();
  console.log(`Iteration: ${t1 - t0 }`);
  return result[n];
}

console.log(fib(900));

const shortFib = (n) => {
  if(n < 2) {
    return n;
  }

  return memoize(n-1) + memoize(n-2);
}

const memFib = (fn) => {
  let cache = {};
  return function(n) {
    if (cache[n]) {
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;
    return result;
  }
}
  const t0 = performance.now();
  const memoize = memFib(shortFib);
  console.log(memoize(900));
  const t1 = performance.now();
  console.log(`Memoization: ${t1-t0}`);

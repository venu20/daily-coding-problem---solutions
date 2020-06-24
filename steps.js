// Given N steps
// User can take only 1 or 2 steps at a time
// Find the all available way to finish the steps

// export const Steps = (n) => {
//   const fastSteps = Math.round(n / 2);
//   const result = [];
//   let remain;

//   while (fastSteps >= 0) {
//     remain = n - fastSteps * 2;
//     const steps_2 = '2'.repeat(fastSteps);
//     const steps_1 = '1'.repeat(remain);
//     result.push([`${steps_2}${steps_1}`]);
//     fastSteps--;
//   }
//   return result.length;
// }
// Return the count 
export const uniqueSteps = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2){
    return n;
  }

  return uniqueSteps(n - 1) + uniqueSteps(n - 2);
}

// Lets utilize the cache , dynamic programming
let memory = [];
export const unique = (n) => {
  if (memory[n]) {
    return memory[n];
  }
  // Compute value for the given n and add it to the memory
  if (n === 0 || n === 1 || n === 2) {
    return 1;
  } else if (n < 0) {
    return 0;
  }
  for (let i = 0; i <= n; i++) {
    memory[i] = unique(i-1) + unique(i - 2);
  }
  return memory[memory.length-1];
}
console.log(unique(5));

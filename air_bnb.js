// // Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// // For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// 5 + max([1,5]), 1 + max([5])
// 5 + max(1,5), 1 + 5)
// 10 , 6

// 2 + max([6,2,5]), 4 + max([2,5])
// 2 + max(6 + max([5]),2), 4+5
// 2 + 11,9
// 13,9

// IF empty array 
// Return zero
// return max of (0th item of array + recursive(2nd item to end) , 1st item of array+recursive(3rd item to end))
let sumMap = new Map();
const nonAdjacentLargestSum = (arr) => {
  if (!arr.length || !arr[0]) {
    return 0;
  }


  const len = arr.length;
  const evenList = arr.slice(2, len);
  const oddList = arr.slice(3, len);

  if (sumMap.has(evenList)) {
    console.log('coming');
    return sumMap.get(arr);
  } else {
    const evenListSum = nonAdjacentLargestSum(evenList);
    sumMap.set(evenList, evenListSum);
  }
  
   if (sumMap.has(oddList)) {
     console.log(oddList);
    return sumMap.get(arr);
  } else {
    const oddListSum = nonAdjacentLargestSum(oddList);
    sumMap.set(oddList, oddListSum);
  }

  arr[1] = arr[1] ? arr[1] : 0;
  arr[0] = arr[0] ? arr[0] : 0;

  return Math.max(arr[0] + nonAdjacentLargestSum(evenList), arr[1] + nonAdjacentLargestSum(oddList));
}

const result = nonAdjacentLargestSum([5, 1, 1,5]);


console.log('RESPONE')
console.log(result);
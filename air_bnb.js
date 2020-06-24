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

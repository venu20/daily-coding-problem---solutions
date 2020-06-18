// // Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// // For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// // [2,5,-3,4,9] => 13 => 5,9
// // [1,2] => 0
// // [5,28,10] => 1,2,3 => 15
// // 2 + 9 

// function nonAdjacent(input){
//   const odd = 0;
//   const even = 0;
// for(let i=0;i<=input.length;i++){
//   if(i%2===0){
//     even += input[i];
//   } else {

//     odd += input[i];
//   }
// }
// console.log(odd > even ? odd : even);
// }

// nonAdjacent([2,4,6,2,5]);


// nonAdjacent([5,1,1,5]);
// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
// "aabbcc", k = 1
// "aabbcc", k = 2
// "aabbcc", k = 3
// "aaabbb", k = 3

// define arr, low = 0, high=0, longest
// loop through the given string
// get i
// check if the given i value in arr
// YES - increment high and assign logest = high-low;
// NO 
// check if the arr length === k
// YES - remove first char from arr, find the first char index and assign to low
// then push i value to arr and increment high and longest = high-low

// check if the high-low > longest then assign longest = high-low;

const longestSubstring = function (s, k) {
  let low = 0, high = 0, longest = 0;
  let arr = [];
  s.split('').forEach((ch,index) => {
    if (arr.includes(ch)) {
      high = high + 1;
    } else {
      arr.push(ch);
      if (arr.length > k) {
        arr.shift();
        if(arr.length){
         low = s.indexOf(arr[0]) + 1;
        } else {
          low = index;
        }
      }
      high = high + 1;
    }
    if (high - low > longest) {
      longest = high - low;
    
    }
  });
  console.log(longest);
}

longestSubstring("aabbcc", 1);

longestSubstring("aabbcc", 2);
longestSubstring("aabbcc", 3);
longestSubstring("aabbcc", 4);
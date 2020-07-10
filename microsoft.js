// Create a function with parameters dictionary, str
// Call helper function(becaue we will using recursive approach) with dictionary and str

// Create a helper function with paramerts dictionary, str
  // If str length is zero
    // YES
      // Return an object with props such as {valid: true, results: []}
  // FOR LOOP:
  // initiate i value to 1
  // Break loop when i reachs the length of the string
  // Increment 1
    // Assign prefix to str.slice(0,i) and suffix to str.slice(i)
    // If prefix in dictionary
      // YES
        // const midResults = helper function (dictionary, suffix)
        // If midResults.valid is true
          // midResults.results = [...midResults.results, prefix]
          // return midResults
// Return {valid: false, results: []}

function getValidWords(dict, str){
  console.log(helper(dict, str))
}

function helper(dict, str) {
  if(str.length === 0){
    return {
      valid: true,
      results: []
    }
  }

  for(let i=1;i<str.length+1;i++){
    const prefix = str.slice(0, i);
    // console.log(prefix,"prefix");
    const suffix = str.slice(i);
    if(dict.includes(prefix)){
      const {results, valid} = helper(dict, suffix);
      if(valid) {
        return {
          results: [...results, prefix],
          valid: true
        }
      }
    }
  }

  return {valid: false, results: []}
}

getValidWords(['bed', 'bath', 'bedbath', 'and', 'beyond'], "bedbathandbeyond");
getValidWords(['quick', 'brown', 'the', 'fox'], "thequickbrownfox");
getValidWords(['quick', 'brown', 'the', 'fox'], "foxbrownquickthe");
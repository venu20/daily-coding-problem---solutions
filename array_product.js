export const product = (arr) => {
  let prefix_products = [];
  for (let i = 0; i < arr.length; i++) {
    prefix_products[i] = 1
    for (let j = i+1; j < arr.length; j++) {
      prefix_products[i] = prefix_products[i] * arr[j];
    }
  }

  let postfix_products = [];
  for (let j = arr.length-1; j >= 0; j--) {
    postfix_products[j] = 1;
    for (let k = j-1; k >= 0; k--) {
      postfix_products[j] = postfix_products[j] * arr[k];
    }
  }
  let result = [];

  for(let item=0;item<arr.length;item++){
    result[item] = prefix_products[item] * postfix_products[item];
  }
console.log(result);
}

const items = [1,1,1,1,1,2,3,4,5,6];
product(items);
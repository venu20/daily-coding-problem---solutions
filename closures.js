function container(a,b){
  function pair(f){
    return f(a,b);
  }
return pair;
}

function cos(pairFun){
 return pairFun((x,y)=>{
    return x;
  });
}

console.log(cos(container(3,4)))
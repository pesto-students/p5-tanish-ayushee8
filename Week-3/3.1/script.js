const memoize = (fn) => {
  let cache = {};
  return (...args) =>{
    let cacheKey = args.map(n=>n.toString()+ '+').join('');
    if(cacheKey in  cache){
        return cache[cacheKey]
    }else{
        let result = args.reduce((acc,curr)=>fn(acc,curr),0);
        cache[cacheKey] = result;
        return result;
    }
  }
};

function add(a,b){
    return a+b;
}
const memoizeAdd = memoize(add);



console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,100));



let arr = [1,2,3];
let [one,two,three] = arr;
console.log(one);
console.log(two);
console.log(three);

let obj = {h:100,s:true};
let {h=90,s} = obj;
console.log(h);
console.log(s);
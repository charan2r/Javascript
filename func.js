const add = (x=2, y=4)=>{
    let sum = x + y;
    console.log(sum);
}

const test = (a, b = 3, c = 42) => {
    return a + b + c;
  }
console.log(test(5));
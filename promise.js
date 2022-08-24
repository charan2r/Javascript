function foo() {
    return new Promise((resolve,reject) => {
      let result = getSomeResult();
      if (result)
        resolve('Success');
      else
        reject('Something went wrong');
    });
}

const arr = ['3', '5', '8'];
console.log(
  arr.find(x => x == 8).repeat(2)
);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];
const func = (...rest) => {
  console.log(rest.length);
}
func(...arr1);
func(...arr2);

const square = num => num * num;
console.log(square(6) + 6);
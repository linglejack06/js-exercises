function fibArr (n) {
  let arr = [0, 1];
  while (arr.length < n) {
    let sum = arr[arr.length-1] + arr[arr.length-2];
    arr.push(sum);
  }
  return arr;
}
console.log(fibArr(8))
function recursiveFib (n, arr = [0, 1]) {
  if (arr.length >= n) {
    return arr;
  }
  let sum = arr[arr.length-1] + arr[arr.length-2];
  arr.push(sum);
  recursiveFib(n, arr);
  return arr;
}
console.log(recursiveFib(8));

function sumRange(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumRange(n-1);
};
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
function all(arr, cb) {
  var copy = copy || arr.slice();
  if (copy.length === 0) return true;

  if (cb(copy[0])) {
    copy.shift(); // removes first array bc its been checked
    return all (copy, cb);
  } else {
    return false; // no need to keep traversing array if one is found to be wrong
  }
}
function productOfArr(arr) {
  if (arr.length === 0) {
    return 1;
  }
  // arr.shift returns the first element of array and removes it
  return arr.shift() * productOfArr(arr);
}
var nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}
function contains(obj, val) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      return contains (obj[key], val);
    }
    if (obj[key] === val) {
      return true;
    }
  }
  return false;
}
function totalIntegers(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]))  {
      total += totalIntegers(arr[i])
    } else {
      total += 1;
    }
  }
  return total;
}
function sumSquares(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total += sumSquares(arr[i])
    } else {
      total += arr[i] * arr[i];
    }
  }
  return total;
}
function replicate(reps, num) {
  if (reps === 1) {
    return [num];
  }
  return [num].concat(replicate(reps - 1, num))
}

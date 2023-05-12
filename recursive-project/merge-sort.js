// sort smaller arrays in order then combine them sorted
// sort left half while length > 1
  // if length is 1 return arr
// sort right half while length > 1
  // if length is 1 return arr
// merge back together
  // comapare two 1 elements
    // put smaller one in first place
      // if other array is 1 element then it goes after (sorted)
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.splice(0, middle);
  let right = arr.splice(-middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge (left, right) {
  let i = 0;
  let j = 0;
  let results = [];
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i]);
      i++;
    } else {
      results.push(right[j]);
      j++;
    }
  }
  while(i < left.length) {
    results.push(left[i]);
    i++;
  }
  while(j < right.length) {
    results.push(right[j]);
    j++;
  }
  return results;
}


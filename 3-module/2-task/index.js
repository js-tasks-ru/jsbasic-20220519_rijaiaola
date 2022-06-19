function filterRange(arr, a, b) {
  let newArray = arr.filter( ( element => element >= a && element <= b));

  return newArray;
}

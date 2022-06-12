function filterRange(arr, a, b) {
  let newArray = [];
  for (let element of arr) {
    if (element >= a && element <= b) {
      newArray.push(element);
    }
  }
  return newArray;
}

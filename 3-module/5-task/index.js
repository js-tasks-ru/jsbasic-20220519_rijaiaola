function getMinMax(str) {
  let result = {};
  let arr = str.split(' ');
  let nums = [];

  for (const element of arr) {
    if (!isNaN(element)) {
      nums.push(element);
    }
  }

  result.max = Math.max(...nums);
  result.min = Math.min(...nums);

  return result;
}

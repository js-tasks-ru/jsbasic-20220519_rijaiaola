function camelize(str) {
  let arrStr = str.split('');
  let isDashBefore = 0;
  let result = []

  for (let a of arrStr) {
    if (a === '-') {
      isDashBefore = 1;
    } else if (isDashBefore === 1) {
      result.push(a.toUpperCase());
      isDashBefore = 0;
    }  else {
      result.push(a);
      isDashBefore = 0;
    }

  }

  return result.join('');
}

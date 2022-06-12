function isEmpty(obj) {
  let result = 0;
  for (key in obj) {
    result += 1
  }

  if (result > 0) {
    return false;
  }
  return true;
}

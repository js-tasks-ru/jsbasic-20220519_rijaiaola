function ucFirst(str) {
  if (str.length<1 || str.search(/\'/) !== -1){
    return str;
  }
  return str[0].toUpperCase() + str.slice(1, str.length);
}

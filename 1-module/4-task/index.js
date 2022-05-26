function checkSpam(str) {
  if (/xxx/.test(str) || /1XbeT/.test(str)) {return true;}
  return false;
}

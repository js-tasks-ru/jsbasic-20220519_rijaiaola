function namify(users) {
  let arr = [];
  for (const user of users) {
    arr.push(user.name);
  }
  return arr;
}

function showSalary(users, age) {
  // let result = [];

  let result = users.filter((user) => user.age <= age)
                    .map( (element) => `${element.name}, ${element.balance}\n`);

    result[result.length - 1] = result[result.length - 1].substring(0, result[result.length - 1].length - 1);


  return result.join('');
}

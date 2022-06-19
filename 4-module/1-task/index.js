function makeFriendsList(friends) {
  const list = document.createElement('ul');

  for (const friend of friends) {
    let li = document.createElement('li');
    li.textContent = `${friend.firstName} ${friend.lastName}`
    list.append(li);
  }
  return list;
}

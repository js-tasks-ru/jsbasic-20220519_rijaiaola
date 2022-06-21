function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  const isHidden = () => {
    (!text.hidden)? text.hidden = true : text.hidden = false;
  }

  button.addEventListener('click', isHidden);
}

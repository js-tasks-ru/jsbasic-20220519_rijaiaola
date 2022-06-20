function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel__inner');
  const slide = document.querySelector('.carousel__slide');
  const slideCount = document.getElementsByClassName('carousel__slide').length;
  const moveValue = slide.offsetWidth;
  let currentMove = 0;
  let currentClick = 0;
  const maxCount = slideCount*moveValue;

  arrowRight.style.display = '';
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () => {

      arrowRight.style.display = '';
      currentMove += moveValue;
      currentClick ++;
      carousel.style.transform = `translateX(-${currentMove}px)`;
      arrowLeft.style.display = '';

    if (currentClick === 3) {
      arrowRight.style.display = 'none';
    }
  });

  arrowLeft.addEventListener('click', () => {

      arrowLeft.style.display = '';
      currentMove -= moveValue;
      currentClick --;
      carousel.style.transform = `translateX(-${currentMove}px)`;
      arrowRight.style.display = '';

      (currentClick === 0) ? arrowLeft.style.display = 'none' : arrowLeft.style.display = '';
    })

}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseover', () => {
  document.querySelector('.carousel-slide').style.animationPlayState = 'paused';
});

carouselContainer.addEventListener('mouseout', () => {
  document.querySelector('.carousel-slide').style.animationPlayState = 'running';
});

(function() {
   const slides = [
      '<div class="slide"><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
      '<div class="slide"><img src="img/banana.svg" alt="Banana"></div>',
      '<div class="slide"><img src="img/girl.svg" alt="Girl"></div>',
      '<div class="slide"><img src="img/viking.svg" alt="Viking"></div>'
   ]; 

   let currentSlide = 0;

   function renderCarousel() {
      const slideContainer = document.querySelector('.main-products-carousel .slide');
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth >= 600) {
          const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
          slideContainer.innerHTML += slides[secondSlide];
          if (window.innerWidth >= 900) {
            const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
            slideContainer.innerHTML += slides[thirdSlide];              
          }
      }
   }

   function nextSlide() {
       currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
       renderCarousel();
   }

   function prevSlide() {
       currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
       renderCarousel();
   }

   setInterval(nextSlide, 3000);

   renderCarousel();

   const btnForward = document.querySelector('.main-products-carousel .forward');
   btnForward.addEventListener('click', nextSlide);

   const btnBack = document.querySelector('.main-products-carousel .back');
   btnBack.addEventListener('click', prevSlide);

   window.addEventListener('resize', renderCarousel);

})();
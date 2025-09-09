document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector('.slides');
  let slides = document.querySelectorAll('.slide');

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.dots');

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

  slides = document.querySelectorAll('.slide'); 

  let currentIndex = 1; 
  const slideWidth = slides[currentIndex].clientWidth;
  let autoPlayInterval;

  slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  for (let i = 0; i < slides.length - 2; i++) {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      currentIndex = i + 1; 
      updateSlide();
      resetAutoplay();
    });
  }
  const dots = document.querySelectorAll(".dots button");

  function updateSlide() {
    slidesContainer.style.transition = "transform 0.6s ease-in-out";
    slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    let realIndex = currentIndex - 1;
    if (currentIndex === 0) {
        realIndex = slides.length - 3; 
    } else if (currentIndex === slides.length - 1) {
        realIndex = 0; 
    }

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === realIndex);
    });
    }


  function nextSlide() {
    if (currentIndex >= slides.length - 1) return;
    currentIndex++;
    updateSlide();
  }

  function prevSlide() {
    if (currentIndex <= 0) return;
    currentIndex--;
    updateSlide();
  }

  slidesContainer.addEventListener("transitionend", () => {
    if (slides[currentIndex].id === "first-clone") {
      slidesContainer.style.transition = "none";
      currentIndex = 1;
      slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
    if (slides[currentIndex].id === "last-clone") {
      slidesContainer.style.transition = "none";
      currentIndex = slides.length - 2;
      slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
  });

  function startAutoplay() {
    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 3000);
  }

  function resetAutoplay() {
    clearInterval(autoPlayInterval);
    startAutoplay();
  }

  startAutoplay();
});

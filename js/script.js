const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const menu = document.querySelector('#menu');
document.addEventListener('click', function(e) {
  if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// 1
const carousel = document.querySelector('.carousel');

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);

carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);

let popup = document.getElementById("popup")

function openPopup() {
  popup.classList.add("open-popup")
}

function closePopup() {
  popup.classList.remove("open-popup")
}
const initOpenMenu = () => {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');
  navMain.classList.add('main-nav--hidden');

  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--hidden');
  });
};

const initMap = () => {
  const mapFrame = document.querySelector('.footer-contacts__google-map');

  if (!mapFrame) {
    return;
  }

  mapFrame.style.display = "block";
};

const initChangeMap = () => {
  const mapFrame = document.querySelector('.footer-contacts__google-map');
  var mediaQuery = window.matchMedia('(min-width: 1320px)');

  if (!mapFrame) {
    return;
  }

  if (mediaQuery.matches) {
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2376.7521048576004!2d30.31839209911116!3d59.938740745367205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sru!4v1688335824171!5m2!1ses!2sru";
  }
};

initOpenMenu();
initMap();
initChangeMap();

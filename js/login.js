const navBar = document.querySelector('.nav-navbar');
  const logoMenu = document.querySelector('.menu');
  // logoMenu.innerHTML = menu();

  const nav = document.querySelector('.logo');

  nav.addEventListener('click', () => {
    logoMenu.classList.toggle('menu-active');
    navBar.classList.toggle('active');
    // if(logoMenu.classList.toggle('menu-active')){
    //   console.log("open");
    // }
  });
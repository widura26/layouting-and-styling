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


  //login
  const inputUsername = document.querySelector('#inputUser');
  const inputPassword = document.querySelector('#inputPass');
  
  const button  = document.querySelector('.button #submit');
  const formMessage  = document.querySelector('form');

  
  formMessage.addEventListener('submit', event => {
    event.preventDefault();
    let valP = inputPassword.value;
    let valU = inputUsername.value;
    
    if(valP === '260503'){
      // console.log(`Halo ${valU} selamat datang`);
      // window.location.href='dashboard';
      alert(`halo ${valU} selamat datang`);
    }else{
      alert('username atau password salah')
    }
  })
  
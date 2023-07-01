// for(let i = 0; i < 5; i++){
  //   cards.innerHTML += card();
  // }
  
  const getDataBlogs = async () => {
    try {
      const response = await axios.get('ha/blog.json');
      const data = response.data;
      iteration(data);
    }catch(e){
      console.log(e.message);
    }
  }
  
  function iteration(items){
    const cards = document.querySelector('.cards');
    for(blog of items){
      cards.innerHTML += card(blog);
    }
  }

  
  // const button = document.querySelector('button');
  window.addEventListener('load', () => {
    getDataBlogs();
  })
  
  function card(blog){
    return `
      <div class="card">

        <div class="card-title">
          <p>${blog.title}</p>
        </div>

        <div class="card-content">
          <p> Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Nemo illum debitis cupiditate 
          eum rem tempore eos, fugiat repudiandae eligendi 
          asperiores facere nam quia. Exercitationem voluptate 
          provident cumque consectetur necessitatibus dignissimos aliquid odit deserunt amet recusandae delectus incidunt architecto officia quia pariatur eveniet nisi iste 
          placeat, quis voluptatem saepe ipsa eum?</p>
        </div>
        
        <div class="date-author">
          <div class="date">
            <p>${blog.date}</p>
          </div>
          <div class="author">
            <div class="name">
              <p>${blog.authorName}</p>
            </div>
            <div class="avatar"></div>
          </div>
        </div>
        
      </div>
    `;
  }

  function menu(){
    return `
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    `
  }

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







const gridCard = document.querySelector('.grid-card');
const crd = document.querySelectorAll('.card');
const totalItem = document.querySelector('.cart .total-item');
const totalPrice = document.querySelector('.cart .total-price');
  
  async function getData() {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data.products;
    displayData(data);
  }
  
  window.addEventListener('load', () => {
    getData();
  })

  const displayData = (datas) => {
    for(let data of datas){
      // console.log(data);
      const { title, description, price, stock, thumbnail } = data;
      gridCard.innerHTML += card( title, description, price, stock, thumbnail );
    }
  }


function card(title, description, price, stock, thumbnail){
  
  return `
    <div class="card">
      <div class="title-content-pricestock">
        <div class="image">
          <img src="${thumbnail}">
        </div>
          <div class="card-title">
            <p>${title}</p>
          </div>
          <div class="card-content">
            <p>${description}</p>
          </div>
          <div class="card-price-stock">
            <div class="card-price">
              <p>${price}</p>
            </div>
            <div class="card-stock">
              <p>Stock : ${stock}</p>
            </div>
          </div>
      </div>
    </div>
  `
}

document.addEventListener('click', (e) => {
  const target = e.target.closest('.card');  
  if(target){
    const price = parseInt(target.querySelector('.card-price p').textContent);
    
    if(target.classList.toggle('clicked')){
      addition(price);
    }else{
      substraction(price);
    }
  }
})

let cart = [];
let angka = 0;
let totpri = 0;

function addition(price){
  totpri = totpri + price;
  angka++;
  totalItem.innerHTML = angka;
  totalPrice.innerHTML = totpri; 
}

function substraction(price){
  totpri = totpri - price;
  angka--;
  totalItem.innerHTML = angka;
  totalPrice.innerHTML = totpri;
}


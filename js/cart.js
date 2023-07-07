
const gridCard = document.querySelector('.grid-card');

  async function getData(){
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data.products;
    displayData(data);
  }
  
  window.addEventListener('load', () => {
    getData();
  })

  const displayData = (datas) => {
    for(let data of datas){
      console.log(data);
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
          <div class=""card-stock>
            <p>${stock}</p>
          </div>
        </div>
      </div>
    </div>
  `
}


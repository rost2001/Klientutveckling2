
//let endpoint = "https://fakestoreapi.com/products";
let endpoint = "fakestoreAPI.json";

window.addEventListener("load", load);


function load() {
    fetch(endpoint)
    .then((response) => response.json())
    .then((data) => render(data))
    .catch(error => console.error(error));
}

 
function render(products) {

   window.sessionStorage.setItem("products", JSON.stringify(products));

    let output ="";
    products.forEach((product) => (output += `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top img-thumbnail pic" src="${product.image}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#" disabled="disabled">${product.title}</a>
        </h4>
        <h5>${product.price} Kr</h5>
      </div>
      <div class="card-footer text-center">
        <a href="cart.html" class="btn btn-primary w-50" id="${product.id}">Lägg till</a> 
      </div>
    </div>
  </div>
    `));
  // tog bort  <p class="card-text">${product.description}</p> rad 30



    document.getElementById("products").innerHTML = output; 
    buttons();
}

function buttons(){
    let btns = document.getElementsByClassName("btn");
    console.log(btns.length);
   for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", setFromSession); 
   }
}

function setFromSession() {
    let id = this.id;

    const arr = JSON.parse(sessionStorage.getItem("products"));

    arr.forEach(o => {
        if (o.id == id) {
            window.localStorage.setItem("product", JSON.stringify(o));
        }
    });

}


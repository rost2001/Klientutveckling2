//let endpoint = "http://webacademy.se/fakestore/";
let endpoint = "https://fakestoreapi.com/products";
//let endpoint = "fakestoreAPI.json";
// måste ändra till webbplatsen sen

window.addEventListener("load", load);


function load() {
    fetch(endpoint)
    .then((response) => response.json())
    .then((data) => render(data))
    .catch(error => console.error(error));
}


setFromSession();

 
function render(products) {

   window.sessionStorage.setItem("products", JSON.stringify(products));

    let output ="";
    products.forEach((product) => (output += `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top img-thumbnail pic" src="${product.image}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${product.title}</a>
        </h4>
        <h5>${product.price}</h5>
        <p class="card-text">${product.description}</p>
      </div>
      <div class="card-footer text-center">
        <a href="cart.html" class="btn btn-primary w-50" id="${product.id}">Lägg till</a> 
      </div>
    </div>
  </div>
    `));
    document.getElementById("products").innerHTML = output; 
    buttons();
}
// lägg tillbaka href till cart sen #
// klicka på linken så ska det sparas i localstorage


function myFunction(){
    let id = this.id;
    console.log("okok");
    //let id = document.getElementById(this); // this
    console.log(id);
}

function buttons(){
    let btns = document.getElementsByClassName("btn");
    console.log(btns.length);
   for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", setFromSession); // ska vara get from session
   }
}


function setFromSession() {
    let id = this.id;

    const arr = JSON.parse(sessionStorage.getItem("products"));
    //console.log(Array.isArray(arr));
    //console.log(arr);

    arr.forEach(o => {
        //console.log(o); // set in localstorage to access from cart
        if (o.id == id) {
            console.log("same same" + o.title);
            window.localStorage.setItem("product", JSON.stringify(o));
        }
    });

}


// on click button add to local storage
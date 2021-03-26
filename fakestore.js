let endpoint = "http://webacademy.se/fakestore/";
//let endpoint = "fakestoreAPI.json";
// måste ändra till webbplatsen sen
// sista 02.10

 fetch(endpoint)
.then((response) => response.json())
.then((data) => render(data))
.catch(error => console.error(error));
 
function render(products) {
    console.log(products);
    let output ="";
    products.forEach((product) => (output += `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="${product.image}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${product.title}</a>
        </h4>
        <h5>${product.price}</h5>
        <p class="card-text">${product.description}</p>
      </div>
      <div class="card-footer text-center">
        <a href="#" class="btn btn-primary w-50">Lägg till</a> 
      </div>
    </div>
  </div>
    `));
    document.getElementById("products").innerHTML = output; 
}
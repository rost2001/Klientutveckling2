const form = document.getElementById("form");
const customerName = document.getElementById("name");
const telephone = document.getElementById("telephone");
const email = document.getElementById("email");
const address = document.getElementById("address");
const errorEl = document.getElementById("error");




form.addEventListener("submit", (e) => {
  
    let messages = [];

    if (customerName.value.trim() === "" || customerName.value == null) {
        messages.push("Du måste fylla i namn")
    }

    if (telephone.value.trim() === "" || telephone.value == null) {
        messages.push("Du måste fylla i telefon nr")
    }

    if (email.value.trim() === "" || email.value == null) { // kolla ordentligt
        messages.push("Du måste fylla i e-mail")
    }

    if (address.value.trim() === "" || address.value == null) {
        messages.push("Du måste fylla i adress")
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorEl.innerText = messages.join(", ");
    }

    document.localStorage.clear();
    
});

const product = JSON.parse(localStorage.getItem("product"));


let output =  `
<div class="col-lg-4 col-md-6 mb-4">
<div class="card h-100">
  <a href="#"><img class="card-img-top img-thumbnail" src="${product.image}" alt=""></a>
  <div class="card-body">
    <h4 class="card-title">
      <a href="#">${product.title}</a>
    </h4>
    <h5>${product.price}</h5>
    <p class="card-text">${product.description}</p>
  </div>
</div>
</div>
`;
  
let div = document.getElementById("product").innerHTML = output;

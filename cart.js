let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartList = document.getElementById("cartItems");

cart.forEach(function(item){

cartList.innerHTML += `<li>${item.name} - $${item.price}</li>`;

});
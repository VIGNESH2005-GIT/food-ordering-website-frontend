import"./style-COChlj8A.js";document.addEventListener("DOMContentLoaded",function(){const e=JSON.parse(localStorage.getItem("cart"))||[],t=document.getElementById("cartItems");if(console.log("Cart data retrieved:",e),!t){console.error("Could not find element with ID 'cartItems'");return}e.length===0?t.innerHTML='<p class="p-4 text-center text-gray-500">Your cart is empty!</p>':(t.innerHTML="",e.forEach((n,r)=>{t.innerHTML+=`
                <li class="flex justify-between items-center border-b p-4 bg-white shadow-sm mb-2 rounded">
                    <div>
                        <span class="font-semibold text-lg">${n.name}</span>
                        <p class="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <div class="text-right">
                        <span class="font-bold text-red-600">$${n.price}</span>
                    </div>
                </li>`}))});

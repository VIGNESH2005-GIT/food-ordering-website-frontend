import"./style-D3mVpugT.js";document.addEventListener("DOMContentLoaded",function(){n()});function n(){const e=JSON.parse(localStorage.getItem("cart"))||[],t=document.getElementById("cartItems");if(e.length===0){t.innerHTML='<p class="p-4 text-center text-gray-500">Your cart is empty!</p>';return}t.innerHTML="",e.forEach((r,o)=>{t.innerHTML+=`
            <li class="flex justify-between items-center border-b p-4 bg-white shadow-sm mb-2 rounded">
                <div>
                    <span class="font-semibold text-lg">${r.name}</span>
                    <p class="text-sm text-red-600 font-bold">$${r.price}</p>
                </div>
                <button onclick="removeItem(${o})" class="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-700 px-3 py-1 rounded transition-colors">
                    Remove
                </button>
            </li>`})}window.removeItem=function(e){let t=JSON.parse(localStorage.getItem("cart"))||[];t.splice(e,1),localStorage.setItem("cart",JSON.stringify(t)),n()};


document.getElementById("log").addEventListener("submit",function(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
   let password= document.getElementById("password").value;

    if(email==="admin@gmail.com"  && password==="admin@123"){
        alert("Login successfull..!");
        window.location.href="menu.html";
    } else {
        alert("Check the mail id and password and tray again..!");
    }
});


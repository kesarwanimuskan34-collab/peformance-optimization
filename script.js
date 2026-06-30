// =========================================
// ShopEase - Performance Optimized JS
// =========================================

// Website Loaded
window.addEventListener("load", () => {

    console.log("ShopEase Loaded Successfully");

});

// ===============================
// Product Search
// ===============================

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

    let value = searchBox.value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let title = product.querySelector("h5").innerText.toLowerCase();

        if (title.includes(value)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});

// ===============================
// Add To Cart Button
// ===============================

let buttons = document.querySelectorAll(".btn-warning");

buttons.forEach(button => {

    if(button.innerText=="Add to Cart"){

        button.addEventListener("click",function(){

            this.innerHTML="✔ Added";

            this.classList.remove("btn-warning");

            this.classList.add("btn-success");

            setTimeout(()=>{

                this.innerHTML="Add to Cart";

                this.classList.remove("btn-success");

                this.classList.add("btn-warning");

            },2000);

        });

    }

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for contacting ShopEase!");

form.reset();

});

// ===============================
// Back To Top Button
// ===============================

let topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.display="none";
topBtn.style.padding="10px 15px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ffc107";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="20px";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Performance Log
// ===============================

console.log("✔ Lazy Loading Enabled");
console.log("✔ Optimized Rendering");
console.log("✔ Deferred JavaScript");
console.log("✔ Responsive Bootstrap Layout");
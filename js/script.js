

$('.slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  prevArrow: '<button type="button" class="absolute top-[-80px] right-[80px]  z-10 w-[45px] h-[45px] cursor-pointer bg-primary7 text-primary5 rounded-full hover:bg-primary1 hover:duration-500 transition-all hover:text-white"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="absolute top-[-80px] right-[0px]  z-10 w-[45px] h-[45px] cursor-pointer bg-primary7 text-primary5 rounded-full hover:bg-primary1 hover:duration-500 transition-all hover:text-white"><i class="fa-solid fa-arrow-right"></i></button>'
});
$('.slider3').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  prevArrow: '<button type="button" class="absolute top-[-80px] right-[80px]  z-10 w-[45px] h-[45px] cursor-pointer bg-primary7 text-primary5 rounded-full hover:bg-primary1 hover:duration-500 transition-all hover:text-white"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="absolute top-[-80px] right-[0px]  z-10 w-[45px] h-[45px] cursor-pointer bg-primary7 text-primary5 rounded-full hover:bg-primary1 hover:duration-500 transition-all hover:text-white"><i class="fa-solid fa-arrow-right"></i></button>'
});
$('.slider1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
  
});
$('.slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
  
});
$('.slider4').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
  
});

let accountBtn=document.getElementById("accountBtn")
let loginPage=document.getElementById("loginPage")
let Homepage=document.getElementById("Homepage")
let Register=document.getElementById("Register")
let Registerbtn=document.getElementById("Registerbtn")
let loginbtn=document.getElementById("loginbtn")
let homePagebtn=document.getElementById("homePagebtn")
let shopeBtn=document.getElementById("shopeBtn")
let shopPart=document.getElementById("shopPart")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let fristPage=document.getElementById("fristPage")
let secondPage=document.getElementById("secondPage")
let thardePage=document.getElementById("thardePage")
let listType=document.getElementById("listType")
let gridType=document.getElementById("gridType")
let gridBtn=document.getElementById("gridBtn")
let listBtn=document.getElementById("listBtn")
let pageNumber=document.getElementById("pageNumber")
let pageNumbertwo=document.getElementById("pageNumbertwo")
let listTypetwo=document.getElementById("listTypetwo")
let listTypethree=document.getElementById("listTypethree")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")
let btn6=document.getElementById("btn6")



accountBtn.addEventListener("click",()=>{
Homepage.classList.add("hidden")
loginPage.classList.remove("hidden")
shopPart.classList.add("hidden")
produckDetalspart.classList.add("hidden")

})





Registerbtn.addEventListener("click",()=>{
Homepage.classList.add("hidden")
loginPage.classList.add("hidden")
Register.classList.remove("hidden")
produckDetalspart.classList.add("hidden")

})




loginbtn.addEventListener("click",()=>{
Homepage.classList.add("hidden")
loginPage.classList.remove("hidden")
Register.classList.add("hidden")


})






homePagebtn.addEventListener("click",()=>{
Homepage.classList.remove("hidden")
loginPage.classList.add("hidden")
Register.classList.add("hidden")
shopPart.classList.add("hidden")

})






shopeBtn.addEventListener("click",()=>{
Homepage.classList.add("hidden")
loginPage.classList.add("hidden")
Register.classList.add("hidden")
shopPart.classList.remove("hidden")
pageNumbertwo.classList.add("hidden")
 produckDetalspart.classList.add("hidden")


})





btn1.addEventListener("click",()=>{
fristPage.classList.remove("hidden")
secondPage.classList.add("hidden")
thardePage.classList.add("hidden")
})




btn2.addEventListener("click",()=>{
fristPage.classList.add("hidden")
thardePage.classList.add("hidden")
secondPage.classList.remove("hidden")
})








btn3.addEventListener("click",()=>{
fristPage.classList.add("hidden")
thardePage.classList.remove("hidden")
secondPage.classList.add("hidden")
})








gridBtn.addEventListener("click",()=>{
listType.classList.add("hidden")
gridType.classList.remove("hidden")
listTypetwo.classList.add("hidden")
listTypethree.classList.add("hidden")
secondPage.classList.add("hidden")
pageNumber.classList.remove("hidden")
pageNumbertwo.classList.add("hidden")

})







listBtn.addEventListener("click",()=>{
gridType.classList.add("hidden")
listType.classList.remove("hidden")
secondPage.classList.add("hidden")
thardePage.classList.add("hidden")
pageNumber.classList.add("hidden")
pageNumbertwo.classList.remove("hidden")

})

btn4.addEventListener("click",()=>{

listType.classList.remove("hidden")
listTypetwo.classList.add("hidden")
listTypethree.classList.add("hidden")

})
btn5.addEventListener("click",()=>{

listType.classList.add("hidden")
listTypetwo.classList.remove("hidden")
listTypethree.classList.add("hidden")

})
btn6.addEventListener("click",()=>{

listType.classList.add("hidden")
listTypetwo.classList.add("hidden")
listTypethree.classList.remove("hidden")

})





let plusButton = document.getElementById("plusButton");
let box = document.getElementById("box");
let minusButton = document.getElementById("minusButton"); 

let count = 0;

plusButton.addEventListener("click", () => {
  if (count < 100) {
    count++;
    box.innerText = count;
    
  }
});

minusButton.addEventListener("click", () => {
 
  if (count > 0) {
    count--;
    box.innerText = count;
    
  }
});


 
 let descriptionButton= document.getElementById("descriptionButton");
 let informationButton= document.getElementById("informationButton");
 let reviewsButton= document.getElementById("reviewsButton");
 let descriptionPart = document.getElementById("descriptionPart");
 let informationPart = document.getElementById("informationPart");
 let reviewsPart= document.getElementById("reviewsPart");
  
 descriptionButton.addEventListener("click",()=>{
descriptionPart.classList.remove("hidden")
informationPart.classList.add("hidden")
reviewsPart.classList.add("hidden")


 })

informationButton.addEventListener("click",()=>{
  descriptionPart.classList.add("hidden")
informationPart.classList.remove("hidden")
reviewsPart.classList.add("hidden")
 })

reviewsButton.addEventListener("click",()=>{
  descriptionPart.classList.add("hidden")
informationPart.classList.add("hidden")
reviewsPart.classList.remove("hidden")
 })

 let produckDetalspart=document.getElementById("produckDetalspart")
 let ditels=document.querySelectorAll(".ditels")



ditels.forEach((button,index) => {
    button.addEventListener("click", () => {
      produckDetalspart.classList.remove("hidden")
      shopPart.classList.add("hidden")
      
    });
});

function updateCartCount() {
   
    const itemCount = document.querySelectorAll('.cart-item-row').length;
    
   
    const countDisplay = document.getElementById('cart-count');
    if (countDisplay) {
        countDisplay.innerText = itemCount;
    }
}



let selectedProduct = null;

function changeDetails(name, newPrice, oldPrice, imgList) {
   
    document.getElementById('p-name').innerText = name;
    document.getElementById('price').innerHTML = `<span class="text-[18px] font-bold text-[#222222]">${newPrice} </span>${oldPrice}`;

    const allSlots = document.querySelectorAll('.img1');
    allSlots.forEach((slot, index) => {
        if(imgList[index]) {
            slot.src = imgList[index];
        } 
    });

    
    selectedProduct = {
        name: name,
        newPrice: newPrice,
        oldPrice: oldPrice,
        img: imgList[0] 
    };
}


function triggerAddToCart() {
    if (selectedProduct) {

        cart(
            selectedProduct.name, 
            selectedProduct.newPrice, 
            selectedProduct.oldPrice, 
            selectedProduct.img, 
            selectedProduct.newPrice 
        );
    } else {
        alert("Prothome ekti product select korun!");
    }
}

let mainCart=document.getElementById("mainCart")
let updateCart=document.getElementById("updateCart")
let Cartbutton=document.getElementById("Cartbutton")

updateCart.addEventListener("click",()=>{
  shopPart.classList.remove("hidden")
  mainCart.classList.add("hidden")
  
  
})
Cartbutton.addEventListener("click",()=>{
  shopPart.classList.add("hidden")
  Homepage.classList.add("hidden")
  mainCart.classList.remove("hidden")
  loginPage.classList.add("hidden")
  Register.classList.add("hidden")
  pageNumbertwo.classList.add("hidden")
  
})


function updateCartTotal() {
    let subtotal = 0;
    
    
    const allItemPrices = document.querySelectorAll('.cart-item-subtotal');

    allItemPrices.forEach(item => {
      
        let priceText = item.innerText.replace(/[$,]/g, ""); 
        let priceValue = parseFloat(priceText);
        
        if (!isNaN(priceValue)) {
            subtotal += priceValue;
        }
    });

   
    const subtotalDisplay = document.getElementById('number');
    const totalDisplay = document.getElementById('totalnumber');

    if(subtotalDisplay) subtotalDisplay.innerText = "$" + subtotal.toFixed(2);
    if(totalDisplay) totalDisplay.innerText = "$" + subtotal.toFixed(2);
}

function updateCartCount() {
  
    const itemCount = document.querySelectorAll('.cart-item-row').length;
     const countDisplay = document.getElementById('cart-count');
    if (countDisplay) {
        countDisplay.innerText = itemCount;
    }
}

function cart(name, newprice, oldprice, imgone, total) {
    let addtoCartpart = document.getElementById("addtoCartpart");
let newdiv = document.createElement("div");
    newdiv.className = `flex justify-around w-full h-[151px] items-center border-t-3 border-b-3 border-black/50 mb-2`;

    newdiv.innerHTML = `
        <div class="cursor-pointer" onclick="this.parentElement.remove()">
            <i class="fa-solid fa-xmark"></i>
        </div>

        <div class="w-[80px] h-[80px] bg-white">
            <img src="${imgone}" alt="${name}" class="w-full h-full object-cover">
        </div>

        <div>
            <p class="text-[20px] text-[#222222] font-semibold">${name}</p>
        </div>

        <div>
            <p class="text-[#74787C] text-[16px] font-medium relative">
                <span class=" cart-item-subtotal text-[18px] font-bold text-[#222222]">${newprice} </span>${oldprice}
            </p>
        </div>

        <div class="flex">
            <div class="w-[60px] h-[50px] border-2 border-black/50 flex justify-center items-center">
                <p id="boxone" class="text-[18px] text-[#222222] font-semibold">0</p>
            </div>
            <div>
                <div class="w-7 h-[25px] border-2 border-black/50 flex justify-center items-center"><button ><i class="fa-solid fa-angle-up"></i></button></div>
                <div class="w-7 h-[25px] border-2 border-black/50 flex justify-center items-center"><button ><i class="fa-solid fa-angle-down"></i></button></div>
            </div>
        </div>

        <div>
            <p class="  text-[18px] text-[#222222] font-semibold">${total}</p>
        </div>`;

    addtoCartpart.appendChild(newdiv);


updateCartTotal() 




    
}

// cart section====================================================





let boxone=document.getElementById("boxone")
let buttonCart=document.getElementById("buttonCart")
let buttonCartone=document.getElementById("buttonCartone")

buttonCart.addEventListener("click", () => {
  if (count < 100) {
    count++;
    boxone.innerText = count;
    
  }
});

buttonCartone.addEventListener("click", () => {
 
  if (count > 0) {
    count--;
    boxone.innerText = count;
    
  }
});




let addtoCartpart=document.getElementById("addtoCartpart")


function toggleAccordion() {
    const content = document.getElementById('accordion');
     const arrowone = document.getElementById('arrowone');

 const accordionone = document.getElementById('accordionoone');
    const arrowtwo = document.getElementById('arrowtwo');
    accordionone.classList.remove('max-h-[1000px]');
    arrowtwo.classList.remove('rotate-180');


 arrowone.classList.toggle('rotate-180');
    content.classList.toggle('max-h-[1000px]');
}








function Accordionone() {

    const accordionone = document.getElementById('accordionoone');
    const arrowtwo = document.getElementById('arrowtwo');  
const content = document.getElementById('accordion');
     const arrowone = document.getElementById('arrowone');

arrowone.classList.remove('rotate-180');
    content.classList.remove('max-h-[1000px]');

    
    accordionone.classList.toggle('max-h-[1000px]');
    arrowtwo.classList.toggle('rotate-180');
    
}
function Accordiontwo() {

    const accordiontwo = document.getElementById('accordiontwo');
    const arrowthree = document.getElementById('arrowthree');

     const accordionone = document.getElementById('accordionoone');
    const arrowtwo = document.getElementById('arrowtwo');  
 accordionone.classList.remove('max-h-[1000px]');
    arrowtwo.classList.remove('rotate-180');
    
    accordiontwo.classList.toggle('max-h-[1000px]');
    arrowthree.classList.toggle('rotate-180');
}
function Accordionthree() {

    const accordionthree = document.getElementById('accordionthree');
    const arrowfour = document.getElementById('arrowfour');

    const accordiontwo = document.getElementById('accordiontwo');
    const arrowthree = document.getElementById('arrowthree');
accordiontwo.classList.remove('max-h-[1000px]');
    arrowthree.classList.remove('rotate-180');
    
    accordionthree.classList.toggle('max-h-[1000px]');
    arrowfour.classList.toggle('rotate-180');
}
function Accordionfour() {

    const accordionfour = document.getElementById('accordionfour');
    const arrowfive = document.getElementById('arrowfive');

    const accordionthree = document.getElementById('accordionthree');
    const arrowfour = document.getElementById('arrowfour');
accordionthree.classList.remove('max-h-[1000px]');
    arrowfour.classList.remove('rotate-180');
    
    accordionfour.classList.toggle('max-h-[1000px]');
    arrowfive.classList.toggle('rotate-180');
}
function Accordionfive() {

    const accordionfive = document.getElementById('accordionfive');
    const arrowsix = document.getElementById('arrowsix');
   const accordionfour = document.getElementById('accordionfour');
    const arrowfive = document.getElementById('arrowfive');
accordionfour.classList.remove('max-h-[1000px]');
    arrowfive.classList.remove('rotate-180');
    
    accordionfive.classList.toggle('max-h-[1000px]');
    arrowsix.classList.toggle('rotate-180');
   
}
function Accordionsix() {

    const accordionsix = document.getElementById('accordionsix');
    const arrowseven = document.getElementById('arrowseven');
    const accordionfive = document.getElementById('accordionfive');
    const arrowsix = document.getElementById('arrowsix');
accordionfive.classList.remove('max-h-[1000px]');
    arrowsix.classList.remove('rotate-180');
    
    accordionsix.classList.toggle('max-h-[1000px]');
    arrowseven.classList.toggle('rotate-180');
   
}








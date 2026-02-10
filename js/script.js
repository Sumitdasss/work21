

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
secondPage.classList.add("hidden")
pageNumber.classList.remove("hidden")
pageNumbertwo.classList.add("hidden")

})







listBtn.addEventListener("click",()=>{
gridType.classList.add("hidden")
listType.classList.remove("hidden")
secondPage.classList.add("hidden")
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



let total = 0;
const cartItemsList = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

      
        const li = document.createElement('li');
        li.innerText = `${name} - $${price}`;
        cartItemsList.appendChild(li);

 
        total += price;
        totalPriceDisplay.innerText = total.toFixed(2);
        
       
    });
});


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



ditels.forEach((button, index) => {
    button.addEventListener("click", () => {
      produckDetalspart.classList.remove("hidden")
      shopPart.classList.add("hidden")
      
    });
});
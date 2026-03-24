const colors=document.querySelectorAll(".color")
const product=document.getElementById("product")

colors.forEach(color=>{

color.addEventListener("click",()=>{

let img=color.getAttribute("data-img")

product.style.opacity="0"

setTimeout(()=>{

product.src=img
product.style.opacity="1"

},200)

})

})

const slider = document.getElementById("slider")

function slideLeft(){

slider.scrollLeft -= 250

}

function slideRight(){

slider.scrollLeft += 250

}




const card=document.getElementById("card")

 card.addEventListener("mousemove",(e)=>{

 let x=e.offsetX
 let y=e.offsetY

 let centerX=card.offsetWidth/2
 let centerY=card.offsetHeight/2

 let rotateX=-(y-centerY)/20
 let rotateY=(x-centerX)/20

 card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)"

})

function sendEmail(){

window.open("mailto:productx@email.com")

}

function callUs(){

window.open("tel:+1234567890")

}

const mainProduct = document.getElementById("mainProduct")

document.addEventListener("mousemove",(e)=>{

let x = (window.innerWidth/2 - e.pageX)/40
let y = (window.innerHeight/2 - e.pageY)/40

mainProduct.style.transform = `translate(${x}px, ${y}px)`

})

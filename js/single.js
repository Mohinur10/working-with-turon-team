let url = location.search
let id = new URLSearchParams(url).get("card-id")
console.log(id);
import {cars} from "./caruz.js"
let img = document.querySelector(".single_img")
let name = document.querySelector(".single_tit")
let model = document.querySelector(".single_modeli")
let price = document.querySelector(".single_price")
let year = document.querySelector(".single_year")
let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon_open")
let body  = document.querySelector(".body")
let savedMode = localStorage.getItem("mode")
const singleId = cars.find(item=>{
    
return item.id == id 
    
})


console.log(singleId);
img.src = `${singleId.rasmi}`
name.innerHTML = `${singleId.nomi}`
model.innerHTML = `${singleId.modeli}`
price.innerHTML = `${singleId.narxi}`

if(savedMode){

body.className  = "body_moon"
}
else{

body.className  = "body" 
}




        
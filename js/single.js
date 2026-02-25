let url = location.search;
let id = new URLSearchParams(url).get("card-id");

const fruits = [ /* ... massiv ... */ ];

const singleFruit = fruits.find(item => item.id == id);

if (singleFruit) {
    document.querySelector(".single_img").src = singleFruit.rasmi;
    document.querySelector(".single_tit").innerHTML = singleFruit.nomi;
    document.querySelector("#categoryLabel").innerHTML = singleFruit.modeli; // ID bo'yicha
    document.querySelector(".single_price").innerHTML = singleFruit.narxi;
} else {
    document.body.innerHTML = "<h1>Meva topilmadi! <a href='index.html'>Orqaga</a></h1>";
}
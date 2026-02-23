
let url = location.search;
let id = new URLSearchParams(url).get("card-id");
const fruits = [
    { id: 1, nomi: "Banan", narxi: "22 000", rasmi: "https://voggipepedia.nl/_next/image?url=https%3A%2F%2Fvoggipepedia-cms.production.taks.zooma.cloud%2Fassets%2FUpLoads%2FProducts%2FBanaan-fruit-veggipedia__FitMaxWzYwMCwyMDBd.png&w=3840&q=75", modeli: "Ekvador Premium" },
    { id: 2, nomi: "Qizil Olma", narxi: "12 000", rasmi: "https://freepngimg.com/thumb/apple/1-apple-png-image-with-transparent-background.png", modeli: "Gala" },
    { id: 3, nomi: "Anor", narxi: "25 000", rasmi: "https://freepngimg.com/thumb/pomegranate/1-pomegranate-png-image.png", modeli: "Surxon Shirini" },
    { id: 4, nomi: "Limon", narxi: "10 000", rasmi: "https://freepngimg.com/thumb/lemon/1-lemon-png-image.png", modeli: "Toshkent Hosili" },
    { id: 5, nomi: "Uzum", narxi: "18 000", rasmi: "https://freepngimg.com/thumb/grapes/1-grapes-png-image.png", modeli: "Qora kishmish" },
    { id: 6, nomi: "Mandarin", narxi: "28 000", rasmi: "https://freepngimg.com/thumb/mandarin/1-mandarin-png-image.png", modeli: "Turkiya" },
    { id: 7, nomi: "Kivi", narxi: "32 000", rasmi: "https://freepngimg.com/thumb/kiwi/1-kiwi-png-image.png", modeli: "Zelandiya" },
    { id: 8, nomi: "Nok", narxi: "20 000", rasmi: "https://freepngimg.com/thumb/pear/1-pear-png-image.png", modeli: "Konferens" },
    { id: 9, nomi: "Qovun", narxi: "35 000", rasmi: "https://freepngimg.com/thumb/melon/1-melon-png-image.png", modeli: "Handalak" },
    { id: 10, nomi: "Tarvuz", narxi: "30 000", rasmi: "https://freepngimg.com/thumb/watermelon/1-watermelon-png-image.png", modeli: "Cho'l tarvuzi" },
    { id: 11, nomi: "Qulupnay", narxi: "45 000", rasmi: "https://freepngimg.com/thumb/strawberry/1-strawberry-png-image.png", modeli: "Issiqxona" },
    { id: 12, nomi: "Gilos", narxi: "50 000", rasmi: "https://freepngimg.com/thumb/cherry/1-cherry-png-image.png", modeli: "Namangan" }
];

const singleFruit = fruits.find(item => item.id == id);

if (singleFruit) {
    document.querySelector(".single_img").src = singleFruit.rasmi;
    document.querySelector(".single_tit").innerHTML = singleFruit.nomi;
    document.querySelector(".single_modeli").innerHTML = singleFruit.modeli;
    document.querySelector(".single_price").innerHTML = `${singleFruit.narxi} UZS`;
} else {
    // Agar xato ID kelsa yoki meva topilmasa
    document.body.innerHTML = "<h1>Meva topilmadi! <a href='index.html'>Orqaga qaytish</a></h1>";
}

let body = document.querySelector("body");
let savedMode = localStorage.getItem("mode");

if (savedMode === "body_moon") {
    body.classList.add("body_moon");
}
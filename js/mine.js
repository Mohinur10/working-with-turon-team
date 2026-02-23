
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "register.html";
}

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

const productGrid = document.querySelector("#productGrid");

function displayFruits(items) {
    productGrid.innerHTML = "";
    items.forEach(fruit => {
        const card = document.createElement("div");
        card.className = "bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer border border-gray-100";
        
        card.onclick = () => {
            window.location.href = `single.html?card-id=${fruit.id}`;
        };

        card.innerHTML = `
            <div class="h-48 flex items-center justify-center mb-4">
                <img src="${fruit.rasmi}" alt="${fruit.nomi}" class="max-h-full object-contain">
            </div>
            <h3 class="text-xl font-extrabold text-gray-800">${fruit.nomi}</h3>
            <p class="text-gray-400 text-sm mb-4">${fruit.modeli}</p>
            <div class="flex justify-between items-center">
                <span class="text-green-600 font-bold text-lg">${fruit.narxi} UZS</span>
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Sotuvda bor</span>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

const searchInput = document.querySelector("#searchInput");
if(searchInput) {
    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = fruits.filter(f => f.nomi.toLowerCase().includes(term));
        displayFruits(filtered);
    });
}

displayFruits(fruits);

const footer = document.createElement("footer");
footer.className = "mt-20 py-10 border-t border-gray-200 text-center";
footer.innerHTML = `
    <p class="text-gray-400 text-sm tracking-widest uppercase">Loyiha mualliflari</p>
    <h2 class="text-2xl font-black text-green-500 mt-2 italic">frontend02 O'quvchilari</h2>
`;
document.body.appendChild(footer);
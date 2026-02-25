const nameInp = document.querySelector(".inpName");
const passInp = document.querySelector("#inpPass");
const emailInp = document.querySelector(".inpEmail");
const btn = document.querySelector(".btnRegister");
const toggleBtn = document.querySelector("#togglePass");
const eyeIcon = document.querySelector("#eyeIcon");

toggleBtn.addEventListener("click", () => {
    const isPassword = passInp.type === "password";
    passInp.type = isPassword ? "text" : "password";
    eyeIcon.textContent = isPassword ? "✍" : "👁️";
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const nameValue = nameInp.value.trim();
    const passValue = passInp.value.trim();
    const emailValue = emailInp.value.trim();

    if (!nameValue || !emailValue || !passValue) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    if (nameValue === "Muhammadiyor" && passValue === "20021202") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "admin");
        alert("Xush kelibsiz, Admin!");
        window.location.href = "admin.html";
        return; 
    }

    const newUser = {
        firstName: nameValue,
        email: emailValue,
        password: passValue
    };

    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "user");
        alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
        window.location.href = "index.html"; 
    })
    .catch(err => {
        console.error("Xatolik:", err);
        alert("Server bilan bog'lanishda xatolik yuz berdi.");
    });
});
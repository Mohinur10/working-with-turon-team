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
    if (!nameInp.value || !emailInp.value || !passInp.value) {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
        return;
    }

    const newUser = {
        firstName: nameInp.value,
        email: emailInp.value,
        password: passInp.value
    };

    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        localStorage.setItem("isLoggedIn", "true");
        
        alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");

        window.location.href = "index.html"; 
    })
    .catch(err => {
        console.error("Xatolik:", err);
        alert("Server bilan bog'lanishda xatolik yuz berdi.");
    });
});
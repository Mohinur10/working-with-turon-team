const nameInp = document.querySelector(".inpName");
const passInp = document.querySelector("#inpPass");
const emailInp = document.querySelector(".inpEmail");
const btn = document.querySelector(".btnRegister");
const toggleBtn = document.querySelector("#togglePass");
const eyeIcon = document.querySelector("#eyeIcon");


// input password with eyes
toggleBtn.addEventListener("click", () => {
    const isPassword = passInp.type === "password";
    passInp.type = isPassword ? "text" : "password";
    eyeIcon.textContent = isPassword ? "✍" : "👁️";
});


btn.addEventListener("click", (e) => {
    e.preventDefault()

    const newUser = {
        firstName: nameInp.value,
        email: emailInp.value,
        password: passInp.value
    };

    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 
            'Content-Type': 
            'application/json' 
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        alert("Ro'yxatdan o'tdingiz!")
    })
    .catch(err => console.error("Xatolik:", err))
})


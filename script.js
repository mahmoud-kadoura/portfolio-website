<<<<<<< HEAD
const btn = document.getElementById("darkBtn");

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        btn.innerText = "☀️";
    } else {
        localStorage.setItem("mode", "light");
        btn.innerText = "🌙";
    }
=======
const btn = document.getElementById("darkBtn");

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        btn.innerText = "☀️";
    } else {
        localStorage.setItem("mode", "light");
        btn.innerText = "🌙";
    }
>>>>>>> 1daea83307270663d4df4a229b8f3e9633fa1b51
});
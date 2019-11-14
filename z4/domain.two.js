const inputTwo = document.getElementById("inputTwo");
const formTwo = document.getElementById("formTwo");

formTwo.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("value", inputTwo.value);
    console.log(`запись в localStorage: ${localStorage.getItem("value")}`);
    inputTwo.value = "";
});

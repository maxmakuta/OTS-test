const inputDomainOne = document.getElementById("inputDomainOne");
const formDomainOne = document.getElementById("formDomainOne");
const deleteItem = document.getElementById("deleteItem");
const getItem = document.getElementById("getItem");


formDomainOne.addEventListener("submit", (e)=> {
    e.preventDefault();
    localStorage.setItem("value", inputDomainOne.value);
    console.log(`запись в localStorage: ${localStorage.getItem("value")}`);
    inputDomainOne.value = "";

});

deleteItem.addEventListener("click", () => {
    localStorage.removeItem("value");
    console.log(`DELETE`);
});

getItem.addEventListener("click", () => {
    localStorage.getItem("value");
    console.log(`Просмотр localStorage: ${localStorage.getItem("value")}`);


});

const count = document.querySelector(".count");
const btnSub = document.querySelector(".btn-subtract");
const btnReset = document.querySelector(".btn-reset");
const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", () => {
    count.textContent++;
});

btnSub.addEventListener("click", () => {
    count.textContent--;
});

btnReset.addEventListener("click", () => {
    count.textContent = 0;
});
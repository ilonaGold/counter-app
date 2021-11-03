const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add")) {
        count.textContent++;
        setColor();
    }
    if (e.target.classList.contains("btn-subtract")) {
        count.textContent--;
        setColor();
    }
    if (e.target.classList.contains("btn-reset")) {
        count.textContent = 0;
        setColor();
    }
});

function setColor() {
    if (count.textContent > 0 ) {
        count.style.color = "#fdc13d";
    } else if (count.textContent < 0) {
        count.style.color = "#df0900";
    } else {
        count.style.color = "#fff";
    }
}
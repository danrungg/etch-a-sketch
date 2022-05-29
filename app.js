// create 256 divs
const container = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    container.innerHTML += `<div class="box box-${i}"></div>`;
}

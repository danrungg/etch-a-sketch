// create 256 divs and format with css
const container = document.querySelector(".grid-container");

for (let i = 0; i < 256; i++) {
    container.innerHTML += `<div class="box box-${i}"></div>`;
}

// click and hold to change color
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
const boxes = document.querySelectorAll(".box");

let isDrawing = false;

boxes.forEach((box) => {
    box.addEventListener("mousedown", (e) => {
        isDrawing = true;
        console.log(isDrawing);
    });

    box.addEventListener("mousemove", (e) => {
        if (isDrawing === true) {
            console.log(box);
        }
    });

    window.addEventListener("mouseup", (e) => {
        if (isDrawing === true) {
            isDrawing = false;
        }
    });
});

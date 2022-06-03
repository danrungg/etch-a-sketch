const container = document.querySelector(".grid-container");
const slider = document.getElementById("sizeSlider");
const output = document.getElementById("output");

function changeSlider() {
    slider.addEventListener(
        "input",
        function () {
            container.innerHTML = "";
            console.log(slider.value);
            changeSize(slider.value);
            drawing();
        },
        false
    );
}
changeSlider();

// create 256 divs and format with css
function generateGrid(numberOfSquares = 16) {
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        container.innerHTML += `<div class="box box-${i}"></div>`;
    }
}

// change grid to number
function changeSize(numberOfSquares) {
    container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
    generateGrid(numberOfSquares);
}

// input number
// changeSize(16);

////////////////////////////////////////////////////////////////
// draw color, only black
function drawColor(box) {
    box.style.backgroundColor = "black"; // #333333
}

// click and hold to change color
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

function drawing() {
    const boxes = document.querySelectorAll(".box");

    let isDrawing = false;

    boxes.forEach((box) => {
        box.addEventListener("mousedown", (e) => {
            isDrawing = true;
            drawColor(box);
        });

        box.addEventListener("mousemove", (e) => {
            if (isDrawing === true) {
                drawColor(box);
            }
        });

        window.addEventListener("mouseup", (e) => {
            if (isDrawing === true) {
                isDrawing = false;
            }
        });
    });
}

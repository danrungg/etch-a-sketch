const container = document.querySelector(".grid-container");
const slider = document.getElementById("sizeSlider");
const output = document.getElementById("output");

function changeSlider() {
    slider.addEventListener(
        "change",
        function () {
            container.innerHTML = "";
            changeSize(slider.value);
            drawing();
        },
        false
    );
}
changeSlider();

// create 256 divs and format with css
function generateGrid(numberOfSquares) {
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        // console.log(i);
        // container.innerHTML += `<div class="box box-${i}"></div>`;
        var newDiv = document.createElement("div");
        newDiv.classList.add("box");
        container.appendChild(newDiv);
    }
}

// change grid to number
function changeSize(numberOfSquares) {
    container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
    generateGrid(numberOfSquares);
}

// draw color, only black at the moment
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

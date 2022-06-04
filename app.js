const DEFAULT_COLOR = "#333333";
const DEFAULT_NUMBER_OF_SQUARES = 16;

const container = document.querySelector(".grid-container");
const slider = document.getElementById("sizeSlider");
const output = document.getElementById("output");
const colorPicker = document.querySelector(".color-picker");
const eraserButton = document.querySelector(".eraser");
const drawButton = document.querySelector(".drawer");
const rainbowButton = document.querySelector(".rainbow");

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
        var newDiv = document.createElement("div");
        newDiv.classList.add("box", `box-${i}`);
        container.appendChild(newDiv);
    }
}

function defaultGrid() {
    generateGrid(DEFAULT_NUMBER_OF_SQUARES);
    // drawing();
}

defaultGrid();

// change grid to number
function changeSize(numberOfSquares) {
    container.style.gridTemplateColumns = `repeat(${numberOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfSquares}, 1fr)`;
    generateGrid(numberOfSquares);
}

let currentColor = DEFAULT_COLOR;

// change color
function changeColor() {
    currentColor = colorPicker.value;
}

colorPicker.addEventListener("input", changeColor); // change

// draw color
function drawColor(box) {
    box.style.backgroundColor = currentColor; // #333333
}

// erase color
function eraseColor(box) {
    box.style.backgroundColor = ""; // empty
}

// rainbow color
function rainbowColor(box) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

// INITIAL DRAWING FUNCTION
let mode = "DRAWING";
drawing();

// BUTTON SWITCHER

eraserButton.addEventListener("click", function () {
    mode = "ERASING";
    erasing();
});

rainbowButton.addEventListener("click", function () {
    mode = "RAINBOWMODE";
    rainbowMode();
});

drawButton.addEventListener("click", function () {
    mode = "DRAWING";
    drawing();
});

///////////////////////////////////////////////////////////////////

// DRAWING FUNCTION
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
function drawing() {
    if (mode === "DRAWING") {
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
}

// ERASING FUNCTION
function erasing() {
    if (mode === "ERASING") {
        // CODE
        const boxes = document.querySelectorAll(".box");
        let isErasing = false;
        boxes.forEach((box) => {
            box.addEventListener("mousedown", (e) => {
                isErasing = true;
                eraseColor(box);
            });

            box.addEventListener("mousemove", (e) => {
                if (isErasing === true) {
                    eraseColor(box);
                }
            });

            window.addEventListener("mouseup", (e) => {
                if (isErasing === true) {
                    isErasing = false;
                }
            });
        });
    }
}

// RAINBOWMODE FUNCTION
function rainbowMode() {
    if (mode === "RAINBOWMODE") {
        const boxes = document.querySelectorAll(".box");
        let isDrawing = false;
        boxes.forEach((box) => {
            box.addEventListener("mousedown", (e) => {
                isDrawing = true;
                rainbowColor(box);
            });

            box.addEventListener("mousemove", (e) => {
                if (isDrawing === true) {
                    rainbowColor(box);
                }
            });

            window.addEventListener("mouseup", (e) => {
                if (isDrawing === true) {
                    isDrawing = false;
                }
            });
        });
    }
}

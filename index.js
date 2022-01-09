const rows = 6;
const maxGuesses = 5;
let currentLetter = 0;
let currentRow = 0;

function createRowBody(id) {
    const div = document.createElement("div");
    div.id = `letter-${id}`;
    div.innerHTML = " ";
    div.className = "letter";
    return div;
}

function createRow(id) {
    const wordLength = 5;
    const div = document.createElement("div");
    div.id = `container-${id}`;

    for (let letter = 0; letter < wordLength; letter++) {
        div.appendChild(createRowBody(letter));
    }
    div.className = "border pad row";

    return div;
}

function initApp() {
    for (let row = 0; row < rows; row++) {
        const rowDiv = createRow(row);

        document.body.appendChild(rowDiv);
    }
}

document.addEventListener("DOMContentLoaded", initApp, false);
const app = document.getElementById("app");
document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(currentLetter);
    if (currentLetter >= 5) {
        return;
    }

    const letter = document.querySelector(
        `#container-${currentRow} > #letter-${currentLetter}`
    );

    letter.textContent += `${e.key.toUpperCase()}`;
    currentLetter += 1;
}

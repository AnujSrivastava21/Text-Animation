const container = document.querySelector('#main-container');
const careers = ["Java Developer", "Backend Developer", "Database Engineer"];
let carrerIndex = 0;
let characterIndex = 0;

function updateText() {
    characterIndex++;
    container.innerHTML = `
    <h1>I am a ${careers[carrerIndex].slice(0, characterIndex)}</h1>
    `;
    if (characterIndex === careers[carrerIndex].length) {
        carrerIndex++;
        characterIndex = 0; // Reset character index for the next career
        if (carrerIndex === careers.length) {
            carrerIndex = 0; // Reset career index to loop through the careers array
        }
    }

    setTimeout(updateText, 200); // Adjusted timeout for smoother animation
}

updateText();

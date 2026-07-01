// ==============================
// ELEMENT
// ==============================

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const video = document.getElementById("bgVideo");
const card = document.getElementById("card");

// ==============================
// INTRO TEXT
// ==============================

const texts = [
    "For you.",
    "There's something I want you to see.",
    "Tap anywhere."
];

let index = 0;

function nextText() {

    introText.classList.add("fade");

    setTimeout(() => {

        index++;

        if (index < texts.length) {

            introText.textContent = texts[index];
            introText.classList.remove("fade");

            // auto lanjut sampai sebelum terakhir
            if (index < texts.length - 1) {
                setTimeout(nextText, 1000);
            }
        }

    }, 800);
}

// start intro text
setTimeout(nextText, 1000);

// ==============================
// START EXPERIENCE
// ==============================

let started = false;

document.addEventListener("click", async () => {

    if (started) return;
    if (index !== texts.length - 1) return;

    started = true;

    // ❌ JANGAN remove (biar layout gak reflow aneh)
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    intro.style.transition = "opacity 1s ease";

    // video & card show
    video.classList.add("show");
    card.classList.add("show");

    try {
        video.muted = false;
        await video.play();
    } catch (e) {
        video.muted = true;
        await video.play();
    }

});

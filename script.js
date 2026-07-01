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

        if(index < texts.length){

            introText.textContent = texts[index];
            introText.classList.remove("fade");

            // Kalau masih bukan tulisan terakhir,
            // lanjut otomatis 1 detik lagi.
            if(index < texts.length - 1){

                setTimeout(nextText,1000);

            }

        }

    },800);

}

// Mulai setelah 1 detik
setTimeout(nextText,1000);

// ==============================
// START EXPERIENCE
// ==============================

let started = false;

document.addEventListener("click", async () => {

    if (started) return;
    if (index !== texts.length - 1) return;

    started = true;

    intro.style.pointerEvents = "none";
    intro.style.transition = "opacity 1s";
    intro.style.opacity = "0";

    video.classList.add("show");

    try {
        video.muted = false;
        await video.play();
    } catch (e) {
        video.muted = true;
        await video.play();
    }

    card.classList.add("show");

setTimeout(() => {
    intro.remove();
}, 1200);

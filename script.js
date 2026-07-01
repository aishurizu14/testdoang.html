
// ==============================
// ELEMENT
// ==============================

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");
const video = document.getElementById("bgVideo");
const card = document.getElementById("card");

// ==============================
// INTRO TEXT FLOW
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

        if (index < texts.length - 1) {  
            setTimeout(nextText, 1000);  
        }  
    }  

}, 800);

}

// start intro
setTimeout(nextText, 1000);

// ==============================
// START EXPERIENCE
// ==============================

let started = false;

document.addEventListener("click", async () => {

if (started) return;  

// harus sudah di text terakhir  
if (index !== texts.length - 1) return;  

started = true;  

// ==========================  
// HIDE INTRO (SAFE MODE)  
// ==========================  
intro.style.transition = "opacity 1s ease";  
intro.style.opacity = "0";  
intro.style.pointerEvents = "none";  

// ==========================  
// SHOW VIDEO + CARD  
// ==========================  
video.classList.add("show");  
card.style.cssText = "opacity:1; transform:translate(-50%,0); z-index:999; position:fixed;";

// ==========================  
// PLAY VIDEO (fallback safe)  
// ==========================  
try {  
    video.muted = false;  
    await video.play();  
} catch (e) {  
    video.muted = true;  
    await video.play();  
}  

// optional cleanup (TIDAK merusak layout)  
setTimeout(() => {  
    intro.style.display = "none";  
}, 1200);

});

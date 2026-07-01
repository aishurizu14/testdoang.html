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

document.addEventListener("click", async ()=>{

    // Hanya aktif kalau sudah sampai "Tap anywhere."
    if(index !== texts.length-1) return;

    intro.style.pointerEvents = "none";
    intro.style.transition = "opacity 1s";
    intro.style.opacity = "0";

    // Video muncul
    video.classList.add("show");

    try{

        video.muted = false;

        await video.play();

    }catch(e){

        // Kalau browser masih menolak suara,
        // minimal videonya tetap jalan.
        video.muted = true;
        video.play();

    }

    // Hapus intro
    setTimeout(()=>{

        intro.remove();

    },1000);

    // Card muncul
    setTimeout(()=>{

        card.classList.add("show");

    },900);

},{once:true});

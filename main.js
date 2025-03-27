const text = "Full Stack MERN Developer";
let index = 0;
let isDeleting = false;
const speed = 100; 
const delayAfterTyping = 1000; 

function typeWriter() {
    const h1 = document.getElementById("typing");

    if (!isDeleting) {
        h1.innerHTML = text.substring(0, index);
        index++;

        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriter, delayAfterTyping); 
            return;
        }
    } else {
        h1.innerHTML = text.substring(0, index);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeWriter, speed);
}

window.onload = function () {
    typeWriter();
};
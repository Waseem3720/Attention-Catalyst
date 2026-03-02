
const introText = document.getElementById("introText");
const introMessages = [
    "Detecting Instructor Profile...",
    "Interests Found: Experimental Web, React, Controlled Chaos.",
    "Are YOU ready to be validated?"
];

let messageIndex = 0;

function showMessage() {
    if (messageIndex < introMessages.length) {
        introText.innerText = introMessages[messageIndex];
        messageIndex++;
        setTimeout(showMessage, 1200); 
    } else {
        document.getElementById("intro").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
        randomizeFloatingWords();
    }
}

setTimeout(showMessage, 500);

// Random floating words positions
function randomizeFloatingWords() {
    const words = document.querySelectorAll(".floating-words span");
    words.forEach(word => {
        word.style.left = Math.random() * 90 + "vw";
        word.style.top = Math.random() * 90 + "vh";
    });
}


document.getElementById("validationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const experiment = document.getElementById("experiment").value;
    const confirm = document.getElementById("confirm").checked;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("expError").innerText = "";
    document.getElementById("confirmError").innerText = "";


    if (!/^[A-Za-z\s]{3,}$/.test(name)) {
        document.getElementById("nameError").innerText = "Name must be at least 3 letters, only alphabets.";
        valid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        valid = false;
    }

    
    if (experiment === "") {
        document.getElementById("expError").innerText = "Select an experiment.";
        valid = false;
    }

    
    if (!confirm) {
        document.getElementById("confirmError").innerText = "Confirmation required.";
        valid = false;
    }

    const btn = document.getElementById("submitBtn");

    if (!valid) {
        btn.classList.add("shake");
        setTimeout(() => btn.classList.remove("shake"), 300);
        return;
    }

    
    document.getElementById("validationForm").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");
});
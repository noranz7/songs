const whyButton = document.getElementById("whyButton");
const reason = document.getElementById("reason");
const nextButton = document.getElementById("nextButton");

whyButton.addEventListener("click", function () {

    if (reason.style.display === "block") {

        reason.style.display = "none";
        whyButton.textContent = "♡ Why this song?";

    } else {

        reason.style.display = "block";
        whyButton.textContent = "♡ Hide reason";

    }

});

nextButton.addEventListener("click", function () {

    let step = Number(localStorage.getItem("step"));

    if (step === 9) {

        localStorage.setItem("step", "0");
        window.location.href = "ending.html";
        return;

    }

    step++;

    localStorage.setItem("step", step);

    window.location.href = "index.html";

});

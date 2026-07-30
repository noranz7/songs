const steps = [
    {
        answer: "2",
        hint: "1 + 1 = ?",
        page: "song1.html"
    },
    {
        answer: "blue",
        hint: "Color of the sky",
        page: "song2.html"
    },
    {
        answer: "cat",
        hint: "Says meow",
        page: "song3.html"
    },
    {
        answer: "heart",
        hint: "❤️",
        page: "song4.html"
    },
    {
        answer: "moon",
        hint: "Comes out at night",
        page: "song5.html"
    },
    {
        answer: "flower",
        hint: "Smells nice",
        page: "song6.html"
    },
    {
        answer: "music",
        hint: "You can hear it",
        page: "song7.html"
    },
    {
        answer: "smile",
        hint: "😊",
        page: "song8.html"
    },
    {
        answer: "home",
        hint: "Where you rest",
        page: "song9.html"
    },
    {
        answer: "gift",
        hint: "What is this website?",
        page: "song10.html"
    }
];

if (localStorage.getItem("step") === null) {
    localStorage.setItem("step", "0");
}

const hint = document.getElementById("hint");
const input = document.getElementById("answer");
const button = document.getElementById("searchButton");
const message = document.getElementById("message");

let step = Number(localStorage.getItem("step"));

if (step >= steps.length) {
    step = 0;
    localStorage.setItem("step", "0");
}

hint.textContent = steps[step].hint;

function searchSong() {
    const value = input.value.trim().toLowerCase();

    if (value === steps[step].answer) {
        message.style.color = "#49b675";
        message.textContent = "Correct! Loading...";

        setTimeout(() => {
            window.location.href = steps[step].page;
        }, 800);
    } else {
        message.style.color = "#ff4d6d";
        message.textContent = "Wrong answer.";
    }
}

button.addEventListener("click", searchSong);

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        searchSong();
    }
});

input.addEventListener("input", function() {
    message.textContent = "";
});

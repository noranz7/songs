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

let step = Number(localStorage.getItem("step"));

if (isNaN(step) || step < 0 || step >= steps.length) {
    step = 0;
    localStorage.setItem("step", "0");
}

const hint = document.getElementById("hint");
const input = document.getElementById("answer");
const error = document.getElementById("error");
const button = document.getElementById("searchButton");

hint.textContent = steps[step].hint;

button.addEventListener("click", function () {

    const value = input.value.trim().toLowerCase();

    if (value === steps[step].answer.toLowerCase()) {

        error.textContent = "";
        window.location.href = steps[step].page;

    } else {

        error.textContent = "Wrong answer, try again 🤍";

    }

});

const question1 = document.querySelector(".question-1");
const question2 = document.querySelector(".question-2");
const question3 = document.querySelector(".question-3");
const question4 = document.querySelector(".question-4");
const question5 = document.querySelector(".question-5");


// For Next
document.querySelector("#q1-next").addEventListener("click", () => {
    question1.style.display = "none";
    question2.style.display = "block";
});

document.querySelector("#q2-next").addEventListener("click", () => {
    question2.style.display = "none";
    question3.style.display = "block";
});

document.querySelector("#q3-next").addEventListener("click", () => {
    question3.style.display = "none";
    question4.style.display = "block";
});

document.querySelector("#q4-next").addEventListener("click", () => {
    question4.style.display = "none";
    question5.style.display = "block";
});

document.querySelector("#q5-next").addEventListener("click", () => {
    question5.style.display = "none";
});

// For Previous
document.querySelector("#q2-pre").addEventListener("click", () => {
    question2.style.display = "none";
    question1.style.display = "block";
});

document.querySelector("#q3-pre").addEventListener("click", () => {
    question3.style.display = "none";
    question2.style.display = "block";
});

document.querySelector("#q4-pre").addEventListener("click", () => {
    question4.style.display = "none";
    question3.style.display = "block";
});

document.querySelector("#q5-pre").addEventListener("click", () => {
    question5.style.display = "none";
    question4.style.display = "block";
});
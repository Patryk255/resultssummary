"use strict";

const data = [
  {
    category: "Reaction",
    score: 89,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 95,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];
console.log(...data);
let avg = 0;
const components = document.querySelectorAll(".dataComponentGeneral");
const avgScore = document.querySelector(".bigText");

for (let i = 0; i < components.length; i++) {
  components[i].innerHTML = `<div class=" dataComponentGeneral dataComponent1">
    <div class="title"><img src="${data[i].icon}" alt="">${data[i].category}</div>
    <p>${data[i].score} </p> <div class="rest">/ 100</div>
  </div>`;
  avg += Number(data[i].score);
}

avgScore.innerHTML = Math.floor(avg / 4);

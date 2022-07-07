"use strict";

const card = document.querySelector(".card");
const response = document.querySelector(".response");
const submitBtn = document.getElementById("submit");
const ratingBtn = document.querySelectorAll(".normalRating");
const rating = document.getElementById("interactive");

let activeState = false;
const openResponse = function () {
  card.classList.add("hidden");
  response.classList.remove("hidden");
};

const openRating = function () {};
let count = 0;
for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener("click", function () {
    const text = "You selected " + (i + 1) + " out of 5";
    rating.innerHTML = text;
    for (let j = 0; j < ratingBtn.length; j++) {
      ratingBtn[j].classList.remove("activeRating");
      ratingBtn[j].classList.add("unactiveState");
    }
    ratingBtn[i].classList.remove("unactiveState");
    ratingBtn[i].classList.add("activeRating");
  });
}

submitBtn.addEventListener("click", openResponse);

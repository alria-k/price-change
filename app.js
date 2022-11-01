"use srtict";

let input = document.querySelector(".toggle-tracker");
let basicPlan = document.querySelectorAll(".card-price");

function toggleValue() {
  for (let i = 0; i < basicPlan.length; i++) {
    if (input.checked) {
      let value = basicPlan[i].dataset.value * 10 + 0.09;
      basicPlan[i].innerHTML = `
            <span>$ </span>${value.toFixed(2)}</p>
            `;
    } else {
      basicPlan[i].innerHTML = `
            <span>$ </span>${basicPlan[i].dataset.value}</p>
            `;
    }
  }
}

document.querySelector(".toggle-circle").addEventListener("click", (e) => {
  toggleValue();
});

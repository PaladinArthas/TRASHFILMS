const slider = document.getElementById("myRange");
const output = document.getElementById("rangeValue");


output.textContent = slider.value;


slider.addEventListener("input", (event) => {
  output.textContent = event.target.value;
});
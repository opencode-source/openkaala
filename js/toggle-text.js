const toggleButton = document.getElementById("toggle-more");
const textContainer = document.getElementById("text-container");

toggleButton.addEventListener("click", function (e) {
  textContainer.classList.toggle("is-expanded");

  if (textContainer.classList.contains("is-expanded")) {
    toggleButton.textContent = "بستن";
  } else {
    toggleButton.textContent = "مشاهده بیشتر";
  }
});
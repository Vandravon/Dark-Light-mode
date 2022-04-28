buttonToggleMode = document.querySelector(".toggle-darklight-mode");
toggledMode = document.querySelector("body");

buttonToggleMode.addEventListener("click", function() {
    toggledMode.classList.toggle("dark-mode-active")
});
const regBtn = document.querySelector(".button button");

const url = "https://forms.gle/s29hdhjhmrApG2mj7"; // add google form link here

regBtn.addEventListener("click", () => {
  window.open(url, "_blank");
});

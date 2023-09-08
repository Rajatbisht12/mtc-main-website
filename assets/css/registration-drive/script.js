const regBtn = document.querySelector(".button button");

const url = "https://forms.gle/6etXcWkh3bnk9P2CA"; // add google form link here

regBtn.addEventListener("click", () => {
  window.open(url, "_blank");
});

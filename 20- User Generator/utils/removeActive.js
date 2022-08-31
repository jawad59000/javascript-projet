export default function removeActive() {
  const btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

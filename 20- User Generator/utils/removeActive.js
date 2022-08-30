export default function removeActive(btns) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

const loading = document.querySelector(".gif");

export const hideLoading = () => {
  loading.classList.remove("hide-loading");
};
export const showLoading = () => {
  loading.classList.add("hide-loading");
};

function anim() {
  const card = document.querySelector(".carte");
  const btns = document.querySelector(".btnCat");
  const img = document.querySelector("img");
  const info = document.querySelector(".info");
  const changeUser = document.querySelector(".btnChange");

  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    card,
    2,
    {
      transform: "scale(0)",
      height: 0,
      opacity: 0,
      ease: "power2.out",
    },
    0.3
  )
    .staggerFrom(
      btns,
      1,
      { transform: "scale(0)", height: 0, opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(
      img,
      1,
      { transform: "scale(0)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(
      info,
      1,
      { transform: "scale(0)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(
      changeUser,
      1,
      { transform: "scale(0)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    );

  TL.play();
}

export default anim;

const flashlight = document.querySelector("#flashlight");

const flashlightHalfWidth = flashlight.offsetWidth / 2;

document.addEventListener("mousemove", (e) => {
  flashlight.style.left = e.pageX - flashlightHalfWidth + "px";
  flashlight.style.top = e.pageY - flashlightHalfWidth + "px";
});

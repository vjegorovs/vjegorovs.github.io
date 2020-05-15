let navToggledFlag = false;
const nav = document.querySelector("ul");
document.addEventListener("scroll", () => {
  if (
    window.scrollY >=
      document.querySelector(".landing-page").offsetHeight - 150 &&
    !navToggledFlag
  ) {
    nav.classList.toggle("navigation-hidden");
    nav.classList.toggle("navigation-visible");
    navToggledFlag = !navToggledFlag;
  } else if (
    window.scrollY <=
      document.querySelector(".landing-page").offsetHeight - 150 &&
    navToggledFlag
  ) {
    nav.classList.toggle("navigation-visible");
    nav.classList.toggle("navigation-hidden");
    navToggledFlag = !navToggledFlag;
  }
});

const navBar = document.querySelector(".navbar");
console.log(document.querySelector(".landing-page").offsetHeight);

// Any domElement with .float-in class get to float into view

const floatUpwards = (domElement) => {
  let flag = false;

  function addFloatIn() {
    if (
      document.querySelector(".landing-page").getBoundingClientRect().height -
        getYcoordinateViewport(domElement) >=
      70
    ) {
      if (domElement.classList.contains("float-in-slow")) {
        domElement.classList.add("come-in-slow");
      } else {
        domElement.classList.add("come-in");
      }
      document.removeEventListener("scroll", addFloatIn);
    }
  }
  document.addEventListener("scroll", addFloatIn);
};

const getYcoordinateViewport = (domElement) => {
  return domElement.getBoundingClientRect().y;
};

[...document.querySelectorAll(".float-in")].map((x) => floatUpwards(x));

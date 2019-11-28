const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

//This here code was the first attempt at all the sections appearing as the user was scrolling, to trigger svg path drawing only on scroll, rather than immediately on load. In the end decided to just use animate.css
const skillsPage = document.querySelector(".skills-svg");
const projectsPage = document.querySelector(".projects-svg");
const skillsPageLogo = document.querySelector(".skills-svg");
const projectsPageLogo = document.querySelector(".projects-svg");
const buttoniz = document.body;

skillsPage.style.display = "none";
projectsPage.style.display = "none";

buttoniz.onwheel = expan1d;
buttoniz.ontouchstart = expan1d;
buttoniz.onscroll = expan1d;

function expan1d() {
  console.log("test1");
  skillsPage.style.display = "flex";
  projectsPage.style.display = "flex";
  skillsPageLogo.classList.add("animated", "bounceInLeft");
  projectsPageLogo.classList.add("animated", "bounceInLeft");
}

import "./styles.css";
import { homeButton, generateHome } from "./home";
import { menuButton, generateMenu } from "./menu";
import { aboutButton, generateAbout } from "./about";

generateHome();

homeButton.addEventListener("click", () => {
    menuButton.style.backgroundColor = "white";
    aboutButton.style.backgroundColor = "white";
    generateHome();
});

menuButton.addEventListener("click", () => {
    homeButton.style.backgroundColor = "white";
    aboutButton.style.backgroundColor = "white";
    generateMenu();
});

aboutButton.addEventListener("click", () => {
    homeButton.style.backgroundColor = "white";
    menuButton.style.backgroundColor = "white";
    generateAbout();
});
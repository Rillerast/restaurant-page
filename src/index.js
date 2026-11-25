import "./styles.css";
import { homeButton, generateHome } from "./home";
import { menuButton, generateMenu } from "./menu";
import { aboutButton, generateAbout } from "./about";

generateHome();

function regenerateContent() {
    const content = document.querySelector("#content");
    content.remove();
    const newContent = document.createElement("div");
    newContent.id = "content";
    document.querySelector("body").appendChild(newContent);
}

homeButton.addEventListener("click", () => {
    regenerateContent();
    menuButton.style.backgroundColor = "white";
    aboutButton.style.backgroundColor = "white";
    generateHome();
});

menuButton.addEventListener("click", () => {
    regenerateContent();
    homeButton.style.backgroundColor = "white";
    aboutButton.style.backgroundColor = "white";
    generateMenu();
});

aboutButton.addEventListener("click", () => {
    regenerateContent();
    homeButton.style.backgroundColor = "white";
    menuButton.style.backgroundColor = "white";
    generateAbout();
});
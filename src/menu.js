const menuButton = document.querySelector(".menu");
function generateMenu() {
    menuButton.style.backgroundColor = "cyan";

    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("menu-container")
    
    content.appendChild(container);

    const lasagna = document.createElement("img");
    lasagna.src = "https://www.cucchiaio.it/content/dam/cucchiaio/it/ricette/2025/08/lasagne-alla-siciliana/Lasagne%20alla%20siciliana-1.jpg";

    container.appendChild(lasagna);
}

export {menuButton, generateMenu}
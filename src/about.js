const aboutButton = document.querySelector(".about");
function generateAbout() {
    aboutButton.style.backgroundColor = "cyan";

    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("about-container")
    
    content.appendChild(container);

    const cake = document.createElement("img");
    cake.src = "https://www.seriouseats.com/thmb/VAuEFUAePPa4QXEP3dhBHA4RvJA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250904-SEA-WhiteChocolateCheesecake-LorenaMasso-HERO-206c88529afb4abbb2ca8f114b1d0f2b.jpg";

    container.appendChild(cake);
}

export {aboutButton, generateAbout}
const homeButton = document.querySelector(".home");
function generateHome() {
    homeButton.style.backgroundColor = "cyan";

    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("main-container")
    
    content.appendChild(container);

    const pizza = document.createElement("img");
    pizza.src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original";

    container.appendChild(pizza);
}

export {homeButton, generateHome}
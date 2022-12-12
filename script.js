const apiBaseUrl = "https://dummyjson.com";
const apiEndpoint = "/products";
const phoneDetailsDiv = document.getElementById("post-item-container");
const showItemsButton = document.getElementById("show-items-button");

async function secondTraining(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log('error', err);
    }
}

function createElement(categoryObject) {
    const { title, thumbnail } = categoryObject;

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "container-box";

    const phoneTitle = document.createElement("h2");
    phoneTitle.textContent = title;

    const phoneThumbnail = document.createElement("img")
    phoneThumbnail.setAttribute("src", thumbnail);
    phoneThumbnail.setAttribute("alt", `${title}`);

    categoryDiv.appendChild(phoneTitle);
    categoryDiv.appendChild(phoneThumbnail);

    return categoryDiv;
}

async function main() {
    phoneDetailsDiv.innerHTML = "";
    const { products } = await secondTraining(apiBaseUrl + apiEndpoint);
    products.forEach((el) => {
        const newCategoryEl = createElement(el);
        phoneDetailsDiv.appendChild(newCategoryEl);
    })
}

main();

showItemsButton.addEventListener("click", main)
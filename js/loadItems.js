const snacks = document.querySelector("#snacks");
const candy = document.querySelector("#candy");
const drinks = document.querySelector("#drinks");
const stationery = document.querySelector("#stationery");
const crafts = document.querySelector("#crafts");

async function loadJsonFromServer(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error loading JSON:", error);
        return null;
    }
}

loadJsonFromServer("/honesty-store-bohr/assets/json/items.json").then(items => {
    if (!items) return;


    Object.keys(items).forEach(category => {
        const categoryItems = items[category];
        const container = document.querySelector(`#${category}`);

        if (!container) return;

        categoryItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add("item");
            div.innerHTML = `
                <img src="${item.image}">
                <div>
                    <h1>${item.name}</h1>
                    <h2>Price: ${item.price}</h2>
                </div>
            `
            container.appendChild(div);
        });
    });
});

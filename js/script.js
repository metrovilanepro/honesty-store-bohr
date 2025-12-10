const navItems = document.querySelectorAll("header nav li");
const sections = document.querySelectorAll("section");

function showSection(id) {
    sections.forEach(sec => {
        if (sec.id === id) {
            sec.classList.add("active");
        } else {
            sec.classList.remove("active");
        }
    });
}

showSection("home");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("activated"));
        item.classList.add("activated");

        const page = item.getAttribute("data-page");
        showSection(page);
    });
});


const itemCategories = document.querySelectorAll(".item-containers");
const itemItems = document.querySelectorAll("#menu nav ul li");


function showCategory(id) {
    itemCategories.forEach(cat => {
        if (cat.id === id) {
            cat.classList.add("categoryactivated");
        } else {
            cat.classList.remove("categoryactivated");
        }
    })
}

itemItems.forEach(item => {
    item.addEventListener('click', () => {
        itemItems.forEach(i => i.classList.remove("itemactivated"));
        item.classList.add("itemactivated");

        const itemCategory = item.getAttribute("data-category");
        showCategory(itemCategory);
    });
});

const navItems = document.querySelectorAll("header nav li");
const sections = document.querySelectorAll("section");
const catnavbutton = document.getElementById("catnav2button");
const catnav = document.getElementById("catnav2");
const catnavback = document.getElementById("catnav2back");
const itemCategories = document.querySelectorAll(".item-containers");
const itemItems = document.querySelectorAll("#menu nav ul li");
const itemItems2 = document.querySelectorAll("#catnav2 ul li");

function showSection(id) {
    sections.forEach(sec => {
        if (sec.id === id) {
            sec.classList.add("active");
            if (id === "menu") {
                catnavbutton.classList.remove("hide-catnav2");
                catnav.classList.remove("hide-catnav2");
                showCategory("snacks");
            } else {
                catnavbutton.classList.add("hide-catnav2");
                catnav.classList.add("hide-catnav2");
            }
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

itemItems2.forEach(item => {
    item.addEventListener('click', () => {
        itemItems2.forEach(i => i.classList.remove("itemactivated2"));
        item.classList.add("itemactivated2");

        const itemCategory = item.getAttribute("data-category");
        showCategory(itemCategory);
    });
});

catnavbutton.addEventListener('click', () => {
    catnav.style.right = "0px";
    console.log("Clicked!");
});

catnavback.addEventListener('click', () => {
    catnav.style.right = "-400px";
    console.log("Clicked!");
});

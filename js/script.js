const navItems = document.querySelectorAll("header nav li");
const sections = document.querySelectorAll("section");

sections.forEach(sec => sec.classList.remove("active"));
document.querySelector("section#home").classList.add("active");

navItems.forEach(i => i.classList.remove("activated"));
document.querySelector('nav li[data-page="home"]').classList.add("activated");

navItems.forEach(item => {
    item.addEventListener('click', () => {

        navItems.forEach(i => i.classList.remove("activated"));
        item.classList.add("activated");

    });
});

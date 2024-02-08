// DOM => Document Object Model
const hamburger = document.querySelector(".hamburger");
const sidebarCloseButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");
const opensidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
}
const closesidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
}
hamburger.addEventListener("click", opensidebar)
sidebarCloseButton.addEventListener("click", closesidebar)

const navbarContainer = document.querySelector(".nav-container");
window.addEventListener("scroll", function(){
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth >= 992 ? 70 : 50;
    if(scrollNumber >= targetNumber){
        navbarContainer.classList.add("sticky-nav");
    }else {
        navbarContainer.classList.remove("sticky-nav");
    }
});
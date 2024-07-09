// Function to toggle the menu visibility and icon state
function toggleMenu() {
    // Select the menu element with class 'menu-links'
    const menu = document.querySelector(".menu-links")
    // Select the hamburger icon element with class 'hamburger-icon'
    const icon = document.querySelector(".hamburger-icon")
    
    // Toggle the 'open' class on the menu element
    menu.classList.toggle("open")
    // Toggle the 'open' class on the icon element
    icon.classList.toggle("open")
}


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })


        
    // Sticky
    const stickyElement = document.querySelector(".header");
    const checkSticky = e => {
        let scrollTop = document.querySelector("html").scrollTop;

        console.log(scrollTop);
        if(scrollTop > 100) {
            stickyElement.classList.add("sticky");
        } else {
            stickyElement.classList.remove("sticky");
        }
    }
    window.addEventListener("scroll", checkSticky);
    checkSticky();
})

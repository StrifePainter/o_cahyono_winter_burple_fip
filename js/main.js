console.log("JS file is connected");




const colors = ['#E81CFF', '#7700ff', '#ddff1b'];




document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';

    const color = colors[Math.floor(Math.random() *colors.length)];
    trail.style.background = color;

    const spread = 20;
    const offsetX = (Math.random() - 0.5) * spread;
    const offsetY = (Math.random() - 0.5) * spread;

    trail.style.left = (e.clientX + offsetX) + 'px';
    trail.style.top = (e.clientY + offsetY) + 'px';

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 800);

});



(function() {
    "use strict";

    const burgerIcon = document.querySelector("#burger-con");
    const mobileNav = document.querySelector("#nested-hero-grid nav");

    function toggleMenu() {
        // This adds/removes the 'show-menu' class every time you click
        mobileNav.classList.toggle("show-menu");
        console.log("Menu toggled");
    }

    burgerIcon.addEventListener("click", toggleMenu);

})();
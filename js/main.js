console.log("JS file is connected");

// Variables
const colors = ['#E81CFF', '#7700ff', '#ddff1b'];
const spread = 20;
const burgerIcon = document.querySelector("#burger-con");
const mobileNav = document.querySelector("#nested-hero-grid nav");

// Functions
function createTrail(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';

    const color = colors[Math.floor(Math.random() * colors.length)];
    trail.style.background = color;

    const offsetX = (Math.random() - 0.5) * spread;
    const offsetY = (Math.random() - 0.5) * spread;

    trail.style.left = (e.clientX + offsetX) + 'px';
    trail.style.top = (e.clientY + offsetY) + 'px';

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 800);
}

function toggleMenu() {
    mobileNav.classList.toggle("show-menu");
    console.log("Menu toggled");
}

// Event Listeners
document.addEventListener('mousemove', createTrail);
burgerIcon.addEventListener("click", toggleMenu);
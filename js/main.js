console.log("JS file is connected");

//Variables
const colors = ['#D22DFB', '#691EFF', '#C7D852'];
const spread = 20;

const burgerIcon = document.querySelector("#burger-con");
const mobileNav = document.querySelector("#nested-hero-grid nav");

const lightbox = document.querySelector("#lightbox");
const cards = document.querySelectorAll(".product-card");
const closeBtn = document.querySelector(".close-lightbox");
const lbContentArea = document.querySelector(".lightbox-content"); 

const messageInput = document.querySelector("#message");
const charCounter = document.querySelector("#char-counter");

const productData = [
    { id: 1, title: "OG Burple Grape Juice", price: 1.99, description: "The original 1987 flavor that started it all! Why settle for a snack when you can drink the legend? Our OG Burple Grape is the heavy-hitting classic for those who want their flavor deep, dark, and totally legendary.", image: "images/og-burple-juice.png" },
    { id: 2, title: "Tropical Guava Blast", price: 1.99, description: "Pure Guava Puree, a splash of Passionfruit nectar, and a hint of zesty Lime for that signature Burple kick. Sweetened with organic cane sugar and zero artificial vibes.", image: "images/guava-blast.png" },
    { id: 3, title: "Blue Raspberry Oasis", price: 1.99, description: "Why settle for red when you can have Blue? Our Blue Raspberry Juice is the ultimate refreshment for those who like their flavor high-voltage.", image: "images/raspberry-oasis.png" },
    { id: 4, title: "Mango Pineapple Shake", price: 1.99, description: "Smooth, sunny, and bold. Ripened Alphonso Mango, crushed Golden Pineapple, and a velvety coconut milk base. Blended for a tropical richness that hits like a bolt of sunshine.", image: "images/mango-pineapple.png" },
    { id: 5, title: "Strawberry Banana Refresher", price: 1.99, description: "Sun-ripened Field Strawberries, creamed Cavendish Bananas, and a hint of vanilla bean. Blended into a refreshing, light-weight fusion that’s as smooth as it is bold.", image: "images/strawberry-banana.png" },
    { id: 6, title: "Watermelon Booster Juice", price: 1.99, description: "Cold-pressed Watermelon, a double-squeeze of Key Lime, and a pinch of pink sea salt for that electrolytes-loaded zing. It’s light, crisp, and built to keep you moving", image: "images/watermelon.png" }
];

//Functions
function createTrail(e) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    const color = colors[Math.floor(Math.random() * 3)];
    trail.style.background = color;
    const offsetX = (Math.random() - 0.5) * spread;
    const offsetY = (Math.random() - 0.5) * spread;
    trail.style.left = (e.clientX + offsetX) + 'px';
    trail.style.top = (e.clientY + offsetY) + 'px';
    document.body.appendChild(trail);
    setTimeout(function removeTrail() { trail.remove(); }, 800);
}

function toggleMenu() {
    mobileNav.classList.toggle("show-menu");
}

function updateCharCount() {
    const currentLength = messageInput.value.length;
    charCounter.textContent = currentLength + "/300";
    
    if (currentLength >= 300) {
        charCounter.style.color = "#ff0000";
    } else {
        charCounter.style.color = "inherit";
    }
}

function handleAddToCart() {
    const itemTitle = document.querySelector("#lb-title").textContent;
    alert(itemTitle + " added to cart!");
}

function openLightbox() {
    const productId = this.getAttribute("data-product");
    const info = productData.find(function findProduct(p) { return p.id == productId; });

    if (info) {
        const titleTarget = document.querySelector("#lb-title");
        const descTarget = document.querySelector("#lb-description");
        const priceTarget = document.querySelector("#lb-price");
        const imgTarget = document.querySelector("#lb-image-con");
        const btnTarget = document.querySelector("#lb-button-con");

        titleTarget.textContent = info.title;
        descTarget.textContent = info.description;
        priceTarget.textContent = "$" + info.price.toFixed(2);

        imgTarget.innerHTML = ""; 
        const newImg = document.createElement("img");
        newImg.src = info.image;
        newImg.alt = info.title;
        newImg.style.width = "100%";
        imgTarget.appendChild(newImg);

        btnTarget.innerHTML = ""; 
        const cartBtn = document.createElement("button");
        cartBtn.textContent = "Add to Cart";
        cartBtn.classList.add("add-to-cart-btn");
        
        cartBtn.addEventListener("click", handleAddToCart);

        btnTarget.appendChild(cartBtn);
        lightbox.classList.remove("hidden");
    }
}

function closeLightbox() {
    lightbox.classList.add("hidden");
}

function handleOutsideClick(e) {
    if (e.target == lightbox) {
        closeLightbox();
    }
}

//Event Listeners

document.addEventListener('mousemove', createTrail);

if (burgerIcon) {
    burgerIcon.addEventListener("click", toggleMenu);
}

cards.forEach(function setupCards(card) {
    card.addEventListener("click", openLightbox);
});

if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener("click", handleOutsideClick);
}

if (messageInput) {
    messageInput.addEventListener('input', updateCharCount);
}
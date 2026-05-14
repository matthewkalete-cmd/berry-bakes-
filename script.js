gsap.registerPlugin(ScrollTrigger);

// 1. GENERATE 50 ITEMS
const productGrid = document.getElementById('product-grid');
const itemTypes = ['Berry Danish', 'Sourdough Loaf', 'Raspberry Croissant', 'Blueberry Scone', 'Choco-Berry Muffin'];

for (let i = 1; i <= 50; i++) {
    const type = itemTypes[i % itemTypes.length];
    const itemHTML = `
        <div class="card product-item">
            <div style="font-size: 2rem;">🥐</div>
            <h3>${type} #${i}</h3>
            <p>$${(Math.random() * 10 + 5).toFixed(2)}</p>
            <button style="background: var(--gold); border:none; padding:5px 15px; border-radius:5px; cursor:pointer">Add to Bag</button>
        </div>
    `;
    productGrid.innerHTML += itemHTML;
}

// 2. COOL BREAD SCROLL EFFECT
// This makes the bread emoji spin and move across the screen as you scroll
gsap.to(".floating-bread", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },
    x: -500,
    rotation: 360,
    scale: 1.5,
    opacity: 0
});

// 3. ABOUT SECTION ENTRANCE
gsap.from(".about-image", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%"
    },
    x: -100,
    opacity: 0,
    duration: 1.2
});

gsap.from(".about-text", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%"
    },
    x: 100,
    opacity: 0,
    duration: 1.2
});

// 4. STAGGERED REVEAL FOR THE 50 ITEMS
gsap.from(".product-item", {
    scrollTrigger: {
        trigger: "#product-grid",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    stagger: 0.05, // Very fast stagger for many items
    duration: 0.8,
    ease: "back.out(1.7)"
});



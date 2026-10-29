const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const revealItems = document.querySelectorAll(".reveal");

// ===========================
// Mobile Menu
// ===========================

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// ===========================
// Scroll Reveal
// ===========================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.15
    }
);

revealItems.forEach((item) => observer.observe(item));

// ===========================
// Active Navbar
// ===========================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navAnchors.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Typing Animation
// ===========================

const typing = document.getElementById("typing");

const words = [
    "AI & Data Science Student",
    "Web Developer",
    "Python Programmer",
    "Machine Learning Enthusiast",
    "Future AI Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

// ===========================
// Scroll To Top Button
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#6ee7ff;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px #6ee7ff;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
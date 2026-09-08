/* =========================================
   SILENT GENIUS PORTFOLIO JAVASCRIPT
   ========================================= */

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");


// =========================================
// MOBILE MENU
// =========================================

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menu.classList.remove("bx-menu");
        menu.classList.add("bx-x");
    } else {
        menu.classList.remove("bx-x");
        menu.classList.add("bx-menu");
    }

});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menu.classList.remove("bx-x");
        menu.classList.add("bx-menu");

    });

});


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    ".service-card, .about-grid, .trading-section, .contact-grid"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.innerHTML =
        "Message Sent <i class='bx bx-check'></i>";

    button.style.background = "#ddd";

    contactForm.reset();

    setTimeout(() => {

        button.innerHTML =
            "Send Message <i class='bx bx-send'></i>";

        button.style.background = "";

    }, 3000);

});
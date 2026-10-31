// ======================
// WEBSITE LOADED
// ======================

console.log("Website Loaded Successfully!");

// ======================
// SMOOTH SCROLLING
// ======================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ======================
// SEARCH BAR
// ======================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const searchValue = searchBox.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

// ======================
// BACK TO TOP BUTTON
// ======================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ======================
// DARK MODE
// ======================

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

}

// ======================
// SCROLL ANIMATIONS
// ======================

const sections = document.querySelectorAll(
    ".card, .event-card, .org-card, .stat-card"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    observer.observe(section);

});

// ======================
// CONTACT FORM
// ======================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message sent successfully!");

        form.reset();

    });

}

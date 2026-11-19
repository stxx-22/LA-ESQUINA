/* =========================================
   LA ESQUINA BARBER CLUB
   STREET CULTURE / LOCAL ASSETS
========================================= */

const WHATSAPP_NUMBER = "57300000000";

const services = [
    {
        number: "01",
        icon: "✂",
        name: "CORTE CLÁSICO",
        description: "Un corte limpio, preciso y con actitud.",
        price: "$20.000",
        image: "img/fade-en-proceso.jpg"
    },
    {
        number: "02",
        icon: "⚡",
        name: "FADE / DEGRADADO",
        description: "Degradados marcados y transiciones finas.",
        price: "$25.000",
        image: "img/barbero-en-accion.jpg"
    },
    {
        number: "03",
        icon: "✦",
        name: "CORTE + BARBA",
        description: "Combo completo para salir renovado.",
        price: "$35.000",
        image: "img/perfilado-de-barba.jpg"
    },
    {
        number: "04",
        icon: "✎",
        name: "DISEÑOS",
        description: "Líneas, figuras y detalles que hablan por ti.",
        price: "$30.000",
        image: "img/diseno-urbano.jpg"
    },
    {
        number: "05",
        icon: "▰",
        name: "BARBA",
        description: "Perfilado y definición con navaja.",
        price: "$15.000",
        image: "img/perfilado-de-barba.jpg"
    },
    {
        number: "06",
        icon: "★",
        name: "CORTE DE LA CASA",
        description: "Corte, diseño y acabado con toda la actitud.",
        price: "$40.000",
        image: "img/corte-con-diseno.jpg"
    }
];

const gallery = [
    { image: "img/fade-en-proceso.jpg", title: "FADE EN PROCESO" },
    { image: "img/barbero-en-accion.jpg", title: "MANOS A LA OBRA" },
    { image: "img/diseno-urbano.jpg", title: "DISEÑO DE CALLE" },
    { image: "img/perfilado-de-barba.jpg", title: "BARBA AL DETALLE" },
    { image: "img/herramientas-barber.jpg", title: "LAS HERRAMIENTAS" },
    { image: "img/corte-con-diseno.jpg", title: "CORTE CON FIRMA" }
];

function renderServices() {
    const container = document.getElementById("servicesGrid");
    if (!container) return;

    container.innerHTML = services.map(service => `
        <article class="service-card">
            <div class="service-photo-wrap">
                <img class="service-photo" src="${service.image}" alt="${service.name}" loading="lazy">
                <span class="service-number">${service.number}</span>
                <span class="service-icon">${service.icon}</span>
            </div>
            <div class="service-copy">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <span class="service-price">${service.price}</span>
            </div>
        </article>
    `).join("");
}

function renderGallery() {
    const container = document.getElementById("galleryGrid");
    if (!container) return;

    container.innerHTML = gallery.map(item => `
        <figure class="gallery-item">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <figcaption class="gallery-label">${item.title}</figcaption>
        </figure>
    `).join("");
}

function openWhatsApp(message) {
    const phone = WHATSAPP_NUMBER.replace(/\D/g, "");
    if (!phone || phone === "57300000000") {
        alert("Configura el número real de WhatsApp en js/app.js antes de publicar.");
        return;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

function setupBooking() {
    const button = document.getElementById("bookingButton");
    if (!button) return;

    button.addEventListener("click", event => {
        event.preventDefault();
        openWhatsApp("¡Qué más! Quiero reservar un corte en LA ESQUINA BARBER CLUB. 💈");
    });
}

function setupMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("active");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            links.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function setupScrollAnimations() {
    const elements = document.querySelectorAll(
        ".service-card, .gallery-item, .about-content, .about-image, .section-heading"
    );

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}

function setCurrentYear() {
    const year = document.getElementById("currentYear");
    if (year) year.textContent = new Date().getFullYear();
}

function setupLoader() {
    const loader = document.getElementById("loader");
    if (!loader) return;
    window.addEventListener("load", () => {
        loader.classList.add("loader-hidden");
        window.setTimeout(() => loader.remove(), 600);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    renderGallery();
    setupBooking();
    setupMobileMenu();
    setupScrollAnimations();
    setCurrentYear();
    setupLoader();

    console.log("LA ESQUINA BARBER CLUB: calle, corte y actitud.");
});

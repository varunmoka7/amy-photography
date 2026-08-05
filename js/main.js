// Amy Photography — interactions

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Frosted nav once scrolled past the hero top
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
document.addEventListener("scroll", onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

// Close mobile nav when a link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Hero slideshow
const slides = document.querySelectorAll(".hero-slide");
if (slides.length > 1) {
  let current = 0;
  const show = (i) => {
    slides[current].classList.remove("is-active");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("is-active");
  };
  document.querySelector(".hero-prev").addEventListener("click", () => show(current - 1));
  document.querySelector(".hero-next").addEventListener("click", () => show(current + 1));
}

// Contact form (Web3Forms)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  const status = contactForm.querySelector(".form-status");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    btn.disabled = true;
    status.className = "form-status";
    try {
      const data = new FormData(contactForm);
      const name = `${data.get("first_name") || ""} ${data.get("last_name") || ""}`.trim();
      data.append("subject", `New inquiry from ${name || "the website"}`);
      const res = await fetch(contactForm.action, { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      contactForm.reset();
      status.textContent = "Thank you — your note is on its way. I'll reply within one business day.";
      status.classList.add("ok");
    } catch {
      status.textContent = "Hmm, that didn't go through. Please email me directly at hello@amyphotography.com.";
      status.classList.add("err");
    } finally {
      btn.disabled = false;
    }
  });
}

// Lightbox for gallery
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.parentElement.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// Amy Photography — interactions

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

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

// Booking form — AJAX submit to Formspree with inline status
const form = document.querySelector(".booking-form");
const statusEl = form.querySelector(".form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (form.action.includes("YOUR_FORM_ID")) {
    statusEl.textContent =
      "Form not connected yet — replace YOUR_FORM_ID in index.html with your Formspree ID.";
    return;
  }

  statusEl.textContent = "Sending…";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      statusEl.textContent = "Thank you! Your inquiry is on its way — I'll reply within one business day.";
    } else {
      statusEl.textContent = "Something went wrong. Please email hello@amyphotography.com instead.";
    }
  } catch {
    statusEl.textContent = "Network error. Please try again or email hello@amyphotography.com.";
  }
});

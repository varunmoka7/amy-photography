// Amy Photography — interactions

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

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
  navToggle.setAttribute("aria-expanded", String(open));
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
  // Slides 2+ load after the first paint so they don't delay the LCP image
  const hydrate = () => {
    document.querySelectorAll(".hero-slide[data-src]").forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  };
  window.addEventListener("load", hydrate, { once: true });
  const show = (i) => {
    hydrate();
    slides[current].classList.remove("is-active");
    slides[current].setAttribute("aria-hidden", "true");
    current = (i + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    slides[current].removeAttribute("aria-hidden");
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
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
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

// Lightbox for gallery (keyboard-accessible)
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  let lastFocused = null;

  document.querySelectorAll(".gallery-item").forEach((fig) => {
    const img = fig.querySelector("img");
    fig.tabIndex = 0;
    fig.setAttribute("role", "button");
    fig.setAttribute("aria-label", `View larger: ${img.alt}`);
    const open = () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lastFocused = fig;
      closeBtn.focus();
    };
    fig.addEventListener("click", open);
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) closeLightbox();
  });

  // Single focusable element inside the dialog — keep Tab on it
  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      closeBtn.focus();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

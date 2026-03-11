(function () {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  const yearElement = document.getElementById("year");
  const contactForm = document.querySelector(".contact-form");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  if (
    sections.length > 0 &&
    navLinks.length > 0 &&
    "IntersectionObserver" in window
  ) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }
          const id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            const isActive = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", isActive);
          });
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.4, 0.7],
      },
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      const isLocalPreview =
        window.location.protocol === "file:" ||
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";
      const thankYouPath =
        window.location.protocol === "file:" ? "thank-you.html"
        : isLocalPreview ? "/public/thank-you.html"
        : "thank-you.html";
      const thankYouUrl = new URL(thankYouPath, window.location.href).href;

      if (isLocalPreview) {
        event.preventDefault();
        window.location.assign(thankYouUrl);
        return;
      }

      if (!window.fetch || !window.FormData || !window.URLSearchParams) {
        return;
      }

      event.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const formData = new FormData(contactForm);
      const encodedFormData = new URLSearchParams(formData).toString();
      const submissionUrl = window.location.pathname || "/";

      if (submitButton) {
        submitButton.disabled = true;
      }

      fetch(submissionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedFormData,
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Form submission failed.");
          }
          window.location.assign(thankYouUrl);
        })
        .catch(function () {
          if (submitButton) {
            submitButton.disabled = false;
          }
          window.alert(
            "The message could not be sent right now. Please try again in a moment.",
          );
        });
    });
  }
})();

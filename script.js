// Wissenaire.com domain acquisition landing page
// IMPORTANT: Replace this with an email address you control before publishing.
const OWNER_EMAIL = "contact@wissenaire.com";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !expanded);
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  const form = document.getElementById("inquiry-form");
  const note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      if (!OWNER_EMAIL || OWNER_EMAIL === "YOUR_EMAIL@example.com") {
        note.textContent = "Setup required: open script.js and replace YOUR_EMAIL@example.com with your receiving email address. Then test the form again.";
        note.classList.add("setup-warning");
        return;
      }

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const company = String(data.get("company") || "").trim();
      const offer = String(data.get("offer") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subject = encodeURIComponent("Wissenaire.com acquisition inquiry");
      const body = encodeURIComponent(
        "Wissenaire.com acquisition inquiry\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Company: " + (company || "Not provided") + "\n" +
        "Indicative offer (INR): " + (offer || "Not provided") + "\n\n" +
        "Message:\n" + (message || "No message provided")
      );
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
      note.textContent = "Your email application should open with the details prepared. Send the email to complete your inquiry.";
      note.classList.remove("setup-warning");
    });
  }
});

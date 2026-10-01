const toggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");
if (toggle && header) {
  header.classList.add("enhanced");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    header.classList.toggle("menu-open", open);
  });
  header.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("menu-open")) {
      toggle.setAttribute("aria-expanded", "false");
      header.classList.remove("menu-open");
      toggle.focus();
    }
  });
}

// GitHub Pages has no server-side form handler. Keep the original form design,
// but turn submissions into a pre-filled email to Sigrøn instead of relying on
// Norgesdomene's paid form endpoint.
const form = document.querySelector(".form-panel form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const isEnglish = document.documentElement.lang.toLowerCase().startsWith("en");
    const name = String(data.get(isEnglish ? "name" : "navn") || "").trim();
    const email = String(data.get(isEnglish ? "email" : "epost") || "").trim();
    const project = String(data.get(isEnglish ? "project" : "prosjekt") || "").trim();

    const subject = isEnglish
      ? `Project enquiry from ${name || "website visitor"}`
      : `Prosjektforespørsel fra ${name || "nettsidebesøkende"}`;

    const body = isEnglish
      ? `Name: ${name}\nEmail: ${email}\n\nProject / question:\n${project}`
      : `Navn: ${name}\nE-post: ${email}\n\nProsjekt / spørsmål:\n${project}`;

    const mailto = `mailto:alexandra@sigrøn.no?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = isEnglish
        ? "Your email app should open with the message ready to send."
        : "E-postprogrammet ditt skal åpne med meldingen klar til å sendes.";
    }
  });
}

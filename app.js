(() => {
  const data = window.TOYOTA_CAMPECHE_DATA;
  const app = document.getElementById("app-view");

  if (!data || !app) return;

  const iconPaths = {
    location: '<path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/>',
    phone: '<path d="M7.2 3.8 4.8 5.1c-.7.4-1 1.2-.7 1.9 2.1 5.4 6.4 9.7 11.8 11.8.7.3 1.5 0 1.9-.7l1.3-2.4c.3-.6.2-1.4-.4-1.8l-3-2.2c-.5-.4-1.2-.3-1.7.1l-1.5 1.4a13 13 0 0 1-5.6-5.6l1.4-1.5c.4-.5.5-1.2.1-1.7l-2.2-3c-.4-.6-1.2-.7-1.8-.4Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12s1.1 6.6 3.3 9"/>',
    car: '<path d="m5 16 1.5-5.4A2.2 2.2 0 0 1 8.6 9h6.8a2.2 2.2 0 0 1 2.1 1.6L19 16"/><path d="M4 16h16v3a1 1 0 0 1-1 1h-1v-2H6v2H5a1 1 0 0 1-1-1v-3Z"/><circle cx="7" cy="16" r="1"/><circle cx="17" cy="16" r="1"/>',
    wrench: '<path d="M14.7 6.3a4.2 4.2 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4.2 4.2 0 0 0 5 5L5 16a2.1 2.1 0 1 0 3 3l7.3-7.3a4.2 4.2 0 0 0-.6-5.4Z"/>',
    building: '<path d="M4 21V6l8-3v18M12 8h8v13M2 21h20"/><path d="M7 9h2M7 13h2M7 17h2M15 12h2M15 16h2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    whatsapp: '<path d="M20 11.6a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4A8 8 0 1 1 20 11.6Z"/><path d="M9 8.3c.4 2.3 2.3 4.2 4.6 4.7"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    arrow: '<path d="m9 18 6-6-6-6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
  };

  const icon = (name, className = "") => `
    <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.user}</svg>
  `;

  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const cleanPhone = (phone = "") => phone.replace(/\D/g, "");
  const formatPhone = (phone = "") => {
    const p = cleanPhone(phone);
    if (p.length === 10) return `${p.slice(0, 3)} ${p.slice(3, 6)} ${p.slice(6)}`;
    return phone;
  };

  function contactActions(contact) {
    const actions = [];

    if (contact.phone) {
      actions.push(`
        <a class="contact-action" href="tel:${cleanPhone(contact.phone)}">
          ${icon("phone")}
          <span>Llamar</span>
        </a>
      `);
    }

    if (contact.whatsapp) {
      actions.push(`
        <a class="contact-action whatsapp" href="https://wa.me/52${cleanPhone(contact.whatsapp)}" target="_blank" rel="noreferrer">
          ${icon("whatsapp")}
          <span>WhatsApp</span>
        </a>
      `);
    }

    if (contact.email) {
      actions.push(`
        <a class="contact-action" href="mailto:${esc(contact.email)}">
          ${icon("mail")}
          <span>Correo</span>
        </a>
      `);
    }

    return actions.join("");
  }

  function contactCard(contact) {
    const hasPhone = Boolean(contact.phone);

    return `
      <article class="contact-card" id="contact-${esc(contact.id)}">
        <div class="contact-avatar">${icon("user")}</div>
        <div class="contact-copy">
          <p class="contact-role">${esc(contact.role)}</p>
          <h4>${esc(contact.person)}</h4>
          ${hasPhone ? `<p class="contact-phone">${esc(formatPhone(contact.phone))}</p>` : ""}
          <div class="contact-actions">${contactActions(contact)}</div>
        </div>
      </article>
    `;
  }

  function groupBlock(group) {
    const contacts = group.contacts || [];
    const nested = group.nestedGroups || [];

    return `
      <section class="department-group" id="group-${esc(group.id)}">
        <div class="group-heading">
          <h3>${esc(group.title)}</h3>
          <span>${contacts.length + nested.reduce((sum, item) => sum + (item.contacts?.length || 0), 0)} contacto${contacts.length === 1 && !nested.length ? "" : "s"}</span>
        </div>

        <div class="contacts-grid">
          ${contacts.map(contactCard).join("")}
        </div>

        ${nested.map(item => `
          <div class="nested-group">
            <div class="nested-heading">
              <h4>${esc(item.title)}</h4>
              <span>${item.contacts.length} espacios</span>
            </div>
            <div class="advisor-grid">
              ${item.contacts.map(contactCard).join("")}
            </div>
          </div>
        `).join("")}
      </section>
    `;
  }

  function renderHome() {
    document.title = "Toyota Campeche · Directorio de atención";
    app.innerHTML = `
      <section class="home-intro">
        <p class="eyebrow">DIRECTORIO DE ATENCIÓN</p>
        <h2>Selecciona el área que necesitas</h2>
        <p>Consulta responsables y medios de contacto sin salir de esta página.</p>
      </section>

      <section class="area-grid">
        ${data.areas.map(area => `
          <button class="area-card" type="button" data-area="${esc(area.id)}">
            <span class="area-icon">${icon(area.icon)}</span>
            <span class="area-copy">
              <strong>${esc(area.name)}</strong>
              <small>${esc(area.subtitle)}</small>
            </span>
            <span class="area-arrow">${icon("arrow")}</span>
          </button>
        `).join("")}
      </section>

      <section class="home-note section-card">
        <div class="home-note-icon">${icon("building")}</div>
        <div>
          <p class="eyebrow">TOYOTA CAMPECHE</p>
          <h3>Encuentra al área correcta más rápido</h3>
          <p>Cada apartado muestra únicamente los medios de contacto disponibles para ese puesto.</p>
        </div>
      </section>
    `;

    app.querySelectorAll("[data-area]").forEach(button => {
      button.addEventListener("click", () => renderArea(button.dataset.area));
    });

    history.replaceState({ view: "home" }, "", location.pathname + location.search);
    window.scrollTo({ top: Math.max(0, app.offsetTop - 16), behavior: "smooth" });
  }

  function renderArea(areaId, contactId = null) {
    const area = data.areas.find(item => item.id === areaId);
    if (!area) return renderHome();

    document.title = `${area.name} · Toyota Campeche`;

    app.innerHTML = `
      <section class="area-header">
        <button class="back-button" type="button" id="back-home">
          ${icon("back")}
          <span>Volver a áreas</span>
        </button>
        <div class="area-header-main">
          <span class="area-header-icon">${icon(area.icon)}</span>
          <div>
            <p class="eyebrow">TOYOTA CAMPECHE</p>
            <h2>${esc(area.name)}</h2>
            <p>${esc(area.subtitle)}</p>
          </div>
        </div>
      </section>

      <div class="area-content">
        ${area.groups.map(groupBlock).join("")}
      </div>
    `;

    document.getElementById("back-home").addEventListener("click", renderHome);
    history.pushState({ view: "area", areaId }, "", `#${areaId}`);

    requestAnimationFrame(() => {
      if (contactId) {
        const target = document.getElementById(`contact-${contactId}`);
        if (target) {
          target.classList.add("contact-highlight");
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => target.classList.remove("contact-highlight"), 1800);
          return;
        }
      }
      window.scrollTo({ top: Math.max(0, app.offsetTop - 16), behavior: "smooth" });
    });
  }

  function setupQuickActions() {
    document.getElementById("quick-location").href = data.agency.mapsUrl;
    document.getElementById("quick-web").href = data.agency.website;

    document.querySelectorAll("[data-jump-area]").forEach(button => {
      button.addEventListener("click", () => {
        renderArea(button.dataset.jumpArea, button.dataset.jumpContact || null);
      });
    });
  }

  window.addEventListener("popstate", () => {
    const hash = location.hash.replace("#", "");
    if (hash && data.areas.some(area => area.id === hash)) {
      renderArea(hash);
    } else {
      renderHome();
    }
  });

  setupQuickActions();

  const initialArea = location.hash.replace("#", "");
  if (initialArea && data.areas.some(area => area.id === initialArea)) {
    renderArea(initialArea);
  } else {
    renderHome();
  }
})();

(() => {
  const data = window.TOYOTA_CAMPECHE_DATA;
  const app = document.getElementById("app-view");

  if (!data || !app) return;

  const iconPaths = {
    location: '<path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/>',
    phone: '<path d="M7.2 3.8 4.8 5.1c-.7.4-1 1.2-.7 1.9 2.1 5.4 6.4 9.7 11.8 11.8.7.3 1.5 0 1.9-.7l1.3-2.4c.3-.6.2-1.4-.4-1.8l-3-2.2c-.5-.4-1.2-.3-1.7.1l-1.5 1.4a13 13 0 0 1-5.6-5.6l1.4-1.5c.4-.5.5-1.2.1-1.7l-2.2-3c-.4-.6-1.2-.7-1.8-.4Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/><path d="M8 14h3M8 17h6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12s1.1 6.6 3.3 9"/>',
    car: '<path d="m5 16 1.5-5.4A2.2 2.2 0 0 1 8.6 9h6.8a2.2 2.2 0 0 1 2.1 1.6L19 16"/><path d="M4 16h16v3a1 1 0 0 1-1 1h-1v-2H6v2H5a1 1 0 0 1-1-1v-3Z"/><circle cx="7" cy="16" r="1"/><circle cx="17" cy="16" r="1"/>',
    wrench: '<path d="M14.7 6.3a4.2 4.2 0 0 0-5-5L12 3.6 9.6 6 7.3 3.7a4.2 4.2 0 0 0 5 5L5 16a2.1 2.1 0 1 0 3 3l7.3-7.3a4.2 4.2 0 0 0-.6-5.4Z"/>',
    building: '<path d="M4 21V6l8-3v18M12 8h8v13M2 21h20"/><path d="M7 9h2M7 13h2M7 17h2M15 12h2M15 16h2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    whatsapp: '<path d="M20 11.6a8 8 0 0 1-11.8 7l-4.2 1.1 1.1-4A8 8 0 1 1 20 11.6Z"/><path d="M9 8.3c.4 2.3 2.3 4.2 4.6 4.7"/>',
    headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5ZM20 13h-3v6h2a1 1 0 0 0 1-1v-5Z"/><path d="M17 19c0 1.1-1.8 2-4 2h-1"/>',
    facebook: '<path d="M13.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v8h3.5Z" fill="currentColor" stroke="none"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    arrow: '<path d="m9 18 6-6-6-6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    team: '<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M3.5 20a6 6 0 0 1 11 0"/><path d="M14 20a4.7 4.7 0 0 1 6.5-4.3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A7 7 0 0 1 3 13V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>'
  };

  const icon = (name, className = "") => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.user}</svg>`;

  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const cleanPhone = (phone = "") => String(phone).replace(/\D/g, "");
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
    const cardIcon = contact.icon || "user";
    return `
      <article class="contact-card" id="contact-${esc(contact.id)}">
        <div class="contact-avatar">${icon(cardIcon)}</div>
        <div class="contact-copy">
          <p class="contact-role">${esc(contact.role)}</p>
          <h4>${esc(contact.person)}</h4>
          ${contact.phone ? `<p class="contact-phone">${esc(formatPhone(contact.phone))}</p>` : ""}
          <div class="contact-actions">${contactActions(contact)}</div>
        </div>
      </article>
    `;
  }

  function linkCard(link) {
    return `
      <button class="link-card" type="button" data-view="${esc(link.view)}">
        <span class="link-card-icon">${icon(link.icon || "arrow")}</span>
        <span class="link-card-copy">
          <strong>${esc(link.title)}</strong>
          <small>${esc(link.description || "")}</small>
        </span>
        <span class="link-card-count">${esc(link.countLabel || "")}</span>
      </button>
    `;
  }

  function groupBlock(group) {
    const contacts = group.contacts || [];
    const nested = group.nestedGroups || [];
    const links = group.links || [];
    const total = contacts.length + nested.reduce((sum, item) => sum + (item.contacts?.length || 0), 0);

    return `
      <section class="department-group" id="group-${esc(group.id)}">
        <div class="group-heading">
          <h3>${esc(group.title)}</h3>
          <span>${total} contacto${total === 1 ? "" : "s"}</span>
        </div>

        ${contacts.length ? `<div class="contacts-grid">${contacts.map(contactCard).join("")}</div>` : ""}

        ${links.length ? `
          <div class="shortcut-group">
            <div class="nested-heading">
              <h4>Accesos</h4>
              <span>${links.length} opción${links.length === 1 ? "" : "es"}</span>
            </div>
            <div class="link-card-grid">${links.map(linkCard).join("")}</div>
          </div>
        ` : ""}

        ${nested.map(item => {
          const itemCount = item.contacts?.length || 0;
          const countLabel = item.countLabel || `${itemCount} contacto${itemCount === 1 ? "" : "s"}`;
          return `
            <div class="nested-group" id="nested-${esc(item.id)}">
              <div class="nested-heading">
                <h4>${esc(item.title)}</h4>
                <span>${esc(countLabel)}</span>
              </div>
              <div class="advisor-grid">${(item.contacts || []).map(contactCard).join("")}</div>
            </div>
          `;
        }).join("")}
      </section>
    `;
  }


  function buildSearchIndex() {
    const items = [];

    data.areas.forEach(area => {
      items.push({
        type: "area",
        title: area.name,
        subtitle: area.subtitle,
        icon: area.icon,
        terms: `${area.name} ${area.subtitle}`,
        areaId: area.id
      });

      (area.groups || []).forEach(group => {
        (group.contacts || []).forEach(contact => {
          items.push({
            type: "contact",
            title: contact.person,
            subtitle: contact.role,
            icon: contact.icon || "user",
            terms: `${contact.person} ${contact.role} ${group.title} ${area.name}`,
            areaId: area.id,
            contactId: contact.id
          });
        });

        (group.nestedGroups || []).forEach(nested => {
          (nested.contacts || []).forEach(contact => {
            items.push({
              type: "contact",
              title: contact.person,
              subtitle: contact.role,
              icon: contact.icon || "user",
              terms: `${contact.person} ${contact.role} ${nested.title} ${group.title} ${area.name}`,
              areaId: area.id,
              contactId: contact.id
            });
          });
        });
      });
    });

    (data.advisors || []).forEach(contact => {
      items.push({
        type: "advisor",
        title: contact.person,
        subtitle: contact.role,
        icon: "user",
        terms: `${contact.person} ${contact.role} asesor venta comercial`,
        contactId: contact.id
      });
    });

    return items;
  }

  const normalize = (value = "") => String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  const searchIndex = buildSearchIndex();

  function openSearchResult(item) {
    if (item.type === "area") {
      renderArea(item.areaId);
    } else if (item.type === "advisor") {
      renderAdvisors({ historyMode: "push", contactId: item.contactId });
    } else {
      renderArea(item.areaId, item.contactId);
    }
    clearSearch();
  }

  function clearSearch() {
    const input = document.getElementById("directory-search-input");
    const results = document.getElementById("directory-search-results");
    const clear = document.getElementById("directory-search-clear");
    if (input) input.value = "";
    if (results) {
      results.hidden = true;
      results.innerHTML = "";
    }
    if (clear) clear.hidden = true;
  }

  function setupDirectorySearch() {
    const input = document.getElementById("directory-search-input");
    const results = document.getElementById("directory-search-results");
    const clear = document.getElementById("directory-search-clear");
    if (!input || !results || !clear) return;

    const renderResults = () => {
      const query = normalize(input.value);
      clear.hidden = !query;

      if (query.length < 2) {
        results.hidden = true;
        results.innerHTML = "";
        return;
      }

      const matches = searchIndex
        .filter(item => normalize(item.terms).includes(query))
        .slice(0, 8);

      results.innerHTML = matches.length ? matches.map((item, index) => `
        <button class="search-result" type="button" data-search-index="${index}">
          <span class="search-result-icon">${icon(item.icon)}</span>
          <span class="search-result-copy">
            <strong>${esc(item.title)}</strong>
            <small>${esc(item.subtitle)}</small>
          </span>
          <span class="search-result-arrow">${icon("arrow")}</span>
        </button>
      `).join("") : `
        <div class="search-empty">
          <strong>Sin resultados</strong>
          <span>Prueba con el nombre de un área o persona.</span>
        </div>
      `;

      results.hidden = false;
      results.querySelectorAll("[data-search-index]").forEach(button => {
        button.addEventListener("click", () => openSearchResult(matches[Number(button.dataset.searchIndex)]));
      });
    };

    input.addEventListener("input", renderResults);
    input.addEventListener("keydown", event => {
      if (event.key === "Escape") clearSearch();
    });
    clear.addEventListener("click", () => {
      clearSearch();
      input.focus();
    });

    document.querySelector(".search-leading-icon").innerHTML = icon("search");
  }

  function setupPrivacyModal() {
    const modal = document.getElementById("privacy-modal");
    if (!modal || modal.dataset.ready === "true") return;
    modal.dataset.ready = "true";

    let lastFocused = null;

    const openModal = trigger => {
      lastFocused = trigger || document.activeElement;
      modal.hidden = false;
      document.body.classList.add("privacy-modal-open");
      requestAnimationFrame(() => modal.querySelector(".privacy-close")?.focus());
    };

    const closeModal = () => {
      modal.hidden = true;
      document.body.classList.remove("privacy-modal-open");
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    };

    document.addEventListener("click", event => {
      const open = event.target.closest("[data-open-privacy]");
      if (open) {
        event.preventDefault();
        openModal(open);
        return;
      }

      if (event.target.closest("[data-close-privacy]")) {
        event.preventDefault();
        closeModal();
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  function setupFeedbackForm() {
    const form = document.getElementById("feedback-form");
    if (!form) return;

    const button = form.querySelector("button[type='submit']");
    const status = document.getElementById("feedback-status");
    const config = data.emailjs || {};

    const isConfigured = [config.serviceId, config.templateId, config.publicKey].every(value => {
      return value && !String(value).startsWith("TU_");
    });

    if (!window.emailjs) {
      status.className = "feedback-status error";
      status.textContent = "No se pudo cargar el servicio de correo. Actualiza la página e intenta nuevamente.";
      button.disabled = true;
      return;
    }

    if (!isConfigured) {
      status.className = "feedback-status error";
      status.textContent = "El buzón todavía necesita configurar EmailJS en data.js.";
      button.disabled = true;
      return;
    }

    window.emailjs.init({
      publicKey: config.publicKey,
      blockHeadless: true,
      limitRate: {
        id: "toyota-campeche-feedback",
        throttle: 10000
      }
    });

    form.addEventListener("submit", async event => {
      event.preventDefault();
      status.className = "feedback-status";

      const honeypot = form.elements.website?.value?.trim();
      if (honeypot) {
        form.reset();
        status.classList.add("success");
        status.textContent = "Tu mensaje fue enviado a Atención a Clientes.";
        return;
      }

      const timeField = form.elements.time;
      if (timeField) {
        timeField.value = new Intl.DateTimeFormat("es-MX", {
          dateStyle: "full",
          timeStyle: "short"
        }).format(new Date());
      }

      status.textContent = "Enviando...";
      button.disabled = true;

      try {
        await window.emailjs.sendForm(
          config.serviceId,
          config.templateId,
          form
        );

        form.reset();
        status.classList.add("success");
        status.textContent = "Tu mensaje fue enviado a Atención a Clientes.";
      } catch (error) {
        console.error("EmailJS error:", error);
        status.classList.add("error");
        status.textContent = "No se pudo enviar el mensaje. Intenta nuevamente en unos momentos.";
      } finally {
        button.disabled = false;
      }
    });
  }

  function renderHome({ historyMode = "replace" } = {}) {
    const homeCards = [
      ...data.areas.map(area => ({ type: "area", id: area.id, name: area.name, subtitle: area.subtitle, icon: area.icon })),
      { type: "view", id: "advisors", name: "Asesores de Venta", subtitle: "Directorio completo de los 13 asesores de venta", icon: "team" }
    ];

    document.title = "Toyota Campeche · Directorio de atención";
    app.innerHTML = `
      <section class="home-intro">
        <p class="eyebrow">DIRECTORIO DE ATENCIÓN</p>
        <h2>Selecciona el área que necesitas</h2>
        <p>Consulta responsables y medios de contacto sin salir de esta página.</p>
      </section>

      <section class="area-grid">
        ${homeCards.map(card => `
          <button class="area-card" type="button" data-type="${card.type}" data-target="${esc(card.id)}">
            <span class="area-icon">${icon(card.icon)}</span>
            <span class="area-copy">
              <strong>${esc(card.name)}</strong>
              <small>${esc(card.subtitle)}</small>
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
          <p>Usa los accesos rápidos o entra a cada área para ver solo la información relevante.</p>
        </div>
      </section>

      <section class="feedback-box section-card" id="buzon">
        <div class="feedback-heading">
          <span class="feedback-icon">${icon("message")}</span>
          <div>
            <p class="eyebrow">BUZÓN DE QUEJAS Y SUGERENCIAS</p>
            <h3>Tu opinión nos ayuda a mejorar</h3>
            <p>El mensaje se envía directamente al área de Atención a Clientes.</p>
          </div>
        </div>

        <form id="feedback-form" class="feedback-form">
          <input type="hidden" name="time" value="" />
          <div class="feedback-field">
            <label for="feedback-name">Nombre</label>
            <input id="feedback-name" name="name" type="text" maxlength="100" autocomplete="name" required />
          </div>
          <div class="feedback-field">
            <label for="feedback-phone">Teléfono</label>
            <input id="feedback-phone" name="phone" type="tel" maxlength="25" autocomplete="tel" required />
          </div>
          <div class="feedback-field feedback-field-full">
            <label for="feedback-email">Correo electrónico</label>
            <input id="feedback-email" name="email" type="email" maxlength="160" autocomplete="email" placeholder="nombre@correo.com" required />
          </div>
          <div class="feedback-field feedback-field-full">
            <label for="feedback-comments">Comentarios</label>
            <textarea id="feedback-comments" name="comments" rows="5" maxlength="2500" required></textarea>
          </div>
          <div class="feedback-honeypot" aria-hidden="true">
            <label for="feedback-website">Sitio web</label>
            <input id="feedback-website" name="website" type="text" tabindex="-1" autocomplete="off" />
          </div>
          <div class="privacy-consent feedback-field-full">
            <label class="privacy-check" for="feedback-privacy-consent">
              <input id="feedback-privacy-consent" name="privacy_consent" type="checkbox" value="Aceptado" required />
              <span>He leído y conozco el <button class="privacy-inline-link" type="button" data-open-privacy>Aviso de Privacidad</button>.</span>
            </label>
            <p>Los datos proporcionados serán utilizados para atender y dar seguimiento a tu comentario, queja o sugerencia.</p>
          </div>
          <div class="feedback-submit-row">
            <p class="feedback-privacy">El correo electrónico permitirá que Atención a Clientes pueda responderte directamente.</p>
            <button class="feedback-submit" type="submit">${icon("send")}<span>Enviar mensaje</span></button>
          </div>
          <p id="feedback-status" class="feedback-status" role="status" aria-live="polite"></p>
        </form>
      </section>
    `;

    app.querySelectorAll("[data-target]").forEach(button => {
      button.addEventListener("click", () => {
        if (button.dataset.type === "view" && button.dataset.target === "advisors") {
          renderAdvisors();
          return;
        }
        renderArea(button.dataset.target);
      });
    });

    setupFeedbackForm();

    if (historyMode === "push") {
      history.pushState({ view: "home" }, "", location.pathname + location.search);
    } else if (historyMode === "replace") {
      history.replaceState({ view: "home" }, "", location.pathname + location.search);
    }

    window.scrollTo({ top: Math.max(0, app.offsetTop - 20), behavior: "smooth" });
  }

  function renderArea(areaId, contactId = null, { historyMode = "push" } = {}) {
    const area = data.areas.find(item => item.id === areaId);
    if (!area) return renderHome();

    document.title = `${area.name} · Toyota Campeche`;
    app.innerHTML = `
      <section class="area-header">
        <button class="back-button" type="button" id="back-home">${icon("back")}<span>Volver a áreas</span></button>
        <div class="area-header-main">
          <span class="area-header-icon">${icon(area.icon)}</span>
          <div>
            <p class="eyebrow">TOYOTA CAMPECHE</p>
            <h2>${esc(area.name)}</h2>
            <p>${esc(area.subtitle)}</p>
          </div>
        </div>
      </section>

      <div class="area-content">${area.groups.map(groupBlock).join("")}</div>
    `;

    document.getElementById("back-home").addEventListener("click", () => renderHome({ historyMode: "push" }));
    app.querySelectorAll(".link-card[data-view='advisors']").forEach(button => {
      button.addEventListener("click", () => renderAdvisors());
    });

    if (historyMode === "push") {
      history.pushState({ view: "area", areaId }, "", `#${areaId}`);
    } else if (historyMode === "replace") {
      history.replaceState({ view: "area", areaId }, "", `#${areaId}`);
    }

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
      window.scrollTo({ top: Math.max(0, app.offsetTop - 20), behavior: "smooth" });
    });
  }

  function renderAppointments({ historyMode = "push", contactId = null } = {}) {
    const appointments = data.appointments || [];
    document.title = "Citas · Toyota Campeche";

    app.innerHTML = `
      <section class="area-header appointments-header">
        <button class="back-button" type="button" id="back-home">${icon("back")}<span>Volver a áreas</span></button>
        <div class="area-header-main">
          <span class="area-header-icon">${icon("calendar")}</span>
          <div>
            <p class="eyebrow">TOYOTA CAMPECHE</p>
            <h2>Citas</h2>
            <p>Selecciona el tipo de cita que deseas realizar.</p>
          </div>
        </div>
      </section>

      <section class="department-group appointment-section">
        <div class="group-heading">
          <h3>Tipo de cita</h3>
          <span>${appointments.length} opciones</span>
        </div>
        <div class="contacts-grid appointment-grid">${appointments.map(contactCard).join("")}</div>
      </section>
    `;

    document.getElementById("back-home").addEventListener("click", () => renderHome({ historyMode: "push" }));

    if (historyMode === "push") {
      history.pushState({ view: "appointments" }, "", "#citas");
    } else if (historyMode === "replace") {
      history.replaceState({ view: "appointments" }, "", "#citas");
    }

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
      window.scrollTo({ top: Math.max(0, app.offsetTop - 20), behavior: "smooth" });
    });
  }

  function renderAdvisors({ historyMode = "push", contactId = null } = {}) {
    const advisors = data.advisors || [];
    document.title = "Asesores de Venta · Toyota Campeche";

    app.innerHTML = `
      <section class="area-header advisors-header">
        <button class="back-button" type="button" id="back-commercial">${icon("back")}<span>Volver a área comercial</span></button>
        <div class="area-header-main">
          <span class="area-header-icon">${icon("team")}</span>
          <div>
            <p class="eyebrow">TOYOTA CAMPECHE</p>
            <h2>Asesores de Venta</h2>
            <p>Consulta y edita los datos de los 13 asesores desde esta sección.</p>
          </div>
        </div>
      </section>

      <section class="department-group appointment-section">
        <div class="group-heading">
          <h3>Directorio de asesores</h3>
          <span>${advisors.length} asesores</span>
        </div>
        <div class="advisor-grid advisors-page-grid">${advisors.map(contactCard).join("")}</div>
      </section>
    `;

    document.getElementById("back-commercial").addEventListener("click", () => renderArea("comercial", null, { historyMode: "push" }));

    if (historyMode === "push") {
      history.pushState({ view: "advisors" }, "", "#asesores");
    } else if (historyMode === "replace") {
      history.replaceState({ view: "advisors" }, "", "#asesores");
    }

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
      window.scrollTo({ top: Math.max(0, app.offsetTop - 20), behavior: "smooth" });
    });
  }

  function setupQuickActions() {
    document.getElementById("quick-location").href = data.agency.mapsUrl;
    document.getElementById("quick-web").href = data.agency.website;
    document.getElementById("quick-facebook").href = data.agency.facebook;
    document.getElementById("mobile-facebook").href = data.agency.facebook;

    document.querySelectorAll(".quick-icon[data-icon], .mobile-bar-icon[data-icon]").forEach(container => {
      container.innerHTML = icon(container.dataset.icon);
    });

    document.querySelectorAll("[data-jump-area]").forEach(button => {
      button.addEventListener("click", () => renderArea(button.dataset.jumpArea, button.dataset.jumpContact || null));
    });

    document.querySelectorAll("[data-open-appointments]").forEach(button => {
      button.addEventListener("click", () => renderAppointments());
    });
  }

  window.addEventListener("popstate", () => {
    const hash = location.hash.replace("#", "");
    if (hash === "citas") {
      renderAppointments({ historyMode: "none" });
    } else if (hash === "asesores") {
      renderAdvisors({ historyMode: "none" });
    } else if (hash && data.areas.some(area => area.id === hash)) {
      renderArea(hash, null, { historyMode: "none" });
    } else {
      renderHome({ historyMode: "none" });
    }
  });

  setupPrivacyModal();
  setupQuickActions();
  setupDirectorySearch();

  const initialView = location.hash.replace("#", "");
  if (initialView === "citas") {
    renderAppointments({ historyMode: "replace" });
  } else if (initialView === "asesores") {
    renderAdvisors({ historyMode: "replace" });
  } else if (initialView && data.areas.some(area => area.id === initialView)) {
    renderArea(initialView, null, { historyMode: "replace" });
  } else {
    renderHome({ historyMode: "replace" });
  }
})();

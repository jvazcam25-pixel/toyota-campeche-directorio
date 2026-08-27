(() => {
  const data = window.TOYOTA_CAMPECHE_DATA;
  const grid = document.getElementById('directory-grid');
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('department-search');
  const departmentSelect = document.getElementById('department-select');

  const cleanPhone = (value) => String(value || '').replace(/\D/g, '');
  const formatPhone = (value) => {
    const n = cleanPhone(value);
    if (n.length === 10) return `${n.slice(0,3)} ${n.slice(3,6)} ${n.slice(6)}`;
    return value;
  };

  const whatsappUrl = (phone, text = '') => {
    const p = cleanPhone(phone);
    const countryPhone = p.length === 10 ? `52${p}` : p;
    return `https://wa.me/${countryPhone}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
  };

  const icons = {
    location: '<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.3 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.4.8 1 1.5 1.7 2.1.8.7 1.5 1 2.4 1.3.3.1.5 0 .7-.2l.9-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.5.2.5.4.1.2.1 1.1-.3 1.7-.4.6-1.7 1.3-2.4 1.3-.7 0-1.6.2-5.2-1.4-4.3-1.9-6-6.6-6.2-6.9-.2-.3-1.5-2-.1-3.8Z"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    contact: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="9" r="2.5"/><path d="M7.5 17c1-2.2 2.5-3.2 4.5-3.2s3.5 1 4.5 3.2"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M4 19V9M10 19V5M16 19v-7M22 19H2M3 12l6-5 5 3 7-7"/></svg>',
    users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 19c.8-4 3-6 6-6s5.2 2 6 6"/><circle cx="17" cy="9" r="2"/><path d="M15 14c3.2-.3 5.2 1.3 6 5"/></svg>',
    bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
    wrench: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.6 7 6.3 4.7a4 4 0 0 0 5 5L4 17l3 3 7.3-7.3a4 4 0 0 0 5-5L17 10l-3.4-3.4Z"/></svg>',
    gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>',
    card: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 15h4"/></svg>',
    headset: '<svg viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5ZM20 14h-3v6h2a1 1 0 0 0 1-1v-5ZM17 20c-1 1-2.7 1-5 1"/></svg>',
    wallet: '<svg viewBox="0 0 24 24"><path d="M4 6h15a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h13"/><path d="M21 11h-5a2 2 0 0 0 0 4h5"/></svg>'
  };

  const icon = (name) => icons[name] || icons.contact;

  function injectStaticIcons() {
    document.querySelectorAll('[data-icon]').forEach((node) => {
      node.innerHTML = icon(node.dataset.icon);
    });
  }

  function cardTemplate(item) {
    return `
      <article class="contact-card" data-search="${`${item.department} ${item.person} ${item.role}`.toLowerCase()}">
        <div class="contact-top">
          <div class="department-icon">${icon(item.icon)}</div>
          <div>
            <h3>${item.department}</h3>
            <p class="person">${item.person}</p>
            <p class="role">${item.role}</p>
            <p class="phone-number">${formatPhone(item.phone)}</p>
          </div>
        </div>
        <div class="contact-actions">
          <a class="mini-action call" href="tel:${cleanPhone(item.phone)}">${icon('phone')}<span>Llamar</span></a>
          <a class="mini-action wa" href="${whatsappUrl(item.whatsapp, `Hola, deseo comunicarme con ${item.department} de Toyota Campeche.`)}" target="_blank" rel="noreferrer">${icon('whatsapp')}<span>WhatsApp</span></a>
          <a class="mini-action email" href="mailto:${item.email}">${icon('mail')}<span>Correo</span></a>
        </div>
      </article>
    `;
  }

  function renderDepartments(list = data.departments) {
    grid.innerHTML = list.map(cardTemplate).join('');
    emptyState.hidden = list.length !== 0;
  }

  function populateSelect() {
    departmentSelect.innerHTML = data.departments
      .map((d) => `<option value="${d.department}">${d.department}</option>`)
      .join('');
  }

  function makeGeneralVCard() {
    const content = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${data.agency.name}`,
      `ORG:${data.agency.name}`,
      `TEL;TYPE=WORK,VOICE:${cleanPhone(data.agency.receptionPhone)}`,
      `TEL;TYPE=CELL:${cleanPhone(data.agency.generalWhatsapp)}`,
      `EMAIL:${data.agency.email}`,
      `URL:${data.agency.website}`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([content], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Toyota-Campeche.vcf';
    a.click();
    URL.revokeObjectURL(url);
  }

  function wireAgencyActions() {
    document.getElementById('quick-location').href = data.agency.mapsUrl;
    document.getElementById('main-location').href = data.agency.mapsUrl;
    document.getElementById('quick-phone').href = `tel:${cleanPhone(data.agency.receptionPhone)}`;
    document.getElementById('quick-whatsapp').href = whatsappUrl(data.agency.generalWhatsapp, 'Hola Toyota Campeche, necesito información.');
    document.getElementById('quick-web').href = data.agency.website;
    document.getElementById('save-general').addEventListener('click', (event) => {
      event.preventDefault();
      makeGeneralVCard();
    });
  }

  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    const filtered = data.departments.filter((item) =>
      `${item.department} ${item.person} ${item.role}`.toLowerCase().includes(term)
    );
    renderDepartments(filtered);
  });

  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      `Hola Toyota Campeche. Soy ${form.get('name')}.`,
      form.get('phone') ? `Mi teléfono es ${form.get('phone')}.` : '',
      `Deseo comunicarme con: ${form.get('department')}.`,
      `Mensaje: ${form.get('message')}`
    ].filter(Boolean).join('\n');

    window.open(whatsappUrl(data.agency.generalWhatsapp, message), '_blank', 'noopener,noreferrer');
  });

  injectStaticIcons();
  renderDepartments();
  populateSelect();
  wireAgencyActions();
})();

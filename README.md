# Toyota Campeche · Directorio V9

Esta versión cambia el envío del Buzón de Quejas y Sugerencias de Resend a **EmailJS**.

## Qué cambia

- Ya no se usa `/api/feedback.js`.
- Ya no necesitas variables de entorno en Vercel para el buzón.
- El formulario se envía directamente mediante EmailJS.
- El correo del usuario puede configurarse como `Reply-To` en la plantilla de EmailJS.
- Puedes configurar BCC al Gerente General desde la plantilla de EmailJS.
- Se mantiene el buscador, áreas, asesores, horarios, accesos y diseño de la V8.

## Archivos que debes sustituir en GitHub

- `index.html`
- `data.js`
- `app.js`
- `styles.css`

También puedes reemplazar los demás archivos para mantener la versión completa sincronizada.

### Importante

Elimina de GitHub la carpeta antigua:

`api/feedback.js`

Ya no se utiliza en V9.

## Configuración de EmailJS

Después de crear tu cuenta de EmailJS necesitas tres datos:

- Service ID
- Template ID
- Public Key

Abre `data.js` y busca:

```js
emailjs: {
  serviceId: "TU_SERVICE_ID",
  templateId: "TU_TEMPLATE_ID",
  publicKey: "TU_PUBLIC_KEY"
},
```

Reemplaza esos tres valores por los datos reales de EmailJS.

## Variables que manda el formulario

La plantilla de EmailJS recibe:

- `{{name}}`
- `{{phone}}`
- `{{email}}`
- `{{comments}}`
- `{{time}}`

### Plantilla recomendada

**To Email:** correo real de Atención a Clientes

**From Name:** Toyota Campeche - Buzón Web

**From Email:** usa la dirección por defecto del servicio conectado

**Reply-To:**

`{{email}}`

**BCC:** correo real del Gerente General

**Subject:**

`Nueva queja o sugerencia - {{name}}`

**Contenido:**

```text
Nueva queja o sugerencia recibida desde el Directorio Toyota Campeche.

Nombre: {{name}}
Teléfono: {{phone}}
Correo: {{email}}
Fecha y hora: {{time}}

Comentarios:
{{comments}}
```

## Seguridad

La Public Key de EmailJS está diseñada para utilizarse en el navegador. No coloques contraseñas, tokens privados ni claves privadas en `data.js`.

La V9 también incluye:

- campo oculto antispam básico (honeypot)
- bloqueo de navegadores headless mediante EmailJS
- límite cliente de una solicitud cada 10 segundos

Para una publicación masiva se recomienda añadir reCAPTCHA V2 desde EmailJS si empieza a recibirse spam.

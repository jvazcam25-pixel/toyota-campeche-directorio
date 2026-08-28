# Toyota Campeche · Directorio digital V4

Versión unificada con los ajustes solicitados.

## Cambios incluidos

- La pantalla principal muestra **Atención a clientes** en lugar de Recepción y dirige al contacto del Gerente de Atención a Clientes.
- Se agregó acceso directo a **Facebook**: https://www.facebook.com/toyotacampeche
- Se eliminó **Caja** de Administración Comercial.
- En la portada, la palabra TOYOTA fue sustituida por un logotipo gráfico ubicado en `assets/toyota-logo.svg`.
- Los 13 asesores de venta ahora incluyen teléfono, WhatsApp y correo editables.
- Se conservan Cita de Servicio y Cita de Ventas, además de los iconos de Ubicación, Citas y Sitio web.

## Editar datos

Modifica `data.js`. Los asesores se generan con la función `asesorVenta(numero)`. Puedes sustituir el teléfono, WhatsApp, nombre y correo por datos reales.

## Publicar

Sustituye en GitHub `index.html`, `styles.css`, `data.js` y `app.js`, y agrega/actualiza `assets/toyota-logo.svg`. Vercel desplegará automáticamente los cambios.

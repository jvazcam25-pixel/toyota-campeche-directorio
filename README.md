# Toyota Campeche · Directorio digital V2

Esta versión funciona como una sola página (SPA sencilla): al tocar un área, JavaScript cambia el contenido de la misma página sin abrir otra URL ni recargar el sitio.

## Estructura

- `index.html` — estructura principal.
- `styles.css` — diseño visual y adaptación móvil.
- `app.js` — renderizado y navegación interna.
- `data.js` — nombres, correos, teléfonos, WhatsApp y jerarquía de áreas.
- `assets/agencia.jpg` — fotografía de cabecera.

## Áreas incluidas

### Área Comercial
- Gerente General
- Gerente de Ventas
  - Recepción
  - Gerente de Atención a Clientes
  - 13 espacios para Asesores de Venta
- Gerente de Financiamiento
- Gerente Administrativo
  - Caja

### Área de Postventa
- Gerente de Postventa
- Gerente Administrativo de Postventa
- Gerente de Refacciones
- Citas
- Garantías

### Área Administrativa
- Desarrollo Organizacional
- Kaizen

## Reglas de contacto

- Recepción y Citas: teléfono + WhatsApp + correo.
- Gerente de Atención a Clientes: teléfono + correo.
- Todos los demás: solo correo.

## Cómo editar contactos

Abre `data.js` en GitHub, cambia los valores y pulsa **Commit changes**. Vercel actualizará la página automáticamente.

## Tipografía Toyota Type

El CSS ya está preparado para usar Toyota Type. Los archivos de fuente autorizados no se incluyen en el proyecto. Si la agencia dispone de los webfonts, colócalos en:

`assets/fonts/`

con los nombres indicados al inicio de `styles.css`.

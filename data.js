/*
  EDITA ESTE ARCHIVO PARA CAMBIAR NOMBRES, CORREOS, TELÉFONOS Y WHATSAPP.
  Todos los datos de esta versión son ficticios.

  Reglas de contacto solicitadas:
  - Recepción y Citas: WhatsApp + teléfono + correo.
  - Gerente de Atención a Clientes: teléfono + correo.
  - Todos los demás: solo correo.
*/

const asesorVenta = (numero) => ({
  id: `asesor-${String(numero).padStart(2, "0")}`,
  role: `Asesor de Venta ${String(numero).padStart(2, "0")}`,
  person: `Nombre del asesor ${String(numero).padStart(2, "0")}`,
  email: `asesor${String(numero).padStart(2, "0")}@ejemplo.com`
});

window.TOYOTA_CAMPECHE_DATA = {
  agency: {
    name: "Toyota Campeche",
    website: "https://www.toyotacampeche.mx/",
    mapsUrl: "https://maps.google.com/?q=Toyota+Campeche"
  },

  areas: [
    {
      id: "comercial",
      name: "Área Comercial",
      subtitle: "Ventas, atención, financiamiento y administración comercial",
      icon: "car",
      groups: [
        {
          id: "direccion-comercial",
          title: "Dirección",
          contacts: [
            {
              id: "gerente-general",
              role: "Gerente General",
              person: "Lic. Alejandro Méndez",
              email: "gerencia.general@ejemplo.com"
            }
          ]
        },
        {
          id: "gerencia-ventas",
          title: "Gerencia de Ventas",
          contacts: [
            {
              id: "gerente-ventas",
              role: "Gerente de Ventas",
              person: "Lic. Carlos Rodríguez",
              email: "gerencia.ventas@ejemplo.com"
            },
            {
              id: "recepcion",
              role: "Recepción",
              person: "Ana López",
              phone: "9811231004",
              whatsapp: "9811231004",
              email: "recepcion@ejemplo.com"
            },
            {
              id: "gerente-atencion-clientes",
              role: "Gerente de Atención a Clientes",
              person: "Andrea Morales",
              phone: "9811231008",
              email: "atencion.clientes@ejemplo.com"
            }
          ],
          nestedGroups: [
            {
              id: "asesores-venta",
              title: "Asesores de Venta",
              contacts: Array.from({ length: 13 }, (_, index) => asesorVenta(index + 1))
            }
          ]
        },
        {
          id: "financiamiento",
          title: "Financiamiento",
          contacts: [
            {
              id: "gerente-financiamiento",
              role: "Gerente de Financiamiento",
              person: "Roberto García",
              email: "financiamiento@ejemplo.com"
            }
          ]
        },
        {
          id: "administracion-comercial",
          title: "Administración Comercial",
          contacts: [
            {
              id: "gerente-administrativo",
              role: "Gerente Administrativo",
              person: "C.P. María Hernández",
              email: "administracion.comercial@ejemplo.com"
            },
            {
              id: "caja",
              role: "Caja",
              person: "Laura Castillo",
              email: "caja@ejemplo.com"
            }
          ]
        }
      ]
    },

    {
      id: "postventa",
      name: "Área de Postventa",
      subtitle: "Servicio, refacciones, citas y garantías",
      icon: "wrench",
      groups: [
        {
          id: "direccion-postventa",
          title: "Dirección de Postventa",
          contacts: [
            {
              id: "gerente-postventa",
              role: "Gerente de Postventa",
              person: "Ing. José Martínez",
              email: "gerencia.postventa@ejemplo.com"
            }
          ]
        },
        {
          id: "operacion-postventa",
          title: "Operación de Postventa",
          contacts: [
            {
              id: "gerente-administrativo-postventa",
              role: "Gerente Administrativo de Postventa",
              person: "Patricia Gómez",
              email: "administracion.postventa@ejemplo.com"
            },
            {
              id: "gerente-refacciones",
              role: "Gerente de Refacciones",
              person: "Juan Pérez",
              email: "refacciones@ejemplo.com"
            },
            {
              id: "citas",
              role: "Citas",
              person: "Mariana Torres",
              phone: "9811231011",
              whatsapp: "9811231011",
              email: "citas@ejemplo.com"
            },
            {
              id: "garantias",
              role: "Garantías",
              person: "Daniel Ruiz",
              email: "garantias@ejemplo.com"
            }
          ]
        }
      ]
    },

    {
      id: "administrativa",
      name: "Área Administrativa",
      subtitle: "Desarrollo organizacional y mejora continua",
      icon: "building",
      groups: [
        {
          id: "gestion-administrativa",
          title: "Gestión Administrativa",
          contacts: [
            {
              id: "desarrollo-organizacional",
              role: "Desarrollo Organizacional",
              person: "Sofía Hernández",
              email: "desarrollo.organizacional@ejemplo.com"
            },
            {
              id: "kaizen",
              role: "Kaizen",
              person: "Miguel Sánchez",
              email: "kaizen@ejemplo.com"
            }
          ]
        }
      ]
    }
  ]
};

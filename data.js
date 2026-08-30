/*
  EDITA ESTE ARCHIVO PARA CAMBIAR NOMBRES, CORREOS, TELÉFONOS Y WHATSAPP.
  Todos los datos de esta versión son ficticios.

  Reglas de contacto solicitadas:
  - Atención a Clientes: teléfono + correo.
  - Cita de Servicio y Cita de Ventas: WhatsApp + teléfono + correo.
  - Asesores de Venta: teléfono + WhatsApp + correo.
  - Todos los demás: solo correo.
*/

const salesAdvisors = [
  {
    id: "asesor-01",
    role: "Asesor de Venta",
    person: "Nombre asesor 01",
    whatsapp: "9810000001",
    email: "asesor01@ejemplo.com"
  },
  {
    id: "asesor-02",
    role: "Asesor de Venta",
    person: "Nombre asesor 02",
    whatsapp: "9810000002",
    email: "asesor02@ejemplo.com"
  },
  {
    id: "asesor-03",
    role: "Asesor de Venta",
    person: "Nombre asesor 03",
    whatsapp: "9810000003",
    email: "asesor03@ejemplo.com"
  },
  {
    id: "asesor-04",
    role: "Asesor de Venta",
    person: "Nombre asesor 04",
    whatsapp: "9810000004",
    email: "asesor04@ejemplo.com"
  },
  {
    id: "asesor-05",
    role: "Asesor de Venta",
    person: "Nombre asesor 05",
    whatsapp: "9810000005",
    email: "asesor05@ejemplo.com"
  },
  {
    id: "asesor-06",
    role: "Asesor de Venta",
    person: "Nombre asesor 06",
    whatsapp: "9810000006",
    email: "asesor06@ejemplo.com"
  },
  {
    id: "asesor-07",
    role: "Asesor de Venta",
    person: "Nombre asesor 07",
    whatsapp: "9810000007",
    email: "asesor07@ejemplo.com"
  },
  {
    id: "asesor-08",
    role: "Asesor de Venta",
    person: "Nombre asesor 08",
    whatsapp: "9810000008",
    email: "asesor08@ejemplo.com"
  },
  {
    id: "asesor-09",
    role: "Asesor de Venta",
    person: "Nombre asesor 09",
    whatsapp: "9810000009",
    email: "asesor09@ejemplo.com"
  },
  {
    id: "asesor-10",
    role: "Asesor de Venta",
    person: "Nombre asesor 10",
    whatsapp: "9810000010",
    email: "asesor10@ejemplo.com"
  },
  {
    id: "asesor-11",
    role: "Asesor de Venta",
    person: "Nombre asesor 11",
    whatsapp: "9810000011",
    email: "asesor11@ejemplo.com"
  },
  {
    id: "asesor-12",
    role: "Asesor de Venta",
    person: "Nombre asesor 12",
    whatsapp: "9810000012",
    email: "asesor12@ejemplo.com"
  },
  {
    id: "asesor-13",
    role: "Asesor de Venta",
    person: "Nombre asesor 13",
    whatsapp: "9810000013",
    email: "asesor13@ejemplo.com"
  }
];

const citaVentas = {
  id: "cita-ventas",
  role: "Cita de Ventas",
  person: "Area digital",
  phone: "9811231012",
  whatsapp: "9811231012",
  email: "citas.ventas@ejemplo.com",
  icon: "calendar"
};

const citaServicio = {
  id: "cita-servicio",
  role: "Cita de Servicio",
  person: "Lic. Lizbeth Jazmin Barrancos Garcia",
  phone: "9811231011",
  whatsapp: "9811231011",
  email: "citas@toyotacampeche.com.mx",
  icon: "calendar"
};

window.TOYOTA_CAMPECHE_DATA = {
  agency: {
    name: "Toyota Campeche",
    website: "https://www.toyotacampeche.com.mx/",
    mapsUrl: "https://maps.google.com/?q=Toyota+Campeche",
    facebook: "https://www.facebook.com/toyotacampeche"
  },

  emailjs: {
    serviceId: "service_4wcv4cf",
    templateId: "template_yhvd7lr",
    publicKey: "gtkVhLXO-VWyPXnma"
  },

  advisors: salesAdvisors,
  appointments: [citaServicio, citaVentas],

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
              person: "Lic. Oscar Miguel Montejo Meillon",
              email: "gerencia121@grupocruces.com.mx"
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
              person: "Ing. Octavio Ismael Ceballos Garcia",
              email: "jefe126@grupocruces.com.mx"
            },
            {
              id: "gerente-atencion-clientes",
              role: "Gerente de Atención a Clientes",
              person: "Lic. Walther Ivan Rinfor Paat",
              phone: "9811231008",
              email: "asistente123@grupocruces.com.mx",
              icon: "headset"
            }
          ],
          nestedGroups: [
            {
              id: "citas-ventas",
              title: "Citas",
              countLabel: "Cita de Ventas",
              contacts: [citaVentas]
            }
          ],
          links: [
            {
              id: "ver-asesores",
              title: "Asesores de Venta",
              description: "Abre el directorio de los 13 asesores de venta.",
              countLabel: "13 asesores",
              icon: "team",
              view: "advisors"
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
              person: "Lic. Omar Gonzalez Avila",
              email: "fandi@toyotacampeche.com.mx"
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
              person: "Lic. Nancy Beatriz Huchin Moo",
              email: "jefe121@grupocruces.com.mx"
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
              person: "Ing. Sergio Gabino Gallardo Ramirez",
              email: "gerencia122@grupocruces.com.mx"
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
              person: "Lic. Sonia Nayeli Chable Uc",
              email: "jefe123@grupocruces.com.mx"
            },
            {
              id: "gerente-refacciones",
              role: "Gerente de Refacciones",
              person: "Lic. Jose Oswaldo Huchin Piste",
              email: "almacen@toyotacampeche.com.mx"
            },
            {
              id: "garantias",
              role: "Garantías",
              person: "Lic. Anaeli Yazmin Cahuich Cahuich",
              email: "garantias@toyotacampeche.com.mx"
            }
          ],
          nestedGroups: [
            {
              id: "citas-servicio",
              title: "Citas",
              countLabel: "Cita de Servicio",
              contacts: [citaServicio]
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
              person: "Lic. Katia Guadalupe Chavez Rivera",
              email: "analista122@grupocruces.com.mx"
            },
            {
              id: "kaizen",
              role: "Kaizen",
              person: "Lic. Rosa Esther Mis Huchin",
              email: "supervisor121@grupocruces.com.mx"
            }
          ]
        }
      ]
    }
  ]
};

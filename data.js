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
    id: "asesor-12",
    role: "Asesor de Venta Digital",
    person: "Jorge Ruy Vazquez Cambranis",
    whatsapp: "9994110816",
    email: "ventas126@grupocruces.com.mx"
  },
  {
    id: "asesor-13",
    role: "Asesor de Venta Digital",
    person: "Katia Berenice Zamarron Mederos",
    whatsapp: "9811821348",
    email: "asesor13@ejemplo.com"
  },
  {
    id: "asesor-01",
    role: "Asesor de Venta",
    person: "Martha Rocha Segura",
    whatsapp: "9811246065",
    email: "ventas128@grupocruces.com.mx"
  },
  {
    id: "asesor-02",
    role: "Asesor de Venta",
    person: "Emilio Miguel Olivares Sosa",
    whatsapp: "9811527158",
    email: "ventas122@grupocruces.com.mx"
  },
  {
    id: "asesor-03",
    role: "Asesor de Venta",
    person: "Wilbert Martin Aguilar Aguilar",
    whatsapp: "9811545158",
    email: "ventas1212@grupocruces.com.mx"
  },
  {
    id: "asesor-04",
    role: "Asesor de Venta",
    person: "Rafael Morales Peralta",
    whatsapp: "9811128460",
    email: "ventas123@grupocruces.com.mx"
  },
  {
    id: "asesor-05",
    role: "Asesor de Venta",
    person: "Pedro de la Peña Vallejo Ventura",
    whatsapp: "9811015003",
    email: "ventas121@grupocruces.com.mx"
  },
  {
    id: "asesor-06",
    role: "Asesor de Venta",
    person: "Pedro Candelario Puc Tun",
    whatsapp: "9811756978",
    email: "ventas1210@grupocruces.com.mx"
  },
  {
    id: "asesor-07",
    role: "Asesor de Venta",
    person: "Ingris Suyapa Sosa Andino",
    whatsapp: "9812030250",
    email: "ventas129@grupocruces.com.mx"
  },
  {
    id: "asesor-08",
    role: "Asesor de Venta",
    person: "Flor de Li Santos Hernandez",
    whatsapp: "9381643037",
    email: "asesor08@ejemplo.com"
  },
  {
    id: "asesor-09",
    role: "Asesor de Venta",
    person: "Jose Fernando Perez Escobar",
    whatsapp: "9818183458",
    email: "asesor09@ejemplo.com"
  },
  {
    id: "asesor-10",
    role: "Asesor de Venta",
    person: "Benito del Jesus Hernandez Chin",
    whatsapp: "9818295145",
    email: "ventas1211@grupocruces.com.mx"
  },
  {
    id: "asesor-11",
    role: "Asesor de Venta",
    person: "Irving Gibram Burgos Morales",
    whatsapp: "9993921784",
    email: "ventas1214@grupocruces.com.mx"
  }
];

const citaVentas = {
  id: "cita-ventas",
  role: "Cita de Ventas",
  person: "Area digital",
  phone: "9811273000,,101",
  whatsapp: "981578747",
  whatsapp: "9812084241",
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

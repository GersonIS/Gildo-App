import React from "react";
import Proyectos from "../components/Proyectos";

const publicidad = {
  publicidad_exterior: {
    title: "Proyectos de Publicidad Exterior",
    description:
      "Desarrollamos proyectos de publicidad exterior, incluyendo vallas y letreros que garantizan la mejor visibilidad de tu marca.",
  },
};

const publicidadProjects = {
  publicidadExterior: [
    {
      id: 1,
      name: "Instalación de letreros luminosos",
      description: "Letreros luminosos para fachadas comerciales.",
      imageUrl: "/images/servicios.jpg",
      slug: "/publicidad-exterior/letreros-luminosos",
    },
    {
      id: 2,
      name: "Rotulación de vehículos comerciales",
      description: "Rotulación de autos y camiones con publicidad móvil.",
      imageUrl: "/images/servicios.jpg",
      slug: "/publicidad-exterior/rotulacion-vehiculos",
    },
    {
      id: 3,
      name: "Vallas publicitarias",
      description:
        "Diseño e instalación de vallas publicitarias para campañas masivas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/publicidad-exterior/vallas-publicitarias",
    },
    {
      id: 4,
      name: "Tótems publicitarios",
      description:
        "Tótems de gran altura para identificar negocios desde la carretera.",
      imageUrl: "/images/servicios.jpg",
      slug: "/publicidad-exterior/totems-publicitarios",
    },
    {
      id: 5,
      name: "Señalización exterior para empresas",
      description: "Instalación de señalización exterior personalizada.",
      imageUrl: "/images/servicios.jpg",
      slug: "/publicidad-exterior/senalizacion-exterior",
    },
    {
      id: 6,
      name: "Lonas publicitarias de gran formato",
      description:
        "Impresión e instalación de lonas para eventos y promociones.",
      imageUrl: "/images/servicios.jpg",
      slug: "/publicidad-exterior/lonas-gran-formato",
    },
    {
      id: 7,
      name: "Pantallas LED para publicidad exterior",
      description: "Pantallas LED dinámicas para publicidad en exteriores.",
      imageUrl: "/images/servicios.jpg",
      slug: "/publicidad-exterior/pantallas-led",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={publicidad.publicidad_exterior.title}
        description={publicidad.publicidad_exterior.description}
        projects={publicidadProjects.publicidadExterior}
      />
    </div>
  );
};

export default Page;

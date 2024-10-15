import React from "react";
import Proyectos from "../components/Proyectos";

const sistema = {
  sistema_seguridad: {
    title: "Proyectos de Sistemas de Seguridad",
    description:
      "Instalación de sistemas de seguridad avanzados, incluyendo cámaras, alarmas y control de accesos para hogares y empresas.",
  },
};

const sistemaProjects = {
  sistemaSeguridad: [
    {
      id: 1,
      name: "Instalación de cámaras de seguridad",
      description:
        "Cámaras de videovigilancia para monitoreo de instalaciones.",
      imageUrl: "/images/servicios.jpg",
      slug: "/sistema-de-seguridad/camaras-vigilancia",
    },
    {
      id: 2,
      name: "Sistemas de control de acceso",
      description: "Sistemas de control biométrico para acceso restringido.",
      imageUrl: "/images/servicios.jpg",
      slug: "/sistema-de-seguridad/control-acceso",
    },
    {
      id: 3,
      name: "Alarmas contra incendios",
      description: "Sistemas de detección y alarma contra incendios.",
      imageUrl: "/images/servicios.jpg",
      slug: "/sistema-de-seguridad/alarmas-incendios",
    },
    {
      id: 4,
      name: "Instalación de cercos eléctricos",
      description: "Cercos eléctricos para protección perimetral.",
      imageUrl: "/images/servicios.jpg",
      slug: "/sistema-de-seguridad/cercos-electricos",
    },
    {
      id: 5,
      name: "Sistemas de intercomunicación",
      description: "Sistemas de intercomunicadores para edificios y empresas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/sistema-de-seguridad/intercomunicacion",
    },
    {
      id: 6,
      name: "Instalación de detectores de humo",
      description: "Detectores de humo para sistemas de seguridad en oficinas.",
      imageUrl: "/images/servicios.jpg",
      slug: "/sistema-de-seguridad/detectores-humo",
    },
    {
      id: 7,
      name: "Cámaras IP para vigilancia remota",
      description:
        "Cámaras de seguridad conectadas a la nube para monitoreo remoto.",
      imageUrl: "/images/servicios.jpg",
      slug: "/sistema-de-seguridad/camaras-ip",
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Proyectos
        title={sistema.sistema_seguridad.title}
        description={sistema.sistema_seguridad.description}
        projects={sistemaProjects.sistemaSeguridad}
      />
    </div>
  );
};

export default Page;

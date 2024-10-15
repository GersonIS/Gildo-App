"use client";
import Proyectos from "@/app/components/ProyectoDetail";
import React from "react";
import { useParams } from "next/navigation";

// Función para convertir el nombre a PascalCase y eliminar guiones
const toPascalCase = (str: string): string => {
  return str
    .replace(/-/g, " ") // Reemplazar guiones por espacios
    .split(" ") // Separar en palabras
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalizar la primera letra de cada palabra
    .join(" "); // Unir las palabras sin espacios
};

const images: string[] = [
  "/images/servicios.jpg",
  "/images/servicios.jpg",
  "/images/servicios.jpg",
  "/images/servicios.jpg",
  "/images/servicios.jpg",
  "/images/servicios.jpg",
  "/images/servicios.jpg",
  // Agrega más URLs de imágenes según sea necesario
];

const Page: React.FC = () => {
  const router = useParams();
  const projectName = router.slug as string; // Asegurar que slug sea un string

  // Procesar el nombre del proyecto
  const processedProjectName = toPascalCase(projectName);

  return (
    <div>
      <Proyectos
        title="Detalles del Proyecto"
        projectName={processedProjectName} // Pasar el nombre procesado
        images={images}
      />
    </div>
  );
};

export default Page;

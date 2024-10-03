"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    name: "Instalaciones y Reparaciones",
    imageUrl: "/images/servicios.jpg",
    slug: "/servicios/instalaciones-reparaciones", // Ruta de la página del servicio
  },
  {
    id: 2,
    name: "Diseño y Fabricación de Muebles",
    imageUrl: "/images/servicios.jpg",
    slug: "/servicios/diseno-fabricacion-muebles",
  },
  {
    id: 3,
    name: "Carpintería",
    imageUrl: "/images/servicios.jpg",
    slug: "/servicios/carpinteria",
  },
  {
    id: 4,
    name: "Gasfitería",
    imageUrl: "/images/servicios.jpg",
    slug: "/servicios/gasfiteria",
  },
  {
    id: 5,
    name: "Pintura",
    imageUrl: "/images/servicios.jpg",
    slug: "/servicios/pintura",
  },
  {
    id: 6,
    name: "Drywall",
    imageUrl: "/images/servicios.jpg",
    slug: "/servicios/drywall",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-12 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: service.id * 0.1 }}
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl group"
            >
              {/* Enlace envolviendo la imagen */}
              <Link href={service.slug} className="block relative">
                {/* Imagen del servicio */}
                <motion.img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-300"
                />
                {/* Texto centrado en la imagen */}
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80">
                  <h3 className="text-2xl  text-black drop-shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                    {service.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

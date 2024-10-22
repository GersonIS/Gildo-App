"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { id: 1, name: "Drywall", slug: "/drywall" },
  { id: 2, name: "Melamine", slug: "/melamine" },
  { id: 3, name: "Climatización", slug: "/climatizacion" },
  { id: 4, name: "Electricidad", slug: "/electricidad" },
  { id: 5, name: "Vidriería", slug: "/vidrieria" },
  {
    id: 6,
    name: "Publicidad Exterior",
    slug: "/publicidad-exterior",
  },
  { id: 7, name: "Diseños CAD", slug: "/disenos-cad" },
  { id: 8, name: "Acero Inoxidable", slug: "/acero-inoxidable" },
  { id: 9, name: "Sistema de Seguridad", slug: "/sistema-de-seguridad" },
  { id: 10, name: "Pintura", slug: "/pintura" },
  { id: 11, name: "Gasfitería", slug: "/gasfiteria" },
  {
    id: 12,
    name: "Estructuras Metálicas",
    slug: "/estructuras-metalicas",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/images/servicios.jpg')`, // URL de la imagen de fondo
      }}
    >
      {/* Superposición de color para mejor legibilidad */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto px-4 lg:px-8 text-white"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: service.id * 0.1 }}
              className="relative bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 flex items-center justify-center text-center transition-all duration-300 transform hover:scale-150 hover:shadow-2xl"
            >
              <Link href={service.slug} className="block w-full">
                <div className="flex flex-col justify-center items-center h-full">
                  <motion.h3
                    className="text-2xl font-semibold text-white mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.name}
                  </motion.h3>
                  <motion.div
                    className="h-1 w-16 bg-blue-600 rounded-full mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: "4rem" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Botón Cotizar Fijo */}
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
        >
          Cotizar
        </motion.button>
      </motion.div>
    </section>
  );
}

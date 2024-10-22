"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaHandshake, FaIndustry } from "react-icons/fa";

export default function Presentacion() {
  return (
    <section
      id="presentacion"
      className="py-16 bg-gray-900 text-white relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 lg:px-8"
      >
        {/* Título con animación */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12"
        >
          Bienvenidos a <span className="text-blue-500">EMPRESA S.A.C.</span>
        </motion.h2>

        {/* Caja de texto con animaciones mejoradas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform group"
        >
          <motion.div
            className="p-8 text-center leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {/* Texto con iconos representativos */}
            <p className="text-lg mb-4 flex justify-center items-center">
              <FaIndustry className="text-blue-500 mr-2" />
              EMPRESA S.A.C. es especializada en la implementación de proyectos
              retail y servicios industriales.
            </p>

            <p className="text-lg mb-4 flex justify-center items-center">
              <FaHandshake className="text-blue-500 mr-2" />
              La División de Proyectos y Servicios cuenta con alianzas
              estratégicas con proveedores clave.
            </p>

            <p className="text-lg flex justify-center items-center">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Nuestro objetivo es: Cumplimiento y Satisfacción del Cliente.
            </p>
            <div className="mt-8 rounded-lg flex justify-center items-center w-full">
              <Image
                src="/images/servicios.jpg" // Reemplaza esta ruta con la de tu imagen
                alt="Imagen de la empresa"
                width={800}
                height={600}
                className="object-cover w-52 h-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Botón de contacto (opcional) */}
        <div className="text-center mt-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/contacto"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
          >
            Contáctanos
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

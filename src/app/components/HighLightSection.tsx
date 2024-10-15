"use client";
import { motion } from "framer-motion";

export default function Presentacion() {
  return (
    <section id="presentacion" className="py-16 bg-gray-900 text-white">
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
          Bienvenidos a EMPRESA S.A.C.
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
            {/* Texto con saltos de línea */}
            <p className="text-lg mb2">
              <strong>EMPRESA S.A.C.</strong> es una empresa especializada en la
              implementación de proyectos retail y servicios industriales.
            </p>

            <p className="text-lg mb-2">
              La División de Proyectos y Servicios cuenta con alianzas
              estratégicas con proveedores de diferentes marcas, obteniendo
              ventajas de precio, calidad y plazos de entrega.
            </p>

            <p className="text-lg">
              Todo esto nos permite alcanzar resultados favorables con un solo
              objetivo en mente:{" "}
              <strong>Cumplimiento y Satisfacción del Cliente</strong>.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaHandshake, FaIndustry } from "react-icons/fa";

export default function Presentacion() {
  return (
    <motion.section
      id="presentacion"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-20 bg-gray-900 text-white relative"
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Título con animación */}
        <h2 className="text-5xl font-bold mb-8 text-blue-500">
          Bienvenidos a EMPRESA S.A.C.
        </h2>

        <p className="text-lg mb-12 text-gray-300 leading-relaxed">
          Somos expertos en proyectos de implementación, retail y servicios
          industriales. Nuestra misión es ofrecer soluciones confiables y de
          alta calidad, respaldadas por alianzas estratégicas y un enfoque
          centrado en la satisfacción de nuestros clientes.
        </p>

        {/* Caja de contenido con iconos y descripción */}
        <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform group">
          <div className="p-10 lg:p-16 text-center leading-relaxed space-y-8">
            <div className="space-y-2">
              <FaIndustry className="text-blue-500 text-5xl mx-auto" />
              <p className="text-lg">
                Especialistas en{" "}
                <strong>implementación de proyectos retail</strong> y{" "}
                <strong>servicios industriales</strong>.
              </p>
            </div>

            <div className="space-y-2">
              <FaHandshake className="text-blue-500 text-5xl mx-auto" />
              <p className="text-lg">
                Alianzas estratégicas con proveedores clave para garantizar
                resultados excepcionales.
              </p>
            </div>

            <div className="space-y-2">
              <FaCheckCircle className="text-blue-500 text-5xl mx-auto" />
              <p className="text-lg">
                Nuestro objetivo es siempre el <strong>cumplimiento</strong> y{" "}
                <strong>satisfacción del cliente</strong>.
              </p>
            </div>
          </div>

          {/* Imagen decorativa */}
          <Image
            src="/images/prueba2.jpg"
            alt="Proyectos y Servicios"
            width={900}
            height={600}
            className="object-cover w-full h-80 rounded-b-lg mt-10"
          />
        </div>

        {/* Botón de contacto */}
        <div className="mt-12">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/contacto"
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
          >
            Contáctanos
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

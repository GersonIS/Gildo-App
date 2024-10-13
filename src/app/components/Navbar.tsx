"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el dropdown de "Servicios"

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Retraso al cerrar para evitar desvanecimiento brusco
  };

  return (
    <nav className="bg-gray-800 p-10 relative">
      <div className="flex items-center justify-between">
        {/* Logo o nombre de la empresa */}
        <div className="text-white text-xl">PinDecords</div>

        {/* Botón de menú móvil */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="h-6 w-6"
          />
        </button>

        {/* Menú en pantallas grandes */}
        <div className={`hidden md:flex space-x-6 text-white`}>
          <a href="#drywall" className="hover:text-gray-300">
            Drywall
          </a>
          <a href="#melamine" className="hover:text-gray-300">
            Melamine
          </a>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-gray-300">Servicios</button>

            {/* Mostrar el dropdown con animación */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-gray-100 text-gray-800 p-4 rounded shadow-lg top-full w-56 z-50"
                >
                  <a
                    href="#climatizacion"
                    className="block px-4 py-2 hover:bg-white"
                  >
                    Climatización
                  </a>
                  <a
                    href="#electricidad"
                    className="block px-4 py-2 hover:bg-white"
                  >
                    Electricidad
                  </a>
                  <a
                    href="#vidrieria"
                    className="block px-4 py-2 hover:bg-white"
                  >
                    Vidriería
                  </a>
                  <a
                    href="#publicidad"
                    className="block px-4 py-2 hover:bg-white"
                  >
                    Publicidad Exterior
                  </a>
                  <a href="#disenos" className="block px-4 py-2 hover:bg-white">
                    Diseños CAD
                  </a>
                  <a
                    href="#acero-inoxidable"
                    className="block px-4 py-2 hover:bg-white"
                  >
                    Acero Inoxidable
                  </a>
                  <a
                    href="#sistema-de-seguridad"
                    className="block px-4 py-2 hover:bg-white"
                  >
                    Sistema de Seguridad
                  </a>
                  <a href="#pintura" className="block px-4 py-2 hover:bg-white">
                    Pintura
                  </a>
                  <a
                    href="#gasfiteria"
                    className="block px-4 py-2 hover:bg-white"
                  >
                    Gasfitería
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#estructuras-metalicas" className="hover:text-gray-300">
            Estructuras Metálicas
          </a>
          <a href="#contacto" className="hover:text-gray-300">
            Contacto
          </a>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col mt-4 space-y-4 text-white"
          >
            <a href="#drywall" className="hover:text-gray-300">
              Drywall
            </a>
            <a href="#melamine" className="hover:text-gray-300">
              Melamine
            </a>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-gray-300">Servicios</button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-gray-100 text-gray-800 p-4 rounded shadow-lg mt-2"
                  >
                    <a
                      href="#climatizacion"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Climatización
                    </a>
                    <a
                      href="#electricidad"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Electricidad
                    </a>
                    <a
                      href="#vidrieria"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Vidriería
                    </a>
                    <a
                      href="#publicidad"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Publicidad Exterior
                    </a>
                    <a
                      href="#disenos"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Diseños CAD
                    </a>
                    <a
                      href="#acero-inoxidable"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Acero Inoxidable
                    </a>
                    <a
                      href="#sistema-de-seguridad"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Sistema de Seguridad
                    </a>
                    <a
                      href="#pintura"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Pintura
                    </a>
                    <a
                      href="#gasfiteria"
                      className="block px-4 py-2 hover:bg-white"
                    >
                      Gasfitería
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#estructuras-metalicas" className="hover:text-gray-300">
              Estructuras Metálicas
            </a>
            <a href="#contacto" className="hover:text-gray-300">
              Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

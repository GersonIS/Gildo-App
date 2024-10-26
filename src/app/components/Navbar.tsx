"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons"; // Agregar el ícono de flecha
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

  const handleOptionClick = () => {
    if (isOpen) {
      setIsOpen(false); // Ocultar el menú móvil al hacer clic en una opción
    }
  };

  return (
    <nav className="bg-gray-800 p-10 relative">
      <div className="flex items-center justify-between">
        {/* Logo o nombre de la empresa */}
        <div className="text-white text-2xl">
          <Link href={"/"}>Empresa</Link>
        </div>

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
        <div className={`hidden md:flex space-x-6 text-white text-lg`}>
          <Link href="/drywall" className="hover:text-gray-300">
            Drywall
          </Link>
          <Link href="/melamine" className="hover:text-gray-300">
            Melamine
          </Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-gray-300">
              Servicios
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-1 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`} // Flecha que gira
              />
            </button>

            {/* Mostrar el dropdown con animación */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-gray-700 text-white p-4 rounded shadow-lg top-full w-60 z-50"
                >
                  <Link
                    href="/climatizacion"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Climatización
                  </Link>
                  <Link
                    href="/electricidad"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Electricidad
                  </Link>
                  <Link
                    href="/vidrieria"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Vidriería
                  </Link>
                  <Link
                    href="/publicidad-exterior"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Publicidad Exterior
                  </Link>
                  <Link
                    href="/disenos-cad"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Diseños CAD
                  </Link>
                  <Link
                    href="/acero-inoxidable"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Acero Inoxidable
                  </Link>
                  <Link
                    href="/sistema-de-seguridad"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Sistema de Seguridad
                  </Link>
                  <Link
                    href="/pintura"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Pintura
                  </Link>
                  <Link
                    href="/gasfiteria"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Gasfitería
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/estructuras-metalicas" className="hover:text-gray-300">
            Estructuras Metálicas
          </Link>
          <Link href="/contacto" className="hover:text-gray-300">
            Contacto
          </Link>
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
            <Link
              href="/drywall"
              className="hover:text-gray-300"
              onClick={handleOptionClick}
            >
              Drywall
            </Link>
            <Link
              href="/melamine"
              className="hover:text-gray-300"
              onClick={handleOptionClick}
            >
              Melamine
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center hover:text-gray-300">
                Servicios
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`ml-1 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`} // Flecha que gira
                />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-gray-700 text-white p-4 rounded shadow-lg mt-2"
                  >
                    <Link
                      href="/climatizacion"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Climatización
                    </Link>
                    <Link
                      href="/electricidad"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Electricidad
                    </Link>
                    <Link
                      href="/vidrieria"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Vidriería
                    </Link>
                    <Link
                      href="/publicidad-exterior"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Publicidad Exterior
                    </Link>
                    <Link
                      href="/disenos-cad"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Diseños CAD
                    </Link>
                    <Link
                      href="/acero-inoxidable"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Acero Inoxidable
                    </Link>
                    <Link
                      href="/sistema-de-seguridad"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Sistema de Seguridad
                    </Link>
                    <Link
                      href="/pintura"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Pintura
                    </Link>
                    <Link
                      href="/gasfiteria"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={handleOptionClick}
                    >
                      Gasfitería
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/estructuras-metalicas"
              className="hover:text-gray-300"
              onClick={handleOptionClick}
            >
              Estructuras Metálicas
            </Link>
            <Link
              href="/contacto"
              className="hover:text-gray-300"
              onClick={handleOptionClick}
            >
              Contacto
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

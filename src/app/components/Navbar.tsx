"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"; // Importamos un icono de flecha hacia abajo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-4 fixed w-full z-50 shadow-lg h-16"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tu Empresa</h1>

        {/* Botón de hamburguesa para pantallas móviles */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menú en pantallas grandes */}
        <ul className="lg:flex space-x-4 hidden">
          <li>
            <a href="#inicio" className="hover:text-gray-400">
              Inicio
            </a>
          </li>

          {/* Dropdown en "Servicios" */}
          <li className="relative">
            <a
              className="hover:text-gray-400 cursor-pointer flex items-center"
              onClick={toggleDropdown} // Cambiamos a onClick para pantallas grandes
            >
              Servicios <FaChevronDown className="ml-2" />{" "}
              {/* Flecha hacia abajo */}
            </a>

            {/* Dropdown */}
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bg-gray-800 p-4 mt-2 rounded-lg shadow-lg space-y-2 w-56"
              >
                <li>
                  <a
                    href="#servicio1"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Instalaciones y Reparaciones
                  </a>
                </li>
                <li>
                  <a
                    href="#servicio2"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Diseño y Fabricación de Muebles
                  </a>
                </li>
                <li>
                  <a
                    href="#servicio3"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Carpintería
                  </a>
                </li>
                <li>
                  <a
                    href="#servicio4"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Gasfitería
                  </a>
                </li>
                <li>
                  <a
                    href="#servicio5"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Pintura
                  </a>
                </li>
                <li>
                  <a
                    href="#servicio6"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Drywall
                  </a>
                </li>
              </motion.ul>
            )}
          </li>

          <li>
            <a href="#nosotros" className="hover:text-gray-400">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-400">
              Contacto
            </a>
          </li>
        </ul>

        {/* Menú desplegable para pantallas móviles */}
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 p-4 space-y-4 shadow-lg"
          >
            <li>
              <a href="#inicio" className="block hover:text-gray-400">
                Inicio
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="w-full text-left hover:text-gray-400 flex items-center"
              >
                Servicios <FaChevronDown className="ml-2" />
              </button>

              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-4 space-y-2"
                >
                  <li>
                    <a href="#servicio1" className="block hover:text-gray-400">
                      Instalaciones y Reparaciones
                    </a>
                  </li>
                  <li>
                    <a href="#servicio2" className="block hover:text-gray-400">
                      Diseño y Fabricación de Muebles
                    </a>
                  </li>
                  <li>
                    <a href="#servicio3" className="block hover:text-gray-400">
                      Carpintería
                    </a>
                  </li>
                  <li>
                    <a href="#servicio4" className="block hover:text-gray-400">
                      Gasfitería
                    </a>
                  </li>
                  <li>
                    <a href="#servicio5" className="block hover:text-gray-400">
                      Pintura
                    </a>
                  </li>
                  <li>
                    <a href="#servicio6" className="block hover:text-gray-400">
                      Drywall
                    </a>
                  </li>
                </motion.ul>
              )}
            </li>
            <li>
              <a href="#nosotros" className="block hover:text-gray-400">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="block hover:text-gray-400">
                Contacto
              </a>
            </li>
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
}

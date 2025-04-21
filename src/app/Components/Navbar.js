"use client"; // Obligatoire pour les composants interactifs dans Next.js

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Pour gérer les liens actifs

const Navbar = () => {
  const pathname = usePathname(); // Récupère le chemin actuel
  const [isOpen, setIsOpen] = useState(false); // Gère le menu mobile

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Brandify
            </Link>
          </div>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "Features", href: "/features" },
              { name: "Pricing", href: "/pricing" },
              { name: "Sign Up", href: "/signup" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                } transition duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-2 space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Features", href: "/features" },
              { name: "Pricing", href: "/pricing" },
              { name: "Sign Up", href: "/signup" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

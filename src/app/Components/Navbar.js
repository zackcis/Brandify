"use client" //obligatoire pour les composants interactifs dans next.js

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname(); //Récupére le chemin actuel
  const [isOpen, setIsOpen] = useState(false) //gére le menu mobile

  return (
    <>
      <nav className="p-5 border-b border-b-gray-600 not-md:flex not-md:justify-around not-md:items-center">
        <div className=" flex justify-around items-center ">
          {/* Logo */}
          <div className=" sm:flex sm:justify-center sm:items-center">
            <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#8d5bf5] to-[#f8711c]">Brandify</p>
          </div>
          {/* Links */}
          <div className="flex space-x-8 md:flex not-md:hidden">  
            {[
              { name: "Home", href: "/" },
              { name: "How it works", href: "/howitworks" },
              { name: "Examples", href: "/examples" },
              { name: "Pricing", href: "/pricing" },
            ].map((item) => (
              <Link key={item.name}
                href={item.href}
                className={`${pathname == item.href ? "text-purple-600 fonf font-semibold text-xl  " : "text-gray-700 hover:text-purple-400 text-xl"}
                    transition duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Authentication */}
          <div className="flex space-x-4 justify-center it md:flex not-md:hidden">
            <div className="flex justify-center items-center">
              <p className=" text-center cursor-pointer">Log in</p>
            </div>
            <div>
              <button className="cursor-pointer p-2 px-4 text-white bg-gradient-to-r from-[#8d5bf5] to-[#f8711c]  rounded-lg">
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
        {/* Button Menu Mobile */}
        <div className="md:hidden flex items-center justify-self-end p-5 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none text-3xl font-bold">
            ☰
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md ">
          <div className="flex flex-col items-center  space-x-2">
            {[
              { name: "Home", href: "/" },
              { name: "How it works", href: "/howitworks" },
              { name: "Examples", href: "/examples" },
              { name: "Pricing", href: "/pricing" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-500 transition duration-300 py-2 text-2xl font-bold border-b "
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))
            }
          </div>

        </div>
      )}
    </>
  );


};
export default Navbar;
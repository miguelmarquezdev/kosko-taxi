"use client"
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="max-w-[1200px] mx-auto md:px-0 px-6">
      <div className="flex justify-between items-center py-6">
        {/* Logo */}
        <div className="font-bold text-2xl text-primary">
          <Link href={"/"}>KOSKO TAXI</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-7 text-third font-semibold p-5 md:p-0">
            <li>
              <Link href={"/"} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/servicios"} onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href={"/about"} onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <p aria-disabled="true" onClick={() => setIsOpen(false)}>
                Blog <span className="opacity-50 text-sm bg-neutral-200 p-1 rounded-4xl">Proximamente</span>
              </p>
            </li>
          </ul>
        </nav>

        {/* Booking Button */}
        <div className="hidden md:block">
          <Link
            href={"https://wa.link/c4rbmo"}
            target="_blank"
            className="py-3 px-7 bg-primary text-white rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

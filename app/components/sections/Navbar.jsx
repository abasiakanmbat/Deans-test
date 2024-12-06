"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  // State for toggling the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between md:mx-20 md:mt-10 bg-[#814D9A1A] bg-opacity-10 px-8 py-4 items-center rounded-lg relative">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="logo.svg" alt="logo" width={36} height={36} />
          <span className="text-2xl font-semibold">DeansListDAO</span>
        </div>
      </Link>

      {/* Hamburger Menu Button */}
      <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          {isOpen ? (
            <svg
              className="block w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 font-semibold">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#about-us">About Us</Link>
          </li>
          <li>
            <Link href="#events">Events</Link>
          </li>
          <li>
            <Link
              href="https://leaderboard.deanslist.services/"
              target="blank"
              className="flex items-center gap-1"
            >
              Leaderboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Button (Desktop Only) */}
      <div className="hidden md:block">
        <a
          href="https://discord.gg/deanslist"
          target="blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#9A59BA80] py-2 px-6 rounded-full border border-[#9A59BA] font-medium hover:bg-purple-400 transition flex gap-2 items-center">
            Get Started
          </button>
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 bg-[#70328F] text-white rounded-lg shadow-lg z-10 sm:hidden"
          id="mobile-menu"
        >
          <div className="space-y-2 px-4 py-3">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#about-us"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="#events"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="https://leaderboard.deanslist.services/"
              target="blank"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Leaderboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;

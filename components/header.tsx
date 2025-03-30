"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false); // Hide navbar when scrolling down
      } else {
        setIsNavbarVisible(true); // Show navbar when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isNavbarVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <img
            src="/images/image0.png"
            alt="Nrityoddha Logo"
            className="h-10"
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/classes" className="hover:text-orange-500">
            Classes
          </Link>
          <Link href="/gallery" className="hover:text-orange-500">
            Gallery
          </Link>
          <Link href="/faculty" className="hover:text-orange-500">
            Faculty
          </Link>
          <Link href="/testimonials" className="hover:text-orange-500">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <a
            href="tel:8448403283"
            className="text-sm font-medium text-white bg-orange-500 px-4 py-2 rounded-full"
          >
            Call: 8448403283
          </a>
        </div>
        <div className="md:hidden">
          <Menu
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg p-4"
          >
            <nav className="space-y-4">
              <Link href="/classes" className="block hover:text-orange-500">
                Classes
              </Link>
              <Link href="/gallery" className="block hover:text-orange-500">
                Gallery
              </Link>
              <Link href="/faculty" className="block hover:text-orange-500">
                Faculty
              </Link>
              <Link
                href="/testimonials"
                className="block hover:text-orange-500"
              >
                Testimonials
              </Link>
              <Link href="/contact" className="block hover:text-orange-500">
                Contact
              </Link>
              <a
                href="tel:8448403283"
                className="block text-sm font-medium text-white bg-orange-500 px-4 py-2 rounded-full text-center"
              >
                Call: 8448403283
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

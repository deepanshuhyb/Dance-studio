"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "/images/image9.jpg",
  "/images/image4.png",
  "/images/image10.png",
  "/images/image5.jpg",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImage]}
            alt="Dancer performing"
            className="h-full w-full object-cover brightness-75 filter"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="container mx-auto flex h-full items-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Where Passion Meets Performance
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl">
                Join our vibrant community of dancers and discover your
                potential
              </p>
              <Button
                className="mt-6 bg-orange-500 text-white hover:bg-orange-600 sm:mt-8"
                size="lg"
              >
                Start Dancing Today
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <ChevronDown className="h-8 w-8 animate-bounce text-white" />
        </motion.div>
      </section>

      {/* Sections */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold">Our Goal</h2>
        <p className="mt-4 text-lg text-gray-700">
          We aim to inspire and nurture dancers of all levels, fostering
          creativity and confidence through movement.
        </p>
      </motion.section>

      {/* Choreographers */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center">
          Meet Our Choreographers
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              className="w-64 text-center"
            >
              <Image
                src={`/images/choreographer${num}.jpg`}
                alt={`Choreographer ${num}`}
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <p className="mt-2 text-lg font-medium">Choreographer {num}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold">Our Works & Events</h2>
        <p className="mt-4 text-lg text-gray-700">
          Experience the magic of our performances and events, showcasing talent
          and dedication.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              className="w-64 text-center"
            >
              <Image
                src={`/images/event${num}.jpg`}
                alt={`Event ${num}`}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-lg font-medium">Event {num}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center">Find Us</h2>
          <iframe
            className="mt-4 w-full h-48 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2906746956533!2d77.4278838!3d28.6210491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefcc24e802b7%3A0xda8ed0a8bcc6f92!2sNrityoddha!5e0!3m2!1sen!2sin!4v1739527997370!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

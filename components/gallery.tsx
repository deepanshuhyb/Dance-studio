// app/components/gallery.tsx

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const galleryItems = [
  { type: "image", src: "/placeholder.svg", alt: "Dance Performance 1" },
  { type: "image", src: "/placeholder.svg", alt: "Dance Performance 2" },
  { type: "image", src: "/placeholder.svg", alt: "Dance Performance 3" },
  { type: "video", src: "/placeholder.mp4", alt: "Dance Workshop 1" },
  { type: "image", src: "/placeholder.svg", alt: "Dance Performance 4" },
  { type: "video", src: "/placeholder.mp4", alt: "Dance Workshop 2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Gallery</h2>
          <p className="mt-4 text-gray-600 text-lg">
            A glimpse into our performances and workshops
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden transition-transform hover:scale-105 rounded-xl shadow-md">
                <CardContent>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

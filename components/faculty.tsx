// app/components/faculty.tsx

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const instructors = [
  {
    name: "Rohit Sharma",
    role: "Hip Hop Instructor",
    bio: "Award-winning dancer specializing in Hip Hop and Street Dance with over 10 years of experience.",
    image: "/placeholder.svg",
  },
  {
    name: "Priya Singh",
    role: "Contemporary Instructor",
    bio: "Passionate about modern and contemporary dance. Trained in various styles from classical to modern fusion.",
    image: "/placeholder.svg",
  },
  {
    name: "Arjun Mehta",
    role: "Ballet Instructor",
    bio: "Professional ballet dancer with a keen eye for technique and detail. Certified ballet trainer.",
    image: "/placeholder.svg",
  },
  {
    name: "Sana Khan",
    role: "Jazz Instructor",
    bio: "Energetic performer with expertise in Jazz and Fusion. Known for creative choreography.",
    image: "/placeholder.svg",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Our Faculty</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Meet our talented instructors
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden transition-transform hover:scale-105 rounded-xl shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage
                        src={instructor.image}
                        alt={instructor.name}
                      />
                      <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-center text-lg font-bold">
                    {instructor.name}
                  </CardTitle>
                  <p className="text-center text-sm text-orange-500">
                    {instructor.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center px-4">
                    {instructor.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

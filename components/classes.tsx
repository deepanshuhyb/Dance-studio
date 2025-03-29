"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const classes = [
  {
    title: "Hip Hop",
    description: "Learn the latest street dance styles",
    level: "All Levels",
    schedule: "Mon, Wed, Fri 6:00 PM",
    rate: "$15 per session",
    days: "Monday, Wednesday, Friday",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Contemporary",
    description: "Express yourself through fluid movements",
    level: "Intermediate",
    schedule: "Tue, Thu 7:00 PM",
    rate: "$20 per session",
    days: "Tuesday, Thursday",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Ballet",
    description: "Master classical ballet techniques",
    level: "Advanced",
    schedule: "Mon, Wed, Sat 5:00 PM",
    rate: "$25 per session",
    days: "Monday, Wednesday, Saturday",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Jazz",
    description: "High-energy dance combinations",
    level: "All Levels",
    schedule: "Tue, Thu 6:00 PM",
    rate: "$18 per session",
    days: "Tuesday, Thursday",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function Classes() {
  interface ClassType {
    title: string;
    description: string;
    level: string;
    schedule: string;
    rate: string;
    days: string;
    image: string;
  }

  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);

  return (
    <section id="classes" className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Our Classes
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Discover your perfect dance style
          </p>
        </motion.div>
        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="overflow-hidden transition-transform hover:scale-105">
                <img
                  src={classItem.image || "/placeholder.svg"}
                  alt={classItem.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    {classItem.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {classItem.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{classItem.level}</Badge>
                    <Badge variant="outline">{classItem.schedule}</Badge>
                  </div>
                  <Button
                    className="mt-4 w-full"
                    onClick={() => setSelectedClass(classItem)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Class Details */}
      {selectedClass && (
        <Dialog
          open={!!selectedClass}
          onOpenChange={() => setSelectedClass(null)}
        >
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedClass?.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-gray-600">{selectedClass?.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-medium">{selectedClass?.level}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-500">Rate</p>
                  <p className="font-medium">{selectedClass?.rate}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center col-span-2">
                  <p className="text-sm text-gray-500">Schedule</p>
                  <p className="font-medium">{selectedClass?.schedule}</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-center col-span-2">
                  <p className="text-sm text-gray-500">Days</p>
                  <p className="font-medium">{selectedClass?.days}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

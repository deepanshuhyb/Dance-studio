"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const instructors = [
  {
    name: "Sarah Johnson",
    specialty: "Contemporary & Modern",
    bio: "Professional dancer with 15 years of experience",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    specialty: "Hip Hop & Breaking",
    bio: "Award-winning choreographer and performer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Elena Rodriguez",
    specialty: "Ballet & Pointe",
    bio: "Former principal dancer with National Ballet",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kim",
    specialty: "Jazz & Musical Theatre",
    bio: "Broadway performer and certified dance instructor",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Faculty() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="faculty" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Our Faculty</h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">Learn from industry professionals</p>
        </motion.div>
        <div className="relative mt-8 sm:mt-12">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-4 md:overflow-x-hidden">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="min-w-[250px] flex-none sm:min-w-[300px]"
              >
                <Card>
                  <img
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    className="h-48 w-full object-cover sm:h-64"
                  />
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{instructor.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{instructor.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 sm:text-base">{instructor.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 space-x-2 md:block">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


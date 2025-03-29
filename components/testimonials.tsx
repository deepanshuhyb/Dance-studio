"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Emily W.",
    role: "Student",
    content: "The instructors are amazing and the community is so supportive. I've grown so much as a dancer here!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "James L.",
    role: "Parent",
    content:
      "My daughter has flourished at Big Dance Centre. The training is professional and the environment is nurturing.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Maria S.",
    role: "Professional Dancer",
    content: "The best dance studio I've trained at. The facilities are top-notch and the instructors are world-class.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from our community</p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <Quote className="h-8 w-8 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-gray-600">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


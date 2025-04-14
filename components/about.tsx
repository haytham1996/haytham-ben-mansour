"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=400&width=400" alt="John Doe" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-600 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate Fullstack Developer and Software Engineer with over 5 years of experience building web
              applications and solving complex problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My journey in software development began when I built my first website at the age of 16. Since then, I've
              been hooked on the power of technology to transform ideas into reality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Next.js, Node.js, and various
              database technologies. I'm committed to writing clean, maintainable code and creating intuitive user
              experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">John Doe</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">contact@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">From:</h4>
                <p className="text-gray-700 dark:text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability:</h4>
                <p className="text-gray-700 dark:text-gray-300">Full-time</p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

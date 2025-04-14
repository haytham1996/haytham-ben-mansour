"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechNova Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description:
      "Lead frontend development for multiple web applications. Implemented modern React architecture with TypeScript and Next.js. Mentored junior developers and established coding standards.",
    type: "work",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "Digital Solutions",
    location: "Seattle, WA",
    period: "2018 - 2021",
    description:
      "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with UX designers to implement responsive interfaces and improved application performance by 40%.",
    type: "work",
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    location: "Portland, OR",
    period: "2016 - 2018",
    description:
      "Built responsive websites and web applications for various clients. Worked with JavaScript, HTML, CSS, and PHP. Participated in all phases of the development lifecycle.",
    type: "work",
  },
  {
    id: 4,
    title: "Master's in Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    period: "2014 - 2016",
    description:
      "Specialized in Web Technologies and Software Engineering. Completed thesis on optimizing React applications for performance.",
    type: "education",
  },
  {
    id: 5,
    title: "Bachelor's in Computer Science",
    company: "University of Washington",
    location: "Seattle, WA",
    period: "2010 - 2014",
    description: "Graduated with honors. Focused on programming fundamentals, data structures, and algorithms.",
    type: "education",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                        {exp.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

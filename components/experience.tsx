"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "K2Lis",
    location: "Tunis, Tunisia",
    period: "May 2022 - Present",
    description:
      "Developed decentralized apps and NFT platforms using Next.js, Node.js, and Web3. Led frontend architecture and smart contract integration.",
    type: "work",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Lyveat",
    location: "Oyonnax, France",
    period: "Feb 2021 - Oct 2021",
    description:
      "Built dashboards and responsive interfaces. Integrated Twilio, Paygreen, and Ederned APIs into food delivery platform.",
    type: "work",
  },
  {
    id: 3,
    title: "Full Stack Developer Intern",
    company: "Value Digital Services",
    location: "Lac 1, Tunisia",
    period: "Sep 2020 - Dec 2020",
    description:
      "Created a banking web app for credit request management. Integrated Camunda BPM with Spring Boot and Angular.",
    type: "work",
  },
  {
    id: 4,
    title: "Engineering Degree - Web Technologies",
    company: "ESPRIT",
    location: "Tunis, Tunisia",
    period: "2016 - 2021",
    description:
      "Specialized in Web and Software Engineering. Completed projects in full-stack development and system architecture.",
    type: "education",
  },
  {
    id: 5,
    title: "Scientific Baccalaureate - Math Section",
    company: "Boudhina Hammamet High School",
    location: "Hammamet, Tunisia",
    period: "2014 - 2015",
    description:
      "Focused on mathematics and foundational sciences to prepare for engineering studies.",
    type: "education",
  },
];

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
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
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
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
                        <p className="text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

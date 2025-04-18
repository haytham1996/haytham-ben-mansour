"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Layout,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "NestJS", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "DevOps",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "AWS", level: 65 },
    ],
  },
  {
    category: "Tools & Methods",
    icon: <Workflow className="w-6 h-6" />,
    items: [
      { name: "Agile/Scrum", level: 85 },
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 75 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    category: "Other",
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: "Python", level: 70 },
      { name: "Java", level: 60 },
      { name: "C#", level: 55 },
      { name: "Problem Solving", level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-white rounded-lg mr-4">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

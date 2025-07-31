"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  darkMode: boolean;
  projectLink?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  darkMode,
  projectLink,
}: ProjectCardProps) => {
  const cardContent = (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className={`overflow-hidden rounded-xl shadow-lg border transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-green-500 text-green-300"
          : "bg-white border-indigo-200 text-indigo-700"
      }`}
    >
      {/* Project Image */}
      <div className="overflow-hidden h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="responsive"
          width={500}
          height={300}
          className={`object-cover w-full h-full transition duration-300 ${
            darkMode
              ? "filter brightness-75 contrast-125"
              : "filter brightness-100 contrast-100"
          }`}
        />
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className={`px-2 py-1 rounded ${
                darkMode
                  ? "bg-green-800 text-green-100"
                  : "bg-indigo-100 text-indigo-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return projectLink ? (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:shadow-xl transition-transform"
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default ProjectCard;

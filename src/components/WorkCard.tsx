'use client';

import Image from 'next/image';
import React from 'react';
import TitleButton from './TitleButton';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

type WorkCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    link: string;
  };
};

const WorkCard = ({ project }: WorkCardProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 bg-white rounded-lg shadow-lg shadow-gray-200 overflow-hidden">
      {/* Left (Image) */}
      <div className="bg-gray-50 flex items-center justify-center p-4">
        <div className="relative w-full h-64 md:h-[384px] md:w-[480px]">
          <Image
            src={project.image}
            fill
            alt={project.title}
            className="object-cover rounded-md"
          />
        </div>
      </div>

      {/* Right (Content) */}
      <div className="flex flex-col gap-4 justify-center p-6 sm:p-10">
        <h3 className="font-semibold text-2xl text-gray-900">{project.title}</h3>
        <p className="text-gray-500">{project.description}</p>

        {/* Tech stack buttons */}
        <div className="w-full flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <TitleButton key={i} title={tech} />
          ))}
        </div>

        {/* External link */}
        {project.link && (
          <Link
            href={project.link}
            className="text-gray-700 hover:text-gray-900 mt-4 w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink size={24} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorkCard;

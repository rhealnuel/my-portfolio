'use client';

import React, { useEffect, useState } from 'react';
import TitleButton from './TitleButton';
import WorkCard from './WorkCard';
import Spinner from './spinner';

type Project = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
};

const VISIBLE_COUNT = 6;

const Work = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch('/api/dashboard/project');
      const data = await res.json();
      setProjects(data.projects || []);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <div className='lg:m-24 m-4' id="Work">
      <div className='flex flex-col gap-10 w-full'>
        <div className='w-full flex flex-col items-center gap-2'>
          <TitleButton title='Work' />
          <p className='body text-center lg:text-start'>Some of the noteworthy projects I have built:</p>
        </div>

        <div className='flex flex-col w-full items-center gap-6'>
          {loading && <Spinner />}
          {!loading && projects.length === 0 && (
            <div>No projects found.</div>
          )}
          {visibleProjects.map(project => (
            <WorkCard key={project._id} project={project} />
          ))}

          {/* See more / Show less logic */}
          {!loading && projects.length > VISIBLE_COUNT && (
            <button
              className="mt-2 px-4 py-2 text-sm font-semibold rounded bg-gray-900 text-white hover:bg-gray-700 transition"
              onClick={() => setShowAll(s => !s)}
            >
              {showAll ? "Show less" : `See more (${projects.length - VISIBLE_COUNT} more)`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

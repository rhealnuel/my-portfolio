'use client';

import React, { useEffect, useState } from 'react';
import TitleButton from './TitleButton';
import ExperienceCard from './ExperienceCard';
import Spinner from './spinner';

type Experience = {
  _id?: string;
  logo: string;
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

const VISIBLE_COUNT = 6;

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchExperiences() {
      const res = await fetch('/api/dashboard/experience');
      const data = await res.json();
      setExperiences(data.experiences || []);
      setLoading(false);
    }
    fetchExperiences();
  }, []);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, VISIBLE_COUNT);

  return (
    <div className='lg:p-24 p-4 bg-gray-50 ' id='Experience'>
      <div className='flex flex-col w-full items-center gap-6'>
        <div className='w-full flex flex-col items-center gap-2'>
          <TitleButton title='Experience' />
          <p className='body'>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className='flex flex-col gap-6 w-full items-center'>
          {loading && <Spinner />}
          {!loading && experiences.length === 0 && (
            <div>No experiences found.</div>
          )}
          {visibleExperiences.map(exp => (
            <ExperienceCard
              key={exp._id}
              logo={exp.logo}
              company={exp.company}
              role={exp.role}
              date={exp.date}
              bullets={exp.bullets}
            />
          ))}
          {/* See more / Show less button */}
          {!loading && experiences.length > VISIBLE_COUNT && (
            <button
              className="mt-2 px-4 py-2 text-sm font-semibold rounded bg-gray-900 text-white hover:bg-gray-700 transition"
              onClick={() => setShowAll(s => !s)}
            >
              {showAll
                ? "Show less"
                : `See more (${experiences.length - VISIBLE_COUNT} more)`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;

'use client';
import React from 'react';
import TitleButton from './TitleButton';
import Image from 'next/image';

const About = () => {
  return (
    <div className="w-full bg-gray-50 py-24 px-6 sm:px-12 lg:px-24" id="About">
      <div className="w-full flex flex-col items-center gap-12">
        <TitleButton title="About Me" />

        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
          {/* Image Box */}
          <div className=" relative w-full max-w-xs h-[320px] rounded-md" >
              <Image src={"/second.png"} alt="me" fill className='object-cover rounded-2xl' />  
          </div>

          {/* Text Content */}
          <div className="w-full max-w-2xl">
            <h3 className="head font-bold text-3xl text-gray-900 mb-4">
              Curious about me? Here you have it:
            </h3>
            <div className="space-y-5 text-base text-gray-600">
             <p>
  Hey, I'm Emmanuel—a self-driven software developer with a thing for clean design, robust code, and the thrill of solving real-world problems. My specialty? Building out end-to-end solutions with <b>React.js</b> and <b>Node.js</b>, but my toolkit is always evolving.
</p>
<p>
  My dev journey kicked off back in 2020, and since then, I’ve been obsessed with crafting digital experiences that *feel* as good as they look. Whether I’m shaping a pixel-perfect UI with <b>Tailwind CSS</b> or wiring up a slick API in <b>NodeJS</b>, I’m all about seamless user experience, performance, and maintainable code.
</p>
<p>
  These days, you’ll catch me shipping modern web apps with <b>Next.js</b>, <b>TypeScript</b>, <b>Convex</b>, <b>Firebase</b>, and whatever else the project needs. I thrive on learning new tech and pushing boundaries—if there’s a shortcut to mastery, I’m on it.
</p>
<p>
  Off the clock, you’ll probably find me sharing dev tips, project updates, hanging out on Indie Hackers, or just chilling and soaking in startup stories. Want to see what I’m building? check out my code on <a href="https://github.com/rhealnuel" target="_blank"><b>GitHub</b></a>.
</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

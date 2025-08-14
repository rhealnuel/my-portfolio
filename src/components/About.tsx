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
              <Image src={"/mypicture.jpg"} alt="me" fill className='object-cover rounded-2xl' />  
          </div>

          {/* Text Content */}
          <div className="w-full max-w-2xl">
            <h3 className="head font-bold text-2xl text-center lg:text-start lg:text-3xl text-gray-900 mb-4">
              Curious about me? Here you have it:
            </h3>
            <div className="space-y-5 text-base text-center lg:text-start text-gray-600">
            <p> 
              Hi, I’m Emmanuel a self-motivated software developer with a passion for clean design, 
              reliable code, and solving real-world problems through technology. I specialize in building 
              full-stack web applications using <b>React.js</b> and <b>Node.js</b>, though I’m always exploring 
              new tools to stay ahead. 
              </p> 
              <p> I began my development journey in 2020, and since then, I’ve been dedicated to creating digital 
                experiences that are both intuitive and visually engaging. Whether it’s designing polished user 
                interfaces with <b>Tailwind CSS</b> or building scalable backends with <b>Node.js</b> and <b>Express</b>, 
                I focus on performance, usability, and clean, maintainable code. 
                </p> 
                <p> Currently, I build modern web apps using technologies like <b>Next.js</b>, <b>TypeScript</b>, 
                <b>Node.js</b>, <b>Express</b>, <b>Convex</b>, and <b>Firebase</b> adapting to whatever the project demands. 
                I love learning new technologies and constantly improving my workflow to deliver better results. 
                </p> 
                <p> Outside of work, I enjoy sharing development tips, showcasing my projects, connecting with other builders 
                  on platforms like Indie Hackers, and drawing inspiration from startup stories. Curious about what I’ve been 
                  working on? Take a look at my code on <a href="https://github.com/rhealnuel" target="_blank"><b>GitHub</b></a>. </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

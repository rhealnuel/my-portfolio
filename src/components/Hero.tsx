'use client';

import React from 'react';
import AnimatedText from './AnimatedText';
import { IoLocationOutline } from 'react-icons/io5';
import { LuGithub } from 'react-icons/lu';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-24">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 my-16 lg:my-24">
        {/* Text Section */}
        <div className="space-y-8 w-full max-w-2xl">
          <div className="space-y-4">
            <AnimatedText />
            <p className="body text-base text-gray-600">
              I'm a Full Stack Developer with over 3 years of experience building 
              web applications using React.js and Node.js. I specialize in creating 
              high-quality digital experiences that are fast, responsive, user-friendly, 
              and visually appealing. My work not only focuses on functionality but also 
              ensures that websites are accessible to everyone. I also contribute to design 
              when needed to enhance the overall user experience.
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <IoLocationOutline size={22} />
            <p className="text-sm">Manchester, UK</p>
          </div>

          <div className="flex gap-4 text-gray-700 text-xl">
            <Link
              href="https://github.com/rhealnuel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/emmanuel-kawekwune"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://twitter.com/rhealnuel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterXLine />
            </Link>
          </div>
        </div>

        {/* Image / Placeholder */}
        <div className=" w-[220px] relative h-[260px] sm:w-[240px] sm:h-[280px] lg:w-[250px] lg:h-[290px] rounded-md" >
          <Image src={"/first.png"} alt="me" fill className='object-cover rounded-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Hero;

'use client';

import { useRef, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function AnimatedText() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <h2
      ref={ref}
      className="head text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900"
    >
      {visible && (
        <Typewriter
          words={[
            "Hello, I'm Emmanuel 👋",
            "Bonjour, je m'appelle Emmanuel 👋",
            'Hallo, ich heiße Emmanuel 👋',
            'Ndewo, aha m bụ Emmanuel 👋',
            'Bawo, orúkọ mi ni Emmanuel 👋',
            'Sannu, sunana Emmanuel 👋',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      )}
    </h2>
  );
}

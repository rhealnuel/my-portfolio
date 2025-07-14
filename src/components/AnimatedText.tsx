'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function AnimatedText() {
  return (
    <h2 className="head text-5xl font-bold tracking-tighter text-gray-900">
      <Typewriter
        words={[
          "Hello, I'm Emmanuel 👋",
          "Bonjour, je m'appelle Emmanuel 👋",
          'Hallo, ich heiße Emmanuel 👋',
          'Ndewo, aha m bụ Emmanuel 👋',
          'Bawo, orúkọ mi ni Emmanuel 👋',
          'Sannu, sunana Emmanuel 👋',
        ]}
        loop={0} // Infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h2>
  );
}

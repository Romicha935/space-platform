'use client';

import React from 'react';
// import heroVideo from '../../..'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/heroSection.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-2xl md:text-2xl font-bold leading-tight">
            Learn Space Science.
            Track Missions.
            Build Future Skills.
          </h1>

          <p className="mt-6 text-sm md:text-base text-gray-200">
            An interactive platform to explore space technology,
            follow real missions, and grow your learning journey step by step.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
       <button
  className="
    rounded-xl px-8 py-3 font-semibold text-white
    bg-white/15 backdrop-blur-md
    border border-white/30
    shadow-lg
    hover:bg-white/25 hover:border-white/50
    hover:shadow-white/20
    transition-all duration-300 cursor-pointer
  "
>
  Start Learning
</button>


            <button
  className="
    rounded-xl px-8 py-3 font-semibold text-white
    bg-transparent backdrop-blur-md
    border border-white/40
    shadow-md
    hover:bg-white/15 hover:border-white/60
    hover:shadow-white/20
    transition-all duration-300 cursor-pointer
  "
>
  Explore Missions
</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

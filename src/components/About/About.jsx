import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { TypeAnimation } from "react-type-animation";
import { Background } from "react-parallax";
import Tilt from 'react-parallax-tilt';
import profileImg from '../../assets/profile2.png'
import profileImgMe from '../../assets/profile1.jpeg'


function About() {

  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-center ">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 ">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Rakesh Kumar
          </h1>
          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#4582ec] leading-tight ">
            <span className="text-white">I am a </span>
            {/* <ReactTypingEffect
          text={[
            'FullStack Developer',
            'FrontEnd Developer',
            'App Developer',
            'UI/UX Designer',
            'Coder',
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={50}
          eraseDelay={2000}
          cursorRenderer = {(cursor)=>(
            <span className='text-[#4585ec]'>{cursor}</span>
          )}
          >

          </ReactTypingEffect> */}
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Front-End Developer",
                2000,
                "App Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Coder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>
          {/* About me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Software Developer with 1+ year of experience building scalable web and game
            applications using React.js, TypeScript, and modern JavaScript (ES6+).
            Skilled in component-based architecture, state management (Redux),
            and performance optimization. Experienced in developing responsive UI, 
            integrating REST APIs, and delivering high-performance user experiences. 
          </p>
          {/* Downlod cv Button */}
          <a 
          href="https://docs.google.com/document/d/1BZYmRx0qAXJk_sannxooPeIXaTjyURMBLKrnRpkyJ3c/edit?usp=sharing"
          target="_blank"
          rel='noopener noreferrer'
          className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold
          transition duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(9deg,  #8245ec, #a855f7 )',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
          >
            DOWNLOAD CV
          </a>
        </div>

      {/* Right side */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
      <Tilt
      className="w-48 h-48 sm:w-64 sm:h-64 md:h-[30vw] md:w-[30vw] border-4
      border-purple-700 rounded-full"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1000}
      gyroscope={true}
      >
        <img 
        src={profileImgMe} 
        alt="Rakesh_Profile_img" 
        className="w-full h-full rounded-full object-fill
        drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
        />
      </Tilt>
      </div>
      </div>


    </section>
  );
}

export default About;
